
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const ParallaxHearts = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [heartElements, setHeartElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const hearts = [];
    for (let i = 0; i < 12; i++) {
      const depth = Math.random() * 0.5 + 0.2; // Between 0.2 and 0.7
      hearts.push(
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            opacity: depth * 0.8,
            scale: depth,
          }}
          animate={{
            x: mousePosition.x * depth * -0.04, // Move opposite to mouse for parallax
            y: mousePosition.y * depth * -0.04,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        >
          <Heart
            size={depth * 40}
            className="text-gungun-rose"
            fill={i % 3 === 0 ? "#FF719A" : i % 3 === 1 ? "#D946EF" : "#8B5CF6"}
          />
        </motion.div>
      );
    }
    setHeartElements(hearts);
  }, [mousePosition.x, mousePosition.y]);

  return <div className="fixed inset-0 overflow-hidden z-0">{heartElements}</div>;
};

export default ParallaxHearts;
