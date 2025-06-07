
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Eye } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Student Entrepreneurship",
    excerpt: "Exploring how young entrepreneurs are reshaping industries and creating innovative solutions to global challenges.",
    category: "Entrepreneurship",
    author: "Lakshay Choudhary",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    views: 1234,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: "2",
    title: "Building Sustainable Tech Solutions",
    excerpt: "A deep dive into how technology can be leveraged to address environmental challenges and create sustainable impact.",
    category: "Technology",
    author: "Sarah Mitchell",
    publishDate: "2024-01-12",
    readTime: "7 min read",
    views: 987,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    featured: false
  },
  {
    id: "3",
    title: "Digital Literacy in Rural Communities",
    excerpt: "How student-led initiatives are bridging the digital divide and empowering rural communities through technology education.",
    category: "Education",
    author: "Alex Chen",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    views: 756,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: "4",
    title: "Innovation in Healthcare Accessibility",
    excerpt: "Student innovations making healthcare more accessible and affordable in underserved communities worldwide.",
    category: "Healthcare",
    author: "Maria Rodriguez",
    publishDate: "2024-01-08",
    readTime: "4 min read",
    views: 623,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    featured: false
  },
  {
    id: "5",
    title: "Social Impact Through Design Thinking",
    excerpt: "How design thinking methodology is being used by students to solve complex social problems and create meaningful change.",
    category: "Design",
    author: "David Park",
    publishDate: "2024-01-05",
    readTime: "8 min read",
    views: 892,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
    featured: false
  },
  {
    id: "6",
    title: "Youth Leadership in Climate Action",
    excerpt: "Inspiring stories of young climate activists and innovators leading the charge towards a sustainable future.",
    category: "Environment",
    author: "Emma Green",
    publishDate: "2024-01-03",
    readTime: "6 min read",
    views: 1045,
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3",
    featured: true
  }
];

const BlogGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Blog Posts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, stories, and knowledge shared by students making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="glass-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  {post.featured && (
                    <Badge className="bg-indigo-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views.toLocaleString()}
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-portfolio-primary group-hover:text-white">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
