import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import PackagesSection from "./components/PackagesSection";

export default function Home() {
  return (
    <div className="pt-[68px]">
      <HeroSection />
      <TrustedBy />
      <PackagesSection />
    </div>
  );
}
