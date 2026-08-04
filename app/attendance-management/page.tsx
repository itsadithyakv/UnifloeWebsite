import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/attendance-management/");

export default function AttendanceManagementPage() {
  return <SeoLandingPage path="/attendance-management/" content={seoPages.attendance} />;
}
