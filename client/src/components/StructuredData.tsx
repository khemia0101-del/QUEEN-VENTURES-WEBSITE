import { useEffect } from "react";

export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "NGO",
      "name": "Queen Ventures",
      "alternateName": "Queen Ventures Community Development Association",
      "url": window.location.origin,
      "logo": window.location.origin + "/images/logo.png",
      "description": "501(c)(3) nonprofit community development association providing stable housing and technology training to foster youth and veterans through the Mission Forward program.",
      "taxID": "33-2444800",
      "nonprofitStatus": "Nonprofit501c3",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8 The Green",
        "addressLocality": "Dover",
        "addressRegion": "DE",
        "postalCode": "19901",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@queenventures.org",
        "contactType": "General Inquiries"
      },
      "sameAs": [
        // Add social media URLs when available
      ],
      "founder": {
        "@type": "Person",
        "name": "Jaaniyah Walker"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "knowsAbout": [
        "Community Development",
        "Foster Youth Support",
        "Veterans Services",
        "Technology Training",
        "Cloud Computing Education",
        "AI and Machine Learning Training",
        "Cybersecurity Training",
        "Housing Support",
        "Career Development"
      ]
    };

    // Remove existing script if present
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
