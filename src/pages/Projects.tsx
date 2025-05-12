
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBadge from "@/components/FloatingBadge";
import ProjectsHero from "@/components/projects/ProjectsHero";
import UpcomingProjects from "@/components/projects/UpcomingProjects";
import InnovationsForHumanity from "@/components/projects/InnovationsForHumanity";
import InitiativesPlatforms from "@/components/projects/InitiativesPlatforms";
import ImpactAnalytics from "@/components/projects/ImpactAnalytics";
import SpotlightSection from "@/components/projects/SpotlightSection";
import CollaborationForm from "@/components/projects/CollaborationForm";
import SEOSection from "@/components/projects/SEOSection";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <ProjectsHero />
        <UpcomingProjects />
        <InnovationsForHumanity />
        <InitiativesPlatforms />
        <ImpactAnalytics />
        <SpotlightSection />
        <CollaborationForm />
        <SEOSection />
      </div>
      <Footer />
      <FloatingBadge />
    </>
  );
};

export default Projects;
