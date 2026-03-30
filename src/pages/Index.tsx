import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import FastStats from "@/components/FastStats";

const SignalsSection = lazy(() => import("@/components/SignalsSection"));
const MechanismSection = lazy(() => import("@/components/MechanismSection"));
const CurriculumSection = lazy(() => import("@/components/CurriculumSection"));
const OfferSection = lazy(() => import("@/components/OfferSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="container">
        <FastStats />
        <Suspense fallback={null}>
          <SignalsSection />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <MechanismSection />
        <CurriculumSection />
        <OfferSection />
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
