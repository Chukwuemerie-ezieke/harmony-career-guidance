import { useState } from "react";
import { useLocation } from "wouter";
import { SchoolHeader } from "@/components/SchoolHeader";
import { StepIndicator } from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SUBJECTS, INTERESTS, CLASSES, NIGERIAN_STATES,
  UNIVERSITY_TYPES, GRADE_RANGES, getRecommendations, generateWhyText,
  type CourseData
} from "@/lib/courseData";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Compass, ArrowRight, ArrowLeft, Sparkles, X,
  Calculator, Heart, Hammer, PenTool, FlaskConical,
  Briefcase, Laptop, Palette, Sprout, Scale
} from "lucide-react";

const INTEREST_ICONS: Record<string, any> = {
  calculator: Calculator, heart: Heart, hammer: Hammer, pen: PenTool,
  flask: FlaskConical, briefcase: Briefcase, laptop: Laptop,
  palette: Palette, sprout: Sprout, scale: Scale,
};

const STEP_LABELS = ["About You", "Interests", "Preferences"];

export default function Home() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [universityType, setUniversityType] = useState("");
  const [preferredState, setPreferredState] = useState("");
  const [gradeRange, setGradeRange] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subject)) return prev.filter(s => s !== subject);
      if (prev.length >= 3) {
        toast({ title: "Maximum 3 subjects", description: "Remove one to add another", variant: "destructive" });
        return prev;
      }
      return [...prev, subject];
    });
  };

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const canProceedStep1 = firstName.trim() && studentClass && selectedSubjects.length === 3;
  const canProceedStep2 = selectedInterests.length >= 1;
  const canSubmit = universityType && preferredState && gradeRange;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const recommendations: CourseData[] = getRecommendations(
        selectedSubjects, selectedInterests, universityType, gradeRange
      );

      const recsWithWhy = recommendations.map(r => ({
        ...r,
        whyText: generateWhyText(r, selectedSubjects, selectedInterests, firstName),
      }));

      const payload = {
        firstName,
        studentClass,
        strongestSubjects: JSON.stringify(selectedSubjects),
        interests: JSON.stringify(selectedInterests),
        universityType,
        preferredState,
        gradeRange,
        recommendations: JSON.stringify(recsWithWhy),
      };

      const res = await apiRequest("POST", "/api/submissions", {
        ...payload,
        createdAt: new Date().toISOString(),
      });
      const submission = await res.json();
      navigate(`/results/${submission.id}`);
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchoolHeader />

      {/* Motivational tagline */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-3 px-4 text-center">
        <p className="text-sm font-semibold text-primary flex items-center justify-center gap-2" data-testid="text-tagline">
          <Compass className="w-4 h-4" />
          Your Future Starts Here — Discover Your Path
        </p>
      </div>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">
        <StepIndicator currentStep={step} totalSteps={3} labels={STEP_LABELS} />

        <Card className="mt-6 border-border/50">
          <CardContent className="p-5 sm:p-6">
            {/* STEP 1: About You */}
            {step === 1 && (
              <div className="space-y-5" data-testid="step-1">
                <div>
                  <h2 className="text-lg font-bold text-foreground">Tell Us About You</h2>
                  <p className="text-sm text-muted-foreground mt-1">Your name, class, and strongest subjects</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="mt-1.5"
                      data-testid="input-first-name"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Class</Label>
                    <Select value={studentClass} onValueChange={setStudentClass}>
                      <SelectTrigger className="mt-1.5" data-testid="select-class">
                        <SelectValue placeholder="Select your class" />
                      </SelectTrigger>
                      <SelectContent>
                        {CLASSES.map(c => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">
                      Top 3 Strongest Subjects
                      <span className="text-muted-foreground font-normal ml-1">({selectedSubjects.length}/3 selected)</span>
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {SUBJECTS.map(subject => (
                        <Badge
                          key={subject}
                          variant={selectedSubjects.includes(subject) ? "default" : "outline"}
                          className={`cursor-pointer text-xs py-1.5 px-3 transition-all ${
                            selectedSubjects.includes(subject)
                              ? "bg-primary hover:bg-primary/90"
                              : "hover:bg-accent"
                          }`}
                          onClick={() => toggleSubject(subject)}
                          data-testid={`badge-subject-${subject.replace(/\s/g, "-").toLowerCase()}`}
                        >
                          {subject}
                          {selectedSubjects.includes(subject) && <X className="w-3 h-3 ml-1" />}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className="gap-2"
                    data-testid="button-next-step-1"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Interests */}
            {step === 2 && (
              <div className="space-y-5" data-testid="step-2">
                <div>
                  <h2 className="text-lg font-bold text-foreground">What Interests You?</h2>
                  <p className="text-sm text-muted-foreground mt-1">Select all areas that excite you</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {INTERESTS.map(interest => {
                    const Icon = INTEREST_ICONS[interest.icon];
                    const isSelected = selectedInterests.includes(interest.id);
                    return (
                      <label
                        key={interest.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                            : "border-border hover:border-primary/30 hover:bg-accent/50"
                        }`}
                        data-testid={`checkbox-interest-${interest.id}`}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleInterest(interest.id)}
                        />
                        {Icon && <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />}
                        <span className="text-sm leading-tight">{interest.label}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-2">
                  <Button variant="outline" onClick={() => setStep(1)} className="gap-2" data-testid="button-back-step-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!canProceedStep2}
                    className="gap-2"
                    data-testid="button-next-step-2"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Preferences */}
            {step === 3 && (
              <div className="space-y-5" data-testid="step-3">
                <div>
                  <h2 className="text-lg font-bold text-foreground">Your Preferences</h2>
                  <p className="text-sm text-muted-foreground mt-1">University type, location, and grade range</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Preferred University Type</Label>
                    <Select value={universityType} onValueChange={setUniversityType}>
                      <SelectTrigger className="mt-1.5" data-testid="select-university-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {UNIVERSITY_TYPES.map(t => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Preferred State of Study</Label>
                    <Select value={preferredState} onValueChange={setPreferredState}>
                      <SelectTrigger className="mt-1.5" data-testid="select-state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {NIGERIAN_STATES.map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">WAEC/NECO Grade Range</Label>
                    <Select value={gradeRange} onValueChange={setGradeRange}>
                      <SelectTrigger className="mt-1.5" data-testid="select-grade-range">
                        <SelectValue placeholder="Select grade range" />
                      </SelectTrigger>
                      <SelectContent>
                        {GRADE_RANGES.map(g => (
                          <SelectItem key={g} value={g}>{g}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between pt-2">
                  <Button variant="outline" onClick={() => setStep(2)} className="gap-2" data-testid="button-back-step-3">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!canSubmit || isSubmitting}
                    className="gap-2 bg-primary hover:bg-primary/90"
                    data-testid="button-find-my-path"
                  >
                    {isSubmitting ? (
                      <>Finding your path...</>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Find My Path
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <footer className="text-center py-4 text-xs text-muted-foreground border-t border-border/50 space-y-1">
        <p>Powered by Harmony Digital Consults</p>
      </footer>
    </div>
  );
}
