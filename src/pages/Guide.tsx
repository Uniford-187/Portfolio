
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Code, Edit, FileText, Globe, User, AlertCircle, CheckCircle } from "lucide-react";

const Guide = () => {
  useEffect(() => {
    document.title = "Customization Guide | Austin Ford";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-portfolio-primary to-portfolio-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Book className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Customization Guide</h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Step-by-step instructions to personalize this portfolio website with your own information - no coding experience required!
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to make this website yours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <User className="h-12 w-12 mx-auto text-portfolio-primary mb-4" />
                  <CardTitle>1. Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Update your name, bio, and contact details throughout the website</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <FileText className="h-12 w-12 mx-auto text-portfolio-secondary mb-4" />
                  <CardTitle>2. Content Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Replace sample projects, achievements, and experiences with your own</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Globe className="h-12 w-12 mx-auto text-portfolio-accent mb-4" />
                  <CardTitle>3. Links & Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Add your social media profiles and external links</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Customization Sections */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Customization Guide</h2>

            <div className="space-y-8">
              {/* Hero Section Customization */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Edit className="h-6 w-6 text-portfolio-primary" />
                    <CardTitle>1. Hero Section (Homepage Banner)</CardTitle>
                    <Badge>High Priority</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-800">File to Edit:</p>
                        <code className="text-sm bg-yellow-100 px-2 py-1 rounded">src/components/home/HeroSection.tsx</code>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">What to Change:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Name:</strong> Replace "Austin Ford" with your name (line ~15)</li>
                      <li>• <strong>Title:</strong> Change "Innovator. Educator. Changemaker." to your professional title</li>
                      <li>• <strong>Description:</strong> Update the bio paragraph with your background</li>
                      <li>• <strong>Profile Image:</strong> Replace the image URL with your photo</li>
                      <li>• <strong>Contact Button:</strong> Update the contact information or link</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <p className="text-sm text-green-800">Tip: Keep descriptions concise and professional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Edit className="h-6 w-6 text-portfolio-primary" />
                    <CardTitle>2. Education Background</CardTitle>
                    <Badge variant="secondary">Important</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-800">File to Edit:</p>
                        <code className="text-sm bg-blue-100 px-2 py-1 rounded">src/components/home/EducationSection.tsx</code>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Education Array (lines 8-35):</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>degree:</strong> Your degree name (e.g., "B.Tech Computer Science")</li>
                      <li>• <strong>institution:</strong> University/College name</li>
                      <li>• <strong>duration:</strong> Study period (e.g., "2020-2024")</li>
                      <li>• <strong>grade:</strong> Your GPA/percentage</li>
                      <li>• <strong>location:</strong> City, Country</li>
                      <li>• <strong>description:</strong> Brief description of your studies</li>
                      <li>• <strong>image:</strong> University/college logo or building image URL</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Projects Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-portfolio-primary" />
                    <CardTitle>3. Projects Section</CardTitle>
                    <Badge variant="outline">Showcase</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-purple-800">File to Edit:</p>
                        <code className="text-sm bg-purple-100 px-2 py-1 rounded">src/components/home/ProjectsSection.tsx</code>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Projects Array (lines 15-35):</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>title:</strong> Project name</li>
                      <li>• <strong>description:</strong> Brief project overview</li>
                      <li>• <strong>technology:</strong> Array of technologies used ["React", "Node.js"]</li>
                      <li>• <strong>status:</strong> "Live", "Beta", or "Development"</li>
                      <li>• <strong>impact:</strong> User count or achievement</li>
                      <li>• <strong>image:</strong> Project screenshot or relevant image URL</li>
                      <li>• <strong>link:</strong> (Optional) Project live URL</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-portfolio-primary" />
                    <CardTitle>4. Social Media Links</CardTitle>
                    <Badge>Essential</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-orange-800">File to Edit:</p>
                        <code className="text-sm bg-orange-100 px-2 py-1 rounded">src/components/Footer.tsx</code>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Social Links (lines 25-45):</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Twitter:</strong> Replace href="#" with your Twitter URL</li>
                      <li>• <strong>LinkedIn:</strong> Replace href="#" with your LinkedIn profile</li>
                      <li>• <strong>Instagram:</strong> Replace href="#" with your Instagram profile</li>
                      <li>• <strong>GitHub:</strong> Replace href="#" with your GitHub profile</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <User className="h-6 w-6 text-portfolio-primary" />
                    <CardTitle>5. Contact Information</CardTitle>
                    <Badge variant="secondary">Important</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Navbar Contact Button:</h4>
                      <div className="bg-gray-50 border rounded-lg p-3">
                        <p className="text-sm text-gray-600 mb-1">File: <code>src/components/Navbar.tsx</code></p>
                        <p className="text-gray-600">Update the "Contact Me" button to link to your email or contact form</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Footer Contact Section:</h4>
                      <div className="bg-gray-50 border rounded-lg p-3">
                        <p className="text-sm text-gray-600 mb-1">File: <code>src/components/Footer.tsx</code></p>
                        <p className="text-gray-600">Update the "Get In Touch" button and contact description</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Tips for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">✅ Do's</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Keep descriptions concise and professional</li>
                    <li>• Use high-quality images (recommended: 1200x800px)</li>
                    <li>• Test all links before publishing</li>
                    <li>• Update copyright year in footer</li>
                    <li>• Replace all placeholder content</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">❌ Don'ts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Don't leave any "Austin Ford" references</li>
                    <li>• Don't use broken or placeholder images</li>
                    <li>• Don't include irrelevant sample projects</li>
                    <li>• Don't forget to update page titles</li>
                    <li>• Don't use very long descriptions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="section-padding bg-portfolio-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-xl opacity-90 mb-6">
              If you get stuck or need assistance with customization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@example.com" 
                className="bg-white text-portfolio-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Email Support
              </a>
              <a 
                href="#" 
                className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Guide;
