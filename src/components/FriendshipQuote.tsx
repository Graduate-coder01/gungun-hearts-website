
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  "Dosti ka matlab hai kabhi chhorna nahi, chahe koi situation ho ❤️",
  "Best friends are the people in your life who make you laugh louder, smile brighter and live better",
  "Friendship isn't about who you've known the longest. It's about who walked into your life and said 'I'm here for you' and proved it.",
  "A good friend knows all your stories. A best friend helped you write them.",
  "Yaaron ki yaari, jindagi se bhi pyaari ❤️",
  "Friends are the family we choose for ourselves.",
  "Hamari dosti ka koi end nahi, it's forever ❤️",
  "Life kuchh bhi throw kare, we face it together!",
  "Tere jaisa dost mile toh life sorted hai ❤️"
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
    <section className="py-10 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="glass-card py-8 px-4 max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-medium text-gungun-purple italic">
            "{quotes[currentQuote]}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FriendshipQuote;
