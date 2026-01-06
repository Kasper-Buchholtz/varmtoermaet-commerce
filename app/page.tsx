import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import HeroSection from 'components/section/hero-section';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Alt til dit næste eventyr - shop udstyr her"
        description="Kvalitetsudstyr til friluftsliv, vandring og camping - udvalgt af eksperter."
      />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
