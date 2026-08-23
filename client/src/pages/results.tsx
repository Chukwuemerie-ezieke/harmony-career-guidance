import { useState } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import type { Submission } from "@shared/schema";
import {
  INTERESTS,
  getRecommendations,
  generateWhyText,
} from "@/lib/courseData";
import { COURSE_CATALOGUE, type UniversityOption } from "@/lib/courseCatalogue";
import { ExternalLink } from "lucide-react";
import {
  GraduationCap,
  BookOpen,
  Building2,
  Briefcase,
  Clock,
  Printer,
  Share2,
  ArrowLeft,
  Compass,
  Star,
  CheckCircle2,
  Target,
  Award,
  Link as LinkIcon,
  Copy,
} from "lucide-react";

interface RecommendationResult {
  name: string;
  category: string;
  description: string;
  jambSubjects: string[];
  olevelRequirements: string;
  cutoffMarks: { federal: number; state: number; private: number };
  topUniversities: { name: string; type: string }[];
  careers: string[];
  yearsOfStudy: string;
  whyText: string;
  scholarships?: string[];
  postUtmeTips?: string;
  professionalBodies?: string[];
}

const CARD_COLORS = [
  "border-primary/20 bg-primary/5",
  "border-amber-500/20 bg-amber-500/5",
  "border-blue-500/20 bg-blue-500/5",
];

const CARD_ICONS = [
  <Star className="w-5 h-5 text-primary" />,
  <Compass className="w-5 h-5 text-amber-500" />,
  <Target className="w-5 h-5 text-blue-500" />,
];

