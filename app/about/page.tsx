import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/about/");

export default function AboutPage() {
  return <SeoLandingPage path="/about/" content={seoPages.about} />;
}
