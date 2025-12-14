import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { APP_LOGO } from "@/const";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Calendar, Mail } from "lucide-react";
import { Link } from "wouter";

export default function NewsletterArchivePage() {
  const { data: newsletters = [], isLoading } = trpc.newsletterEdition.getPublished.useQuery();

  const sortedNewsletters = [...newsletters].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <SEO
        title="Newsletter Archive - Queen Ventures"
        description="Read our latest newsletters about AI automation, cloud computing, cybersecurity, and technology career development. Stay informed about Mission Forward program insights and industry trends."
        keywords="AI automation newsletter, cloud computing insights, cybersecurity updates, tech career development, Mission Forward news, nonprofit technology training"
      />

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
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Newsletter Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of newsletters covering AI automation, cloud computing, cybersecurity, and career development in technology.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading newsletters...</p>
          </div>
        ) : sortedNewsletters.length === 0 ? (
          <div className="text-center py-12">
            <Mail className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-20" />
            <p className="text-muted-foreground">No newsletters published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {sortedNewsletters.map((newsletter) => (
              <Card key={newsletter.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        <Link href={`/newsletter/${newsletter.id}`}>
                          <span className="hover:text-primary cursor-pointer transition-colors">
                            {newsletter.title}
                          </span>
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(newsletter.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {newsletter.content.substring(0, 200)}...
                  </p>
                  <Link href={`/newsletter/${newsletter.id}`}>
                    <Button variant="outline">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
