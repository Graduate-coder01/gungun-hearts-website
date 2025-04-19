
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hearts.length > 20) {
        setHearts((prev) => prev.slice(1));
      }
      
      const newHeart = {
        id: Date.now(),
        style: {
          left: `${Math.random() * 100}vw`,
          fontSize: `${Math.random() * 1.5 + 0.5}rem`,
          animationDuration: `${Math.random() * 15 + 5}s`,
          animationDelay: `${Math.random() * 2}s`,
        },
      };
      
      setHearts((prev) => [...prev, newHeart]);
    }, 800);

    return () => clearInterval(interval);
  }, [hearts.length]);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="floating-heart"
          style={heart.style}
          fill="#FF719A"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
