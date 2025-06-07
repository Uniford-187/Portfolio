
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, ArrowRight } from "lucide-react";

interface Initiative {
  title: string;
  description: string;
  impact: string;
  status: string;
  image: string;
  link?: string;
}

const initiatives: Initiative[] = [
  {
    title: "Education for All",
    description: "Providing quality education access to underprivileged communities",
    impact: "2000+ students impacted",
    status: "Active",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
  },
  {
    title: "Digital Literacy Program",
    description: "Teaching digital skills to rural communities",
    impact: "50+ villages covered",
    status: "Expanding",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
  },
  {
    title: "Clean Water Initiative",
    description: "Implementing sustainable water solutions",
    impact: "10,000+ people served",
    status: "Active",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
  }
];

const InitiativesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-portfolio-primary mr-2" />
            <span className="text-sm font-semibold text-portfolio-primary tracking-wider uppercase">Making Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading social initiatives that create lasting positive change in communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="glass-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={initiative.image} 
                  alt={initiative.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={initiative.status === "Active" ? "default" : "secondary"}>
                    {initiative.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-portfolio-primary font-medium">
                    <Users className="h-4 w-4 mr-1" />
                    {initiative.impact}
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-portfolio-primary group-hover:text-white">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
