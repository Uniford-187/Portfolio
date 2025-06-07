
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Target, Calendar } from "lucide-react";

interface SportParticipation {
  sport: string;
  level: string;
  achievement: string;
  year: string;
  event: string;
  position: string;
  description: string;
  image: string;
}

const sportsParticipations: SportParticipation[] = [
  {
    sport: "Basketball",
    level: "State Level",
    achievement: "Runner-up",
    year: "2023",
    event: "State Youth Championship",
    position: "Point Guard",
    description: "Led the team to state finals with exceptional teamwork and strategic play",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3"
  },
  {
    sport: "Cricket",
    level: "District Level",
    achievement: "Winner",
    year: "2022",
    event: "Inter-School Cricket Tournament",
    position: "Captain & All-rounder",
    description: "Captained the team to victory with both batting and bowling excellence",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3"
  },
  {
    sport: "Track & Field",
    level: "Regional Level",
    achievement: "Bronze Medal",
    year: "2023",
    event: "100m Sprint & Long Jump",
    position: "Individual Athlete",
    description: "Achieved personal best in both events at regional athletics championship",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3"
  },
  {
    sport: "Football",
    level: "School Level",
    achievement: "MVP",
    year: "2021-2022",
    event: "Annual Sports Meet",
    position: "Midfielder",
    description: "Most Valuable Player for two consecutive years in school football team",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3"
  }
];

const SportsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-6 w-6 text-orange-600 mr-2" />
            <span className="text-sm font-semibold text-orange-600 tracking-wider uppercase">Athletics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sports Participation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Athletic achievements and sports participation demonstrating teamwork, leadership, and perseverance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sportsParticipations.map((sport, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={sport.image} 
                  alt={sport.sport}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge variant="outline" className="bg-white/90">
                    {sport.level}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    {sport.achievement === "Winner" && <Trophy className="h-5 w-5 text-yellow-500" />}
                    {sport.achievement === "Runner-up" && <Medal className="h-5 w-5 text-gray-400" />}
                    {sport.achievement === "Bronze Medal" && <Medal className="h-5 w-5 text-orange-600" />}
                    {sport.achievement === "MVP" && <Target className="h-5 w-5 text-purple-600" />}
                    <Badge className="bg-black/70 text-white">
                      {sport.achievement}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{sport.sport}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {sport.year}
                  </div>
                </div>
                <p className="text-portfolio-primary font-medium">{sport.event}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <Badge variant="outline">{sport.position}</Badge>
                </div>
                <p className="text-gray-600">{sport.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
