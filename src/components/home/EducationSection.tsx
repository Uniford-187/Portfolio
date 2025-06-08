
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Book, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2022 - 2024",
    gpa: "3.9/4.0",
    status: "Current",
    specialization: "Artificial Intelligence & Machine Learning",
    achievements: ["Dean's List", "Research Assistant", "Published 3 Papers"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "MIT Institute of Technology",
    period: "2018 - 2022",
    gpa: "3.8/4.0",
    status: "Completed",
    specialization: "Software Engineering",
    achievements: ["Summa Cum Laude", "Student Council President", "Hackathon Winner"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=800&q=80"
  },
  {
    degree: "High School Diploma",
    institution: "Excellence High School",
    period: "2016 - 2018",
    gpa: "4.0/4.0",
    status: "Completed",
    specialization: "Science & Mathematics",
    achievements: ["Valedictorian", "Science Olympiad Gold", "Math Competition Winner"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
  }
];

const EducationSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-6 w-6 text-portfolio-primary mr-2" />
            <span className="text-sm font-semibold text-portfolio-primary tracking-wider uppercase">Academic Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Background</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey of continuous learning and academic achievement across prestigious institutions
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card key={index} className="glass-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 relative overflow-hidden">
                  <img 
                    src={education.image} 
                    alt={education.institution}
                    className="w-full h-48 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={education.status === "Current" ? "default" : "secondary"}>
                      {education.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl lg:text-2xl">{education.degree}</CardTitle>
                      <div className="flex items-center text-portfolio-primary font-medium">
                        <Calendar className="h-4 w-4 mr-1" />
                        {education.period}
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 font-medium">{education.institution}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-portfolio-secondary mr-2" />
                        <span className="font-medium">GPA: {education.gpa}</span>
                      </div>
                      <div className="flex items-center">
                        <Book className="h-5 w-5 text-portfolio-accent mr-2" />
                        <span className="font-medium">{education.specialization}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">Key Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} variant="outline" className="bg-white">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Academic Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-portfolio-primary mb-2">3.9</div>
            <div className="text-gray-600">Overall GPA</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-portfolio-secondary mb-2">15+</div>
            <div className="text-gray-600">Awards & Honors</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-portfolio-accent mb-2">5</div>
            <div className="text-gray-600">Research Papers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-portfolio-primary mb-2">100+</div>
            <div className="text-gray-600">Course Credits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
