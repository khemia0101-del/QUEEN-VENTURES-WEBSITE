import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { APP_LOGO } from "@/const";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

const PRESET_AMOUNTS = [25, 50, 100, 250, 500, 1000];

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"one_time" | "recurring">("one_time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const createCheckoutMutation = trpc.donation.createCheckoutSession.useMutation({
    onSuccess: (data) => {
      if (data.checkoutUrl) {
        toast.info("Redirecting to secure checkout...");
        window.open(data.checkoutUrl, "_blank");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create checkout session");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = customAmount ? parseFloat(customAmount) * 100 : selectedAmount;

    if (!amount || amount < 50) {
      toast.error("Minimum donation is $0.50");
      return;
    }

    if (!donorEmail) {
      toast.error("Please enter your email address");
      return;
    }

    createCheckoutMutation.mutate({
      amount: Math.round(amount),
      donorName: donorName || undefined,
      donorEmail,
      donationType,
    });
  };

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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Support Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your donation helps us provide stable housing and technology training to foster youth and veterans through the Mission Forward program.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Make a Donation</CardTitle>
            <CardDescription>
              Choose your donation amount and frequency. All donations are tax-deductible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Donation Type */}
              <div className="space-y-3">
                <Label>Donation Frequency</Label>
                <RadioGroup value={donationType} onValueChange={(value: "one_time" | "recurring") => setDonationType(value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one_time" id="one_time" />
                    <Label htmlFor="one_time" className="font-normal cursor-pointer">One-time donation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recurring" id="recurring" />
                    <Label htmlFor="recurring" className="font-normal cursor-pointer">Monthly recurring donation</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Preset Amounts */}
              <div className="space-y-3">
                <Label>Select Amount</Label>
                <div className="grid grid-cols-3 gap-3">
                  {PRESET_AMOUNTS.map((amount) => (
                    <Button
                      key={amount}
                      type="button"
                      variant={selectedAmount === amount * 100 && !customAmount ? "default" : "outline"}
                      onClick={() => {
                        setSelectedAmount(amount * 100);
                        setCustomAmount("");
                      }}
                      className="h-14"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="space-y-2">
                <Label htmlFor="customAmount">Or Enter Custom Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="customAmount"
                    type="number"
                    step="0.01"
                    min="0.50"
                    placeholder="0.00"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-7"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="donorName">Name (Optional)</Label>
                  <Input
                    id="donorName"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donorEmail">Email *</Label>
                  <Input
                    id="donorEmail"
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    We'll send your donation receipt to this email address.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={createCheckoutMutation.isPending}
                >
                  {createCheckoutMutation.isPending ? "Processing..." : `Donate ${customAmount ? `$${customAmount}` : selectedAmount ? `$${selectedAmount / 100}` : ""}`}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Your donation is secure and encrypted. Queen Ventures is a 501(c)(3) nonprofit organization (EIN: 33-2444800).
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">$50</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Provides technology training materials for one participant</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">$250</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Covers one week of housing support for a Mission Forward participant</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">$1,000</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Supports a full month of the comprehensive 180-day program</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
