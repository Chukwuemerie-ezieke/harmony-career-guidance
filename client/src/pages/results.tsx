import { useState } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import type { Submission } from "@shared/schema";
import { INTERESTS } from "@/lib/courseData";
import {
  GraduationCap, BookOpen, Building2, Briefcase, Clock,
  Printer, Share2, ArrowLeft, Compass, Star,
  CheckCircle2, Target, Award
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
}

export default function Results() {
  const [, params] = useRoute("/results/:id");
  const id = params?.id;

  const { data: submission, isLoading, error } = useQuery<Submission>({
    queryKey: ["/api/submissions", id],
    enabled: !!id,
  });

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    if (!submission) return;
    const recs: RecommendationResult[] = JSON.parse(submission.recommendations);
    const courseNames = recs.map(r => r.name).join(", ");
    const text = `I just discovered my ideal career path! My top recommended courses are: ${courseNames}. Try the Career Guidance Platform too!`;
    const shareUrl = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + "\n" + shareUrl)}`;
    const a = document.createElement("a");
    a.href = whatsappUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = async () => {
    const text = window.location.href;
    try {
      await navigator.clipboard.writeText(text);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SchoolHeader />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-6">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </main>
      </div>
    );
  }

  if (error || !submission) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SchoolHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-3">
            <p className="text-muted-foreground">Result not found</p>
            <Link href="/">
              <Button variant="outline" className="gap-2" data-testid="link-back-home">
                <ArrowLeft className="w-4 h-4" /> Start Over
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const recommendations: RecommendationResult[] = JSON.parse(submission.recommendations);
  const subjects: string[] = JSON.parse(submission.strongestSubjects);
  const interests: string[] = JSON.parse(submission.interests);
  const interestLabels = interests.map(i => INTERESTS.find(int => int.id === i)?.label || i);

  const CARD_COLORS = [
    "border-l-4 border-l-primary",
    "border-l-4 border-l-chart-2",
    "border-l-4 border-l-chart-3"
  ];

  const CARD_ICONS = [
    <Star key="1" className="w-5 h-5 text-primary" />,
    <Award key="2" className="w-5 h-5 text-amber-500" />,
    <Target key="3" className="w-5 h-5 text-sky-500" />,
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchoolHeader />

      {/* Print header (hidden on screen) */}
      <div className="hidden print:block text-center py-6 border-b">
        <h1 className="text-xl font-bold">Career Guidance Report</h1>
        <h2 className="text-lg">Harmony Digital Consults Ltd</h2>
        <p className="text-sm mt-1">Student: {submission.firstName} | Class: {submission.studentClass} | Date: {new Date(submission.createdAt).toLocaleDateString()}</p>
      </div>

      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-3 px-4 text-center print:hidden">
        <p className="text-sm font-semibold text-primary flex items-center justify-center gap-2">
          <Compass className="w-4 h-4" />
          Your Future Starts Here — Discover Your Path
        </p>
      </div>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-6" data-testid="results-page">
        {/* Student summary */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground" data-testid="text-result-title">
              {submission.firstName}'s Career Path
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              {submission.studentClass} &bull; {subjects.join(", ")}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {interestLabels.map(label => (
                <Badge key={label} variant="secondary" className="text-xs">{label}</Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-2 print:hidden flex-shrink-0">
            <Button size="sm" variant="outline" onClick={handlePrint} className="gap-1.5" data-testid="button-print">
              <Printer className="w-3.5 h-3.5" /> Print PDF
            </Button>
            <Button size="sm" variant="outline" onClick={handleWhatsAppShare} className="gap-1.5 text-green-600 border-green-200 hover:bg-green-50" data-testid="button-share-whatsapp">
              <Share2 className="w-3.5 h-3.5" /> WhatsApp
            </Button>
            <Button size="sm" variant="ghost" onClick={handleCopyLink} className="gap-1.5" data-testid="button-copy-link">
              {linkCopied ? "Copied!" : "Copy Link"}
            </Button>
          </div>
        </div>

        {/* Recommendation cards */}
        {recommendations.map((rec, index) => (
          <Card key={rec.name} className={`overflow-hidden ${CARD_COLORS[index]} print:border-l-0`} data-testid={`card-recommendation-${index}`}>
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 print:hidden">{CARD_ICONS[index]}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs font-normal">{rec.category}</Badge>
                    <Badge variant="secondary" className="text-xs">{rec.yearsOfStudy}</Badge>
                  </div>
                  <CardTitle className="text-lg mt-1.5">{rec.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{rec.description}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4 pt-0">
              {/* Why this suits you */}
              <div className="bg-primary/5 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-primary">Why This Suits You</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{rec.whyText}</p>
              </div>

              <Separator />

              {/* JAMB subjects */}
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-primary" /> JAMB Subject Combination
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {rec.jambSubjects.map(s => (
                    <Badge key={s} variant="outline" className="text-xs">{s}</Badge>
                  ))}
                </div>
              </div>

              {/* O'Level requirements */}
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-1.5">
                  <GraduationCap className="w-4 h-4 text-primary" /> O'Level Requirements
                </h4>
                <p className="text-sm text-muted-foreground">{rec.olevelRequirements}</p>
              </div>

              {/* JAMB cut-off marks */}
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" /> JAMB Cut-off Marks
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Federal", value: rec.cutoffMarks.federal, min: 160 },
                    { label: "State", value: rec.cutoffMarks.state, min: 140 },
                    { label: "Private", value: rec.cutoffMarks.private, min: 140 },
                  ].map(m => (
                    <div key={m.label} className="bg-card border rounded-md p-2 text-center">
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                      <p className="text-base font-bold text-foreground">{m.value}</p>
                      <p className="text-xs text-muted-foreground">Min: {m.min}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top universities */}
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-primary" /> Top Nigerian Universities
                </h4>
                <div className="space-y-1.5">
                  {rec.topUniversities.map((uni, i) => (
                    <div key={i} className="flex items-center justify-between py-1 text-sm">
                      <span>{uni.name}</span>
                      <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">{uni.type}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career paths */}
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary" /> Career Paths After Graduation
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {rec.careers.map(career => (
                    <Badge key={career} className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Years of study */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Estimated duration: {rec.yearsOfStudy}</span>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 print:hidden">
          <Link href="/">
            <Button variant="outline" className="gap-2 w-full sm:w-auto" data-testid="link-start-over">
              <ArrowLeft className="w-4 h-4" /> Take Test Again
            </Button>
          </Link>
          <Link href="/explore">
            <Button variant="outline" className="gap-2 w-full sm:w-auto" data-testid="link-explore-courses">
              <BookOpen className="w-4 h-4" /> Explore All Courses
            </Button>
          </Link>
        </div>
      </main>

      {/* Print footer */}
      <div className="hidden print:block text-center py-4 border-t text-xs">
        <p>Powered by Harmony Digital Consults</p>
        <p className="mt-0.5">Career Guidance Platform — Harmony Digital Consults Ltd</p>
      </div>

      <footer className="text-center py-4 text-xs text-muted-foreground border-t border-border/50 print:hidden space-y-1">
        <p>Powered by Harmony Digital Consults</p>
      </footer>
    </div>
  );
}
