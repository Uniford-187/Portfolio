
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBadge from "@/components/FloatingBadge";
import StoreBlogHero from "@/components/store-blog/StoreBlogHero";
import ProductGrid from "@/components/store-blog/ProductGrid";
import BlogGrid from "@/components/store-blog/BlogGrid";
import FilterTabs from "@/components/store-blog/FilterTabs";

const StoreBlog = () => {
  const [activeTab, setActiveTab] = useState<"all" | "products" | "blogs">("all");

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <StoreBlogHero />
        <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {(activeTab === "all" || activeTab === "products") && <ProductGrid />}
        {(activeTab === "all" || activeTab === "blogs") && <BlogGrid />}
      </div>
      <Footer />
      <FloatingBadge />
    </>
  );
};

export default StoreBlog;
