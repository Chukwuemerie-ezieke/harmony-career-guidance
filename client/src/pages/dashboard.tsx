import { useState, useMemo } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Submission } from "@shared/schema";
import {
  Users, Search, ArrowLeft, BarChart3, TrendingUp,
  Filter, Eye, Compass
} from "lucide-react";

interface RecResult {
  name: string;
  category: string;
}

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");

  const { data: submissions = [], isLoading } = useQuery<Submission[]>({
    queryKey: ["/api/submissions"],
  });

  // Parse recommendations for each submission
  const parsedSubmissions = useMemo(() => {
    return submissions.map(s => {
      const recs: RecResult[] = JSON.parse(s.recommendations);
      return {
        ...s,
        parsedRecs: recs,
        subjects: JSON.parse(s.strongestSubjects) as string[],
        interestsParsed: JSON.parse(s.interests) as string[],
      };
    });
  }, [submissions]);

  // Get all unique recommended courses
  const allCourses = useMemo(() => {
    const set = new Set<string>();
    parsedSubmissions.forEach(s => s.parsedRecs.forEach(r => set.add(r.name)));
    return Array.from(set).sort();
  }, [parsedSubmissions]);

  // Course distribution stats
  const courseStats = useMemo(() => {
    const counts: Record<string, number> = {};
    parsedSubmissions.forEach(s => {
      s.parsedRecs.forEach(r => {
        counts[r.name] = (counts[r.name] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [parsedSubmissions]);

  // Filter
  const filtered = useMemo(() => {
    let result = parsedSubmissions;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(s =>
        s.firstName.toLowerCase().includes(q) ||
        s.studentClass.toLowerCase().includes(q)
      );
    }

    if (courseFilter !== "all") {
      result = result.filter(s =>
        s.parsedRecs.some(r => r.name === courseFilter)
      );
    }

    return result;
  }, [parsedSubmissions, search, courseFilter]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchoolHeader />

      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-3 px-4 text-center">
        <p className="text-sm font-semibold text-primary flex items-center justify-center gap-2">
          <Compass className="w-4 h-4" />
          Counsellor Dashboard
        </p>
      </div>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 space-y-6" data-testid="dashboard-page">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-foreground" data-testid="text-dashboard-title">
              Student Career Guidance Summary
            </h2>
            <p className="text-sm text-muted-foreground">View all student submissions and recommendations</p>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[1,2,3,4].map(i => <Skeleton key={i} className="h-20" />)}
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        ) : (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Total Students</p>
                      <p className="text-lg font-bold" data-testid="text-total-students">
                        {submissions.length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Unique Courses</p>
                      <p className="text-lg font-bold" data-testid="text-unique-courses">
                        {allCourses.length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <p className="text-xs text-muted-foreground">Top Recommended Courses</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {courseStats.map(([name, count]) => (
                      <Badge key={name} variant="secondary" className="text-xs">
                        {name} ({count})
                      </Badge>
                    ))}
                    {courseStats.length === 0 && (
                      <span className="text-xs text-muted-foreground">No data yet</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or class..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="pl-9"
                  data-testid="input-search-students"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <Select value={courseFilter} onValueChange={setCourseFilter}>
                  <SelectTrigger className="w-56" data-testid="select-course-filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {allCourses.map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <Card>
              <CardContent className="p-0">
                {filtered.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                    <p className="text-muted-foreground">
                      {submissions.length === 0 ? "No submissions yet" : "No matching results"}
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-xs">Name</TableHead>
                          <TableHead className="text-xs">Class</TableHead>
                          <TableHead className="text-xs">Subjects</TableHead>
                          <TableHead className="text-xs">Recommended Courses</TableHead>
                          <TableHead className="text-xs">Date</TableHead>
                          <TableHead className="text-xs w-16">View</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered.map(s => (
                          <TableRow key={s.id} data-testid={`row-student-${s.id}`}>
                            <TableCell className="font-medium text-sm">{s.firstName}</TableCell>
                            <TableCell className="text-sm">{s.studentClass}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {s.subjects.map(sub => (
                                  <Badge key={sub} variant="outline" className="text-xs">{sub}</Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {s.parsedRecs.map(r => (
                                  <Badge key={r.name} className="text-xs bg-primary/10 text-primary border-primary/20">
                                    {r.name}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground">
                              {new Date(s.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <Link href={`/results/${s.id}`}>
                                <Button variant="ghost" size="sm" className="gap-1" data-testid={`link-view-${s.id}`}>
                                  <Eye className="w-3.5 h-3.5" />
                                </Button>
                              </Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>

            <p className="text-xs text-muted-foreground text-center" data-testid="text-filtered-count">
              Showing {filtered.length} of {submissions.length} students
            </p>
          </>
        )}
      </main>

      <footer className="text-center py-4 text-xs text-muted-foreground border-t border-border/50 space-y-1">
        <p>Powered by Harmony Digital Consults</p>
      </footer>
    </div>
  );
}
