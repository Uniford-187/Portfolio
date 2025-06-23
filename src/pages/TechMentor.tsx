
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, FileText, FolderOpen, Code, Settings, Globe, Package, Wrench } from "lucide-react";

const TechMentor = () => {
  useEffect(() => {
    document.title = "Tech Mentor | Austin Ford";
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const fileCategories = [
    {
      title: "Configuration Files (The Setup Crew)",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-blue-50 border-blue-200",
      description: "These files tell your computer how to run and build your website",
      files: [
        {
          name: "package.json",
          description: "Like a shopping list for your website! It tells the computer what tools and libraries your website needs to work properly.",
          importance: "Without this, your website can't install the tools it needs",
          example: "It's like having a recipe that lists all ingredients needed to bake a cake",
          techDetails: "Contains dependencies, scripts, and project metadata"
        },
        {
          name: "vite.config.ts",
          description: "The instruction manual for building your website. It's like telling a robot how to put your website together piece by piece.",
          importance: "Makes your website load super fast and work smoothly",
          example: "Like assembly instructions for a LEGO set - tells how to put everything together",
          techDetails: "Configures the build tool, plugins, and development server"
        },
        {
          name: "tailwind.config.ts",
          description: "Your website's fashion designer! It decides what colors, fonts, and styles are available for your website.",
          importance: "Makes your website look beautiful and consistent",
          example: "Like a paint palette that an artist uses - defines all available colors and brushes",
          techDetails: "Configures Tailwind CSS classes, colors, fonts, and custom styles"
        },
        {
          name: "tsconfig.json",
          description: "The grammar teacher for your code! It makes sure your TypeScript code follows proper rules and catches mistakes.",
          importance: "Prevents bugs and makes your code more reliable",
          example: "Like spell-check for your writing, but for computer code",
          techDetails: "TypeScript compiler configuration and type checking rules"
        },
        {
          name: "vercel.json",
          description: "Instructions for the internet to show your website correctly. It's like a GPS for web browsers!",
          importance: "Makes sure people can visit all pages of your website",
          example: "Like road signs that help drivers find their destination",
          techDetails: "Deployment configuration for routing in single-page applications"
        }
      ]
    },
    {
      title: "Core App Files (The Brain)",
      icon: <Code className="h-6 w-6" />,
      color: "bg-green-50 border-green-200",
      description: "These are the main files that make your website work and think",
      files: [
        {
          name: "src/App.tsx",
          description: "The main control center of your website! It's like the conductor of an orchestra - it tells every other part what to do.",
          importance: "Without this, your website wouldn't know how to organize itself",
          example: "Like the table of contents in a book - it shows all the pages and how to get to them",
          techDetails: "Main React component with routing configuration and global providers"
        },
        {
          name: "src/main.tsx",
          description: "The power button for your website! This file starts everything up when someone visits your site.",
          importance: "This is what brings your website to life",
          example: "Like turning the key to start a car engine",
          techDetails: "Entry point that renders the React app into the DOM"
        },
        {
          name: "src/index.css",
          description: "The basic styling rules for your entire website. It's like the foundation of a house!",
          importance: "Gives your website its basic look and feel",
          example: "Like the paint and wallpaper that makes a house look nice",
          techDetails: "Global CSS styles and Tailwind CSS imports"
        },
        {
          name: "index.html",
          description: "The skeleton of your website! Every website needs this basic structure to exist.",
          importance: "This is where your React app gets attached to become a real website",
          example: "Like the frame of a house before you add walls and rooms",
          techDetails: "HTML template with root element for React mounting"
        }
      ]
    },
    {
      title: "Page Files (The Rooms)",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-purple-50 border-purple-200",
      description: "Each file creates a different page that people can visit on your website",
      files: [
        {
          name: "src/pages/Index.tsx",
          description: "Your website's front door! This is the first page people see when they visit your site.",
          importance: "First impressions matter - this is how people meet you online",
          example: "Like the lobby of a hotel - welcomes visitors and shows them around",
          techDetails: "Homepage component with hero section and overview content"
        },
        {
          name: "src/pages/MentorMe.tsx",
          description: "A helpful guide page that teaches people how to customize the website with easy instructions.",
          importance: "Helps others learn and modify the website",
          example: "Like a friendly teacher showing students how to do their homework",
          techDetails: "Educational component with customization prompts and instructions"
        },
        {
          name: "src/pages/Projects.tsx",
          description: "Your showcase room! This page displays all the cool things you've built or worked on.",
          importance: "Shows off your skills and achievements to visitors",
          example: "Like a trophy room where you display your awards and accomplishments",
          techDetails: "Portfolio component displaying project cards and details"
        },
        {
          name: "src/pages/L1Portal.tsx",
          description: "A special resource center where people can find helpful tools and information.",
          importance: "Provides value to visitors with useful resources",
          example: "Like a library with books and tools people can use",
          techDetails: "Resource portal with filtering and search functionality"
        }
      ]
    },
    {
      title: "Component Files (The Building Blocks)",
      icon: <Package className="h-6 w-6" />,
      color: "bg-orange-50 border-orange-200",
      description: "Reusable pieces that you can use anywhere on your website",
      files: [
        {
          name: "src/components/Navbar.tsx",
          description: "The navigation menu at the top of your website. It's like a map that helps people find different pages!",
          importance: "Helps visitors navigate around your website easily",
          example: "Like signs in a mall that point to different stores",
          techDetails: "Navigation component with responsive menu and routing links"
        },
        {
          name: "src/components/Footer.tsx",
          description: "The bottom section of your website with contact info and important links.",
          importance: "Provides additional navigation and contact information",
          example: "Like the information desk at the bottom of a building directory",
          techDetails: "Footer component with social links and site information"
        },
        {
          name: "src/components/ui/button.tsx",
          description: "A reusable button that you can use anywhere on your site. It's like having a stamp you can use many times!",
          importance: "Keeps all buttons looking consistent across your website",
          example: "Like having the same style of doorknobs throughout your house",
          techDetails: "Reusable button component with variant styling options"
        },
        {
          name: "src/components/ui/card.tsx",
          description: "A container that makes content look neat and organized, like putting things in a nice box.",
          importance: "Makes your content easy to read and visually appealing",
          example: "Like picture frames that make photos look more professional",
          techDetails: "Layout component for organizing and displaying content"
        }
      ]
    },
    {
      title: "Utility Files (The Helpers)",
      icon: <Wrench className="h-6 w-6" />,
      color: "bg-red-50 border-red-200",
      description: "Helper files that make coding easier and more organized",
      files: [
        {
          name: "src/lib/utils.ts",
          description: "A toolbox of helpful functions that you can use anywhere in your code. It's like having a Swiss Army knife!",
          importance: "Saves time by providing ready-made solutions for common tasks",
          example: "Like having a toolkit with screwdrivers and hammers ready to use",
          techDetails: "Utility functions for class names, formatting, and common operations"
        },
        {
          name: "src/hooks/use-toast.ts",
          description: "A special tool that shows pop-up messages to users, like notifications on your phone.",
          importance: "Helps communicate with users through friendly messages",
          example: "Like a helpful assistant that taps you on the shoulder with important news",
          techDetails: "Custom React hook for displaying toast notifications"
        },
        {
          name: "README.md",
          description: "An instruction manual for your entire project! It tells other people how to understand and use your code.",
          importance: "Helps others (and future you) understand how everything works",
          example: "Like the instruction booklet that comes with a new toy",
          techDetails: "Documentation with setup instructions and project information"
        }
      ]
    },
    {
      title: "Special Folders (The Organization System)",
      icon: <FolderOpen className="h-6 w-6" />,
      color: "bg-yellow-50 border-yellow-200",
      description: "Folders that keep different types of files organized and easy to find",
      files: [
        {
          name: "src/components/",
          description: "A folder that holds all your reusable building blocks. It's like a toy box with LEGO pieces!",
          importance: "Keeps your reusable parts organized and easy to find",
          example: "Like organizing your clothes by type - shirts in one drawer, pants in another",
          techDetails: "Directory containing React components and UI elements"
        },
        {
          name: "src/pages/",
          description: "A folder that contains all the different pages of your website.",
          importance: "Organizes your website's pages so they're easy to manage",
          example: "Like having separate folders for different school subjects",
          techDetails: "Directory containing page-level React components"
        },
        {
          name: "src/hooks/",
          description: "A folder for special code that adds extra powers to your components.",
          importance: "Keeps your special functionality organized and reusable",
          example: "Like a toolshed where you keep all your special gadgets",
          techDetails: "Directory containing custom React hooks"
        },
        {
          name: "public/",
          description: "A folder for images, icons, and files that people can directly access on your website.",
          importance: "Stores your website's pictures and downloadable files",
          example: "Like a photo album that visitors can look through",
          techDetails: "Static assets served directly by the web server"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-portfolio-secondary to-portfolio-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Code className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Tech Mentor</h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Understanding every file in your website project - explained so simply that even a 9-year-old can get it! 
              Let's explore the magic behind how websites work.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Understanding Files Matters</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Think of your website like a house. Every file has a special job - some are like the foundation, 
                others are like the walls, and some are like the decorations that make it beautiful!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <CardTitle className="text-center">Learn the Basics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">Understand what each file does in simple terms</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Wrench className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <CardTitle className="text-center">Build Confidence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">Feel comfortable making changes without fear</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Globe className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <CardTitle className="text-center">Create Amazing Websites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">Use your knowledge to build incredible projects</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* File Categories */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Your Website's File Family</h2>
            
            <div className="space-y-8">
              {fileCategories.map((category, index) => (
                <Card key={index} className={`${category.color} hover:shadow-lg transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      {category.icon}
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <Badge variant="outline">{category.files.length} files</Badge>
                    </div>
                    <p className="text-gray-700 text-lg">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {category.files.map((file, fileIndex) => (
                        <div key={fileIndex} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-portfolio-primary transition-colors">
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-portfolio-primary mb-2">{file.name}</h4>
                              <p className="text-gray-700 mb-3">{file.description}</p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(file.name)}
                              className="shrink-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 rounded-lg p-4">
                              <h5 className="font-semibold text-blue-800 mb-2">🎯 Why It Matters</h5>
                              <p className="text-blue-700 text-sm">{file.importance}</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4">
                              <h5 className="font-semibold text-green-800 mb-2">🌟 Real World Example</h5>
                              <p className="text-green-700 text-sm">{file.example}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 bg-gray-50 rounded-lg p-4">
                            <h5 className="font-semibold text-gray-800 mb-2">🔧 Technical Details</h5>
                            <p className="text-gray-600 text-sm">{file.techDetails}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Fun Facts About Website Files</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-3">🚀 Speed Matters</h3>
                <p className="text-sm text-gray-700">Configuration files help your website load in less than 3 seconds - faster than you can say "hello"!</p>
              </div>
              <div className="bg-green-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-3">🧩 Like LEGO Blocks</h3>
                <p className="text-sm text-gray-700">Components are reusable pieces - build once, use everywhere! Just like your favorite LEGO pieces.</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-3">🎨 Design Magic</h3>
                <p className="text-sm text-gray-700">CSS files are like magic paintbrushes that make your website look absolutely stunning!</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-3">🔍 Error Detective</h3>
                <p className="text-sm text-gray-700">TypeScript acts like a detective, catching mistakes before they become problems!</p>
              </div>
              <div className="bg-red-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-3">📱 Mobile Friendly</h3>
                <p className="text-sm text-gray-700">Modern websites work perfectly on phones, tablets, and computers - all thanks to smart coding!</p>
              </div>
              <div className="bg-orange-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-3">🌍 Global Reach</h3>
                <p className="text-sm text-gray-700">Your website can be visited by anyone, anywhere in the world, 24/7!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="section-padding bg-portfolio-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Now that you understand how all the pieces work together, you're ready to start customizing your website!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">📚 Start Learning</h3>
                <p className="text-sm opacity-90">Begin with small changes like updating text and colors</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">🔨 Practice Building</h3>
                <p className="text-sm opacity-90">Try creating new components and pages</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">🚀 Share Your Work</h3>
                <p className="text-sm opacity-90">Show off your amazing creations to the world</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechMentor;
