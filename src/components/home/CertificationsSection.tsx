
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Heart, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  category: string;
  date: string;
  description: string;
  skills: string[];
  verified: boolean;
  image: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    title: "Advanced Health Literacy Certification",
    issuer: "World Health Organization",
    category: "Health Literacy",
    date: "2024",
    description: "Comprehensive training in health communication and community health education",
    skills: ["Health Communication", "Public Health", "Community Outreach"],
    verified: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
  },
  {
    title: "Medical Literacy for Communities",
    issuer: "Johns Hopkins University",
    category: "Medical Literacy",
    date: "2023",
    description: "Training in medical terminology and healthcare system navigation",
    skills: ["Medical Terminology", "Healthcare Systems", "Patient Advocacy"],
    verified: true,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3"
  },
  {
    title: "Digital Health Communication",
    issuer: "Harvard Medical School",
    category: "Health Literacy",
    date: "2023",
    description: "Digital tools and platforms for health education and awareness",
    skills: ["Digital Health", "E-Learning", "Health Tech"],
    verified: true,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
  }
];

const CertificationsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-green-600 mr-2" />
            <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Professional Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized certifications in health literacy and medical communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge variant="secondary">{cert.category}</Badge>
                  {cert.verified && (
                    <Badge className="bg-green-100 text-green-800">
                      <Award className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-portfolio-primary font-medium">{cert.issuer}</span>
                  <span className="text-gray-500">{cert.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  View Certificate <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
