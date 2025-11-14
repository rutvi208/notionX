import type { Metadata } from "next";
import { siteConfig } from '@/app/config/site';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
    template: "%s | NotionX",
  },
  description:
    "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
  keywords: [
    "AI SEO",
    "Generative Engine Optimization",
    "AI Marketing",
    "SEO for AI Search",
    "NotionX",
  ],
  openGraph: {
    title: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
    description:"NotionX helps brands get discovered in AI search results.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.paths.images}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "NotionX AI SEO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotionX – AI SEO for Brands",
    description:"Discover how NotionX helps brands rank in AI-powered search engines.",
    images: [`${siteConfig.url}${siteConfig.paths.images}/og-image.jpg`],
    creator: "@notionxai",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/images/favicon.ico",
  },
  metadataBase: new URL("https://dev-notionx-v2.netlify.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    sameAs: Object.values(siteConfig.social),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <script defer src="https://www.googletagmanager.com/gtag/js?id=G-KK4TC3HGNP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KK4TC3HGNP', { send_page_view: false });
            `,
          }}
        />

        {/* ✅ JSON-LD Schema for entire site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
