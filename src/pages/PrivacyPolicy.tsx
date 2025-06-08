
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Austin Ford";
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
              <Shield className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We may collect the following types of information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Personal information you provide voluntarily (name, email, message content)</li>
                    <li>Technical information such as IP address, browser type, and device information</li>
                    <li>Usage data including pages visited and time spent on the site</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To improve our website and user experience</li>
                    <li>To analyze website usage and performance</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With service providers who assist in operating our website</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uniford Foundation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    This website is donated by Uniford Foundation. The Foundation may have access to certain usage analytics to understand the impact of their donation. No personal information is shared without explicit consent.
                  </p>
                  <p className="text-gray-600">
                    For more information about Uniford Foundation's privacy practices, please visit their website at{" "}
                    <a href="https://www.uniford.org/" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:underline">
                      https://www.uniford.org/
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy, please contact us at:{" "}
                    <a href="mailto:austin@example.com" className="text-portfolio-primary hover:underline">
                      austin@example.com
                    </a>
                  </p>
                  <p className="text-gray-600 mt-4">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
