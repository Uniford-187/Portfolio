
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBadge from "@/components/FloatingBadge";
import ResourceHero from "@/components/l1portal/ResourceHero";
import ResourceFilter from "@/components/l1portal/ResourceFilter";
import ResourceGrid from "@/components/l1portal/ResourceGrid";
import ResourcePagination from "@/components/l1portal/ResourcePagination";
import ResourceSuggested from "@/components/l1portal/ResourceSuggested";
import { ResourceProvider } from "@/components/l1portal/ResourceContext";

const L1Portal = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <ResourceProvider>
          <ResourceHero />
          <ResourceFilter />
          <ResourceGrid />
          <ResourcePagination />
          <ResourceSuggested />
          <div className="hidden">
            {/* SEO Content for Crawling */}
            <div>
              Explore Uniford Foundation's official innovation vault, PDF reports, case studies, 
              student-led ideas, and videos at <a href="https://www.uniford.org">www.uniford.org</a>. 
              Hashtags include #Uniford #UnifordFoundation #Innovation #Reports #Impact. 
              Ranked globally for student and social innovation media.
            </div>
          </div>
        </ResourceProvider>
      </div>
      <Footer />
      <FloatingBadge />
    </>
  );
};

export default L1Portal;
