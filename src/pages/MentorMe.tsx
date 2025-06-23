
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, FileText, Edit, Code, Users, Globe, BookOpen, Trophy, Lightbulb, Heart } from "lucide-react";

const MentorMe = () => {
  useEffect(() => {
    document.title = "Mentor Me | Austin Ford";
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const componentSections = [
    {
      title: "Hero Section (Homepage Banner)",
      icon: <Edit className="h-6 w-6" />,
      file: "src/components/home/HeroSection.tsx",
      color: "bg-blue-50 border-blue-200",
      prompts: [
        'Replace "Austin Ford" with "Your Name" in line 15 of HeroSection.tsx',
        'Change the hero description text "Innovator. Educator. Changemaker." to your own tagline in HeroSection.tsx',
        'Update the quotes array with your own inspirational quotes in HeroSection.tsx line 6-10',
        'Replace the hero image URL with your profile photo in HeroSection.tsx line 45',
        'Change "Download CV" button text to "View Resume" in HeroSection.tsx',
        'Update social media links in the hero section to your profiles in HeroSection.tsx lines 50-70',
        'Modify the background gradient colors in HeroSection.tsx to match your brand',
        'Add your professional title after your name in the hero heading in HeroSection.tsx'
      ]
    },
    {
      title: "Navigation Bar",
      icon: <Globe className="h-6 w-6" />,
      file: "src/components/Navbar.tsx",
      color: "bg-green-50 border-green-200",
      prompts: [
        'Change the logo text "Austin Ford" to your name in Navbar.tsx line 12',
        'Update the "Contact Me" button link to your email in Navbar.tsx',
        'Modify navigation menu items to match your website structure in Navbar.tsx',
        'Change navbar background color to your brand color in Navbar.tsx',
        'Add new menu items like "Blog" or "Services" in Navbar.tsx navigation links',
        'Update mobile menu hamburger icon color in Navbar.tsx',
        'Modify the navbar sticky behavior in Navbar.tsx',
        'Change the navbar shadow and border styling in Navbar.tsx'
      ]
    },
    {
      title: "Education Section",
      icon: <BookOpen className="h-6 w-6" />,
      file: "src/components/home/EducationSection.tsx",
      color: "bg-purple-50 border-purple-200",
      prompts: [
        'Replace degree "Master of Science" with your degree in EducationSection.tsx line 8',
        'Change university "Stanford University" to your institution in EducationSection.tsx line 9',
        'Update study period "2022 - 2024" with your dates in EducationSection.tsx line 10',
        'Modify GPA "3.9/4.0" to your grade in EducationSection.tsx line 11',
        'Change specialization to your field of study in EducationSection.tsx line 13',
        'Update achievements array with your accomplishments in EducationSection.tsx line 14',
        'Replace university image URL with your institution photo in EducationSection.tsx line 15',
        'Add more education entries to the educationData array in EducationSection.tsx',
        'Modify the education status badge from "Current" to "Completed" in EducationSection.tsx',
        'Update the section title from "Education Background" in EducationSection.tsx line 45'
      ]
    },
    {
      title: "Projects Section",
      icon: <Code className="h-6 w-6" />,
      file: "src/components/home/ProjectsSection.tsx",
      color: "bg-orange-50 border-orange-200",
      prompts: [
        'Replace project title "Education Platform" with your project name in ProjectsSection.tsx',
        'Update project description with your project details in ProjectsSection.tsx',
        'Change technology stack array to match your project technologies in ProjectsSection.tsx',
        'Modify project status from "Live" to "In Development" in ProjectsSection.tsx',
        'Update project impact metrics like "10,000+ students" in ProjectsSection.tsx',
        'Replace project image URL with your project screenshot in ProjectsSection.tsx',
        'Add GitHub or live demo links to your projects in ProjectsSection.tsx',
        'Change project categories and filters in ProjectsSection.tsx',
        'Update the "View All Projects" button link in ProjectsSection.tsx',
        'Add new project entries to the projects array in ProjectsSection.tsx'
      ]
    },
    {
      title: "Achievements Section",
      icon: <Trophy className="h-6 w-6" />,
      file: "src/components/home/AchievementsSection.tsx",
      color: "bg-yellow-50 border-yellow-200",
      prompts: [
        'Replace achievement title "Young Innovator of the Year" with your award in AchievementsSection.tsx',
        'Change organization "National Innovation Foundation" to your awarding body in AchievementsSection.tsx',
        'Update achievement year from "2024" to your award year in AchievementsSection.tsx',
        'Modify achievement category to match your award type in AchievementsSection.tsx',
        'Change achievement description to your accomplishment in AchievementsSection.tsx',
        'Update achievement icon from Trophy to Award in AchievementsSection.tsx',
        'Replace achievement color scheme in AchievementsSection.tsx',
        'Add more achievement entries to the achievements array in AchievementsSection.tsx',
        'Change the section subtitle text in AchievementsSection.tsx',
        'Update achievement badges and styling in AchievementsSection.tsx'
      ]
    },
    {
      title: "Initiatives Section",
      icon: <Heart className="h-6 w-6" />,
      file: "src/components/home/InitiativesSection.tsx",
      color: "bg-pink-50 border-pink-200",
      prompts: [
        'Replace initiative title "Education for All" with your initiative in InitiativesSection.tsx',
        'Change initiative description to your social impact work in InitiativesSection.tsx',
        'Update impact metrics from "2000+ students" to your numbers in InitiativesSection.tsx',
        'Modify initiative status from "Active" to "Completed" in InitiativesSection.tsx',
        'Replace initiative image URL with your project photo in InitiativesSection.tsx',
        'Add link to your initiative website in InitiativesSection.tsx',
        'Change initiative categories and tags in InitiativesSection.tsx',
        'Update the section icon from Heart to Users in InitiativesSection.tsx',
        'Add new initiative entries to the initiatives array in InitiativesSection.tsx',
        'Modify the "View Details" button action in InitiativesSection.tsx'
      ]
    },
    {
      title: "Innovations Section",
      icon: <Lightbulb className="h-6 w-6" />,
      file: "src/components/home/InnovationsSection.tsx",
      color: "bg-indigo-50 border-indigo-200",
      prompts: [
        'Replace innovation title "Smart Water Management" with your innovation in InnovationsSection.tsx',
        'Change problem statement to your identified problem in InnovationsSection.tsx',
        'Update solution description with your innovation details in InnovationsSection.tsx',
        'Modify technology used from "IoT, Cloud Computing" to your tech stack in InnovationsSection.tsx',
        'Change impact measurement from "30% water waste reduction" in InnovationsSection.tsx',
        'Update innovation stage from "Pilot Testing" to "Deployed" in InnovationsSection.tsx',
        'Replace innovation image URL with your project photo in InnovationsSection.tsx',
        'Add patent or publication links in InnovationsSection.tsx',
        'Change innovation categories and badges in InnovationsSection.tsx',
        'Update the "View Details" button functionality in InnovationsSection.tsx'
      ]
    },
    {
      title: "Certifications Section",
      icon: <FileText className="h-6 w-6" />,
      file: "src/components/home/CertificationsSection.tsx",
      color: "bg-teal-50 border-teal-200",
      prompts: [
        'Replace certification title "Advanced Health Literacy" with your certification in CertificationsSection.tsx',
        'Change issuer "World Health Organization" to your certifying body in CertificationsSection.tsx',
        'Update certification category to match your field in CertificationsSection.tsx',
        'Modify certification date from "2024" to your completion year in CertificationsSection.tsx',
        'Change certification description to your course details in CertificationsSection.tsx',
        'Update skills array with your acquired skills in CertificationsSection.tsx',
        'Replace certification image URL in CertificationsSection.tsx',
        'Add verification link to your certificate in CertificationsSection.tsx',
        'Change verified badge status in CertificationsSection.tsx',
        'Update the "View Certificate" button link in CertificationsSection.tsx'
      ]
    },
    {
      title: "Books Section",
      icon: <BookOpen className="h-6 w-6" />,
      file: "src/components/home/BooksSection.tsx",
      color: "bg-red-50 border-red-200",
      prompts: [
        'Replace book title "Innovation for Impact" with your book title in BooksSection.tsx',
        'Change book subtitle to your book description in BooksSection.tsx',
        'Update book genre from "Self-Help" to your book category in BooksSection.tsx',
        'Modify publication status from "Published" to "Writing" in BooksSection.tsx',
        'Change publication date from "2024" to your target date in BooksSection.tsx',
        'Update book description with your book summary in BooksSection.tsx',
        'Modify page count from "240" to your book length in BooksSection.tsx',
        'Change book rating and download numbers in BooksSection.tsx',
        'Replace book cover image URL in BooksSection.tsx',
        'Add Amazon or publisher link in BooksSection.tsx'
      ]
    },
    {
      title: "Gallery Section",
      icon: <Globe className="h-6 w-6" />,
      file: "src/components/home/GallerySection.tsx",
      color: "bg-gray-50 border-gray-200",
      prompts: [
        'Replace gallery image URLs with your event photos in GallerySection.tsx',
        'Change image titles from "TEDx Talk" to your event names in GallerySection.tsx',
        'Update image categories from "Events" to your activity types in GallerySection.tsx',
        'Add new gallery items to the galleryItems array in GallerySection.tsx',
        'Modify gallery filter categories in GallerySection.tsx',
        'Change the "View Full Gallery" button link in GallerySection.tsx',
        'Update gallery grid layout from 3 columns to 4 columns in GallerySection.tsx',
        'Replace gallery section description in GallerySection.tsx',
        'Add video support to gallery items in GallerySection.tsx',
        'Change gallery image hover effects in GallerySection.tsx'
      ]
    },
    {
      title: "Footer Section",
      icon: <Users className="h-6 w-6" />,
      file: "src/components/Footer.tsx",
      color: "bg-slate-50 border-slate-200",
      prompts: [
        'Replace "Austin Ford" with your name in Footer.tsx line 15',
        'Change footer description to your bio in Footer.tsx',
        'Update "🎓 I am a Uniford Scholar" to your achievement in Footer.tsx',
        'Replace social media links with your profiles in Footer.tsx lines 25-45',
        'Change "Get In Touch" button to your contact method in Footer.tsx',
        'Update quick links to match your website pages in Footer.tsx',
        'Modify copyright year and name in Footer.tsx',
        'Change footer background color in Footer.tsx',
        'Update Uniford Foundation link if not applicable in Footer.tsx',
        'Add newsletter signup form in Footer.tsx'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-portfolio-primary to-portfolio-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Mentor Me</h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Complete guide with 200+ specific prompts to customize every component of this portfolio website. 
              Copy, paste, and edit - no coding experience required!
            </p>
          </div>
        </section>

        {/* Instructions */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Use These Prompts</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Each prompt tells you exactly what to change, which file to edit, and which line to modify. 
                Simply follow the instructions step by step.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Copy className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <CardTitle className="text-center">1. Copy Prompt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">Click the copy button next to any prompt to copy the instruction</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Edit className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <CardTitle className="text-center">2. Find & Edit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">Open the mentioned file and find the line number or text to change</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <CardTitle className="text-center">3. See Changes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">Save the file and see your changes reflect on the website instantly</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Component Sections */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Component-wise Customization Prompts</h2>
            
            <div className="space-y-8">
              {componentSections.map((section, index) => (
                <Card key={index} className={`${section.color} hover:shadow-lg transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      {section.icon}
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                      <Badge variant="outline">{section.prompts.length} prompts</Badge>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-700">📁 File to Edit:</p>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded mt-1 inline-block">
                        {section.file}
                      </code>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.prompts.map((prompt, promptIndex) => (
                        <div key={promptIndex} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-portfolio-primary transition-colors">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm text-gray-700 flex-1">{prompt}</p>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(prompt)}
                              className="shrink-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
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

        {/* Quick Reference */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Reference Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <FileText className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <CardTitle>Personal Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Name, bio, contact details, profile photo</p>
                  <Badge variant="secondary" className="mt-2">25+ prompts</Badge>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Code className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Project details, technologies, links, images</p>
                  <Badge variant="secondary" className="mt-2">30+ prompts</Badge>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <CardTitle>Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Education, achievements, certifications</p>
                  <Badge variant="secondary" className="mt-2">40+ prompts</Badge>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Globe className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <CardTitle>Links & Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Social media, external links, contact</p>
                  <Badge variant="secondary" className="mt-2">20+ prompts</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="section-padding bg-portfolio-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pro Tips for Success</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Follow these tips to customize your portfolio like a pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">🎯 Start Small</h3>
                <p className="text-sm opacity-90">Begin with basic info like your name and bio, then move to complex sections</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">📸 Quality Images</h3>
                <p className="text-sm opacity-90">Use high-resolution images (1200x800px) for best results</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">🔗 Test Links</h3>
                <p className="text-sm opacity-90">Always test your social media and project links before publishing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">💾 Save Often</h3>
                <p className="text-sm opacity-90">Save your files frequently to avoid losing changes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">📱 Mobile Check</h3>
                <p className="text-sm opacity-90">Preview your site on mobile devices to ensure responsiveness</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">✨ Keep It Simple</h3>
                <p className="text-sm opacity-90">Don't overcomplicate - clear and concise content works best</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentorMe;
