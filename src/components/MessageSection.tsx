
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface MessageSectionProps {
  className?: string;
}

const MessageSection = ({ className }: MessageSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const element = document.getElementById('message-section');
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

  return (
    <section id="message-section" className={cn("py-16 relative", className)}>
      <div 
        className={cn(
          "container mx-auto px-4 max-w-3xl glass-card p-8 md:p-12 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}
      >
        <div className="text-center mb-8">
          <Heart className="inline-block text-gungun-rose animate-heart-float mb-4" size={32} fill="currentColor" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gungun-purple">
            A Special Message For You
          </h2>
        </div>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">Gungun</span>, meri life ki sabse important person! Pata hai, jab se tu meri life mein aayi hai, sab kuch kitna colorful ho gaya hai.
            6 saal ho gaye hamari dosti ko, lekin lagta hai jaise kal hi mile the.
          </p>
          
          <p className="text-lg leading-relaxed">
            Tere saath bitaye har pal, har memory mere liye bohot special hai. Life mein tu meri strongest support system hai!
            Thank you for always being there, for all the late-night calls, for supporting me, and for celebrating every small happiness together.
          </p>
          
          <p className="text-lg leading-relaxed font-medium">
            Tu sabse unique hai, aur meri life ka most beautiful part hai! Hamari dosti humesha aise hi bani rahe. 
            I promise main bhi humesha tere liye rahunga, no matter what!
          </p>
          
          <div className="pt-4 text-right">
            <p className="text-gungun-magenta font-semibold text-lg">Always here for you,</p>
            <p className="text-gungun-purple font-bold text-xl">Tere Bestie 💯</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
