
import { generateMetadata, pageMetadata } from '@/components/seo/metadata';
import { defaultViewport } from '@/components/seo/viewport';
import ServicesPage from './ServicesPage';

// SEO Metadata
export const metadata = generateMetadata(pageMetadata.services);
export const viewport = defaultViewport

const page = () => {
  return <ServicesPage />
}

export default page