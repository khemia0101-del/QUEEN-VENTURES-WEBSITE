import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { APP_LOGO } from "@/const";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Calendar, Mail } from "lucide-react";
import { Link, useParams } from "wouter";
import { Streamdown } from "streamdown";

export default function NewsletterDetailPage() {
  const params = useParams();
  const newsletterId = parseInt(params.id || "0");

  const { data: newsletter, isLoading, error } = trpc.newsletterEdition.getById.useQuery(
    { id: newsletterId },
    { enabled: newsletterId > 0 }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading newsletter...</p>
      </div>
    );
  }

  if (error || !newsletter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Newsletter Not Found</h1>
          <Link href="/newsletter">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Archive
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <SEO
        title={`${newsletter.title} - Queen Ventures Newsletter`}
        description={newsletter.content.substring(0, 160)}
        canonical={`${window.location.origin}/newsletter/${newsletter.id}`}
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
            <Link href="/newsletter">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                Back to Archive
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-12 md:py-20">
        <article className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8 pb-8 border-b">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {newsletter.title}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={newsletter.createdAt.toString()}>
                    {new Date(newsletter.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <Streamdown>{newsletter.content}</Streamdown>
              </div>

              {/* Footer CTA */}
              <div className="mt-12 pt-8 border-t">
                <div className="bg-primary/5 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Want to receive our newsletters?</h3>
                  <p className="text-muted-foreground mb-4">
                    Subscribe to stay updated on AI automation, cloud computing, and career development insights.
                  </p>
                  <Link href="/#newsletter">
                    <Button>
                      Subscribe Now
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex justify-center">
            <Link href="/newsletter">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                View All Newsletters
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
