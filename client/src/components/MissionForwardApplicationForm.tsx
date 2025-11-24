import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

export function MissionForwardApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applicantType: "" as "foster_youth" | "veteran" | "",
    age: "",
    location: "",
    housingPreference: "" as "georgia" | "hawaii" | "either" | "",
    techExperience: "",
    careerGoals: "",
    additionalInfo: "",
  });

  const submitMutation = trpc.missionForward.submit.useMutation({
    onSuccess: () => {
      toast.success("Application submitted successfully! We'll be in touch soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        applicantType: "",
        age: "",
        location: "",
        housingPreference: "",
        techExperience: "",
        careerGoals: "",
        additionalInfo: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit application. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.applicantType) {
      toast.error("Please select your applicant type");
      return;
    }

    submitMutation.mutate({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      applicantType: formData.applicantType,
      age: formData.age ? parseInt(formData.age) : undefined,
      location: formData.location || undefined,
      housingPreference: formData.housingPreference || undefined,
      techExperience: formData.techExperience || undefined,
      careerGoals: formData.careerGoals || undefined,
      additionalInfo: formData.additionalInfo || undefined,
    });
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">Apply to Mission Forward</CardTitle>
        <CardDescription>
          Join our 180-day program combining stable housing with cutting-edge technology training.
          All fields marked with * are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicantType">I am a *</Label>
              <Select
                value={formData.applicantType}
                onValueChange={(value: "foster_youth" | "veteran") => 
                  setFormData({ ...formData, applicantType: value })
                }
                required
              >
                <SelectTrigger id="applicantType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="foster_youth">Foster Youth</SelectItem>
                  <SelectItem value="veteran">Veteran</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Current Location</Label>
              <Input
                id="location"
                placeholder="City, State"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="housingPreference">Housing Preference</Label>
            <Select
              value={formData.housingPreference}
              onValueChange={(value: "georgia" | "hawaii" | "either") => 
                setFormData({ ...formData, housingPreference: value })
              }
            >
              <SelectTrigger id="housingPreference">
                <SelectValue placeholder="Select preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="georgia">Georgia (Metro Atlanta)</SelectItem>
                <SelectItem value="hawaii">Hawaii (Honolulu County)</SelectItem>
                <SelectItem value="either">Either Location</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="techExperience">Technology Experience</Label>
            <Textarea
              id="techExperience"
              placeholder="Tell us about your experience with technology, computers, or any technical skills you have..."
              value={formData.techExperience}
              onChange={(e) => setFormData({ ...formData, techExperience: e.target.value })}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="careerGoals">Career Goals</Label>
            <Textarea
              id="careerGoals"
              placeholder="What are your career goals? What would you like to achieve through this program?"
              value={formData.careerGoals}
              onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Is there anything else you'd like us to know about your situation or why you're interested in Mission Forward?"
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
