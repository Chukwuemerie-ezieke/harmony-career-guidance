import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getLocalSubjectData, saveLocalSubjectData, clearLocalSubjectData, type LocalSubjectData } from "@/lib/readinessStore";
import { getAdmissionRequirement, type AdmissionRequirement } from "@/lib/admissionRequirements";
import { evaluateReadiness, type ReadinessResult } from "@/lib/readinessEvaluator";
import { COURSE_CATALOGUE } from "@/lib/courseCatalogue";
import { BookOpen, GraduationCap, AlertCircle, CheckCircle2, ArrowLeft, Trash2, Info } from "lucide-react";

export default function Eligibility() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  // Extract pathwayId from query string
  const [pathwayId, setPathwayId] = useState<string>(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('pathwayId') || "";
  });

  const [subjectData, setSubjectData] = useState<LocalSubjectData>({ utmeSubjects: ["", "", "", ""], oLevelSubjects: [] });
  
  const [readiness, setReadiness] = useState<ReadinessResult | null>(null);
  const [requirement, setRequirement] = useState<AdmissionRequirement | undefined>(undefined);

  useEffect(() => {
    const local = getLocalSubjectData();
    if (local.utmeSubjects.length > 0 || local.oLevelSubjects.length > 0) {
        // pad utme to 4 if needed
        while(local.utmeSubjects.length < 4) local.utmeSubjects.push("");
        setSubjectData(local);
    }
  }, []);

  useEffect(() => {
    if (pathwayId) {
      const req = getAdmissionRequirement(pathwayId);
      setRequirement(req);
      if (req) {
        const cleanUtme = subjectData.utmeSubjects.filter(s => s.trim() !== "");
        const cleanOlevel = subjectData.oLevelSubjects.filter(s => s.subject.trim() !== "");
        setReadiness(evaluateReadiness(req, cleanUtme, cleanOlevel));
      } else {
        setReadiness(null);
      }
    } else {
      setRequirement(undefined);
      setReadiness(null);
    }
  }, [pathwayId, subjectData]);

  const handleUtmeChange = (index: number, value: string) => {
    const newUtme = [...subjectData.utmeSubjects];
    newUtme[index] = value;
    const newData = { ...subjectData, utmeSubjects: newUtme };
    setSubjectData(newData);
    saveLocalSubjectData(newData);
  };

  const addOLevel = () => {
    const newData = { ...subjectData, oLevelSubjects: [...subjectData.oLevelSubjects, { subject: "", grade: "" }] };
    setSubjectData(newData);
    saveLocalSubjectData(newData);
  };

  const handleOLevelChange = (index: number, field: "subject" | "grade", value: string) => {
    const newOLevel = [...subjectData.oLevelSubjects];
    newOLevel[index] = { ...newOLevel[index], [field]: value };
    const newData = { ...subjectData, oLevelSubjects: newOLevel };
    setSubjectData(newData);
    saveLocalSubjectData(newData);
  };

  const removeOLevel = (index: number) => {
    const newOLevel = subjectData.oLevelSubjects.filter((_, i) => i !== index);
    const newData = { ...subjectData, oLevelSubjects: newOLevel };
    setSubjectData(newData);
    saveLocalSubjectData(newData);
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to clear your saved subject data?")) {
      clearLocalSubjectData();
      setSubjectData({ utmeSubjects: ["", "", "", ""], oLevelSubjects: [] });
      toast({ title: "Data cleared", description: "Your local subject data has been removed." });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchoolHeader />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 space-y-6">
        <Button variant="ghost" onClick={() => window.history.back()} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>

        <div>
          <h1 className="text-3xl font-bold text-foreground">Subject Readiness Checker</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Check your UTME and O'Level subjects against general admission guidelines. 
            <strong> Your subject data is saved only on this device/browser.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Pathway Selection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="pathway-select">Select a Pathway</Label>
                <Select value={pathwayId} onValueChange={(val) => {
                    setPathwayId(val);
                    const url = new URL(window.location.href);
                    url.searchParams.set('pathwayId', val);
                    window.history.pushState({}, '', url);
                }}>
                  <SelectTrigger id="pathway-select" className="mt-1.5">
                    <SelectValue placeholder="Choose a course/pathway" />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSE_CATALOGUE.map(p => (
                      <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>
                    ))}
                    {/* Fallbacks for generic courses if needed, but we map primarily to courseCatalogue */}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>UTME Subjects</span>
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <fieldset>
                    <legend className="sr-only">UTME Subjects</legend>
                    {subjectData.utmeSubjects.map((sub, i) => (
                    <div key={i}>
                        <Label htmlFor={`utme-${i}`} className="sr-only">UTME Subject {i + 1}</Label>
                        <Input 
                        id={`utme-${i}`}
                        placeholder={i === 0 ? "e.g., Use of English (Compulsory)" : `UTME Subject ${i + 1}`} 
                        value={sub} 
                        onChange={e => handleUtmeChange(i, e.target.value)}
                        />
                    </div>
                    ))}
                </fieldset>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>O'Level Subjects</span>
                  <GraduationCap className="w-5 h-5 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <fieldset>
                    <legend className="sr-only">O'Level Subjects</legend>
                    {subjectData.oLevelSubjects.map((sub, i) => (
                    <div key={i} className="flex gap-2 items-center">
                        <div className="flex-1">
                            <Label htmlFor={`olevel-sub-${i}`} className="sr-only">Subject {i + 1}</Label>
                            <Input 
                            id={`olevel-sub-${i}`}
                            placeholder="Subject (e.g. Mathematics)" 
                            value={sub.subject} 
                            onChange={e => handleOLevelChange(i, "subject", e.target.value)}
                            />
                        </div>
                        <div className="w-24">
                            <Label htmlFor={`olevel-grade-${i}`} className="sr-only">Grade {i + 1}</Label>
                            <Input 
                            id={`olevel-grade-${i}`}
                            placeholder="Grade" 
                            value={sub.grade || ""} 
                            onChange={e => handleOLevelChange(i, "grade", e.target.value)}
                            />
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeOLevel(i)}>
                        <X className="w-4 h-4 text-destructive" />
                        </Button>
                    </div>
                    ))}
                </fieldset>
                <Button variant="outline" onClick={addOLevel} className="w-full">
                  Add O'Level Subject
                </Button>

                <div className="pt-4 border-t flex justify-end">
                    <Button variant="ghost" onClick={handleClear} className="text-destructive">
                    <Trash2 className="w-4 h-4 mr-2" /> Clear All Data
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-xl">Readiness Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                {!pathwayId ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <AlertCircle className="w-8 h-8 mx-auto mb-3 opacity-50" />
                    <p>Select a pathway to see admission readiness.</p>
                  </div>
                ) : !requirement ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Info className="w-8 h-8 mx-auto mb-3 opacity-50" />
                    <p>Requirements not yet available for this pathway.</p>
                    <p className="text-sm mt-2">Verify with JAMB and your chosen institution.</p>
                  </div>
                ) : !readiness || readiness.status === "not-enough-info" ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <BookOpen className="w-8 h-8 mx-auto mb-3 opacity-50" />
                    <p>Enter your UTME and O'Level subjects to check readiness for {requirement.pathwayTitle}.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className={`p-4 rounded-lg border ${
                      readiness.status === "likely-aligned" ? "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400" :
                      readiness.status === "needs-verification" ? "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400" :
                      "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400"
                    }`}>
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        {readiness.status === "likely-aligned" && <CheckCircle2 className="w-5 h-5" />}
                        {readiness.status === "needs-verification" && <AlertCircle className="w-5 h-5" />}
                        {readiness.status === "potential-mismatch" && <AlertCircle className="w-5 h-5" />}
                        {readiness.statusText}
                      </h3>
                      <ul className="mt-3 space-y-1 text-sm list-disc pl-5">
                        {readiness.suggestions.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Required UTME Subjects</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {requirement.requiredUtmeSubjects.map(s => (
                           <Badge key={s} variant={readiness.foundUtme.includes(s) ? "default" : "outline"} className={readiness.foundUtme.includes(s) ? "bg-green-500 hover:bg-green-600" : "border-red-200 text-red-600"}>
                             {s}
                           </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Recommended O'Level Subjects</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {requirement.recommendedOLevelSubjects.map(s => (
                           <Badge key={s} variant={readiness.foundOLevel.includes(s) ? "default" : "outline"} className={readiness.foundOLevel.includes(s) ? "bg-green-500 hover:bg-green-600" : "border-amber-200 text-amber-600"}>
                             {s}
                           </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {requirement.notes && requirement.notes.length > 0 && (
                        <div className="bg-muted/50 p-3 rounded text-sm text-muted-foreground">
                            <strong>Notes: </strong>
                            <ul className="list-disc pl-4 mt-1">
                                {requirement.notes.map((n, i) => <li key={i}>{n}</li>)}
                            </ul>
                        </div>
                    )}

                    <div className="p-3 bg-primary/5 border border-primary/10 rounded-md text-xs text-foreground/80">
                      <strong>Notice:</strong> Requirements vary by institution and admission cycle. Check the current JAMB IBASS/Brochure and the university's official admissions page before applying. This evaluation checks against general guidance only and is not a guarantee of admission.
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

// Ensure X icon is imported
import { X } from "lucide-react";
