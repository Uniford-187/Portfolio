
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const timelineData = [
  {
    year: "2016",
    title: "Early Education & Foundations",
    description: "Started journey in education with a focus on innovative learning methodologies.",
    icon: "🎓"
  },
  {
    year: "2018",
    title: "First Innovation Project",
    description: "Launched first educational platform to make learning accessible to underprivileged students.",
    icon: "🚀"
  },
  {
    year: "2019",
    title: "Teaching Excellence Award",
    description: "Recognized for outstanding contribution to education and innovative teaching methods.",
    icon: "🏆"
  },
  {
    year: "2020",
    title: "Published Research",
    description: "First research paper on technology-integrated learning methodologies published in international journal.",
    icon: "📚"
  },
  {
    year: "2021",
    title: "Uniford Platform Launch",
    description: "Founded Uniford, a comprehensive educational platform for personalized learning experiences.",
    icon: "💻"
  },
  {
    year: "2022",
    title: "Global Education Summit",
    description: "Invited as keynote speaker at the Global Education Summit in Singapore.",
    icon: "🌍"
  },
  {
    year: "2023",
    title: "Educational NGO Work",
    description: "Established partnerships with multiple NGOs to provide quality education to 500+ villages.",
    icon: "🤝"
  },
  {
    year: "Present",
    title: "Continuing the Mission",
    description: "Expanding educational initiatives and focusing on technology integration for inclusive learning.",
    icon: "🔮"
  }
];

const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (scrollContainerRef.current && timelineRefs.current[activeIndex]) {
      const container = scrollContainerRef.current;
      const activeElement = timelineRefs.current[activeIndex];
      
      if (activeElement) {
        container.scrollTo({
          left: activeElement.offsetLeft - container.offsetWidth / 2 + activeElement.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Set up observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.journey-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="journey-section section-padding bg-gray-50 opacity-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The path that shaped me as an innovator, educator, and changemaker.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block">
          <div 
            ref={scrollContainerRef}
            className="relative flex overflow-x-auto pb-8 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Timeline Track */}
            <div className="absolute h-1 bg-gray-200 top-[76px] left-0 right-0 z-0"></div>
            
            {/* Timeline Items */}
            <div className="flex space-x-16 px-8">
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  ref={el => timelineRefs.current[index] = el}
                  className={cn(
                    "flex flex-col items-center w-48 cursor-pointer transition-all duration-300",
                    index === activeIndex ? "scale-105" : "opacity-70 hover:opacity-100"
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="text-lg font-bold text-portfolio-primary mb-2">{item.year}</div>
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300 text-xl",
                    index === activeIndex 
                      ? "bg-portfolio-primary text-white shadow-lg shadow-portfolio-primary/30" 
                      : "bg-white text-portfolio-primary border border-gray-200"
                  )}>
                    {item.icon}
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex 
                    ? "bg-portfolio-primary w-4" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to timeline item ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute w-0.5 bg-gray-200 top-0 bottom-0 left-3 z-0"></div>
            
            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "mb-8 relative",
                  index % 2 === 0 ? "animate-fade-in" : "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-[-18px] w-9 h-9 rounded-full bg-portfolio-primary text-white flex items-center justify-center z-10 shadow-lg shadow-portfolio-primary/30 text-lg">
                  {item.icon}
                </div>
                <div className="glass-card p-4">
                  <div className="font-bold text-portfolio-primary text-lg">{item.year}</div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
