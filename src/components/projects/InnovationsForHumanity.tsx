
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Innovation {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  community: string;
  technology: string;
  image: string;
  metrics: string;
  alignment: "left" | "right";
}

const innovations: Innovation[] = [
  {
    id: "1",
    title: "WaterPurify",
    problem: "Lack of clean drinking water in remote villages",
    solution: "Low-cost water filtration system using locally available materials",
    impact: "Provided clean water to 50+ villages",
    community: "Rural communities in water-stressed regions",
    technology: "Sustainable filtration technology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    metrics: "Impacted 15,000+ lives across 3 states",
    alignment: "left"
  },
  {
    id: "2",
    title: "EduMobile",
    problem: "Education accessibility in areas with poor infrastructure",
    solution: "Solar-powered mobile classrooms with digital resources",
    impact: "Brought education to 30+ remote locations",
    community: "Children in remote and conflict-affected areas",
    technology: "Solar power, Offline digital content delivery",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    metrics: "Educated 2,000+ children with no prior access to formal education",
    alignment: "right"
  },
  {
    id: "3",
    title: "FarmConnect",
    problem: "Small farmers lack market access and fair pricing",
    solution: "Direct-to-consumer digital platform connecting farmers to buyers",
    impact: "Increased farmer income by average 40%",
    community: "Small-scale agricultural producers",
    technology: "Mobile marketplace, Blockchain verification",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3",
    metrics: "Connected 500+ farmers to markets, eliminating middlemen",
    alignment: "left"
  }
];

const InnovationsForHumanity = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">Purpose-Driven</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Innovations for Humanity</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solutions designed to address real-world challenges and create lasting positive impact in communities around the world.
          </p>
        </div>

        <div className="space-y-24">
          {innovations.map((innovation) => (
            <InnovationCard key={innovation.id} innovation={innovation} />
          ))}
        </div>
      </div>
    </section>
  );
};

const InnovationCard = ({ innovation }: { innovation: Innovation }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className={`w-full lg:w-1/2 ${innovation.alignment === "right" ? "lg:order-last" : ""}`}>
        <div className="glass-card overflow-hidden rounded-xl">
          <img
            src={innovation.image}
            alt={innovation.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 p-6 glass-card rounded-xl">
        <Badge className="mb-4">{innovation.community}</Badge>
        <h3 className="text-2xl font-bold mb-3">{innovation.title}</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-indigo-700">The Problem</h4>
            <p className="text-gray-700">{innovation.problem}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-indigo-700">Our Solution</h4>
            <p className="text-gray-700">{innovation.solution}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-indigo-700">Technology Used</h4>
            <p className="text-gray-700">{innovation.technology}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-indigo-700 mb-1">Impact</h4>
            <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
              <p className="text-indigo-900 font-medium">{innovation.metrics}</p>
            </div>
          </div>
        </div>
        
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default InnovationsForHumanity;
