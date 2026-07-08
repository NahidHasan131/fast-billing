import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import PackagesSection from "./components/PackagesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import BusinessSection from "./components/BusinessSection";
import OTTSection from "./components/OTTSection";
import NetworkInfrastructure from "./components/NetworkInfrastructure";
import Testimonials from "./components/Testimonials";
import InstallationProcess from "./components/InstallationProcess";
import MobileApp from "./components/MobileApp";
import FAQ from "./components/FAQ";
import BlogSection from "./components/BlogSection";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="pt-[68px]">
      <HeroSection />
      <TrustedBy />
      <PackagesSection />
      <WhyChooseUs />
      <BusinessSection />
      <OTTSection />
      <NetworkInfrastructure />
      <Testimonials />
      <InstallationProcess />
      <MobileApp />
      <FAQ />
      <BlogSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
}
