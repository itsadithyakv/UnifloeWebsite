"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main-content" className="error-page">
      <meta name="robots" content="noindex, nofollow" />
      <section className="section-shell error-panel">
        <p>Something went wrong</p>
        <h1>We could not load this page.</h1>
        <span>Try the page again, or return to a stable part of the Unifloe website.</span>
        <div className="error-actions">
          <button className="button" type="button" onClick={reset}>Try again<RotateCcw aria-hidden="true" /></button>
          <Link className="text-link" href="/">Return home<ArrowRight aria-hidden="true" /></Link>
          <Link className="text-link" href="/contact">Contact PaperKite<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
