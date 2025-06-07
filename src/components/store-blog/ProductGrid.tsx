
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, ExternalLink } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  rating: number;
  reviews: number;
  creator: string;
  image: string;
  featured: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Student Planner Pro",
    description: "Comprehensive digital planner designed by students for academic success",
    price: "$15.99",
    category: "Digital Tools",
    rating: 4.8,
    reviews: 124,
    creator: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: "2",
    name: "Coding Bootcamp Guide",
    description: "Complete roadmap and resources for self-taught programming",
    price: "$24.99",
    category: "Educational",
    rating: 4.9,
    reviews: 89,
    creator: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    featured: false
  },
  {
    id: "3",
    name: "Study Notes Templates",
    description: "Beautiful and organized note-taking templates for various subjects",
    price: "$9.99",
    category: "Templates",
    rating: 4.7,
    reviews: 156,
    creator: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: "4",
    name: "Research Paper Toolkit",
    description: "Essential tools and templates for academic research and writing",
    price: "$19.99",
    category: "Academic",
    rating: 4.6,
    reviews: 73,
    creator: "David Kim",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3",
    featured: false
  },
  {
    id: "5",
    name: "Presentation Master Kit",
    description: "Professional presentation templates and design guidelines",
    price: "$12.99",
    category: "Design",
    rating: 4.8,
    reviews: 91,
    creator: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3",
    featured: false
  },
  {
    id: "6",
    name: "Career Planning Workbook",
    description: "Step-by-step guide for students to plan their career journey",
    price: "$17.99",
    category: "Career",
    rating: 4.9,
    reviews: 112,
    creator: "James Brown",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    featured: true
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student-Created Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover innovative products designed and created by students worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="glass-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  {product.featured && (
                    <Badge className="bg-yellow-500 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <p className="text-sm text-gray-500">by {product.creator}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <span className="text-xl font-bold text-portfolio-primary">{product.price}</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
