
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

interface Achievement {
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const achievements: Achievement[] = [
  {
    title: "Young Innovator of the Year",
    organization: "National Innovation Foundation",
    year: "2024",
    category: "Innovation",
    description: "Recognized for outstanding contributions to social innovation",
    icon: Trophy,
    color: "text-yellow-600"
  },
  {
    title: "Social Impact Award",
    organization: "Global Youth Council",
    year: "2023",
    category: "Social Impact",
    description: "For creating sustainable solutions benefiting communities",
    icon: Award,
    color: "text-blue-600"
  },
  {
    title: "Excellence in Education",
    organization: "UNESCO",
    year: "2023",
    category: "Education",
    description: "Outstanding work in promoting digital literacy",
    icon: Star,
    color: "text-purple-600"
  },
  {
    title: "Youth Leadership Medal",
    organization: "World Economic Forum",
    year: "2022",
    category: "Leadership",
    description: "Exceptional leadership in youth advocacy",
    icon: Medal,
    color: "text-green-600"
  }
];

const AchievementsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-6 w-6 text-yellow-600 mr-2" />
            <span className="text-sm font-semibold text-yellow-600 tracking-wider uppercase">Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and awards received for innovation and social impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gray-100 ${achievement.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{achievement.category}</Badge>
                        <span className="text-sm text-gray-500">{achievement.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                      <p className="text-portfolio-primary font-medium mb-2">{achievement.organization}</p>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
