import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Unifloe" },
  description: "The requested Unifloe marketing page could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <title>Page Not Found | Unifloe</title>
      <meta name="description" content="The requested Unifloe marketing page could not be found." />
      <meta name="robots" content="noindex, nofollow" />
      <main id="main-content" className="error-page">
        <section className="section-shell error-panel">
          <p>404</p>
          <h1>This page has moved beyond the timetable.</h1>
          <span>The address may be incorrect or the page may no longer be available.</span>
          <div className="error-actions">
            <Link className="button" href="/">Return home<ArrowRight aria-hidden="true" /></Link>
            <Link className="text-link" href="/features">Explore Unifloe features<ArrowRight aria-hidden="true" /></Link>
            <Link className="text-link" href="/contact">Contact PaperKite<ArrowRight aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
