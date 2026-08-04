import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/data-privacy/");

export default function DataPrivacyPage() {
  return <SeoLandingPage path="/data-privacy/" content={seoPages.dataPrivacy} />;
}
