import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/school-lms/");

export default function SchoolLmsPage() {
  return <SeoLandingPage path="/school-lms/" content={seoPages.schoolLms} />;
}
