import { generateMetadata } from "@/components/seo/metadata";
import { pageMetadata } from "@/components/seo/metadata";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { AboutPreview } from "@/components/sections/about-preview";
import { Process } from "@/components/sections/procesess";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { defaultViewport } from "@/components/seo/viewport";

export const metadata = generateMetadata(pageMetadata.home);

export const viewport = defaultViewport


export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Services />
      <AboutPreview />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </PageWrapper>
  );
}
