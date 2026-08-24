import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, Download, WifiOff } from "lucide-react";
import { Button } from "./ui/button";

export function PWAStatus() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      toast({
        title: "Back online",
        description: "You are now connected to the internet.",
      });
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Handle PWA installation prompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault(); // Prevent default automatic prompt
      setDeferredPrompt(e);
      
      // Check if user previously dismissed the prompt
      const hasDismissed = localStorage.getItem("pathverge_pwa_dismissed");
      if (!hasDismissed) {
        setShowInstallPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, [toast]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismissInstall = () => {
    localStorage.setItem("pathverge_pwa_dismissed", "true");
    setShowInstallPrompt(false);
  };

  return (
    <>
      <div aria-live="polite" className="sr-only">
        {isOffline ? "You are currently offline." : "You are currently online."}
      </div>

      {/* Offline Indicator */}
      {isOffline && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 flex items-start sm:items-center gap-3">
          <WifiOff className="w-4 h-4 text-amber-600 mt-0.5 sm:mt-0 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-400 leading-snug">
            You are offline. You are viewing information saved on this device. Connect before relying on current admission deadlines or programme availability.
          </p>
        </div>
      )}

      {/* Install Prompt */}
      {showInstallPrompt && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-card border shadow-lg rounded-lg p-4 z-50 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-md text-primary shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Install PathVerge</h4>
              <p className="text-xs text-muted-foreground mt-1">Install the app on your device for quick access and offline reliability.</p>
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-1">
            <Button variant="ghost" size="sm" onClick={handleDismissInstall} className="text-xs">
              Not now
            </Button>
            <Button size="sm" onClick={handleInstallClick} className="text-xs">
              Install
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
