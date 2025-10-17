import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card rounded-lg p-12 max-w-md text-center">
        <AlertCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-serif text-4xl font-bold text-foreground mb-4" data-testid="text-404-title">
          404
        </h1>
        <p className="text-muted-foreground mb-8" data-testid="text-404-subtitle">
          The page you're looking for doesn't exist
        </p>
        <Link href="/">
          <a>
            <Button data-testid="button-back-home">Back to Home</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
