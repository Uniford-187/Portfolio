
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBadge from "@/components/FloatingBadge";

const L1Portal = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="glass-card p-10 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">L1 Portal Coming Soon</h1>
            <p className="text-lg text-gray-600">
              The learning and legacy portal is under construction. Check back soon for courses, resources, and more!
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingBadge />
    </>
  );
};

export default L1Portal;
