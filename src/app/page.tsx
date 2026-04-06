import { HeroSection } from "@/components/home/HeroSection";
import { PainAgitationSection } from "@/components/home/PainAgitationSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ValueStackSection } from "@/components/home/ValueStackSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { USPsSection } from "@/components/home/USPsSection";
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { CustomerJourneySection } from "@/components/home/CustomerJourneySection";
import { BookDemoSection } from "@/components/home/BookDemoSection";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white">
      <HeroSection />
      <PainAgitationSection />
      <SolutionSection />
      <ValueStackSection />
      <CustomerJourneySection />
      {/* <ProductsSection /> */}
      {/* <BookDemoSection /> */}
      {/* <PricingSection /> */}
      <USPsSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
