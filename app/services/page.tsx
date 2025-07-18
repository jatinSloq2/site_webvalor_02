import { Services } from '@/components/sections/services'
import { generateMetadata, pageMetadata } from '@/components/seo/metadata';

// SEO Metadata
export const metadata = generateMetadata({
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  keywords: pageMetadata.services.keywords,
  canonical: "/services",
});

const page = () => {
  return <Services/>
}

export default page