import { SeoLandingPage } from "../components/SeoLandingPage";
import { seoPages } from "../data/seo-pages";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/for-cbse-schools/");

export default function CbseSchoolsPage() {
  return <SeoLandingPage path="/for-cbse-schools/" content={seoPages.cbseSchools} />;
}
