import { Compass, Menu, BookOpen, Map, WifiOff } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useLowDataMode } from "@/hooks/use-low-data";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SchoolHeader() {
  const { isLowData, setIsLowData } = useLowDataMode();
  const [location] = useLocation();

  const handleStartAssessment = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (location === "/") {
      e.preventDefault();
      const firstInput = document.querySelector('input, select') as HTMLElement;
      if (firstInput) {
        firstInput.focus();
        firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const NavLinks = () => (
    <>
      <Link href="/">
        <a className="text-sm font-medium hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1 transition-colors">
          Home
        </a>
      </Link>
      <Link href="/explore">
        <a className="text-sm font-medium hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1 transition-colors">
          Explore Courses
        </a>
      </Link>
    </>
  );

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40 w-full" data-testid="school-header">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl font-bold leading-tight truncate text-foreground" data-testid="text-school-name">
                    PathVerge
                  </h1>
                  <p className="text-xs text-muted-foreground font-medium hidden sm:block">
                    Career clarity for every student.
                  </p>
                </div>
              </a>
            </Link>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                  <VisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </VisuallyHidden>
                  <nav className="flex flex-col gap-6 mt-8">
                    <div className="flex flex-col gap-3">
                      <NavLinks />
                    </div>
                    <Link href="/">
                      <Button onClick={handleStartAssessment} className="w-full">
                        Start Assessment
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
            <Link href="/">
              <Button onClick={handleStartAssessment} className="ml-2">
                Start Assessment
              </Button>
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}
