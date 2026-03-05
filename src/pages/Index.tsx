import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => (
  <div className="min-h-screen bg-background scanline-bg animate-scanline">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <CertificationsSection />
    <ContactFooter />
  </div>
);

export default Index;
