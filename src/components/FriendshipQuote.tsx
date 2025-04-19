
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

const quotes = [
  "Tu meri best friend hai, aur humesha rahegi ❤️",
  "6 saal ki dosti, aur lifetime ki yaadein ✨",
  "Tere jaisa dost sabko mile, but you're exclusively mine 💝",
  "Best friends nahi, soul sisters hain hum 👯‍♀️",
  "Tu hai toh life beautiful hai 🌟",
  "Gungun & Me - Besties Forever 💫",
  "Yaaron ki yaari, duniya se pyaari ❤️",
  "Hamari dosti ka koi end nahi, it's forever and ever 💖",
  "Life kuchh bhi throw kare, we face it together 🤝",
  "Tere jaisa dost mile toh life sorted hai ✨"
];

const FriendshipQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gungun-lavender/20 via-gungun-peach/20 to-gungun-pink/20 opacity-50"></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="glass-card py-12 px-6 max-w-3xl mx-auto relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-12 h-12 text-gungun-rose" fill="currentColor" />
            </motion.div>
          </div>
          
          <Sparkles className="absolute top-4 left-4 text-gungun-purple w-6 h-6" />
          <Star className="absolute bottom-4 right-4 text-gungun-magenta w-6 h-6" fill="currentColor" />
          
          <p className="text-2xl md:text-3xl font-medium text-gungun-purple italic leading-relaxed">
            "{quotes[currentQuote]}"
          </p>
          
          <motion.div 
            className="mt-6 flex justify-center gap-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {[...Array(3)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-5 h-5 text-gungun-rose" 
                fill="currentColor"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FriendshipQuote;
