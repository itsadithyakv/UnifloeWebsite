import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/school-erp-software-india/");

export default function SchoolErpIndiaPage() {
  return <SeoLandingPage path="/school-erp-software-india/" content={seoPages.schoolErpIndia} />;
}
