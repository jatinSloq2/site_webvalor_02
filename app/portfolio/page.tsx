import { generateMetadata, pageMetadata } from '@/components/seo/metadata';
import PortfolioPage from './PorfolioPage'

// SEO Metadata
export const metadata = generateMetadata({
  title: pageMetadata.portfolio.title,
  description: pageMetadata.portfolio.description,
  keywords: pageMetadata.portfolio.keywords,
  canonical: "/portfolio",
});

const page = () => {
  return <PortfolioPage />
}

export default page