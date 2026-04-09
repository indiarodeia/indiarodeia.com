import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import SectorsSection from "@/components/SectorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="India Rodeia — UX/UI Designer, Product Designer & Frontend Developer"
        description="Design estratégico, branding e produtos digitais com execução técnica real. Portfolio de India Rodeia para marcas, produtos digitais e experiências com forte execução visual e técnica."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "India Rodeia",
          url: "https://indiarodeia.com/",
          jobTitle: "UX/UI Designer & Frontend Developer",
          description: "Design estratégico, branding e produtos digitais com execução técnica real.",
          sameAs: [
            "https://www.linkedin.com/in/indiarodeia/",
            "https://github.com/indiarodeia",
            "https://www.instagram.com/india.rodeia/",
          ],
          email: "hello@indiarodeia.com",
          knowsAbout: ["UX Design", "UI Design", "Product Design", "Branding", "Frontend Development", "Design Systems"],
        }}
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <SectorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
