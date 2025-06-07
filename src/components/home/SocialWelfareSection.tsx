
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, MapPin, Calendar, ArrowRight } from "lucide-react";

interface WelfareInitiative {
  title: string;
  description: string;
  focus: string;
  location: string;
  duration: string;
  beneficiaries: string;
  status: string;
  impact: string;
  image: string;
  volunteers?: number;
}

const welfareInitiatives: WelfareInitiative[] = [
  {
    title: "Education for Underprivileged",
    description: "Providing free education and learning resources to children from low-income families",
    focus: "Education",
    location: "Rural Maharashtra, India",
    duration: "2022-Present",
    beneficiaries: "500+ children",
    status: "Active",
    impact: "90% literacy improvement",
    volunteers: 25,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
  },
  {
    title: "Clean Water Project",
    description: "Installing water purification systems and educating communities about water hygiene",
    focus: "Health & Sanitation",
    location: "Remote villages, Rajasthan",
    duration: "2023-2024",
    beneficiaries: "1,000+ families",
    status: "Completed",
    impact: "75% reduction in waterborne diseases",
    volunteers: 40,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
  },
  {
    title: "Digital Literacy Program",
    description: "Teaching basic computer skills and internet safety to elderly and rural populations",
    focus: "Digital Inclusion",
    location: "Multiple states",
    duration: "2023-Present",
    beneficiaries: "200+ seniors",
    status: "Expanding",
    impact: "80% can now use smartphones",
    volunteers: 15,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
  }
];

const SocialWelfareSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-red-600 mr-2" />
            <span className="text-sm font-semibold text-red-600 tracking-wider uppercase">Community Service</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Social Welfare Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Grassroots programs focused on education, health, and community development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {welfareInitiatives.map((initiative, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={initiative.image} 
                  alt={initiative.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge variant="outline" className="bg-white/90">
                    {initiative.focus}
                  </Badge>
                  <Badge variant={initiative.status === "Active" ? "default" : initiative.status === "Completed" ? "secondary" : "outline"}>
                    {initiative.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{initiative.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{initiative.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{initiative.beneficiaries} benefited</span>
                  </div>
                  {initiative.volunteers && (
                    <div className="flex items-center text-sm">
                      <Heart className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{initiative.volunteers} volunteers</span>
                    </div>
                  )}
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border border-green-100 mb-4">
                  <p className="text-green-800 font-medium text-sm">
                    <strong>Impact:</strong> {initiative.impact}
                  </p>
                </div>
                
                <Button className="w-full">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialWelfareSection;
