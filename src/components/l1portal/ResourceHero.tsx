
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useResources } from "./ResourceContext";
import { Search } from "lucide-react";

const ResourceHero = () => {
  const { setSearchQuery } = useResources();
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = () => {
    setSearchQuery(localSearch);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Explore the Power of Ideas
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Find innovations, reports, media, and PDFs from Uniford Foundation
        </p>
        
        <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search by keyword, type, or tag..."
              className="pl-10 text-black bg-white/90"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <Button onClick={handleSearch} className="bg-white text-portfolio-primary hover:bg-white/90">
            Search
          </Button>
        </div>
        
        <div className="mt-8">
          <Button variant="outline" className="bg-white/20 text-white border-white hover:bg-white/30">
            + Submit your innovation/report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourceHero;