export default function Results() {
  const { toast } = useToast();
  const [, params] = useRoute("/results/:id");
  const id = params?.id ? parseInt(params.id) : 0;

  const [linkCopied, setLinkCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const {
    data: submission,
    isLoading,
    error,
  } = useQuery<Submission>({
    queryKey: ["/api/submissions", id],
    enabled: !!id,
  });

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleGenerateShareLink = async () => {
    if (!submission) return;
    setIsSharing(true);
    try {
      const parsedRecs = JSON.parse(submission.recommendations);
      const summaryData = {
        firstName: submission.firstName,
        studentClass: submission.studentClass,
        recommendations: parsedRecs.map((r: any) => ({
          name: r.name,
          category: r.category,
          whyText: r.whyText,
        })),
      };
      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(summaryData),
      });
      const data = await res.json();
      const url = `${window.location.origin}/#/shared/${data.token}`;
      setShareLink(url);
    } catch (err) {
      toast({ title: "Failed to generate link", variant: "destructive" });
    } finally {
      setIsSharing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SchoolHeader />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 space-y-6">
          <Skeleton className="h-24 w-full rounded-lg" />
          <Skeleton className="h-64 w-full rounded-lg" />
          <Skeleton className="h-64 w-full rounded-lg" />
          <Skeleton className="h-64 w-full rounded-lg" />
        </main>
      </div>
    );
  }

  if (error || !submission) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SchoolHeader />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 text-center">
          <h2 className="text-xl font-bold text-destructive mb-2">
            Error Loading Results
          </h2>
          <p className="text-muted-foreground mb-6">
            Could not load the assessment results. They may have been deleted.
          </p>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Return to Assessment
            </Button>
          </Link>
        </main>
      </div>
    );
  }

  const subjects = JSON.parse(submission.strongestSubjects);
  const interests = JSON.parse(submission.interests);
  const interestLabels = interests.map(
    (id: string) => INTERESTS.find((i) => i.id === id)?.label || id,
  );

  const parsedRecs = JSON.parse(submission.recommendations);
  // Re-generate whyText if it wasn't saved properly, or just use what's there
  const recommendations: RecommendationResult[] = parsedRecs.map(
    (rec: any) => ({
      ...rec,
      whyText:
        rec.whyText ||
        generateWhyText(rec, subjects, interests, submission.firstName),
    }),
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchoolHeader />

      <div className="hidden print:block text-xs text-muted-foreground mb-4 border-b pb-2">
        <p>
          Student: {submission.firstName} | Class: {submission.studentClass}
        </p>
        <p>
          School: {(submission as any).schoolName || "N/A"} | Date:{" "}
          {new Date(submission.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-3 px-4 text-center print:hidden">
        <p className="text-sm font-semibold text-primary flex items-center justify-center gap-2">
          <Compass className="w-4 h-4" />
          Your Future Starts Here — Discover Your Path
        </p>
      </div>

      <main
        className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 sm:pb-6 space-y-6 print:py-0 print:space-y-4"
        data-testid="results-page"
      >
        {/* Print-only Header */}
        <div className="hidden print:block mb-8 text-center border-b pb-4">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Career Guidance Report
          </h1>
          <p className="text-lg text-foreground mb-4">
            PathVerge — Career clarity for every student.
          </p>
          <div className="flex justify-between text-sm text-muted-foreground mt-6 text-left">
            <div>
              <p>
                <strong>Student:</strong> {submission.firstName}
              </p>
              <p>
                <strong>Class:</strong> {submission.studentClass}
              </p>
            </div>
            <div className="text-right">
              <p>
                <strong>Date:</strong>{" "}
                {new Date(submission.createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>School:</strong>{" "}
                {(submission as any).schoolName || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Student summary */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden">
          <div>
            <h2
              className="text-xl font-bold text-foreground"
              data-testid="text-result-title"
            >
              {submission.firstName}'s Career Path
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              {submission.studentClass} &bull; {subjects.join(", ")}
            </p>
            <p className="text-sm text-muted-foreground">
              School: {(submission as any).schoolName || "N/A"}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {interestLabels.map((label: string) => (
                <Badge key={label} variant="secondary" className="text-xs">
                  {label}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-2 print:hidden flex-shrink-0">
            <Button
              size="sm"
              variant="outline"
              onClick={handlePrint}
              className="gap-1.5"
              data-testid="button-print"
            >
              <Printer className="w-3.5 h-3.5" /> Print PDF
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopyLink}
              className="gap-1.5"
              data-testid="button-copy-link"
            >
              {linkCopied ? "Copied!" : "Copy URL"}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={handleGenerateShareLink}
              className="gap-1.5"
              disabled={isSharing}
            >
              <LinkIcon className="w-3.5 h-3.5" /> Share Summary
            </Button>
          </div>
        </div>

        {/* Recommendation cards */}
        {recommendations.map((rec, index) => {
          const matchingPathway = COURSE_CATALOGUE.find(
            (p) => p.courseDataId === rec.name || p.title === rec.name,
          );
          return (
            <Card
              key={rec.name}
              className={`overflow-hidden ${CARD_COLORS[index]} print:border-l-0`}
              data-testid={`card-recommendation-${index}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 print:hidden">{CARD_ICONS[index]}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs font-normal">
                        {rec.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {rec.yearsOfStudy}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-1.5">
                      <span className="hidden print:inline-block text-primary font-bold mr-2">
                        {index === 0 ? "Top Match:" : "Alternative Match:"}
                      </span>
                      {rec.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                {/* Why this suits you */}
                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-primary">
                      Why This Suits You
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {rec.whyText}
                  </p>
                </div>

                <div className="print:hidden">
                  <Separator />
                  {/* JAMB subjects and Improvement Guidance */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-primary" /> Core
                      Subjects Focus
                    </h4>
                    <div className="bg-muted/30 rounded-lg p-3 space-y-3 border border-border/50">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Based on your strengths, here are the subjects you need
                        for this path. Focus on strengthening subjects you
                        haven't mastered yet.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {rec.jambSubjects.map((s: string) => {
                          // Check if this required subject is one of the student's strongest subjects
                          // Simple includes check, but we normalize case to be safe
                          const isStrong = subjects.some(
                            (sub: string) =>
                              sub.toLowerCase().includes(s.toLowerCase()) ||
                              s.toLowerCase().includes(sub.toLowerCase()),
                          );
                          return (
                            <div
                              key={s}
                              className="flex items-start gap-2 bg-background p-2 rounded border"
                            >
                              {isStrong ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border-2 border-muted-foreground mt-0.5 flex-shrink-0" />
                              )}
                              <div>
                                <p className="text-sm font-medium">{s}</p>
                                <p className="text-xs text-muted-foreground">
                                  {isStrong
                                    ? "One of your strong subjects"
                                    : "Needs focus & improvement"}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* O'Level requirements */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-4 h-4 text-primary" /> O'Level
                      Requirements
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {rec.olevelRequirements}
                    </p>
                  </div>

                  {/* JAMB cut-off marks */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-primary" /> JAMB Cut-off
                      Marks
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          label: "Federal",
                          value: rec.cutoffMarks.federal,
                          min: 160,
                        },
                        {
                          label: "State",
                          value: rec.cutoffMarks.state,
                          min: 140,
                        },
                        {
                          label: "Private",
                          value: rec.cutoffMarks.private,
                          min: 140,
                        },
                      ].map((m: any) => (
                        <div
                          key={m.label}
                          className="bg-card border rounded-md p-2 text-center"
                        >
                          <p className="text-xs text-muted-foreground">
                            {m.label}
                          </p>
                          <p className="text-base font-bold text-foreground">
                            {m.value}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Min: {m.min}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top universities */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-primary" /> Top
                      Nigerian Universities
                    </h4>
                    <div className="space-y-1.5">
                      {rec.topUniversities.map((uni: any, i: number) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-1 text-sm"
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
                  </div>

                  {/* Career paths */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" /> Career
                      Paths After Graduation
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {rec.careers.map((career: string) => (
                        <Badge
                          key={career}
                          className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/15"
                        >
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Scholarships */}
                  {rec.scholarships && rec.scholarships.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-primary" /> Available
                        Scholarships
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {rec.scholarships.map((s: string) => (
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
                  )}

                  {/* Post-UTME Tips */}
                  {rec.postUtmeTips && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold flex items-center gap-2 mb-1.5">
                        <BookOpen className="w-4 h-4 text-primary" /> Post-UTME
                        Tips
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {rec.postUtmeTips}
                      </p>
                    </div>
                  )}

                  {/* Professional Bodies */}
                  {rec.professionalBodies &&
                    rec.professionalBodies.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                          <Building2 className="w-4 h-4 text-primary" />{" "}
                          Professional Bodies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {rec.professionalBodies.map((b: string) => (
                            <Badge
                              key={b}
                              variant="outline"
                              className="text-xs"
                            >
                              {b}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Years of study */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                    <Clock className="w-4 h-4" />
                    <span>Estimated duration: {rec.yearsOfStudy}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Print-only Next Steps */}
        <div className="hidden print:block mt-8 pt-6 border-t page-break-inside-avoid">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Next Steps & Reflection
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-foreground/80">
            <li>
              Review these recommendations with your parents, guardians, and
              school counsellor.
            </li>
            <li>
              Research the specific entry requirements for the universities you
              are interested in.
            </li>
            <li>
              Remember that these results are a guide for reflection and career
              conversations, not a guaranteed outcome.
            </li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="hidden sm:flex flex-col sm:flex-row gap-3 print:hidden">
          <Link href="/">
            <Button
              variant="outline"
              className="gap-2 w-full sm:w-auto"
              data-testid="link-start-over"
            >
              <ArrowLeft className="w-4 h-4" /> Take Test Again
            </Button>
          </Link>
          <Link href="/explore">
            <Button
              variant="outline"
              className="gap-2 w-full sm:w-auto"
              data-testid="link-explore-courses"
            >
              <BookOpen className="w-4 h-4" /> Explore All Courses
            </Button>
          </Link>
          <Link href="/alternatives">
            <Button variant="outline" className="gap-2 w-full sm:w-auto" data-testid="link-explore-alternatives">
              <Compass className="w-4 h-4" /> Explore Alternative Routes
            </Button>
          </Link>
        </div>

        {/* Mobile Sticky Action Bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex justify-between gap-3 print:hidden">
          <Button
            variant="outline"
            onClick={handlePrint}
            className="gap-1.5 flex-1"
            data-testid="button-mobile-print"
          >
            <Printer className="w-4 h-4" /> Print
          </Button>
          <Button
            variant="secondary"
            onClick={handleGenerateShareLink}
            className="gap-1.5 flex-1"
            disabled={isSharing}
          >
            <Share2 className="w-4 h-4" /> Share
          </Button>
          <Link href="/alternatives" className="hidden sm:flex">
            <Button variant="outline" className="gap-1.5 w-full" data-testid="link-mobile-explore-alternatives">
              <Compass className="w-4 h-4" /> Alts
            </Button>
          </Link>
          <Link href="/explore" className="flex-1 flex">
            <Button
              variant="default"
              className="gap-1.5 w-full"
              data-testid="link-mobile-explore-courses"
            >
              <BookOpen className="w-4 h-4" /> Explore
            </Button>
          </Link>
          <Link href="/alternatives">
            <Button variant="outline" className="gap-2 w-full sm:w-auto" data-testid="link-explore-alternatives">
              <Compass className="w-4 h-4" /> Explore Alternative Routes
            </Button>
          </Link>
        </div>
      </main>

      {/* Print footer */}
      <div className="hidden print:block text-center py-4 border-t text-xs">
        <p>Powered by Harmony Digital Consults</p>
        <p className="mt-0.5">PathVerge — Harmony Digital Consults Ltd</p>
      </div>

      <footer className="text-center py-4 text-xs text-muted-foreground border-t border-border/50 print:hidden space-y-1">
        <p>Powered by Harmony Digital Consults</p>
      </footer>

      <Dialog
        open={!!shareLink}
        onOpenChange={(open) => !open && setShareLink("")}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Shareable Summary Link</DialogTitle>
            <DialogDescription>
              This link provides read-only access to a minimal summary of your
              results. It will expire in 30 days. No contact details or raw
              answers are shared.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 mt-4">
            <Input value={shareLink} readOnly />
            <Button
              size="icon"
              onClick={() => {
                navigator.clipboard.writeText(shareLink);
                toast({ title: "Link copied to clipboard!" });
              }}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
