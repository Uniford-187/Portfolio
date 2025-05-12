
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

// Project type definition
interface Project {
  id: string;
  title: string;
  tagline: string;
  launchDate: string;
  status: "Launching Soon" | "In Progress" | "Completed";
  description: string;
  image: string;
  fullDescription: string;
  technologies: string[];
}

// Sample project data
const projects: Project[] = [
  {
    id: "1",
    title: "EduReach Platform",
    tagline: "Making education accessible to all",
    launchDate: "June 2025",
    status: "Launching Soon",
    description: "A comprehensive platform bridging educational gaps in underprivileged areas",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    fullDescription: "EduReach is a revolutionary platform designed to bridge the educational gap in underprivileged areas by providing students with access to quality learning materials, mentors, and resources. The platform aims to democratize education by leveraging technology to reach students in remote areas.",
    technologies: ["React Native", "Firebase", "AI Content Generation"]
  },
  {
    id: "2",
    title: "Uniford Global",
    tagline: "Empowering student innovators worldwide",
    launchDate: "August 2025",
    status: "In Progress",
    description: "Global network connecting young innovators with mentors and resources",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    fullDescription: "Uniford Global is an ambitious initiative to connect young innovators from around the world with mentors, resources, and funding opportunities. This platform creates a global community of changemakers who collaborate across borders to solve pressing social and environmental challenges.",
    technologies: ["NextJS", "AWS", "GraphQL"]
  },
  {
    id: "3",
    title: "GreenSolutions Initiative",
    tagline: "Sustainable solutions for urban challenges",
    launchDate: "December 2025",
    status: "In Progress",
    description: "A think tank developing eco-friendly technologies for urban areas",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3",
    fullDescription: "GreenSolutions Initiative is a think tank and technology incubator focused on developing and implementing eco-friendly solutions for modern urban challenges. Our projects include sustainable waste management systems, urban gardens, and energy-efficient public transportation alternatives.",
    technologies: ["IoT", "Renewable Energy", "Sustainable Materials"]
  },
  {
    id: "4",
    title: "Rural Tech Innovation Hub",
    tagline: "Bringing technology to countryside",
    launchDate: "March 2026",
    status: "Launching Soon",
    description: "Network of tech hubs in rural areas providing skills and opportunities",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3",
    fullDescription: "The Rural Tech Innovation Hub is a network of technology centers established in rural areas to provide training, resources, and opportunities for local communities. These hubs aim to bridge the digital divide and create technology-based employment opportunities in underserved regions.",
    technologies: ["Solar Power", "Low-Cost Computing", "Satellite Internet"]
  },
  {
    id: "5",
    title: "HealthTech Connect",
    tagline: "Accessible healthcare through technology",
    launchDate: "October 2025",
    status: "Launching Soon",
    description: "Digital platform connecting patients with healthcare providers remotely",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3",
    fullDescription: "HealthTech Connect is a digital health platform that connects patients in remote and underserved areas with healthcare providers through telemedicine. The platform incorporates AI diagnostics, remote monitoring tools, and healthcare education resources to improve healthcare accessibility.",
    technologies: ["Telemedicine API", "Machine Learning", "Health Analytics"]
  },
  {
    id: "6",
    title: "Youth Policy Initiative",
    tagline: "Amplifying youth voices in governance",
    launchDate: "January 2026",
    status: "In Progress",
    description: "Platform enabling young citizens to participate in policy-making",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3",
    fullDescription: "The Youth Policy Initiative creates a structured framework for young citizens to actively participate in local and national policy-making. Through digital platforms, workshops, and direct engagement with governments, the initiative ensures that youth perspectives are included in decisions that affect their future.",
    technologies: ["Blockchain Voting", "Civic Tech", "Policy Analytics"]
  }
];

const UpcomingProjects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Projects & Ventures</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the next wave of innovations and ventures currently under development and launching soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Dialog>
      <div className="glass-card h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="h-48 w-full overflow-hidden rounded-t-lg">
          <img 
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <Badge 
              variant={
                project.status === "Completed" ? "default" : 
                project.status === "In Progress" ? "secondary" : 
                "outline"
              }
            >
              {project.status}
            </Badge>
          </div>
          <p className="text-gray-600 mb-4 flex-1">{project.tagline}</p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Launch: {project.launchDate}</span>
          </div>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">View Details</Button>
          </DialogTrigger>
        </div>
      </div>
      
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            <Badge className="mb-2 mt-1">{project.status}</Badge>
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-2">Launch Date</h4>
            <p className="text-gray-600 mb-4">{project.launchDate}</p>
            
            <h4 className="font-semibold mb-2">About this Project</h4>
            <p className="text-gray-600 mb-4">{project.fullDescription}</p>
            
            <div className="flex gap-3 mt-6">
              <Button>Request Collaboration</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpcomingProjects;
