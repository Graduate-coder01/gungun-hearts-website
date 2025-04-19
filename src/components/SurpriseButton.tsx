import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SurpriseButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button
        className="fixed right-6 bottom-6 bg-gungun-rose text-white rounded-full p-3 shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Heart size={24} fill="white" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 max-w-xs w-full p-6 rounded-lg shadow-xl z-50 glass-card border border-white/50"
          >
            <h3 className="text-xl font-bold mb-3 text-gungun-purple">Special Message</h3>
            <p className="text-gray-700 mb-4">
              Bro/Sis, tu meri life ka sabse special part hai! Hamari dosti ke liye always grateful hu. Tu amazing hai! 👊
            </p>
            <div className="text-center">
              <ConfettiButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Confetti explosion button
const ConfettiButton = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);

  const createConfetti = () => {
    const newConfetti = [];
    const colors = ["#FF719A", "#D946EF", "#8B5CF6", "#FDE1D3"];
    
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newConfetti.push(
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: (Math.random() - 0.5) * 200,
            y: Math.random() * -200,
            scale: 0,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          transition={{ duration: 1.5 }}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      );
    }
    
    setConfetti(newConfetti);
    
    // Clear confetti after animation completes
    setTimeout(() => {
      setConfetti([]);
    }, 1500);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "px-4 py-2 rounded-full",
          "bg-gradient-to-r from-gungun-purple to-gungun-rose",
          "text-white font-semibold",
          "shadow-md hover:shadow-lg"
        )}
        onClick={createConfetti}
      >
        Yo bestie! High five! 🙌
      </motion.button>
      {confetti}
    </div>
  );
};

export default SurpriseButton;
