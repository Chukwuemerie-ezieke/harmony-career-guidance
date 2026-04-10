import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export function StepIndicator({ currentStep, totalSteps, labels }: StepIndicatorProps) {
  return (
    <div className="w-full" data-testid="step-indicator">
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;
          return (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isCurrent
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                      : "bg-muted text-muted-foreground"
                  }`}
                  data-testid={`step-circle-${step}`}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : step}
                </div>
                <span className={`text-xs mt-1 text-center hidden sm:block ${
                  isCurrent ? "text-primary font-semibold" : "text-muted-foreground"
                }`}>
                  {labels[i]}
                </span>
              </div>
              {step < totalSteps && (
                <div className={`flex-1 h-0.5 mx-2 rounded ${
                  isCompleted ? "bg-primary" : "bg-muted"
                }`} />
              )}
            </div>
          );
        })}
      </div>
      <p className="text-sm text-center text-muted-foreground sm:hidden font-medium">
        Step {currentStep} of {totalSteps}: {labels[currentStep - 1]}
      </p>
    </div>
  );
}
