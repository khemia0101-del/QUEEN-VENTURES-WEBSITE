import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

export function GrantflowWaitlistForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    organizationType: "",
    numberOfStaff: "",
    currentGrantProcess: "",
    interests: "",
  });

  const joinWaitlistMutation = trpc.grantflow.joinWaitlist.useMutation({
    onSuccess: () => {
      toast.success("You've been added to the Grantflow waitlist! We'll notify you when we launch.");
      setFormData({
        organizationName: "",
        contactName: "",
        email: "",
        phone: "",
        organizationType: "",
        numberOfStaff: "",
        currentGrantProcess: "",
        interests: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to join waitlist. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    joinWaitlistMutation.mutate({
      organizationName: formData.organizationName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone || undefined,
      organizationType: formData.organizationType || undefined,
      numberOfStaff: formData.numberOfStaff ? parseInt(formData.numberOfStaff) : undefined,
      currentGrantProcess: formData.currentGrantProcess || undefined,
      interests: formData.interests || undefined,
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">Join the Grantflow Waitlist</CardTitle>
        <CardDescription>
          Be the first to know when Grantflow launches and receive exclusive early access benefits.
          All fields marked with * are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="organizationName">Organization Name *</Label>
              <Input
                id="organizationName"
                value={formData.organizationName}
                onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Name *</Label>
              <Input
                id="contactName"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizationType">Organization Type</Label>
              <Input
                id="organizationType"
                placeholder="e.g., 501(c)(3), Foundation, etc."
                value={formData.organizationType}
                onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numberOfStaff">Number of Staff</Label>
              <Input
                id="numberOfStaff"
                type="number"
                value={formData.numberOfStaff}
                onChange={(e) => setFormData({ ...formData, numberOfStaff: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentGrantProcess">Current Grant Process</Label>
            <Textarea
              id="currentGrantProcess"
              placeholder="Tell us about your current grant application process and any challenges you face..."
              value={formData.currentGrantProcess}
              onChange={(e) => setFormData({ ...formData, currentGrantProcess: e.target.value })}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">What interests you most about Grantflow?</Label>
            <Textarea
              id="interests"
              placeholder="What features or capabilities are you most excited about?"
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={joinWaitlistMutation.isPending}
          >
            {joinWaitlistMutation.isPending ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
