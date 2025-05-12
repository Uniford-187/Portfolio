
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ArrowRight } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  logo: string;
  description: string;
  link: string;
  yearFounded: string;
  category: string;
}

const platforms: Platform[] = [
  {
    id: "1",
    name: "Uniford",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    description: "A global platform connecting student innovators with mentors, resources, and funding opportunities to bring their ideas to life.",
    link: "http://www.uniford.org",
    yearFounded: "2023",
    category: "Education & Innovation"
  },
  {
    id: "2",
    name: "Pitchburg",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    description: "Digital platform enabling young entrepreneurs to pitch their startup ideas to investors and receive real-time feedback.",
    link: "http://www.pitchburg.com",
    yearFounded: "2024",
    category: "Entrepreneurship"
  },
  {
    id: "3",
    name: "EcoSolve",
    logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3",
    description: "Collaborative platform for developing and implementing sustainable solutions to environmental challenges.",
    link: "#",
    yearFounded: "2022",
    category: "Sustainability"
  },
  {
    id: "4",
    name: "LearnZen",
    logo: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3",
    description: "Adaptive learning platform that personalizes educational content based on student learning style and pace.",
    link: "#",
    yearFounded: "2023",
    category: "EdTech"
  },
  {
    id: "5",
    name: "ImpactMetrics",
    logo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3",
    description: "Analytics platform helping social enterprises measure and showcase their impact through data visualization.",
    link: "#",
    yearFounded: "2024",
    category: "Social Impact"
  }
];

const InitiativesPlatforms = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">Established</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Initiatives & Platforms</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Digital ecosystems and organizations founded to create lasting change and empower communities.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {platforms.map((platform) => (
              <CarouselItem key={platform.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <PlatformCard platform={platform} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 translate-y-0" />
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const PlatformCard = ({ platform }: { platform: Platform }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="glass-card h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <div className="h-40 w-full overflow-hidden">
            <img 
              src={platform.logo}
              alt={platform.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{platform.category} • Est. {platform.yearFounded}</p>
            <p className="text-gray-600 mb-4 line-clamp-2">{platform.description}</p>
            <Button variant="ghost" className="mt-auto justify-start p-0 hover:bg-transparent">
              Visit Platform <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{platform.name}</h4>
          <p className="text-sm text-gray-500">{platform.category} • Founded {platform.yearFounded}</p>
          <p className="text-sm">{platform.description}</p>
          <a 
            href={platform.link} 
            className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website <ArrowRight className="ml-1 h-3 w-3" />
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default InitiativesPlatforms;
