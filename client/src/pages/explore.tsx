import { useState, useMemo } from "react";
import { Link } from "wouter";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { COURSES, getCategories, type CourseData } from "@/lib/courseData";
import {
  Search, BookOpen, GraduationCap, Building2, Briefcase,
  Clock, ArrowLeft, ChevronDown, ChevronUp, Target,
  Compass, Filter
} from "lucide-react";

function CourseCard({ course }: { course: CourseData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden transition-all" data-testid={`card-course-${course.name.replace(/\s/g, "-").toLowerCase()}`}>
      <CardHeader
        className="pb-2 cursor-pointer hover:bg-accent/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs font-normal flex-shrink-0">{course.category}</Badge>
              <Badge variant="secondary" className="text-xs flex-shrink-0">{course.yearsOfStudy}</Badge>
            </div>
            <CardTitle className="text-base">{course.name}</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="flex-shrink-0 mt-1" data-testid={`button-expand-${course.name.replace(/\s/g, "-").toLowerCase()}`}>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0 space-y-4">
          <p className="text-sm text-muted-foreground">{course.description}</p>

          <Separator />

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" /> JAMB Subject Combination
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.jambSubjects.map(s => (
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
              ].map(m => (
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
              {course.topUniversities.map((uni, i) => (
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
              {course.careers.map(career => (
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
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const categories = useMemo(() => getCategories(), []);

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

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-foreground" data-testid="text-explore-title">Course Explorer</h2>
            <p className="text-sm text-muted-foreground">Browse all Nigerian university courses</p>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2" data-testid="link-back-form">
              <ArrowLeft className="w-4 h-4" /> Back to Form
            </Button>
          </Link>
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
            <CourseCard key={course.name} course={course} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground">No courses match your search</p>
          </div>
        )}
      </main>

      <footer className="text-center py-4 text-xs text-muted-foreground border-t border-border/50 space-y-1">
        <p>Powered by Harmony Digital Consults</p>
      </footer>
    </div>
  );
}
