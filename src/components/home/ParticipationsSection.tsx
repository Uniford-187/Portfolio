
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, ExternalLink } from "lucide-react";

interface Participation {
  event: string;
  role: string;
  organization: string;
  date: string;
  location: string;
  achievement?: string;
  link?: string;
  image: string;
}

const participations: Participation[] = [
  {
    event: "Global Youth Summit 2024",
    role: "Keynote Speaker",
    organization: "UN Youth",
    date: "March 2024",
    location: "New York, USA",
    achievement: "Best Speaker Award",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3"
  },
  {
    event: "Innovation Challenge",
    role: "Participant",
    organization: "MIT",
    date: "January 2024",
    location: "Boston, USA",
    achievement: "Winner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
  },
  {
    event: "Social Impact Conference",
    role: "Panel Member",
    organization: "World Bank",
    date: "November 2023",
    location: "Washington DC, USA",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3"
  }
];

const ParticipationsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-portfolio-secondary mr-2" />
            <span className="text-sm font-semibold text-portfolio-secondary tracking-wider uppercase">Global Presence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Participations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Active participation in global forums, conferences, and events
          </p>
        </div>

        <div className="space-y-6">
          {participations.map((participation, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={participation.image} 
                    alt={participation.event}
                    className="w-full h-48 md:h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline">{participation.role}</Badge>
                    {participation.achievement && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Trophy className="h-3 w-3 mr-1" />
                        {participation.achievement}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">{participation.event}</CardTitle>
                  <p className="text-gray-600 mb-4">{participation.organization}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {participation.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {participation.location}
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
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

export default ParticipationsSection;
