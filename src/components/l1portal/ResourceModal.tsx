
import { format } from "date-fns";
import { useResources } from "./ResourceContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Video, Lightbulb, File, BookOpen, FileCheck, Download, ExternalLink } from "lucide-react";

const ResourceModal = () => {
  const { selectedResource, setSelectedResource } = useResources();
  
  if (!selectedResource) return null;
  
  // Map resource type to appropriate icon
  const getResourceIcon = () => {
    switch (selectedResource.type) {
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
    <Dialog open={!!selectedResource} onOpenChange={(open) => !open && setSelectedResource(null)}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            {getResourceIcon()}
            <span className="text-sm font-medium text-portfolio-primary">{selectedResource.type}</span>
          </div>
          <DialogTitle className="text-2xl">{selectedResource.title}</DialogTitle>
          <DialogDescription>
            Published on {format(selectedResource.publishedDate, "MMMM d, yyyy")}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div 
            className="h-48 bg-gray-200 mb-4 rounded-md"
            style={{
              backgroundImage: `url(${selectedResource.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1">Description:</h4>
            <p className="text-gray-700">{selectedResource.description}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedResource.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            ❤️ Loved by {selectedResource.likes}+ viewers
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          {selectedResource.fileUrl && (
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          )}
          
          {selectedResource.externalLink && (
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href={selectedResource.externalLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View External Link
              </a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceModal;
