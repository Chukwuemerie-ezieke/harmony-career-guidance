import { useState, useMemo } from "react";
import { Link } from "wouter";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { getSavedPathways, savePathway, removePathway, type SavedPathway } from "@/lib/localStore";
import { COURSES, getCategories, type CourseData } from "@/lib/courseData";
import {
  Search, BookOpen, GraduationCap, Building2, Briefcase,
  Clock, ArrowLeft, ChevronDown, ChevronUp, Target,
  Compass, Filter, Check, Plus, X, ArrowLeftRight, Star
} from "lucide-react";

function CourseCard({ course, isComparing, onCompareToggle, compareDisabled, isSaved, onSaveToggle }: { course: CourseData, isComparing: boolean, onCompareToggle: () => void, compareDisabled: boolean, isSaved: boolean, onSaveToggle: (e: any) => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden transition-all" data-testid={`card-course-${course.name.replace(/\s/g, "-").toLowerCase()}`}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs font-normal flex-shrink-0">{course.category}</Badge>
              <Badge variant="secondary" className="text-xs flex-shrink-0">{course.yearsOfStudy}</Badge>
            </div>
            <CardTitle className="text-base">{course.name}</CardTitle>
          </div>
        </div>
        <div className="mt-3 flex gap-2 w-full sm:w-auto">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`course-details-${course.name.replace(/\s/g, "-").toLowerCase()}`}
            data-testid={`button-expand-${course.name.replace(/\s/g, "-").toLowerCase()}`}
            className="flex-1 sm:flex-none"
          >
            {expanded ? "Hide details" : "View details"}
            {expanded ? <ChevronUp className="w-4 h-4 ml-1.5" /> : <ChevronDown className="w-4 h-4 ml-1.5" />}
          </Button>
          <Button
            variant={isComparing ? "secondary" : "outline"}
            size="sm"
            onClick={(e) => { e.stopPropagation(); onCompareToggle(); }}
            disabled={!isComparing && compareDisabled}
            className="flex-1 sm:flex-none"
            data-testid={`button-compare-${course.name.replace(/\s/g, "-").toLowerCase()}`}
          >
            {isComparing ? (
              <><Check className="w-4 h-4 mr-1.5 text-primary" /> Added</>
            ) : (
              <><Plus className="w-4 h-4 mr-1.5" /> Compare</>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 ${isSaved ? "text-yellow-500" : "text-muted-foreground"}`}
            onClick={onSaveToggle}
            title={isSaved ? "Remove from saved" : "Save this path"}
          >
            <Star className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
          </Button>
        </div>
      </CardHeader>

      {expanded && (
        <CardContent 
          id={`course-details-${course.name.replace(/\s/g, "-").toLowerCase()}`} 
          className="pt-0 space-y-4"
        >
          <p className="text-sm text-muted-foreground">{course.description}</p>

          <Separator />

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" /> JAMB Subject Combination
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.jambSubjects.map((s: string) => (
                <Badge key={s} variant="outline" className="text-xs">{s}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-1.5">
              <GraduationCap className="w-4 h-4 text-primary" /> O'Level Requirements
            </h4>
            <p className="text-sm text-muted-foreground">{course.olevelRequirements}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-primary" /> JAMB Cut-off Marks
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Federal", value: course.cutoffMarks.federal, min: 160 },
                { label: "State", value: course.cutoffMarks.state, min: 140 },
                { label: "Private", value: course.cutoffMarks.private, min: 140 },
              ].map((m: any) => (
                <div key={m.label} className="bg-card border rounded-md p-2 text-center">
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="text-base font-bold">{m.value}</p>
                  <p className="text-xs text-muted-foreground">Min: {m.min}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-primary" /> Top Nigerian Universities
            </h4>
            <div className="space-y-1.5">
              {course.topUniversities.map((uni: any, i: number) => (
                <div key={i} className="flex items-center justify-between py-1 text-sm">
                  <span>{uni.name}</span>
                  <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">{uni.type}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-primary" /> Career Paths
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.careers.map((career: string) => (
                <Badge key={career} className="text-xs bg-primary/10 text-primary border-primary/20">
                  {career}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Duration: {course.yearsOfStudy}</span>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export default function Explore() {
  const { toast } = useToast();
  const [selectedForCompare, setSelectedForCompare] = useState<CourseData[]>([]);
  const [showCompareDialog, setShowCompareDialog] = useState(false);
  const [savedPaths, setSavedPaths] = useState<SavedPathway[]>(() => {
    try { return getSavedPathways(); } catch { return []; }
  });

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const categories = useMemo(() => getCategories(), []);

  const handleCompareToggle = (course: CourseData) => {
    setSelectedForCompare(prev => {
      const isSelected = prev.find(c => c.name === course.name);
      if (isSelected) {
        return prev.filter(c => c.name !== course.name);
      }
      if (prev.length < 2) {
        return [...prev, course];
      }
      return prev;
    });
  };

  const toggleSave = (course: CourseData, e: React.MouseEvent) => {
    e.stopPropagation();
    const isSaved = savedPaths.some(p => p.name === course.name);
    if (isSaved) {
      setSavedPaths(removePathway(course.name));
      toast({ title: "Removed from saved pathways" });
    } else {
      setSavedPaths(savePathway({ name: course.name, category: course.category }));
      toast({ title: "Saved pathway!", description: "Sign in to sync across devices (coming soon)." });
    }
  };

  const filtered = useMemo(() => {
    let result = [...COURSES];

    if (categoryFilter !== "all") {
      result = result.filter(c => c.category === categoryFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.careers.some(career => career.toLowerCase().includes(q))
      );
    }

    result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, categoryFilter]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchoolHeader />

      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-3 px-4 text-center">
        <p className="text-sm font-semibold text-primary flex items-center justify-center gap-2">
          <Compass className="w-4 h-4" />
          Your Future Starts Here — Discover Your Path
        </p>
      </div>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-5 pb-32">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-foreground" data-testid="text-explore-title">Course Explorer</h2>
            <p className="text-sm text-muted-foreground">Browse all Nigerian university courses</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/saved">
              <Button variant="outline" size="sm" className="gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> Saved ({savedPaths.length})
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-2" data-testid="link-back-form">
                <ArrowLeft className="w-4 h-4" /> Back to Form
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, careers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
              data-testid="input-search-courses"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48" data-testid="select-category-filter">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-sm text-muted-foreground" data-testid="text-course-count">
          {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
        </p>

        <div className="space-y-3">
          {filtered.map(course => (
            <CourseCard 
              key={course.name} 
              course={course}
              isComparing={selectedForCompare.some(c => c.name === course.name)}
              onCompareToggle={() => handleCompareToggle(course)}
              compareDisabled={selectedForCompare.length >= 2}
              isSaved={savedPaths.some(p => p.name === course.name)}
              onSaveToggle={(e) => toggleSave(course, e)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-accent/20 rounded-lg border border-dashed">
            <BookOpen className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-foreground font-medium mb-1">No courses found</p>
            <p className="text-sm text-muted-foreground mb-4">Try adjusting your filters or search terms.</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearch(""); setCategoryFilter("all"); }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </main>

      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 flex items-center justify-between gap-4">
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold text-foreground mb-1">Comparing {selectedForCompare.length}/2 Courses</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {selectedForCompare.map(c => (
                <Badge key={c.name} variant="secondary" className="whitespace-nowrap flex items-center gap-1">
                  <span className="truncate max-w-[120px]">{c.name}</span>
                  <X className="w-3 h-3 cursor-pointer hover:text-destructive" onClick={() => handleCompareToggle(c)} />
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
            <Button variant="ghost" size="sm" onClick={() => setSelectedForCompare([])}>
              Clear
            </Button>
            <Button 
              size="sm" 
              className="gap-2" 
              disabled={selectedForCompare.length < 2}
              onClick={() => setShowCompareDialog(true)}
            >
              <ArrowLeftRight className="w-4 h-4" /> Compare
            </Button>
          </div>
        </div>
      )}

      <Dialog open={showCompareDialog} onOpenChange={setShowCompareDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
          <DialogHeader className="p-6 pb-4 border-b">
            <DialogTitle className="text-xl">Course Comparison</DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1">
            <div className="p-6">
              {selectedForCompare.length === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedForCompare.map((course, idx) => (
                    <div key={course.name} className="space-y-6">
                      <div className="sticky top-0 bg-background pt-2 pb-4 z-10 border-b">
                        <Badge variant="outline" className="mb-2">{course.category}</Badge>
                        <h3 className="text-lg font-bold text-primary">{course.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {course.yearsOfStudy}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" /> JAMB Subjects
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {course.jambSubjects.map((s: string) => (
                            <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-primary" /> O'Level Requirements
                        </h4>
                        <p className="text-sm text-muted-foreground">{course.olevelRequirements}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" /> JAMB Cut-off Marks
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-muted/50 rounded p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Federal</div>
                            <div className="font-semibold text-foreground">{course.cutoffMarks.federal}</div>
                          </div>
                          <div className="bg-muted/50 rounded p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">State</div>
                            <div className="font-semibold text-foreground">{course.cutoffMarks.state}</div>
                          </div>
                          <div className="bg-muted/50 rounded p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Private</div>
                            <div className="font-semibold text-foreground">{course.cutoffMarks.private}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" /> Career Paths
                        </h4>
                        <ul className="space-y-1.5">
                          {course.careers.map((career: string) => (
                            <li key={career} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                              {career}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
      
      <footer className="text-center py-4 text-xs text-muted-foreground border-t border-border/50 space-y-1 pb-32 sm:pb-4">
        <p>Powered by Harmony Digital Consults</p>
      </footer>
    </div>
  );
}
