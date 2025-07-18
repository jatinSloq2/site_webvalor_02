import { generateMetadata, pageMetadata } from '@/components/seo/metadata';
import PortfolioPage from './PorfolioPage'
import { defaultViewport } from '@/components/seo/viewport';

// SEO Metadata
export const metadata = generateMetadata(pageMetadata.portfolio);
export const viewport = defaultViewport

const page = () => {
  return <PortfolioPage />
}

export default page