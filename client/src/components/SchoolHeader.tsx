import { Compass } from "lucide-react";

export function SchoolHeader() {
  return (
    <header className="bg-primary text-primary-foreground" data-testid="school-header">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <h1 className="text-base font-bold leading-tight truncate" data-testid="text-school-name">
              Career Guidance Platform
            </h1>
            <p className="text-xs opacity-90 font-medium hidden sm:block">
              by Harmony Digital Consults Ltd
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
