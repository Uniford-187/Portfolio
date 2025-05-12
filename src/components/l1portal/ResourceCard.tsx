
import { format } from "date-fns";
import { Resource, useResources } from "./ResourceContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Lightbulb, File, BookOpen, FileCheck, Download } from "lucide-react";
import ResourceModal from "./ResourceModal";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const { setSelectedResource } = useResources();
  
  const handleViewResource = () => {
    setSelectedResource(resource);
  };
  
  // Map resource type to appropriate icon
  const getResourceIcon = () => {
    switch (resource.type) {
      case "Reports":
        return <FileText className="h-5 w-5" />;
      case "PDFs":
        return <FileText className="h-5 w-5" />;
      case "Videos":
        return <Video className="h-5 w-5" />;
      case "Innovations":
        return <Lightbulb className="h-5 w-5" />;
      case "Policy Docs":
        return <File className="h-5 w-5" />;
      case "Case Studies":
        return <BookOpen className="h-5 w-5" />;
      case "Whitepapers":
        return <FileCheck className="h-5 w-5" />;
      default:
        return <File className="h-5 w-5" />;
    }
  };

  return (
    <>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div 
          className="h-40 bg-gray-200 relative overflow-hidden"
          style={{
            backgroundImage: `url(${resource.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1 text-portfolio-primary">
            {getResourceIcon()}
            {resource.type}
          </div>
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="text-lg font-semibold line-clamp-2 mb-2">{resource.title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            Published on {format(resource.publishedDate, "MMM d, yyyy")}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {resource.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 border-t flex justify-between items-center">
          <span className="text-sm text-gray-500 flex items-center">
            ❤️ {resource.likes > 0 ? `Loved by ${resource.likes}+ viewers` : "Be the first to love"}
          </span>
          <Button size="sm" onClick={handleViewResource} className="text-portfolio-primary">
            {resource.fileUrl ? <Download className="h-4 w-4 mr-1" /> : null}
            View
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ResourceCard;
