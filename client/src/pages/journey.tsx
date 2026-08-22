import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { SchoolHeader } from "@/components/SchoolHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  JOURNEY_STAGES, 
  TOTAL_JOURNEY_TASKS, 
  getLocalJourneyData, 
  saveLocalJourneyData, 
  clearLocalJourneyData, 
  type JourneyData 
} from "@/lib/journeyStore";
import { COURSE_CATALOGUE } from "@/lib/courseCatalogue";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, Map, AlertCircle, Info, Trash2, ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function JourneyPlanner() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const [data, setData] = useState<JourneyData>(getLocalJourneyData());
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync pathway query param if available and empty in local store
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryPathwayId = searchParams.get('pathwayId');
    
    if (queryPathwayId && !data.pathwayId) {
      updateData({ pathwayId: queryPathwayId });
    }
    setIsLoaded(true);
  }, []);

  const updateData = (updates: Partial<JourneyData>) => {
    const newData = { ...data, ...updates };
    setData(newData);
    saveLocalJourneyData(newData);
  };

  const handleTaskToggle = (taskId: string, checked: boolean) => {
    const newTasks = checked 
      ? [...data.completedTaskIds, taskId] 
      : data.completedTaskIds.filter(id => id !== taskId);
    updateData({ completedTaskIds: newTasks });
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to completely reset your admission journey progress? This cannot be undone.")) {
      clearLocalJourneyData();
      setData({ completedTaskIds: [], lastUpdated: Date.now() });
      toast({ title: "Journey reset", description: "Your local journey data has been cleared." });
    }
  };

  if (!isLoaded) return null;

  const progressPercentage = Math.round((data.completedTaskIds.length / TOTAL_JOURNEY_TASKS) * 100);

  // Find next suggested task
  let nextTaskTitle = "All tasks completed! Good luck!";
  for (const stage of JOURNEY_STAGES) {
      const incompleteTask = stage.tasks.find(t => !data.completedTaskIds.includes(t.id));
      if (incompleteTask) {
          nextTaskTitle = `Next up: ${incompleteTask.title} (${stage.title.split('.')[0]})`;
          break;
      }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchoolHeader />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 space-y-6">
        <Button variant="ghost" onClick={() => window.history.back()} className="mb-2">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>

        <div>
          <h1 className="text-3xl font-bold text-foreground">Admission Journey Planner</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            A practical checklist for your path from JAMB preparation through to university clearance.
          </p>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground">
             <Info className="w-3 h-3" /> Your journey progress is saved only in this browser on this device.
          </div>
        </div>

        {/* Progress Summary */}
        <Card className="bg-primary/5 border-primary/10">
            <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="w-full sm:w-1/2">
                        <div className="flex justify-between mb-2 text-sm font-medium">
                            <span>Overall Progress</span>
                            <span>{data.completedTaskIds.length} / {TOTAL_JOURNEY_TASKS} completed ({progressPercentage}%)</span>
                        </div>
                        <Progress value={progressPercentage} className="h-3 bg-primary/10" />
                    </div>
                    <div className="w-full sm:w-1/2 sm:text-right">
                        <p className="text-sm font-semibold text-primary">{nextTaskTitle}</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Cautious Notice */}
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-md flex gap-3 text-amber-800 dark:text-amber-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
                <p className="font-semibold mb-1">Verify before acting</p>
                <p>Admission timelines, requirements, and institutional processes can change. Always confirm details with JAMB and your chosen institution's official admissions page. This planner does not guarantee admission.</p>
            </div>
        </div>

        {/* Context Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div>
                <Label htmlFor="pathway-select">Intended Pathway (Optional)</Label>
                <Select value={data.pathwayId || ""} onValueChange={(val) => updateData({ pathwayId: val })}>
                  <SelectTrigger id="pathway-select" className="mt-1.5 bg-background">
                    <SelectValue placeholder="Choose a course/pathway" />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSE_CATALOGUE.map(p => (
                      <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>
            <div>
                <Label htmlFor="utme-score">UTME Score (Optional)</Label>
                <Input 
                   id="utme-score"
                   type="number" 
                   className="mt-1.5 bg-background"
                   placeholder="e.g. 240" 
                   value={data.utmeScore || ""} 
                   onChange={(e) => updateData({ utmeScore: e.target.value ? parseInt(e.target.value, 10) : undefined })}
                />
            </div>
        </div>

        {/* Journey Stages Accordion */}
        <div className="space-y-4" aria-live="polite">
            <Accordion type="multiple" defaultValue={["stage-1"]} className="w-full">
                {JOURNEY_STAGES.map(stage => {
                    const stageCompleted = stage.tasks.filter(t => data.completedTaskIds.includes(t.id)).length;
                    const isFullyCompleted = stageCompleted === stage.tasks.length;
                    
                    return (
                        <AccordionItem value={stage.id} key={stage.id} className="border bg-card rounded-lg mb-4 px-2 shadow-sm overflow-hidden">
                            <AccordionTrigger className="hover:no-underline py-4 px-2">
                                <div className="flex items-center gap-3 text-left">
                                    <div className={`p-1.5 rounded-full flex-shrink-0 ${isFullyCompleted ? 'bg-green-100 text-green-700' : 'bg-primary/10 text-primary'}`}>
                                        {isFullyCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Map className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{stage.title}</h3>
                                        <p className="text-sm font-normal text-muted-foreground mt-0.5">
                                            {stageCompleted} of {stage.tasks.length} tasks completed
                                        </p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 px-2">
                                <div className="space-y-3 pl-2 sm:pl-10">
                                    {stage.tasks.map(task => {
                                        const isChecked = data.completedTaskIds.includes(task.id);
                                        return (
                                            <div key={task.id} className={`flex items-start space-x-3 p-3 rounded-md border ${isChecked ? 'bg-muted/30 border-muted' : 'bg-background border-border/60 hover:border-border'}`}>
                                                <Checkbox 
                                                    id={task.id} 
                                                    checked={isChecked}
                                                    onCheckedChange={(checked) => handleTaskToggle(task.id, !!checked)}
                                                    className="mt-1"
                                                />
                                                <div className="space-y-1">
                                                    <Label 
                                                        htmlFor={task.id} 
                                                        className={`text-base font-medium leading-none cursor-pointer ${isChecked ? 'text-muted-foreground line-through' : 'text-foreground'}`}
                                                    >
                                                        {task.title}
                                                    </Label>
                                                    <p className={`text-sm ${isChecked ? 'text-muted-foreground/70' : 'text-muted-foreground'}`}>
                                                        {task.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>

        <div className="pt-8 border-t flex justify-end">
            <Button variant="ghost" onClick={handleClear} className="text-destructive">
                <Trash2 className="w-4 h-4 mr-2" /> Reset journey progress
            </Button>
        </div>
      </main>
    </div>
  );
}
