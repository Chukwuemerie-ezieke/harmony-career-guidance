import { GraduationCap } from "lucide-react";

export default function SchoolHeader() {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="min-w-0">
          <h1 className="text-base font-bold leading-tight truncate" data-testid="text-school-name">
            PathVerge
          </h1>
          <p className="text-xs opacity-90 font-medium hidden sm:block">
            by Harmony Digital Consults Ltd
          </p>
        </div>
      </div>
    </header>
  );
}
