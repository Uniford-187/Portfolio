
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, Wrench, TrendingUp, ArrowRight } from "lucide-react";

interface Innovation {
  title: string;
  problem: string;
  solution: string;
  technology: string;
  impact: string;
  stage: string;
  image: string;
}

const innovations: Innovation[] = [
  {
    title: "Smart Water Management",
    problem: "Water scarcity in rural areas",
    solution: "IoT-based water monitoring and distribution system",
    technology: "IoT, Cloud Computing, Mobile App",
    impact: "30% water waste reduction",
    stage: "Pilot Testing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
  },
  {
    title: "AI-Powered Health Diagnosis",
    problem: "Limited healthcare access in remote areas",
    solution: "Mobile diagnostic tool using computer vision",
    technology: "AI/ML, Computer Vision, Mobile",
    impact: "500+ early diagnoses",
    stage: "Deployed",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3"
  },
  {
    title: "Sustainable Energy Harvester",
    problem: "Energy poverty in off-grid communities",
    solution: "Multi-source renewable energy harvesting device",
    technology: "Solar, Kinetic, Thermal Energy",
    impact: "200+ households powered",
    stage: "Scaling",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3"
  }
];

const InnovationsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
            <span className="text-sm font-semibold text-yellow-600 tracking-wider uppercase">Problem Solving</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Innovations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technical solutions addressing real-world challenges through innovation
          </p>
        </div>

        <div className="space-y-8">
          {innovations.map((innovation, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3">
                  <img 
                    src={innovation.image} 
                    alt={innovation.title}
                    className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="lg:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={innovation.stage === "Deployed" ? "default" : "secondary"}>
                      {innovation.stage}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">{innovation.title}</CardTitle>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm">Problem</h4>
                          <p className="text-gray-600 text-sm">{innovation.problem}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm">Solution</h4>
                          <p className="text-gray-600 text-sm">{innovation.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Wrench className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm">Technology</h4>
                          <p className="text-gray-600 text-sm">{innovation.technology}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm">Impact</h4>
                          <p className="text-portfolio-primary font-medium text-sm">{innovation.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;
