
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryItems = [
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    title: "TEDx Talk - Education Revolution",
    category: "Events"
  },
  {
    id: 2,
    type: "image",
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    title: "Teaching Workshop - Delhi",
    category: "Workshops"
  },
  {
    id: 3,
    type: "image",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    title: "Innovation Team Meeting",
    category: "Work"
  },
  {
    id: 4,
    type: "image",
    url: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
    title: "Education Award Ceremony",
    category: "Achievements"
  },
  {
    id: 5,
    type: "image",
    url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80",
    title: "Panel Discussion - Future of Education",
    category: "Events"
  },
  {
    id: 6,
    type: "image",
    url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    title: "Community Outreach Program",
    category: "Community"
  }
];

const categories = ["All", "Events", "Workshops", "Work", "Achievements", "Community"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<null | typeof galleryItems[0]>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual journey through my teaching experiences, events, and memorable moments.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-portfolio-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-md h-64 group cursor-pointer transform transition-transform hover:-translate-y-1"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <span className="text-white/80 text-sm">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="hero-gradient text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg">
            View Full Gallery
          </button>
        </div>
        
        {/* Lightbox Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl bg-black/90 border-0">
            {selectedItem && (
              <div className="relative">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full object-contain max-h-[80vh]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                  <h3 className="text-white font-bold text-lg">{selectedItem.title}</h3>
                  <p className="text-white/80">{selectedItem.category}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
