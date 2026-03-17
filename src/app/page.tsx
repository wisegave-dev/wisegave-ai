import { HeroSection } from "@/components/home/HeroSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { USPsSection } from "@/components/home/USPsSection";
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CustomerJourneySection } from "@/components/home/CustomerJourneySection";
import { BookDemoSection } from "@/components/home/BookDemoSection";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white">
      <HeroSection />
      <ProductsSection />
      <BookDemoSection />
      {/* <PricingSection /> */}
      <USPsSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <CustomerJourneySection />
    </div>
  );
}
