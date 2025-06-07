
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ExternalLink, Building } from "lucide-react";

interface Internship {
  company: string;
  role: string;
  category: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  achievements: string[];
  logo: string;
}

const internships: Internship[] = [
  {
    company: "Microsoft AI Research",
    role: "AI & Automation Intern",
    category: "AI & Automation",
    duration: "Jun 2024 - Aug 2024",
    location: "Seattle, USA (Remote)",
    type: "Technical",
    description: "Worked on developing AI solutions for accessibility and contributed to automation frameworks for large-scale data processing.",
    skills: ["Python", "TensorFlow", "Azure AI", "Machine Learning", "Automation"],
    achievements: [
      "Developed AI model with 95% accuracy",
      "Optimized data pipeline reducing processing time by 40%",
      "Contributed to 2 research papers"
    ],
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
  },
  {
    company: "Google.org",
    role: "Social Impact Technology Intern",
    category: "Social Welfare",
    duration: "Jan 2024 - Apr 2024",
    location: "Mountain View, USA",
    type: "Domain Specific",
    description: "Focused on developing technology solutions for social good, working with NGOs to implement digital transformation strategies.",
    skills: ["Product Management", "UX Research", "Data Analysis", "Community Outreach"],
    achievements: [
      "Led digital literacy program reaching 1000+ users",
      "Designed user-friendly interface increasing adoption by 60%",
      "Collaborated with 5 international NGOs"
    ],
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3"
  },
  {
    company: "McKinsey & Company",
    role: "Management Consulting Intern",
    category: "Management",
    duration: "Sep 2023 - Dec 2023",
    location: "New York, USA",
    type: "Management",
    description: "Supported consulting projects for Fortune 500 companies, focusing on digital transformation and organizational change management.",
    skills: ["Strategic Planning", "Data Analysis", "Client Management", "PowerBI", "Presentation"],
    achievements: [
      "Delivered insights saving client $2M annually",
      "Led cross-functional team of 8 members",
      "Presented findings to C-suite executives"
    ],
    logo: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3"
  },
  {
    company: "UNICEF Innovation Lab",
    role: "Social Innovation Intern",
    category: "Social Welfare",
    duration: "May 2023 - Aug 2023",
    location: "Geneva, Switzerland",
    type: "Social Welfare",
    description: "Worked on innovative solutions for child protection and education in developing countries, focusing on technology-enabled interventions.",
    skills: ["Program Design", "Impact Measurement", "Stakeholder Engagement", "Research"],
    achievements: [
      "Designed program benefiting 5000+ children",
      "Created impact measurement framework",
      "Published policy recommendations"
    ],
    logo: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3"
  }
];

const InternshipsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Professional Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Internships</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional experiences in AI & Automation, Domain-specific roles, Management, and Social Welfare
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/4 p-6 flex items-center justify-center border-r border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden">
                      <img 
                        src={internship.logo} 
                        alt={internship.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold">{internship.company}</h3>
                    <Badge variant="outline" className="mt-2">
                      {internship.category}
                    </Badge>
                  </div>
                </div>
                <div className="lg:w-3/4 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <CardTitle className="text-xl">{internship.role}</CardTitle>
                    <Badge variant={internship.type === "Technical" ? "default" : "secondary"}>
                      {internship.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {internship.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {internship.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{internship.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {internship.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {internship.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-portfolio-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button size="sm">
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
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

export default InternshipsSection;
