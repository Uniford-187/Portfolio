
import { useState } from 'react';
import { cn } from '@/lib/utils';

const FloatingBadge = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "floating-badge glass-card animate-pulse-slow flex items-center",
        hovered ? "bg-portfolio-primary text-white" : "bg-white text-portfolio-primary"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-sm font-medium">Built with Love by Uniford</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="ml-2"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    </div>
  )
}

export default FloatingBadge;
