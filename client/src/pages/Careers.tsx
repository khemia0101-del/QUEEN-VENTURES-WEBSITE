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
                Build Generational Wealth with Queen Ventures
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're seeking experienced capital partners and operators to help scale our affordable housing and workforce development platform across multiple markets.
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
                    <CardTitle>Mission-Driven Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Work on a platform that transforms lives by combining stable housing, technology training, and pathways to financial sovereignty for veterans and foster youth. Your work directly creates opportunity.
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <Zap className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle>AI-First Operations</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Leverage cutting-edge AI systems to automate grant writing, pipeline tracking, and outreach. Work smarter, not harder, and focus on high-value deal execution.
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <Briefcase className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Deal-Level Upside</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Earn performance fees, milestone bonuses, deferred compensation, and profit participation. This isn't a traditional nonprofit role—it's a capital partnership with real financial upside.
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <Users className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle>Autonomous Leadership</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    High autonomy, high accountability. Lead capital strategy across multiple markets with the flexibility to operate independently and the support to scale.
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
                      <CardTitle className="text-2xl mb-2">Director of Development & Capital Partnerships</CardTitle>
                      <CardDescription className="text-base">Capital Partner / Deal Operator Role</CardDescription>
                    </div>
                    <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Opportunity</h4>
                    <p className="text-muted-foreground">
                      Lead the structuring and execution of a multi-market capital strategy across our affordable housing and workforce development platform. Structure blended capital combining CDFI debt, bank financing (CRA, AHP), government grants, and impact/Opportunity Zone equity. This is a high-autonomy, deal-focused role with significant upside participation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Core Responsibilities</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Design and execute blended capital strategy across Georgia, Hawaii, and Texas</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Lead relationships with CDFIs, banks, government agencies, and impact investors</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Negotiate and close financing (debt, grants, equity)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Build and manage a pipeline of funding opportunities ($5M–$50M+)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Integrate multi-market operations into unified capital strategy</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Required Experience</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Proven track record raising $5M–$50M+ in capital</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Deep expertise in affordable housing, community development, or structured finance</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Strong familiarity with CDFIs, HUD/HOME/CDBG programs, and blended capital structures</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Established network of funders, lenders, and institutional partners</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Ability to close capital—not just source it</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Compensation</h4>
                    <p className="text-muted-foreground mb-3">Performance-based with significant upside:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>Success Fee: 1%–3% of all capital raised</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>Milestone Bonuses: Paid at key funding thresholds</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>Deferred Compensation: Accrued base ($100K+ equivalent) paid upon funding/refinance</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>Profit Participation: 5%–10% of project-level upside</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">AI-First Platform</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Queen Ventures operates with AI-driven systems for grant writing, pipeline tracking, and outreach. You don't need to be an AI expert, but you should be comfortable learning quickly, working alongside automation, and directing AI outputs to increase efficiency and scale.
                    </p>
                  </div>

                  <div className="pt-4">
                    <a href="mailto:info@queenventures.org?subject=Capital%20Partner%20–%20Application">
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
                <h3 className="text-xl font-semibold text-foreground">Capital Raisers & Deal Operators</h3>
                <p className="text-muted-foreground">
                  You have a proven track record closing capital deals. You're not an administrator—you're a strategist who understands blended finance, CDFI landscapes, and government funding programs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Mission-Driven Professionals</h3>
                <p className="text-muted-foreground">
                  You care about affordable housing and economic opportunity. You want your work to create real impact for veterans and foster youth while building sustainable, scalable solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Autonomous Leaders</h3>
                <p className="text-muted-foreground">
                  You thrive with high autonomy and high accountability. You can work independently, manage complex relationships, and execute on your own initiative without constant oversight.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Tech-Forward Innovators</h3>
                <p className="text-muted-foreground">
                  You're open to leveraging AI and automation to increase efficiency and scale. You learn quickly, adapt to new tools, and focus on directing outcomes rather than doing everything manually.
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
                Join our team and help build the future of affordable housing and workforce development. We're moving fast and looking for experienced partners who can execute at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@queenventures.org?subject=Capital%20Partner%20–%20Application">
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <Mail className="h-4 w-4" />
                    Apply for Capital Partner Role
                  </Button>
                </a>
                <a href="mailto:info@queenventures.org?subject=Career%20Inquiry">
                  <Button variant="outline">Ask About Other Opportunities</Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                <strong>Email:</strong> info@queenventures.org | <strong>Subject:</strong> Capital Partner – Application
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
