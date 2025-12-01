import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function DonateSuccessPage() {
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-20">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Thank You for Your Donation!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xl text-muted-foreground">
              Your generous contribution helps us empower foster youth and veterans through stable housing and technology training.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                A receipt has been sent to your email address. Your donation is tax-deductible.
              </p>
              <p className="text-sm font-medium">
                Queen Ventures is a 501(c)(3) nonprofit organization
                <br />
                EIN: 33-2444800
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto">
                  Return to Home
                </Button>
              </Link>
              <div className="text-sm text-muted-foreground">
                <p>Questions about your donation?</p>
                <a href="mailto:info@queenventures.org" className="text-primary hover:underline">
                  Contact us at info@queenventures.org
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
