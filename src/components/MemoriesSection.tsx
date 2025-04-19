
import { cn } from "@/lib/utils";
import { Calendar, Gift, Music, Coffee, Map, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface MemoriesSectionProps {
  className?: string;
}

const MemoriesSection = ({ className }: MemoriesSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const element = document.getElementById('memories-section');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.8;
      
      if (isInView) {
        setIsVisible(true);
        window.removeEventListener('scroll', checkVisibility);
      }
    };
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
    
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  const memories = [
    {
      title: "First Meeting",
      description: "6 saal pehle jab hum mile, pata nahi tha ki tu meri best friend ban jayegi! Yaad hai vo din?",
      icon: Calendar,
      color: "text-gungun-magenta",
    },
    {
      title: "Birthday Surprises",
      description: "Har birthday pe new surprises! Tere surprise gifts kabhi nahi bhulungi, especially vo handmade card.",
      icon: Gift,
      color: "text-gungun-purple",
    },
    {
      title: "Late Night Talks",
      description: "3 baje tak phone pe baatein, life problems solve karna, aur ghost stories sunana! Best therapy ever!",
      icon: Coffee,
      color: "text-gungun-rose",
    },
    {
      title: "Trips Together",
      description: "Remember vo hill station trip? Kitna maza aaya tha! Aur bhi bohot saare trips plan karenge!",
      icon: Map,
      color: "text-blue-500",
    },
    {
      title: "Dancing Queens",
      description: "School function mein together dance practice! Tujhse accha dance partner koi nahi!",
      icon: Music,
      color: "text-green-500",
    },
    {
      title: "Always Supporting",
      description: "Jab bhi life mein problem ho, tu humesha saath rehti hai. Thank you for being my support system!",
      icon: Star,
      color: "text-yellow-500",
    },
  ];

  return (
    <section id="memories-section" className={cn("py-16 relative", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-shimmer">
          Our Precious Memories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className={cn(
                "memory-card",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20",
                { 
                  "transition-all duration-500 delay-100": index % 3 === 0, 
                  "transition-all duration-500 delay-300": index % 3 === 1, 
                  "transition-all duration-500 delay-500": index % 3 === 2 
                }
              )}
            >
              <div className={cn("rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4", memory.color)}>
                <memory.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{memory.title}</h3>
              <p className="text-gray-700">{memory.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
