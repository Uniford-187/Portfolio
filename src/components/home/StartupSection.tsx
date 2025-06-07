
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, TrendingUp, Users, DollarSign, ExternalLink } from "lucide-react";

interface Startup {
  name: string;
  tagline: string;
  description: string;
  stage: string;
  founded: string;
  team: number;
  funding: string;
  valuation: string;
  metrics: {
    users: string;
    revenue: string;
    growth: string;
  };
  logo: string;
  website?: string;
}

const startups: Startup[] = [
  {
    name: "Uniford Global",
    tagline: "Democratizing Education Through Innovation",
    description: "A comprehensive platform connecting students, educators, and innovators globally to create impactful educational solutions.",
    stage: "Series A",
    founded: "2022",
    team: 15,
    funding: "$2.5M",
    valuation: "$15M",
    metrics: {
      users: "50,000+",
      revenue: "$500K ARR",
      growth: "300% YoY"
    },
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    website: "https://www.uniford.org"
  },
  {
    name: "TechForGood Labs",
    tagline: "Building Tomorrow's Solutions Today",
    description: "An innovation lab focused on developing technology solutions for social and environmental challenges.",
    stage: "Seed",
    founded: "2023",
    team: 8,
    funding: "$800K",
    valuation: "$5M",
    metrics: {
      users: "10,000+",
      revenue: "$150K ARR",
      growth: "450% YoY"
    },
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
  }
];

const StartupSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-orange-600 mr-2" />
            <span className="text-sm font-semibold text-orange-600 tracking-wider uppercase">Entrepreneurship</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Startup</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building scalable ventures that combine technology with social impact
          </p>
        </div>

        <div className="space-y-8">
          {startups.map((startup, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 p-6 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={startup.logo} 
                      alt={startup.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CardTitle className="text-2xl">{startup.name}</CardTitle>
                    <Badge variant={startup.stage === "Series A" ? "default" : "secondary"}>
                      {startup.stage}
                    </Badge>
                  </div>
                  
                  <p className="text-lg text-portfolio-primary font-medium mb-2">{startup.tagline}</p>
                  <p className="text-gray-600 mb-6">{startup.description}</p>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-portfolio-primary">{startup.team}</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{startup.funding}</div>
                      <div className="text-sm text-gray-600">Funding Raised</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{startup.metrics.users}</div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{startup.metrics.growth}</div>
                      <div className="text-sm text-gray-600">Growth Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button>
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    {startup.website && (
                      <Button variant="outline">
                        Visit Website
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
