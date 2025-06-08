
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Austin Ford";
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
              <FileText className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our website.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use License</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Disclaimer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The materials on this website are provided on an 'as is' basis. Austin Ford makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    In no event shall Austin Ford or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if Austin Ford or its authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accuracy of Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The materials appearing on this website could include technical, typographical, or photographic errors. Austin Ford does not warrant that any of the materials on its website are accurate, complete, or current. Austin Ford may make changes to the materials contained on its website at any time without notice.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uniford Foundation Partnership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    This website is graciously donated by Uniford Foundation. Users acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>The website hosting and maintenance are provided through Uniford Foundation's generosity</li>
                    <li>Uniford Foundation may collect aggregate usage data for reporting purposes</li>
                    <li>Users should respect the Foundation's mission and values when using this platform</li>
                    <li>Any misuse of the platform may result in access restrictions</li>
                  </ul>
                  <p className="text-gray-600">
                    Learn more about Uniford Foundation at{" "}
                    <a href="https://www.uniford.org/" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:underline">
                      https://www.uniford.org/
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    If you have any questions about these Terms of Service, please contact us at:{" "}
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

export default TermsOfService;
