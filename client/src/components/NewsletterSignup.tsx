import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success("You've been subscribed to our newsletter!");
      setEmail("");
      setName("");
    },
    onError: (error) => {
      if (error.message.includes("Duplicate")) {
        toast.error("This email is already subscribed!");
      } else {
        toast.error(error.message || "Failed to subscribe. Please try again.");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    subscribeMutation.mutate({
      email,
      name: name || undefined,
    });
  };

  return (
    <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Stay Updated
        </h3>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter for updates on Mission Forward, Grantflow, and our community impact.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button
            type="submit"
            disabled={subscribeMutation.isPending}
            className="sm:w-auto"
          >
            {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
}
