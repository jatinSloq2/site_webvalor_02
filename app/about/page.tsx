import { generateMetadata, pageMetadata } from "@/components/seo/metadata";
import AboutPage from "./AboutPage";
import { defaultViewport } from "@/components/seo/viewport";

export const metadata = generateMetadata(pageMetadata.about);

export const viewport = defaultViewport

const page = () => {
  return <AboutPage/>
}

export default page