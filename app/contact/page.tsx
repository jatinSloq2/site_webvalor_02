import { generateMetadata, pageMetadata } from '@/components/seo/metadata';
import ContactPage from './ContactPage'

// SEO Metadata
export const metadata = generateMetadata({
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords,
  canonical: "/contact",
});

const page = () => {
  return <ContactPage/>
}

export default page