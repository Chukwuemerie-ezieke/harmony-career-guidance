import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, Compass } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-sm text-gray-600 mb-6">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
             <Link href="/">
                <Button variant="default" className="gap-2 w-full">
                   <Home className="w-4 h-4" /> Go to Home
                </Button>
             </Link>
             <Link href="/explore">
                <Button variant="outline" className="gap-2 w-full">
                   <Compass className="w-4 h-4" /> Explore Courses
                </Button>
             </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
