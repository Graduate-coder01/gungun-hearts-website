
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [onLoadingComplete]);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-gungun-purple to-gungun-rose flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Heart className="text-white mb-8" size={60} fill="white" />
      </motion.div>
      
      <h2 className="text-2xl font-bold text-white mb-6">
        Loading something special for Gungun...
      </h2>
      
      <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mb-2">
        <motion.div 
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="text-white/80 text-sm">{progress}%</p>
    </motion.div>
  );
};

export default LoadingScreen;
