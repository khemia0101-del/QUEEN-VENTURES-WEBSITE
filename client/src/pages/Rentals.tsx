export default function Rentals() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold">← Back to Queen Ventures</span>
            </a>
          </div>
        </div>
      </header>

      {/* Embedded Form */}
      <div className="container py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Housing Application
            </h1>
            <p className="text-muted-foreground">
              Complete the application below to apply for housing through Queen Ventures
            </p>
          </div>
          
          {/* Iframe embedding the Queen Rentals form */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://queenrentals-jztml8uj.manus.space"
              className="w-full"
              style={{ height: '100vh', border: 'none' }}
              title="Queen Rentals Application Form"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
