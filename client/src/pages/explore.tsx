import { useState, useMemo } from "react";
import { Link } from "wouter";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import {
  getSavedPathways,
  savePathway,
  removePathway,
  type SavedPathway,
} from "@/lib/localStore";
import { COURSES, getCategories, type CourseData } from "@/lib/courseData";
import {
  COURSE_CATALOGUE,
  type CoursePathway,
  type UniversityOption,
} from "@/lib/courseCatalogue";
import { ExternalLink } from "lucide-react";
import {
  Search,
  BookOpen,
  GraduationCap,
  Building2,
  Briefcase,
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Target,
  Compass,
  Filter,
  Check,
  Plus,
  X,
  ArrowLeftRight,
  Star,
} from "lucide-react";

type ExploreItem =
  | { type: "course"; data: CourseData; pathway?: CoursePathway }
  | { type: "pathway"; data: CoursePathway };

function UnifiedCourseCard({
  item,
  isComparing,
  onCompareToggle,
  compareDisabled,
  isSaved,
  onSaveToggle,
}: {
  item: ExploreItem;
  isComparing: boolean;
  onCompareToggle: () => void;
  compareDisabled: boolean;
  isSaved: boolean;
  onSaveToggle: (e: any) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const isCourse = item.type === "course";
  const name = isCourse ? item.data.name : item.data.title;
  const category = item.data.category;
  const yearsOfStudy = isCourse ? item.data.yearsOfStudy : "Varies";
  const description = isCourse ? item.data.description : item.data.summary;
  const careers = isCourse ? item.data.careers : item.data.relatedCareers;

  const pathway = item.type === "pathway" ? item.data : item.pathway;

  // Only allow comparing if it is a traditional CourseData for now

  // Replacing \s with space-replace code is tricky in python raw strings in re.sub replacement
  // We'll just write it literally

  return (
    <Card
      className="overflow-hidden transition-all"
      data-testid={`card-${name.replace(/\s/g, "-").toLowerCase()}`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <Badge
                variant="outline"
                className="text-xs font-normal flex-shrink-0"
              >
                {category}
              </Badge>
              {isCourse && (
                <Badge variant="secondary" className="text-xs flex-shrink-0">
                  {yearsOfStudy}
                </Badge>
              )}
              {pathway &&
                pathway.trendingTags.map((tag) => (
                  <Badge
                    key={tag}
                    className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 flex-shrink-0 capitalize"
                  >
                    {tag.replace("-", " ")}
                  </Badge>
                ))}
            </div>
            <CardTitle className="text-base">{name}</CardTitle>
          </div>
        </div>
        <div className="mt-3 flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="flex-1 sm:flex-none"
          >
            {expanded ? "Hide details" : "View details"}
            {expanded ? (
              <ChevronUp className="w-4 h-4 ml-1.5" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-1.5" />
            )}
          </Button>
          {isCourse && (
            <Button
              variant={isComparing ? "secondary" : "outline"}
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onCompareToggle();
              }}
              disabled={!isComparing && compareDisabled}
              className="flex-1 sm:flex-none"
            >
              {isComparing ? (
                <>
                  <Check className="w-4 h-4 mr-1.5 text-primary" /> Added
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-1.5" /> Compare
                </>
              )}
            </Button>
          )}
          {isCourse && (
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${isSaved ? "text-yellow-500" : "text-muted-foreground"}`}
              onClick={onSaveToggle}
              title={isSaved ? "Remove from saved" : "Save this path"}
            >
              <Star className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
            </Button>
          )}
        </div>
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0 space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>

          {pathway && (
            <p className="text-xs text-muted-foreground italic">
              Last reviewed: {pathway.lastReviewed}
            </p>
          )}

          <Separator />

          {isCourse && (
            <>
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-primary" /> JAMB Subject
                  Combination
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(isCourse ? (item.data as CourseData).jambSubjects : []).map(
                    (s: string) => (
                      <Badge key={s} variant="outline" className="text-xs">
                        {s}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-1.5">
                  <GraduationCap className="w-4 h-4 text-primary" /> O'Level
                  Requirements
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isCourse ? (item.data as CourseData).olevelRequirements : ""}
                </p>
              </div>
            </>
          )}

          {pathway &&
            pathway.keySubjects &&
            pathway.keySubjects.length > 0 &&
            !isCourse && (
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-primary" /> Key Subjects
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {pathway.keySubjects.map((s: string) => (
                    <Badge key={s} variant="outline" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

          {pathway &&
            pathway.skillsDeveloped &&
            pathway.skillsDeveloped.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" /> Skills Developed
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {pathway.skillsDeveloped.map((s: string) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-primary" /> Potential Careers
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {careers.map((career: string) => (
                <Badge
                  key={career}
                  className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/15"
                >
                  {career}
                </Badge>
              ))}
            </div>
          </div>

          {/* Universities Section */}
          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-primary" />
              {pathway
                ? "Where to Study (Verified)"
                : "Top Universities in Nigeria"}
            </h4>

            {pathway ? (
              <div className="space-y-4">
                {["nigeria", "international"].map((type) => {
                  const opts = pathway.universityOptions.filter(
                    (u: UniversityOption) => u.optionType === type,
                  );
                  if (opts.length === 0) return null;
                  return (
                    <div key={type}>
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        {type === "nigeria"
                          ? "Nigerian Options"
                          : "International Options"}
                      </h5>
                      <div className="space-y-2">
                        {opts.map((u: UniversityOption) => (
                          <div
                            key={u.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded border bg-card/50 text-sm gap-2"
                          >
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                {u.universityName}
                                <span className="text-xs text-muted-foreground font-normal">
                                  ({u.country})
                                </span>
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {u.programmeTitle}
                              </div>
                              {u.notes && (
                                <div className="text-xs text-muted-foreground mt-0.5 italic">
                                  {u.notes}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col sm:items-end gap-1 shrink-0">
                              <a
                                href={u.officialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                              >
                                Official Page{" "}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                              <span className="text-[10px] text-muted-foreground">
                                Verified: {u.verificationDate}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
                {pathway.universityOptions.length === 0 && (
                  <div className="p-3 bg-muted/50 rounded text-sm text-center text-muted-foreground">
                    No verified university options available yet.
                  </div>
                )}
                <div className="p-2 mt-2 bg-amber-500/10 border border-amber-500/20 rounded text-xs text-amber-700/80 dark:text-amber-400/80">
                  <span className="font-semibold">Notice:</span> Programme
                  availability and entry requirements change. Check the
                  university's official admissions page before applying.
                </div>
              </div>
            ) : (
              <div className="space-y-1.5">
                {(isCourse
                  ? (item.data as CourseData).topUniversities
                  : []
                ).map((uni: { name: string; type: string }, i: number) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1 text-sm border-b last:border-0 border-border/50"
                  >
                    <span>{uni.name}</span>
                    <Badge
                      variant="secondary"
                      className="text-xs ml-2 flex-shrink-0"
                    >
                      {uni.type}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export default function Explore() {
  const { toast } = useToast();
  const [selectedForCompare, setSelectedForCompare] = useState<CourseData[]>(
    [],
  );
  const [showCompareDialog, setShowCompareDialog] = useState(false);
  const [savedPaths, setSavedPaths] = useState<SavedPathway[]>(() => {
    try {
      return getSavedPathways();
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [emergingFilter, setEmergingFilter] = useState(false);
  const [regionFilter, setRegionFilter] = useState("all"); // 'all', 'nigeria', 'international'

  const categories = useMemo(() => getCategories(), []);

  const handleCompareToggle = (course: CourseData) => {
    setSelectedForCompare((prev) => {
      const isSelected = prev.find((c) => c.name === course.name);
      if (isSelected) {
        return prev.filter((c) => c.name !== course.name);
      }
      if (prev.length < 2) {
        return [...prev, course];
      }
      return prev;
    });
  };

  const toggleSave = (course: CourseData, e: React.MouseEvent) => {
    e.stopPropagation();
    const isSaved = savedPaths.some((p) => p.name === course.name);
    if (isSaved) {
      setSavedPaths(removePathway(course.name));
      toast({ title: "Removed from saved pathways" });
    } else {
      setSavedPaths(
        savePathway({ name: course.name, category: course.category }),
      );
      toast({
        title: "Saved pathway!",
        description: "Sign in to sync across devices (coming soon).",
      });
    }
  };

  const unifiedItems = useMemo(() => {
    const items: ExploreItem[] = COURSES.map((course) => {
      const pathway = COURSE_CATALOGUE.find(
        (p) => p.courseDataId === course.name || p.title === course.name,
      );
      return { type: "course", data: course, pathway };
    });

    COURSE_CATALOGUE.forEach((pathway) => {
      if (
        !pathway.courseDataId &&
        !COURSES.some((c) => c.name === pathway.title)
      ) {
        items.push({ type: "pathway", data: pathway });
      }
    });

    return items;
  }, []);

  const filtered = useMemo(() => {
    let result = [...unifiedItems];

    if (categoryFilter !== "all") {
      result = result.filter((item) => {
        const cat =
          item.type === "course" ? item.data.category : item.data.category;
        return cat === categoryFilter;
      });
    }

    if (emergingFilter) {
      result = result.filter((item) => {
        const tags =
          item.type === "pathway"
            ? item.data.trendingTags
            : item.pathway?.trendingTags || [];
        return tags.includes("emerging");
      });
    }

    if (regionFilter !== "all") {
      result = result.filter((item) => {
        if (item.type === "course" && !item.pathway) {
          // traditional courses only have Nigerian universities
          return regionFilter === "nigeria";
        }
        const pathway = item.type === "pathway" ? item.data : item.pathway;
        if (!pathway) return false;

        return pathway.universityOptions.some(
          (u) => u.optionType === regionFilter,
        );
      });
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((item) => {
        const name = item.type === "course" ? item.data.name : item.data.title;
        const cat =
          item.type === "course" ? item.data.category : item.data.category;
        const careers =
          item.type === "course" ? item.data.careers : item.data.relatedCareers;

        return (
          name.toLowerCase().includes(q) ||
          cat.toLowerCase().includes(q) ||
          careers.some((career) => career.toLowerCase().includes(q))
        );
      });
    }

    result.sort((a, b) => {
      const nameA = a.type === "course" ? a.data.name : a.data.title;
      const nameB = b.type === "course" ? b.data.name : b.data.title;
      return nameA.localeCompare(nameB);
    });

    return result;
  }, [search, categoryFilter, emergingFilter, regionFilter, unifiedItems]);

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
            <h2
              className="text-xl font-bold text-foreground"
              data-testid="text-explore-title"
            >
              Course Explorer
            </h2>
            <p className="text-sm text-muted-foreground">
              Browse all Nigerian university courses
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/saved">
              <Button variant="outline" size="sm" className="gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />{" "}
                Saved ({savedPaths.length})
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                data-testid="link-back-form"
              >
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
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
              data-testid="input-search-courses"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="w-[140px] h-9">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Region</SelectItem>
                <SelectItem value="nigeria">Nigeria</SelectItem>
                <SelectItem value="international">International</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant={emergingFilter ? "default" : "outline"}
              size="sm"
              onClick={() => setEmergingFilter(!emergingFilter)}
              className="h-9 whitespace-nowrap"
            >
              Emerging Fields
            </Button>
          </div>
        </div>

        <p
          className="text-sm text-muted-foreground"
          data-testid="text-course-count"
        >
          {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
        </p>

        <div className="space-y-3">
          {filtered.map((item) => {
            const name =
              item.type === "course"
                ? (item.data as CourseData).name
                : (item.data as CoursePathway).title;
            return (
              <UnifiedCourseCard
                key={name}
                item={item}
                isComparing={
                  item.type === "course"
                    ? selectedForCompare.some(
                        (c) => c.name === (item.data as CourseData).name,
                      )
                    : false
                }
                onCompareToggle={() =>
                  item.type === "course"
                    ? handleCompareToggle(item.data as CourseData)
                    : null
                }
                compareDisabled={selectedForCompare.length >= 2}
                isSaved={savedPaths.some((p) => p.name === name)}
                onSaveToggle={(e: any) =>
                  item.type === "course"
                    ? toggleSave(item.data as CourseData, e)
                    : null
                }
              />
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-accent/20 rounded-lg border border-dashed">
            <BookOpen className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-foreground font-medium mb-1">No courses found</p>
            <p className="text-sm text-muted-foreground mb-4">
              Try adjusting your filters or search terms.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setCategoryFilter("all");
                setEmergingFilter(false);
                setRegionFilter("all");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </main>

      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 flex items-center justify-between gap-4">
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold text-foreground mb-1">
              Comparing {selectedForCompare.length}/2 Courses
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {selectedForCompare.map((c) => (
                <Badge
                  key={c.name}
                  variant="secondary"
                  className="whitespace-nowrap flex items-center gap-1"
                >
                  <span className="truncate max-w-[120px]">{c.name}</span>
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-destructive"
                    onClick={() => handleCompareToggle(c)}
                  />
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedForCompare([])}
            >
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
                        <Badge variant="outline" className="mb-2">
                          {course.category}
                        </Badge>
                        <h3 className="text-lg font-bold text-primary">
                          {course.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />{" "}
                          {course.yearsOfStudy}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" /> JAMB
                          Subjects
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {course.jambSubjects.map((s: string) => (
                            <Badge
                              key={s}
                              variant="secondary"
                              className="text-xs"
                            >
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-primary" />{" "}
                          O'Level Requirements
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {course.olevelRequirements}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" /> JAMB
                          Cut-off Marks
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-muted/50 rounded p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
                              Federal
                            </div>
                            <div className="font-semibold text-foreground">
                              {course.cutoffMarks.federal}
                            </div>
                          </div>
                          <div className="bg-muted/50 rounded p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
                              State
                            </div>
                            <div className="font-semibold text-foreground">
                              {course.cutoffMarks.state}
                            </div>
                          </div>
                          <div className="bg-muted/50 rounded p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
                              Private
                            </div>
                            <div className="font-semibold text-foreground">
                              {course.cutoffMarks.private}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" /> Career
                          Paths
                        </h4>
                        <ul className="space-y-1.5">
                          {course.careers.map((career: string) => (
                            <li
                              key={career}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
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
