
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AnalyticItem {
  label: string;
  value: number;
  icon: string;
  suffix: string;
  color: string;
}

const analytics: AnalyticItem[] = [
  {
    label: "Total Projects",
    value: 32,
    icon: "📊",
    suffix: "+",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    label: "Lives Impacted",
    value: 15000,
    icon: "👥",
    suffix: "+",
    color: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    label: "Countries Reached",
    value: 12,
    icon: "🌎",
    suffix: "",
    color: "bg-gradient-to-br from-amber-500 to-orange-600"
  },
  {
    label: "Collaborations",
    value: 87,
    icon: "🤝",
    suffix: "+",
    color: "bg-gradient-to-br from-purple-500 to-violet-600"
  }
];

const ImpactAnalytics = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">Making a Difference</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Impact Analytics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Measuring the reach and impact of our innovations and initiatives around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analytics.map((item, index) => (
            <AnalyticCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnalyticCard = ({ item }: { item: AnalyticItem }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = item.value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current > item.value) {
        setCount(item.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [item.value]);

  return (
    <Card className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`h-2 w-full ${item.color}`}></div>
      <CardContent className="p-6">
        <div className="text-4xl mb-3">
          {item.icon}
        </div>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold">
            {count.toLocaleString()}
          </span>
          <span className="text-2xl font-bold text-gray-500">
            {item.suffix}
          </span>
        </div>
        <h3 className="text-lg font-medium text-gray-600 mt-2">{item.label}</h3>
      </CardContent>
    </Card>
  );
};

export default ImpactAnalytics;
