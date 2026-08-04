import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/school-erp-bengaluru/");

export default function BengaluruSchoolErpPage() {
  return <SeoLandingPage path="/school-erp-bengaluru/" content={seoPages.bengaluru} />;
}
