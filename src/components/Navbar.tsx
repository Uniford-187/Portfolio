import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold font-heading tracking-tight"
          >
            <span className="text-gradient">Austin Ford</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-portfolio-primary transition-colors">
              Home
            </Link>
            <Link to="/l1-portal" className="font-medium hover:text-portfolio-primary transition-colors">
              L1 Portal
            </Link>
            <Link to="/projects" className="font-medium hover:text-portfolio-primary transition-colors">
              Projects
            </Link>
            <Link to="/store-blog" className="font-medium hover:text-portfolio-primary transition-colors">
              Store & Blog
            </Link>
            <Button className="hero-gradient text-white hover:opacity-90">
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {!mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="font-medium py-2 hover:text-portfolio-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/l1-portal"
                className="font-medium py-2 hover:text-portfolio-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                L1 Portal
              </Link>
              <Link
                to="/projects"
                className="font-medium py-2 hover:text-portfolio-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/store-blog"
                className="font-medium py-2 hover:text-portfolio-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Store & Blog
              </Link>
              <Button className="hero-gradient text-white hover:opacity-90 w-full">
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
