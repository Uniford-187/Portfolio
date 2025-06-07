
import { Button } from "@/components/ui/button";
import { ShoppingBag, BookOpen, PlusCircle } from "lucide-react";

const StoreBlogHero = () => {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <ShoppingBag className="h-8 w-8 text-purple-300 mr-3" />
            <BookOpen className="h-8 w-8 text-purple-300" />
          </div>
          <h1 className="mb-4 animate-fade-in text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Student Store & Blog Hub
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Discover products, resources, and insights created by students, for students
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Browse Store
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <PlusCircle className="mr-2 h-4 w-4" />
              Submit Content
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBlogHero;
