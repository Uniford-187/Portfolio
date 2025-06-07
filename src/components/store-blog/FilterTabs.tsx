
import { Button } from "@/components/ui/button";
import { ShoppingBag, BookOpen, Grid3X3 } from "lucide-react";

interface FilterTabsProps {
  activeTab: "all" | "products" | "blogs";
  setActiveTab: (tab: "all" | "products" | "blogs") => void;
}

const FilterTabs = ({ activeTab, setActiveTab }: FilterTabsProps) => {
  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            onClick={() => setActiveTab("all")}
            className="flex items-center"
          >
            <Grid3X3 className="mr-2 h-4 w-4" />
            All Content
          </Button>
          <Button
            variant={activeTab === "products" ? "default" : "outline"}
            onClick={() => setActiveTab("products")}
            className="flex items-center"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Products
          </Button>
          <Button
            variant={activeTab === "blogs" ? "default" : "outline"}
            onClick={() => setActiveTab("blogs")}
            className="flex items-center"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Blogs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FilterTabs;
