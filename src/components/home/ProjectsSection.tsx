
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Code, Users, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technology: string[];
  status: string;
  impact: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "EduConnect Platform",
    description: "AI-powered educational platform connecting students globally",
    technology: ["React", "Node.js", "AI/ML"],
    status: "Live",
    impact: "5000+ active users",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
  },
  {
    title: "HealthTracker Mobile App",
    description: "Community health monitoring and awareness application",
    technology: ["React Native", "Firebase"],
    status: "Beta",
    impact: "1000+ downloads",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
  },
  {
    title: "GreenTech Solutions",
    description: "IoT-based environmental monitoring system",
    technology: ["IoT", "Python", "Cloud"],
    status: "Development",
    impact: "3 pilot locations",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
  }
];

const ProjectsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-portfolio-accent mr-2" />
            <span className="text-sm font-semibold text-portfolio-accent tracking-wider uppercase">Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technical projects and digital solutions built to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === "Live" ? "default" : project.status === "Beta" ? "secondary" : "outline"}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technology.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-portfolio-accent font-medium">
                    <Users className="h-4 w-4 mr-1" />
                    {project.impact}
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-portfolio-accent group-hover:text-white">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
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

export default ProjectsSection;
