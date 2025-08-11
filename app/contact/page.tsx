import { generateMetadata, pageMetadata } from '@/components/seo/metadata';
import ContactPage from './ContactPage'
import { defaultViewport } from '@/components/seo/viewport';

// SEO Metadata
export const metadata = generateMetadata(pageMetadata.contact);

export const viewport = defaultViewport

const page = () => {
  return <ContactPage />
}

export default page