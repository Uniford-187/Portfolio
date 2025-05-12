
import { useState, useEffect } from 'react';

const achievements = [
  {
    title: "Teaching Excellence Award",
    description: "Recognized for innovative teaching methodologies and student engagement.",
    icon: "🏆",
    year: "2021"
  },
  {
    title: "Published Research Paper",
    description: "Research on education technology published in International Journal of Educational Innovation.",
    icon: "📚",
    year: "2020"
  },
  {
    title: "TEDx Speaker",
    description: "Delivered talk on 'Transforming Education in the Digital Age' at TEDxCityUniversity.",
    icon: "🎤",
    year: "2022"
  },
  {
    title: "Education Innovation Grant",
    description: "Received $50,000 grant for developing accessible learning platforms.",
    icon: "💰",
    year: "2021"
  },
  {
    title: "Digital Literacy Campaign",
    description: "Led campaign reaching over 10,000 students across rural communities.",
    icon: "🌐",
    year: "2023"
  },
  {
    title: "Best EdTech Solution",
    description: "Award for creating an AI-powered personalized learning assistant.",
    icon: "🤖",
    year: "2022"
  },
  {
    title: "Educational Leadership",
    description: "Named among Top 50 Educational Leaders by Education Today magazine.",
    icon: "🚀",
    year: "2023"
  },
  {
    title: "Community Impact Award",
    description: "Recognized for educational initiatives in underserved communities.",
    icon: "🏅",
    year: "2023"
  }
];

const AchievementSection = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setAnimatedItems(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.achievement-card').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.achievement-card').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milestones and recognitions that mark the journey of innovation and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="achievement-card glass-card p-6 opacity-0"
              data-index={index}
              style={{ 
                opacity: animatedItems.includes(index) ? 1 : 0,
                transform: animatedItems.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{achievement.icon}</div>
                <span className="text-sm font-medium text-portfolio-primary bg-portfolio-primary/10 px-2 py-1 rounded">
                  {achievement.year}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-portfolio-primary mb-4">
            And more achievements to come...
          </p>
          <button className="hero-gradient text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg">
            View All Achievements
          </button>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
