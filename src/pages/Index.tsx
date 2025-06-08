
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import EducationSection from "@/components/home/EducationSection";
import AchievementSection from "@/components/home/AchievementSection";
import GallerySection from "@/components/home/GallerySection";
import FloatingBadge from "@/components/FloatingBadge";
import InitiativesSection from "@/components/home/InitiativesSection";
import ParticipationsSection from "@/components/home/ParticipationsSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CollaborationsSection from "@/components/home/CollaborationsSection";
import InnovationsSection from "@/components/home/InnovationsSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import BooksSection from "@/components/home/BooksSection";
import StartupSection from "@/components/home/StartupSection";
import SocialWelfareSection from "@/components/home/SocialWelfareSection";
import SportsSection from "@/components/home/SportsSection";
import InternshipsSection from "@/components/home/InternshipsSection";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Austin Ford | Innovator. Educator. Changemaker.";

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navbar />
      <main>
        <HeroSection />
        <EducationSection />
        <AchievementSection />
        <InitiativesSection />
        <ProjectsSection />
        <InnovationsSection />
        <StartupSection />
        <ParticipationsSection />
        <AchievementsSection />
        <CollaborationsSection />
        <CertificationsSection />
        <BooksSection />
        <SocialWelfareSection />
        <SportsSection />
        <InternshipsSection />
        <GallerySection />
      </main>
      <Footer />
      <FloatingBadge />
    </div>
  );
};

export default Index;
