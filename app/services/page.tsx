import { Services } from '@/components/sections/services'
import { generateMetadata, pageMetadata } from '@/components/seo/metadata';
import { defaultViewport } from '@/components/seo/viewport';

// SEO Metadata
export const metadata = generateMetadata(pageMetadata.services);

export const viewport = defaultViewport

const page = () => {
  return <Services />
}

export default page