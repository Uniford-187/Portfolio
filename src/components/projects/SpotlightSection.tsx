
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SpotlightProject {
  id: string;
  title: string;
  description: string;
  image: string;
  impact: string;
  recognition: string[];
  media: string[];
  videoUrl?: string;
}

const spotlightProjects: SpotlightProject[] = [
  {
    id: "1",
    title: "Uniford Global Education Network",
    description: "A platform connecting students worldwide with mentors, educational resources, and collaboration opportunities, breaking down barriers to quality education.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    impact: "Connected 5,000+ students with 500+ mentors across 25 countries",
    recognition: ["UNESCO Innovation Award 2024", "Global EdTech Summit Finalist"],
    media: ["Featured in Forbes 30 Under 30", "CNN International Spotlight"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder URL
  },
  {
    id: "2",
    title: "Rural Tech Literacy Initiative",
    description: "Bringing digital skills and internet access to remote villages through mobile technology hubs and sustainable tech infrastructure.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    impact: "Trained 10,000+ rural residents in 50+ villages on digital literacy skills",
    recognition: ["Digital Inclusion Award", "Social Impact Prize 2023"],
    media: ["BBC World Service Documentary", "The Guardian Long Read"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder URL
  },
  {
    id: "3",
    title: "EcoSolve Environmental Platform",
    description: "Collaborative platform enabling communities to identify local environmental challenges and develop sustainable solutions together with experts and resources.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3",
    impact: "Implemented 75+ community-led environmental projects impacting 30,000+ lives",
    recognition: ["UN Environment Programme Recognition", "Green Innovation Award"],
    media: ["National Geographic Feature", "TED Talk Spotlight"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder URL
  }
];

const SpotlightSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Most Impactful Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Highlighting the initiatives that have created significant positive change and received recognition.
          </p>
        </div>

        <div className="space-y-12">
          {spotlightProjects.map((project) => (
            <SpotlightCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpotlightCard = ({ project }: { project: SpotlightProject }) => {
  return (
    <div className="glass-card overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-60 sm:h-80 bg-gradient-to-r from-indigo-600 to-purple-600">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {project.videoUrl && (
            <Button 
              variant="outline" 
              className="bg-white/30 backdrop-blur-sm border-white text-white hover:bg-white/40"
              onClick={() => window.open(project.videoUrl, '_blank')}
            >
              Watch Video Testimonial
            </Button>
          )}
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-5">
          <h4 className="font-semibold text-indigo-700 mb-1">Impact</h4>
          <p className="text-indigo-900">{project.impact}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Recognition</h4>
            <ul className="space-y-1">
              {project.recognition.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Media Coverage</h4>
            <ul className="space-y-1">
              {project.media.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Button className="flex items-center">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SpotlightSection;
