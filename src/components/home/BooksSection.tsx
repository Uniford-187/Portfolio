
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star, Download, ExternalLink } from "lucide-react";

interface Book {
  title: string;
  subtitle: string;
  genre: string;
  status: string;
  publishDate: string;
  description: string;
  pages: number;
  rating: number;
  downloads: string;
  cover: string;
  link?: string;
}

const books: Book[] = [
  {
    title: "Innovation for Impact",
    subtitle: "A Young Changemaker's Guide to Social Innovation",
    genre: "Self-Help",
    status: "Published",
    publishDate: "2024",
    description: "A comprehensive guide for young innovators looking to create meaningful social impact through technology and entrepreneurship.",
    pages: 240,
    rating: 4.8,
    downloads: "5,000+",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3"
  },
  {
    title: "Digital Literacy Revolution",
    subtitle: "Bridging the Technology Gap in Rural Communities",
    genre: "Education",
    status: "Published",
    publishDate: "2023",
    description: "Exploring strategies and case studies for implementing digital education programs in underserved communities.",
    pages: 180,
    rating: 4.6,
    downloads: "3,200+",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
  },
  {
    title: "The Future of Youth Leadership",
    subtitle: "Preparing the Next Generation of Global Leaders",
    genre: "Leadership",
    status: "Coming Soon",
    publishDate: "2025",
    description: "An exploration of modern leadership principles and how young leaders can drive positive change in their communities.",
    pages: 220,
    rating: 0,
    downloads: "Pre-orders open",
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3"
  }
];

const BooksSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
            <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">Author</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Books I Write</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge and insights through published works on innovation, leadership, and social impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={book.status === "Published" ? "default" : "secondary"}>
                    {book.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{book.genre}</Badge>
                  <span className="text-sm text-gray-500">{book.publishDate}</span>
                </div>
                <CardTitle className="text-xl">{book.title}</CardTitle>
                <p className="text-sm text-gray-600">{book.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Pages:</span>
                    <span>{book.pages}</span>
                  </div>
                  {book.rating > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{book.rating}/5</span>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Downloads:</span>
                    <span className="text-portfolio-primary font-medium">{book.downloads}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {book.status === "Published" ? (
                    <>
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full">
                      Pre-order Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
