import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import PackagesSection from "./components/PackagesSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="pt-[68px]">
      <HeroSection />
      <TrustedBy />
      <PackagesSection />
      <WhyChooseUs />
    </div>
  );
}
