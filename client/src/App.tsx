import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Results from "@/pages/results";
import Eligibility from "@/pages/eligibility";
import JourneyPlanner from "@/pages/journey";
import Alternatives from "@/pages/alternatives";
import Explore from "@/pages/explore";
import Dashboard from "@/pages/dashboard";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/results/:id" component={Results} />
      <Route path="/eligibility" component={Eligibility} />
      <Route path="/journey" component={JourneyPlanner} />
      <Route path="/alternatives" component={Alternatives} />
      <Route path="/explore" component={Explore} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router hook={useHashLocation}>
          <AppRouter />
        </Router>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
