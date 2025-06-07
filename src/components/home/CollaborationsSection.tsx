
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Globe, Handshake } from "lucide-react";

interface Collaboration {
  organization: string;
  type: string;
  project: string;
  duration: string;
  outcome: string;
  logo: string;
}

const collaborations: Collaboration[] = [
  {
    organization: "UNICEF",
    type: "Partnership",
    project: "Digital Education Initiative",
    duration: "2023-2024",
    outcome: "Reached 10,000+ children",
    logo: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3"
  },
  {
    organization: "Microsoft",
    type: "Technical Partnership",
    project: "AI for Social Good",
    duration: "2024-Present",
    outcome: "3 AI solutions deployed",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
  },
  {
    organization: "World Bank",
    type: "Advisory",
    project: "Youth Innovation Framework",
    duration: "2023",
    outcome: "Policy recommendations adopted",
    logo: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3"
  },
  {
    organization: "Google.org",
    type: "Grant Recipient",
    project: "Rural Tech Access",
    duration: "2022-2023",
    outcome: "$50k funding received",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3"
  }
];

const CollaborationsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Handshake className="h-6 w-6 text-portfolio-purple mr-2" />
            <span className="text-sm font-semibold text-portfolio-purple tracking-wider uppercase">Partnerships</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Collaborations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic partnerships with global organizations to amplify impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborations.map((collaboration, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img 
                      src={collaboration.logo} 
                      alt={collaboration.organization}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{collaboration.organization}</h3>
                    <Badge variant="outline">{collaboration.type}</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="font-medium">Project:</span>
                    <span className="ml-1">{collaboration.project}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="font-medium">Duration:</span>
                    <span className="ml-1">{collaboration.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="font-medium">Outcome:</span>
                    <span className="ml-1 text-portfolio-primary font-medium">{collaboration.outcome}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
