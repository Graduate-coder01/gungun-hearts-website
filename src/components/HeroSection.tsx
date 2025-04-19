
import { cn } from "@/lib/utils";
import { Heart, Sparkles, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("relative pt-20 pb-16 overflow-hidden", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-gungun-lavender rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-1/3 -right-12 w-80 h-80 bg-gungun-pink rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gungun-peach rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
        <Sparkles className="inline-block text-gungun-magenta animate-heart-float mb-4" size={32} />
        <h1 
          className={cn(
            "text-4xl md:text-6xl font-bold mb-6 text-gungun-purple transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-shimmer">Gungun Goyal</span>
        </h1>
        <div 
          className={cn(
            "flex justify-center items-center gap-2 text-2xl md:text-3xl font-medium mb-8 text-gungun-magenta transition-all duration-1000 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p>Meri Sabse Pyaari Dost</p>
          <Heart className="inline-block animate-heart-float" size={24} fill="currentColor" />
        </div>
        <p 
          className={cn(
            "max-w-2xl mx-auto text-lg md:text-xl text-gray-700 mb-8 leading-relaxed transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="font-semibold">6 saal</span> ki hamari dosti, 
          <span className="font-semibold"> infinity</span> ke moments, aur 
          <span className="font-semibold"> lifetime</span> ki yaadein. Tujhse better 
          <span className="font-semibold"> dost koi ho hi nahi sakta!</span>
        </p>
        <div 
          className={cn(
            "flex justify-center space-x-2 transition-all duration-1000 delay-400 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400" fill="currentColor" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
