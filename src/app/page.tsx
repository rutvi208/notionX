import HeroSection from '@/app/components/HeroSection';
import Whyus from "@/app/components/Whyus";
import Howitworks from '@/app/components/Howitworks';
import Plans from '@/app/components/Plans';
import Process from '@/app/components/Process';
import GeoSeo from '@/app/components/GeoSeo';
import CaseStudy from '@/app/components/CaseStudy';
import Cta from '@/app/components/CTA';
import Faq from '@/app/components/FAQ';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import ScrollButton from '@/app/components/ScrollButton';
import type { Metadata } from "next";
import { siteConfig } from '@/app/config/site';
// import Button from '@/app/components/Button';


export const metadata: Metadata = {
  title: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
  description:
    "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
  openGraph: {
    url: siteConfig.url,
    title: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
    images: [`${siteConfig.url}${siteConfig.paths.images}/og-home.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: `AI SEO & Generative Engine Optimization for Brands - ${siteConfig.name}`,
    description: "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
    images: [`${siteConfig.url}${siteConfig.paths.images}/og-home.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};


const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home",
    url: `${siteConfig.url}/`,
    description:
      "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: `${siteConfig.url}${siteConfig.logo}`, // "/navbar-logo.svg"
    },
  };

export default function Home() {
  return (
  <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <ScrollToTop />
      <ScrollButton/>

      {/* Navbar + Hero Section */}
      <div id="/"><HeroSection/></div>

      <div><Whyus/></div>

      <div id='howitworks' className='scroll-m-10 lg:scroll-m-20'><Howitworks/></div>

      <div id='pricing'><Plans/></div>

      <div><Process/></div>

      <div><GeoSeo/></div>

      <div><CaseStudy/></div>

      <div><Cta/></div>

      <div><Faq/></div>

      <div><Footer/></div>

      {/* ✅ Sticky CTA (visible only on mobile) */}
      {/* <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 sm:hidden">
        <Button/>
      </div> */}

    </div>
  );
}
