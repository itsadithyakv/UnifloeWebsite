import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/apaar-readiness/");

export default function ApaarReadinessPage() {
  return <SeoLandingPage path="/apaar-readiness/" content={seoPages.apaar} />;
}
