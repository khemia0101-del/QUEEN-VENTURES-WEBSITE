import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { ArrowRight, Building2, Crown, GraduationCap, Heart, Home, Rocket, Sparkles, Target, Users } from "lucide-react";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
              <a href="#mission-forward" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Mission Forward</a>
              <a href="#grantflow" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Grantflow</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
              <Crown className="h-4 w-4" />
              <span className="text-sm font-semibold">Building Generational Wealth</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Empowering Communities Through Housing & Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Queen Ventures transforms lives through financial literacy education, homeownership pathways, and innovative community development programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
                <a href="#mission-forward" className="flex items-center gap-2">
                  Learn About Mission Forward
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8">
                <a href="#about">Our Mission</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-semibold">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Queen Ventures is a 501(c)(3) nonprofit community development association dedicated to empowering disenfranchised communities through financial literacy and homeownership opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Financial Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive education covering budgeting, credit repair, banking fundamentals, investment basics, and homeownership preparation tailored to underserved communities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Homeownership Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Converting renters into homeowners through condo conversion projects, credit improvement programs, and comprehensive support throughout the purchasing process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Community Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Engaging in activities that promote economic stability and generational wealth-building in underserved communities across the nation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Impact</h3>
                <p className="text-muted-foreground mb-6">
                  Established in May 2023, Queen Ventures operates nationally with a current focus on the Atlanta metropolitan area. We provide all services at no cost to participants, funded through grants, donations, and strategic partnerships.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Financial Literacy Workshops</div>
                      <div className="text-sm text-muted-foreground">Bi-weekly community sessions and one-on-one counseling</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Condo Conversion Projects</div>
                      <div className="text-sm text-muted-foreground">Converting at least 25% of renters into homeowners</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Credit Improvement Programs</div>
                      <div className="text-sm text-muted-foreground">3-6 month continuous support for participants</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Financial Literacy Programs</div>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">45%</div>
                  <div className="text-sm text-muted-foreground">Condo Conversion Projects</div>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10%</div>
                  <div className="text-sm text-muted-foreground">Community Outreach</div>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5%</div>
                  <div className="text-sm text-muted-foreground">Administrative</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Forward Section */}
      <section id="mission-forward" className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Target className="h-4 w-4" />
              <span className="text-sm font-semibold">Flagship Program</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Mission Forward Initiative
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A groundbreaking partnership between Queen Ventures and Cloud 100 that combines stable housing with cutting-edge technology training to create systematic pathways from crisis to prosperity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/images/mentorship.jpg" 
                alt="Veteran-Foster Youth Mentorship" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">The Dual-Powered Partnership</h3>
              <p className="text-muted-foreground mb-6">
                Mission Forward serves foster youth aging out of care and transitioning veterans through a comprehensive 180-day residential program. This innovative model pairs veterans and foster youth as roommates and mentors, creating mutual support systems that benefit both populations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Queen Ventures Provides</div>
                    <div className="text-sm text-muted-foreground">$6.455M real estate portfolio generating $189K annual income, stable housing across Hawaii and Georgia, seller-financing homeownership pathways, and financial sovereignty framework.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Cloud 100 Provides</div>
                    <div className="text-sm text-muted-foreground">Industry-recognized AI and cloud computing curriculum, comprehensive technology training, corporate partner network, entrepreneurship training with up to $25K seed funding, and mental health resources.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">180-Day Program Structure</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
                    Phase 1: Foundation (Days 1-90)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-sm">Immediate move-in to safe, affordable housing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-sm">Cloud computing fundamentals with AWS, Azure, Google Cloud</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-sm">AI tools and applications training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-sm">Personal credit building programs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-sm">Life skills and professional development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-sm">On-the-job training with real AI implementation projects</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">2</div>
                    Phase 2: Launch (Days 91-180)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-foreground mt-1">▸</span>
                    <span className="text-sm">Business formation and development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-foreground mt-1">▸</span>
                    <span className="text-sm">Advanced technical skills and specialization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-foreground mt-1">▸</span>
                    <span className="text-sm">Paid AI consulting projects ($8K-$12K earnings)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-foreground mt-1">▸</span>
                    <span className="text-sm">Job placement with partner employers ($60K-$100K+ salaries)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-foreground mt-1">▸</span>
                    <span className="text-sm">Homeownership preparation and qualification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-foreground mt-1">▸</span>
                    <span className="text-sm">Seed funding pitch opportunities (up to $25K)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/images/tech-training.jpg" 
                alt="Technology Training" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">Dual Career Pathways</h4>
                  <p className="text-white/90">Launch a seed-funded tech business OR secure a high-paying tech career — or pursue both simultaneously for maximum wealth building.</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/images/ai-classroom.jpg" 
                alt="AI Classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2 text-secondary-foreground">Earn While You Learn</h4>
                  <p className="text-secondary-foreground/90">Participants work on paid AI consulting projects during training, earning $8K-$12K while building real-world experience and professional references.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-semibold">Partnership Highlight</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Founded by Janiyah Walker</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Cloud 100's CEO is a former foster youth and U.S. Navy veteran who understands firsthand the barriers and opportunities facing both populations served by Mission Forward. She embodies the transformation possible when young people receive the right support, training, and opportunities.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="https://projectcloud100.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Visit Cloud 100
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Grantflow Section */}
      <section id="grantflow" className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-4">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-semibold">Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Grantflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The future of grant management is here. Fully automated grant identification and submission software designed to maximize funding opportunities for nonprofits.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img 
                src="/images/grantflow-preview.jpg" 
                alt="Grantflow Software Preview" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-4">
                    <Sparkles className="h-3 w-3" />
                    Powered by AI
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Revolutionizing Grant Management</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Grantflow uses advanced AI to automatically identify relevant grant opportunities, prepare applications, and submit them on your behalf — saving countless hours and maximizing your funding potential.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Smart Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AI-powered matching algorithm identifies the most relevant grant opportunities based on your organization's mission, programs, and eligibility criteria.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Automated Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate compelling grant applications automatically using your organization's data, past successes, and best practices from successful submissions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Seamless Submission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Submit applications directly through the platform with automated tracking, deadline reminders, and follow-up management.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Be the First to Know</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Grantflow is currently in development. Join our waitlist to be notified when we launch and receive exclusive early access benefits.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Join the Waitlist
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in partnering with Queen Ventures or learning more about our programs? We'd love to hear from you.
            </p>
            <div className="bg-background rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Queen Ventures</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>8 The Green<br />Dover, DE 19901</p>
                    <p>EIN: 33-2444800</p>
                    <p>501(c)(3) Public Charity</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Cloud 100</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Program Operator & Training Provider</p>
                    <p>
                      <a href="https://projectcloud100.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        projectcloud100.com
                      </a>
                    </p>
                    <p>Monday-Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={APP_LOGO} alt="Queen Ventures" className="h-10 w-10 brightness-0 invert" />
              <div>
                <div className="font-bold text-lg">Queen Ventures</div>
                <div className="text-sm text-background/70">Community Development Association</div>
              </div>
            </div>
            <div className="text-sm text-background/70">
              © 2023-2025 Queen Ventures. All rights reserved. | 501(c)(3) Nonprofit Organization
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
