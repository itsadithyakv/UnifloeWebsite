import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/fee-management/");

export default function FeeManagementPage() {
  return <SeoLandingPage path="/fee-management/" content={seoPages.fees} />;
}
