import { HeroSection } from '../components/home/HeroSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { PricingSection } from '../components/home/PricingSection';
import { USPsSection } from '../components/home/USPsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { CustomerJourneySection } from '../components/home/CustomerJourneySection';

export function Home() {
  return (
    <div className="bg-gray-950 text-white">
      <HeroSection />
      <ProductsSection />
      <PricingSection />
      <USPsSection />
      <TestimonialsSection />
      <FAQSection />
      <CustomerJourneySection />
    </div>
  );
}