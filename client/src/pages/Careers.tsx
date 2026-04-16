import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { ArrowRight, Briefcase, Users, Target, Zap, Mail, Menu, X, Heart } from "lucide-react";
import { Link } from "wouter";

export default function CareersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <img src={APP_LOGO} alt="Queen Ventures" className="h-10 w-10" />
                <div className="hidden sm:block">
                  <div className="font-bold text-lg text-foreground">Queen Ventures</div>
                  <div className="text-xs text-muted-foreground">Community Development Association</div>
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/">
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Home</span>
              </Link>
              <a href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
              <a href="/#mission-forward" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Mission Forward</a>
              <Link href="/careers">
                <span className="text-sm font-medium text-primary transition-colors cursor-pointer font-bold">Careers</span>
              </Link>
              <Link href="/donate">
                <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background">
              <div className="flex flex-col gap-4 p-4">
                <Link href="/">
                  <span className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Home</span>
                </Link>
                <a href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
                <a href="/#mission-forward" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Mission Forward</a>
                <span className="text-sm font-medium text-primary font-bold">Careers</span>
                <Link href="/donate">
                  <Button size="sm" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">Join Our Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Join Our Mission to Transform Lives
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're seeking a passionate, experienced nonprofit leader to serve as our Director of Programs — driving the growth of Mission Forward and expanding our impact across Georgia, Hawaii, and Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#open-positions" className="inline-flex items-center justify-center">
                  <Button className="gap-2">
                    View Open Positions
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="/#contact" className="inline-flex items-center justify-center">
                  <Button variant="outline">Learn More About Us</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Queen Ventures Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Join Queen Ventures?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-2">
                  <CardHeader>
                    <Target className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Real Community Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Your work directly transforms lives. Every program you build, every partnership you forge, and every participant you serve creates a ripple effect of economic opportunity for foster youth and veterans.
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <Zap className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle>AI-Powered Programs</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Lead a first-of-its-kind AI reskilling program that equips participants with skills in AI agent implementation, workflow automation, and cloud fundamentals — positioning them for the jobs of tomorrow.
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <Briefcase className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Competitive Compensation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    We offer a salary and housing stipend package that is above the industry median for this role, reflecting our commitment to attracting mission-aligned talent who deserve to be compensated fairly.
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <Users className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle>Executive-Level Autonomy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Report directly to the Founder and serve as the operational face of Queen Ventures. You'll have the authority to build teams, forge partnerships, and shape the direction of our programs.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Platform Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Platform</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Georgia</CardTitle>
                  <CardDescription>Operational Hub</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Organizational base and strategic partnerships</p>
                  <p>Capital and development pipeline management</p>
                  <p>Scaling operations across the Southeast</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Hawaii</CardTitle>
                  <CardDescription>Active Program Site</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Oceanfront multi-unit property generating revenue</p>
                  <p>Mission Forward Initiative with AI training</p>
                  <p>Capital optimization and refinancing opportunities</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Texas</CardTitle>
                  <CardDescription>Expansion Market</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>$21M acquisition of 54 condominium units</p>
                  <p>Scalable model for national expansion</p>
                  <p>Significant capital structuring opportunity</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Open Positions</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">Director of Programs</CardTitle>
                      <CardDescription className="text-base">Full-Time | Multi-Market | Reports to Founder/Executive Director</CardDescription>
                    </div>
                    <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Opportunity</h4>
                    <p className="text-muted-foreground">
                      Queen Ventures Community Development Association is seeking a dynamic and experienced Director of Programs to lead the design, implementation, and growth of our Mission Forward Initiative across Georgia, Hawaii, and Texas. Reporting directly to the Founder and Executive Director, you will serve as the operational and programmatic leader of the organization — overseeing all program delivery, staff and volunteer management, community partnerships, and strategic expansion. This is a senior leadership role for a mission-driven professional who believes deeply in the potential of foster youth and veterans and is committed to building sustainable pathways to economic opportunity and housing stability.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Core Responsibilities</h4>
                    <div className="space-y-5 text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground mb-1">Program Leadership & Strategy</p>
                        <ul className="space-y-2">
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Design, implement, and continuously improve all Mission Forward program components — including housing intake, AI reskilling curriculum, financial literacy training, and employment placement services</span></li>
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Develop measurable program outcomes and key performance indicators; prepare quarterly impact reports for the board and stakeholders</span></li>
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Lead strategic planning for program expansion into new markets and participant cohorts</span></li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Team & Operations Management</p>
                        <ul className="space-y-2">
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Recruit, hire, train, and supervise program staff, case managers, instructors, and volunteers across all three markets</span></li>
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Conduct regular performance evaluations, professional development planning, and team-building initiatives to maintain a high-performing, mission-aligned culture</span></li>
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Manage day-to-day operations across Georgia, Hawaii, and Texas — ensuring program quality, compliance, and participant satisfaction at each site</span></li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Partnership & Community Engagement</p>
                        <ul className="space-y-2">
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Build and maintain strategic partnerships with employers, workforce development agencies, housing authorities, veterans' services organizations, and foster care systems</span></li>
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Negotiate and execute MOUs, referral agreements, and employer partnership contracts to create job placement pipelines for program graduates</span></li>
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Represent Queen Ventures at community events, coalitions, conferences, and stakeholder meetings as the organizational face of our programs</span></li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Organizational Development</p>
                        <ul className="space-y-2">
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Collaborate with the Founder/ED on organizational strategy, mission evolution, and long-term growth planning</span></li>
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Develop and maintain program policies, procedures, and participant handbooks to ensure consistent, high-quality service delivery</span></li>
                          <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span>Support grant reporting and compliance by providing accurate program data, participant outcomes, and narrative documentation to the Founder/ED</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Education Requirements</h4>
                    <div className="space-y-2 text-muted-foreground mb-5">
                      <p><span className="font-medium text-foreground">Required:</span> Bachelor's degree in Social Work, Public Administration, Nonprofit Management, Human Services, Education, or a closely related field.</p>
                      <p><span className="font-medium text-foreground">Preferred:</span> Master's degree (MSW, MPA, MBA, or equivalent) in a relevant discipline. Candidates with 7+ years of progressive nonprofit leadership experience may be considered in lieu of an advanced degree.</p>
                    </div>

                    <h4 className="font-semibold text-foreground mb-3">Preferred Experience</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>5–7 years of progressive leadership in nonprofit program management, community development, or social services, with at least 2 years in a director-level or equivalent role</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Demonstrated experience designing, launching, and scaling programs serving vulnerable populations — particularly foster youth, veterans, or justice-involved individuals</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Proven track record building institutional partnerships with employers, government agencies, workforce development boards, and community-based organizations</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Experience supervising and developing multi-site teams, including staff, volunteers, and contractors across geographically dispersed locations</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Background in affordable housing, workforce development, financial literacy, or technology training programs strongly preferred</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Familiarity with program evaluation frameworks, outcome measurement, and data-driven decision-making</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Strong written and verbal communication skills; ability to represent the organization to diverse audiences including community members, government officials, and corporate partners</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Compensation & Benefits</h4>
                    <p className="text-muted-foreground mb-3">This position offers an above-market compensation package for the nonprofit sector, reflecting the seniority and scope of the role:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Base Salary:</strong> $52,000/year ($1,000/week) — above the FLSA exempt threshold; classified as salaried exempt executive</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Housing Stipend:</strong> $3,000/month ($36,000/year) — provided to support program site residency requirements</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Total Annual Package:</strong> ~$88,000 — above the national median for Director of Programs at nonprofits in the $2M–$10M budget range</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Benefits:</strong> Health insurance, 20 days PTO, 10 paid holidays, professional development budget, and 401(k) eligibility after 90 days</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Performance Bonuses:</strong> Tied to program enrollment growth, participant employment outcomes, and organizational expansion milestones</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Location:</strong> Multi-site role with primary residency at a Queen Ventures program site; travel between Georgia, Hawaii, and Texas required</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Most Important Qualification</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Genuine passion for serving foster youth and veterans. You believe in their potential, understand the barriers they face, and are committed to building pathways to economic opportunity and stability. Professional experience matters, but your heart for this community is what drives success at Queen Ventures.
                    </p>
                  </div>

                  <div className="pt-4">
                    <a href="mailto:info@queenventures.org?subject=Director%20of%20Programs%20–%20Application">
                      <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                        <Mail className="h-4 w-4" />
                        Apply Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12 p-8 bg-muted/50 rounded-lg text-center">
                <h3 className="font-semibold text-foreground mb-2">Don't See Your Role?</h3>
                <p className="text-muted-foreground mb-4">
                  We're always looking for talented individuals passionate about affordable housing and community development. Reach out to explore other opportunities.
                </p>
                <a href="mailto:info@queenventures.org?subject=Career%20Inquiry">
                  <Button variant="outline">Get in Touch</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who We're Looking For Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Who We're Looking For</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">A Heart for the Community</h3>
                <p className="text-muted-foreground">
                  Above all else, you believe in the dignity and potential of foster youth and veterans. You understand the systemic barriers they face, and you're motivated by the opportunity to dismantle them — not just professionally, but personally.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">An Experienced Program Builder</h3>
                <p className="text-muted-foreground">
                  You've built and scaled programs before. You know how to turn a vision into a curriculum, a curriculum into a cohort, and a cohort into a community of thriving graduates. You measure success in lives changed, not just outputs reported.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">A Relationship Builder</h3>
                <p className="text-muted-foreground">
                  You build trust with everyone — from program participants to corporate partners to government officials. You know that sustainable impact is built on relationships, and you invest in them with intention and consistency.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">A Collaborative Leader</h3>
                <p className="text-muted-foreground">
                  You lead with empathy and clarity. You can manage a team across multiple time zones and sites, hold people accountable with respect, and create an environment where staff and volunteers feel valued and motivated to do their best work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Make an Impact?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you're passionate about serving foster youth and veterans, experienced in nonprofit program leadership, and ready to make a measurable difference — we want to hear from you. Send your resume and a brief cover letter explaining why this mission resonates with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@queenventures.org?subject=Director%20of%20Programs%20–%20Application">
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <Mail className="h-4 w-4" />
                    Apply for Director of Programs
                  </Button>
                </a>
                <a href="mailto:info@queenventures.org?subject=Career%20Inquiry">
                  <Button variant="outline">Ask About Other Opportunities</Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                <strong>Email:</strong> info@queenventures.org | <strong>Subject:</strong> Director of Programs – Application
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted/30 border-t border-border py-12">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Queen Ventures</h4>
                <p className="text-sm text-muted-foreground">
                  Building generational wealth through affordable housing and technology training.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/"><span className="text-muted-foreground hover:text-foreground cursor-pointer">Home</span></Link></li>
                  <li><Link href="/newsletter"><span className="text-muted-foreground hover:text-foreground cursor-pointer">Newsletter</span></Link></li>
                  <li><a href="mailto:info@queenventures.org" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:info@queenventures.org" className="hover:text-foreground">info@queenventures.org</a>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  EIN: 33-2444800<br />
                  501(c)(3) Public Charity
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>© 2026 Queen Ventures. All rights reserved. | Equal Opportunity Employer</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
