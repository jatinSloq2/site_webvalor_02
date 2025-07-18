import { generateMetadata, pageMetadata } from "@/components/seo/metadata";
import AboutPage from "./AboutPage";

export const metadata = generateMetadata({
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  canonical: "/about",
});

const page = () => {
  return <AboutPage/>
}

export default page