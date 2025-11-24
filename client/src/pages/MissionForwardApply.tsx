import { MissionForwardApplicationForm } from "@/components/MissionForwardApplicationForm";
import { APP_LOGO } from "@/const";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function MissionForwardApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <img src={APP_LOGO} alt="Queen Ventures" className="h-10 w-10" />
                <div>
                  <div className="font-bold text-lg text-foreground">Queen Ventures</div>
                  <div className="text-xs text-muted-foreground">Community Development Association</div>
                </div>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mission Forward Application
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards transforming your life through our comprehensive 180-day program.
          </p>
        </div>

        <MissionForwardApplicationForm />

        <div className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <p>
            By submitting this application, you acknowledge that you have read and understand the Mission Forward program requirements. 
            We review applications on a rolling basis and will contact you within 2-3 weeks.
          </p>
        </div>
      </div>
    </div>
  );
}
