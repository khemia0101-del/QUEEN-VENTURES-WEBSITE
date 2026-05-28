import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";

export default function Rentals() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
                <ArrowLeft className="h-5 w-5" />
                <span className="text-xl font-bold">Back to Queen Ventures</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Housing Application
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Interested in housing through Queen Ventures? We'd love to hear from you.
          </p>
          <p className="text-muted-foreground mb-8">
            Please contact us directly to begin your housing application process. Our team will guide you through every step.
          </p>
          <a href="mailto:info@queenventures.org?subject=Housing%20Application%20Inquiry">
            <Button size="lg" className="bg-primary text-primary-foreground">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us to Apply
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
