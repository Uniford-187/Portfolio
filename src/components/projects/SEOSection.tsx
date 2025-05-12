
import { Badge } from "@/components/ui/badge";

const SEOSection = () => {
  return (
    <>
      {/* Visible SEO Tags */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">#LakshayChoudhary</Badge>
            <Badge variant="secondary">#InnovationsThatMatter</Badge>
            <Badge variant="secondary">#ProjectsForChange</Badge>
            <Badge variant="secondary">#SocialImpact</Badge>
            <Badge variant="secondary">#YouthInnovation</Badge>
          </div>
          <div className="text-sm text-gray-500">
            <a href="https://www.uniford.org" className="hover:underline mx-1" target="_blank" rel="noopener noreferrer">www.uniford.org</a>
            •
            <a href="https://www.pitchburg.com" className="hover:underline mx-1" target="_blank" rel="noopener noreferrer">www.pitchburg.com</a>
          </div>
        </div>
      </div>
      
      {/* Hidden SEO Content for Search Engines */}
      <div className="hidden">
        <h2>Lakshay Choudhary - Innovator, Educator, and Changemaker</h2>
        <p>
          Explore Lakshay Choudhary's portfolio of innovations, projects, and ventures aimed at creating positive social impact. 
          Featuring platforms like Uniford Global Education Network, EcoSolve Environmental Platform, and Rural Tech Literacy 
          Initiative that are changing lives across the globe. Connect with Lakshay for collaborations, speaking opportunities, 
          and partnerships.
        </p>
        <p>
          Keywords: Social innovation, youth empowerment, educational technology, sustainable development, environmental solutions, 
          digital literacy, rural development, collaborative platforms, impact measurement, social entrepreneurship, youth advocacy.
        </p>
        <p>
          Lakshay Choudhary is a young innovator, educator, and changemaker focused on addressing real-world challenges through 
          technology and social entrepreneurship. His projects and initiatives have impacted thousands of lives across multiple 
          countries and communities.
        </p>
        <p>
          Hashtags: #LakshayChoudhary #InnovationsThatMatter #ProjectsForChange #SocialImpact #YouthInnovation #GlobalChangemaker 
          #EducationInnovation #SustainableDevelopment #SDGs #TechForGood
        </p>
      </div>
    </>
  );
};

export default SEOSection;
