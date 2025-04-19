
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const badges = [
  "Best Friends Forever",
  "Partners in Crime",
  "6 Saal Ki Dosti",
  "BFF Goals",
  "Yaaron Ki Yaari",
  "Soul Sister",
  "Gungun & Me",
  "Besties For Life",
  "Friendship Forever",
  "Dosti Zindabad",
  "True Friend",
  "Life Long Bond"
];

const colors = [
  "bg-gungun-purple text-white",
  "bg-gungun-magenta text-white",
  "bg-gungun-rose text-white",
  "bg-gungun-pink text-gungun-purple",
  "bg-gungun-lavender text-gungun-magenta",
  "bg-gungun-peach text-gungun-rose"
];

const FloatingBadges = () => {
  const [badgeElements, setBadgeElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const elements = badges.map((badge, index) => {
      const colorClass = colors[index % colors.length];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 20;
      
      return (
        <motion.div
          key={index}
          className={`${colorClass} px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-md absolute`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            y: [0, -10, -20, -30],
          }}
          transition={{
            duration: 8,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            repeatDelay: delay,
            delay: delay
          }}
        >
          {badge}
        </motion.div>
      );
    });
    
    setBadgeElements(elements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {badgeElements}
    </div>
  );
};

export default FloatingBadges;
