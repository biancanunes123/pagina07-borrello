import HeroSection from "@/components/HeroSection";
import FastStats from "@/components/FastStats";
import SignalsSection from "@/components/SignalsSection";
import MechanismSection from "@/components/MechanismSection";
import CurriculumSection from "@/components/CurriculumSection";
import OfferSection from "@/components/OfferSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="container">
        <FastStats />
        <SignalsSection />
      </div>
      <MechanismSection />
      <CurriculumSection />
      <OfferSection />
      <FooterSection />
    </div>
  );
};

export default Index;
