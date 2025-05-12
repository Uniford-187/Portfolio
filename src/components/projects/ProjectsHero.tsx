
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsHero = () => {
  return (
    <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-indigo-800 to-blue-900 opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <span className="inline-block rounded-full bg-indigo-500/20 px-4 py-1 text-sm font-medium text-indigo-200 backdrop-blur-md mb-6">
            Innovations & Ventures
          </span>
          <h1 className="mb-4 animate-fade-in text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Ideas That Change The World
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Explore my projects, startups, platforms, and innovations driven by purpose
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Collaborate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Request Full Project Deck
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;
