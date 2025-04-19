
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const FriendshipRibbon = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
      style={{ opacity, y }}
    >
      <div className="bg-gradient-to-r from-gungun-purple/80 via-gungun-magenta/80 to-gungun-rose/80 backdrop-blur-sm py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-3">
          <Heart className="w-4 h-4 text-white" fill="white" />
          <p className="text-white text-sm font-medium">Gungun & Me - Best Friends Forever</p>
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default FriendshipRibbon;
