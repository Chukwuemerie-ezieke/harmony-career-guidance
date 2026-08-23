import { useState, useMemo } from "react";
import { Link } from "wouter";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ALTERNATIVE_PATHWAYS, type AlternativePathway, type AlternativePathwayType, type ProviderOption } from "@/lib/alternativePathways";
import {
  Search, BookOpen, GraduationCap, Building2, Briefcase,
  Clock, ArrowLeft, ChevronDown, ChevronUp, Target,
  Compass, Filter, ExternalLink, Lightbulb, Map
} from "lucide-react";

function AlternativePathwayCard({ pathway }: { pathway: AlternativePathway }) {
  const [expanded, setExpanded] = useState(false);

  const getBadgeColor = (type: AlternativePathwayType) => {
    switch(type) {
      case "polytechnic": return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "college-of-education": return "bg-green-500/10 text-green-700 border-green-500/20";
      case "tvet": return "bg-amber-500/10 text-amber-700 border-amber-500/20";
      case "professional-certification": return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "digital-skills": return "bg-pink-500/10 text-pink-700 border-pink-500/20";
      default: return "";
    }
  };

  const getLabel = (type: AlternativePathwayType) => {
    switch(type) {
      case "polytechnic": return "Polytechnic (ND/HND)";
      case "college-of-education": return "College of Education (NCE)";
      case "tvet": return "TVET";
      case "professional-certification": return "Professional Cert";
      case "digital-skills": return "Digital Skills";
      default: return type;
    }
  };

  return (
    <Card className="overflow-hidden transition-all" data-testid={`card-alt-${pathway.id}`}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <Badge variant="outline" className={`text-xs font-medium flex-shrink-0 ${getBadgeColor(pathway.pathwayType)}`}>
                {getLabel(pathway.pathwayType)}
              </Badge>
              {pathway.typicalDuration && <Badge variant="secondary" className="text-xs flex-shrink-0">{pathway.typicalDuration}</Badge>}
            </div>
            <CardTitle className="text-base">{pathway.title}</CardTitle>
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
            {expanded ? <ChevronUp className="w-4 h-4 ml-1.5" /> : <ChevronDown className="w-4 h-4 ml-1.5" />}
          </Button>
        </div>
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{pathway.summary}</p>
          
          <Separator />

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-primary" /> Who is this for?
            </h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {pathway.suitableFor.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-primary" /> Progression Options
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {pathway.progressionOptions.map((opt, i) => (
                <Badge key={i} variant="secondary" className="text-xs">{opt}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-primary" /> Related Careers
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {pathway.relatedCareers.map((career: string) => (
                <Badge key={career} className="text-xs bg-primary/10 text-primary border-primary/20">
                  {career}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-primary" /> 
              Verified Provider Options
            </h4>
            
            <div className="space-y-4">
                {pathway.providerOptions.length > 0 ? (
                  <div className="space-y-2">
                    {pathway.providerOptions.map((u: ProviderOption) => (
                      <div key={u.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded border bg-card/50 text-sm gap-2">
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {u.providerName} 
                            <span className="text-xs text-muted-foreground font-normal">({u.country})</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">{u.offeringTitle} • {u.providerType}</div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 shrink-0">
                          <a href={u.officialUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">
                            Official Page <ExternalLink className="w-3 h-3" />
                          </a>
                          <span className="text-[10px] text-muted-foreground">Verified: {u.verificationDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 bg-muted/50 rounded text-sm text-center text-muted-foreground">
                    Check official provider registries for verified options in your area.
                  </div>
                )}
            </div>
          </div>
          
        </CardContent>
      )}
    </Card>
  );
}

export default function Alternatives() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    let result = [...ALTERNATIVE_PATHWAYS];

    if (typeFilter !== "all") {
      result = result.filter(c => c.pathwayType === typeFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.relatedCareers.some(career => career.toLowerCase().includes(q))
      );
    }

    result.sort((a, b) => a.title.localeCompare(b.title));
    return result;
  }, [search, typeFilter]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchoolHeader />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Alternative Education Pathways</h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              University is not the only valid route. Explore practical, technical, and vocational paths to build a successful career.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/explore">
              <Button variant="outline" size="sm" className="gap-2">
                <BookOpen className="w-4 h-4" /> University Courses
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-3 bg-primary/5 border border-primary/10 rounded-md text-xs sm:text-sm text-foreground/80 flex gap-3">
          <Lightbulb className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
          <div>
            <p><strong>Important Note:</strong> Programme availability, entry requirements, accreditation, and progression options can change. Confirm details with the provider, relevant regulator, and official admissions information before applying.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center bg-card p-4 rounded-lg border shadow-sm">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search pathways, careers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[200px] h-9">
                <SelectValue placeholder="Pathway Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="polytechnic">Polytechnic (ND/HND)</SelectItem>
                <SelectItem value="college-of-education">College of Education (NCE)</SelectItem>
                <SelectItem value="tvet">TVET</SelectItem>
                <SelectItem value="professional-certification">Professional Certification</SelectItem>
                <SelectItem value="digital-skills">Digital Skills</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {filtered.length} pathway{filtered.length !== 1 ? "s" : ""} found
        </p>

        <div className="space-y-3">
          {filtered.map(pathway => (
            <AlternativePathwayCard key={pathway.id} pathway={pathway} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-accent/20 rounded-lg border border-dashed">
            <Compass className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-foreground font-medium mb-1">No pathways found</p>
            <p className="text-sm text-muted-foreground mb-4">Try adjusting your filters or search terms.</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearch(""); setTypeFilter("all"); }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
