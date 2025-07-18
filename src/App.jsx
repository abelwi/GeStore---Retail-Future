import { useRef } from "react";
import Header from "./components/Header"; 
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
// import SankeyChartCarousel from "./components/HowGeStoreSection";
import SankeyChart from "./components/SankeyChart";
import UseCasesSection from "./components/UseCaseSection";
import ReasonToChoose from "./components/WhyChoose";
import HowItWork from "./components/HowItWork";
import StoreType from "./components/StoreType";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  const featuresRef = useRef(null);
  const useCasesRef = useRef(null);
  const howItWorkRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="pb-10">
      <Header 
      onScrollToFeatures={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
      onScrollToUseCases={() => useCasesRef.current?.scrollIntoView({ behavior: 'smooth' })}
      onScrollToHowItWork={() => howItWorkRef.current?.scrollIntoView({ behavior: 'smooth' })}
      onScrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <HeroSection />

      <div ref={featuresRef} style={{ scrollMarginTop: '90px' }}>
        <FeaturesSection />
      </div>

      {/* <SankeyChartCarousel /> */}
      <SankeyChart />

      <div ref={useCasesRef} style={{ scrollMarginTop: '90px' }}>
        <UseCasesSection 
        ref={useCasesRef}
        onScrollToContact={() =>
          contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        />
      </div>
      
      <ReasonToChoose />

      <div ref={howItWorkRef} style={{ scrollMarginTop: '90px' }}>
        <HowItWork />
      </div>
      
      <StoreType />

      <div ref={contactRef} style={{ scrollMarginTop: '90px' }}>
        <ContactSection />
      </div>
      
      <FooterSection />
    </div>
  );
}

export default App;
