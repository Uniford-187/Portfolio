
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const quotes = [
  "Innovation is seeing what everybody has seen and thinking what nobody has thought.",
  "Education is not the learning of facts, but training the mind to think.",
  "Change will not come if we wait for some other person or some other time."
];

const HeroSection = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-portfolio-light overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-portfolio-light opacity-90 z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-portfolio-primary/20 via-portfolio-secondary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-gradient-radial from-portfolio-secondary/20 via-portfolio-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 space-y-8 mt-10 lg:mt-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-portfolio-dark">Hello, I'm</span>
              <span className="text-gradient block"> Lakshay Choudhary</span>
            </h1>

            <div className="h-24">
              <p className="text-xl md:text-2xl font-medium text-portfolio-dark/80 animate-fade-in">
                {quotes[currentQuoteIndex]}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="hero-gradient text-white hover:opacity-90 text-lg py-6">
                Download CV
              </Button>
              <Button variant="outline" className="text-lg py-6" onClick={handleNextQuote}>
                Next Quote
              </Button>
            </div>
            
            <div className="flex items-center pt-4">
              <div className="mr-6">
                <p className="text-sm text-portfolio-dark/60 uppercase tracking-wide">Follow me</p>
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="p-2 rounded-full bg-portfolio-dark/5 hover:bg-portfolio-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-portfolio-dark/5 hover:bg-portfolio-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-portfolio-dark/5 hover:bg-portfolio-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm text-portfolio-dark/60 uppercase tracking-wide">Scroll</p>
                <div className="mt-2 animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse">
                    <rect x="5" y="2" width="14" height="20" rx="7"/>
                    <path d="M12 6v4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary opacity-30 blur-xl animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                alt="Lakshay Choudhary" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-lg animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
