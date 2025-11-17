"use client";

import Link from "next/link";

export default function AuditCTA() {
    return (
        <section
            className="mt-8 cta-block bg-gradient-to-r from-[#FFF0E0] to-[#FCD0D4] rounded-2xl p-8 lg:p-12 text-center mb-8 lg:mb-12 shadow-lg"
            aria-labelledby="middle-cta-heading"
        >
            <h3
                id="middle-cta-heading"
                className="heading-font text-2xl lg:text-3xl mb-4 text-[var(--foreground)]"
            >
                See If ChatGPT Is Already Recommending Your Brand
            </h3>
            <p className="content-font text-base lg:text-lg mb-6 max-w-2xl mx-auto text-[#0f0a08c1]">
                Get a free AI visibility audit to discover where you show up (or don't) in ChatGPT, Gemini, and Perplexity.
            </p>
            <Link
                href="https://geo.notionx.ai/"
                target="_blank"
                className="btn btn-primary inline-block bg-[var(--cta)] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                aria-label="Get your free AI visibility audit"
            >
                Get Your Free AI Audit
            </Link>
        </section>
    );
}
