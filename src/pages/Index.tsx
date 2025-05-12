
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import JourneyTimeline from "@/components/home/JourneyTimeline";
import AchievementSection from "@/components/home/AchievementSection";
import GallerySection from "@/components/home/GallerySection";
import FloatingBadge from "@/components/FloatingBadge";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Lakshay Choudhary | Innovator. Educator. Changemaker.";

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navbar />
      <main>
        <HeroSection />
        <JourneyTimeline />
        <AchievementSection />
        <GallerySection />
      </main>
      <Footer />
      <FloatingBadge />
    </div>
  );
};

export default Index;
