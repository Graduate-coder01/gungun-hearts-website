
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TimelineMilestone from "./TimelineMilestone";

interface FriendshipTimelineProps {
  className?: string;
}

const FriendshipTimeline = ({ className }: FriendshipTimelineProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const element = document.getElementById('timeline-section');
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

  const milestones = [
    {
      year: "2018",
      title: "First Meeting",
      description: "Pehli baar jab hum mile, pata hi nahi tha ki tu meri sabse important person ban jayegi!"
    },
    {
      year: "2019",
      title: "School Trip",
      description: "Vo school trip yaad hai? Kitna maza kiya tha humne. First time jab hum roommates bane the!"
    },
    {
      year: "2020",
      title: "COVID Lockdown",
      description: "Covid mein bhi, phone pe baatein karke kitna time pass kiya. Distance physically tha, but dil se nahi!"
    },
    {
      year: "2021",
      title: "Birthday Celebration",
      description: "Your surprise birthday party! Kitna roya tha tu khushi se. Best din tha vo!"
    },
    {
      year: "2022",
      title: "College Life Begins",
      description: "College alag-alag hone ke baad bhi, hamari dosti utni hi strong rahi. Distance doesn't matter!"
    },
    {
      year: "2023",
      title: "Travel Adventures",
      description: "Hill station pe vo trip! Kitni photos li, kitna ghume, aur kitne secrets share kiye!"
    },
    {
      year: "2024",
      title: "Today & Forever",
      description: "6 saal ho gaye, aur abhi toh aur bohot saare memories create karne hai together!"
    }
  ];

  return (
    <section id="timeline-section" className={cn("py-16 relative", className)}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-shimmer"
        >
          Our Friendship Timeline
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <TimelineMilestone
              key={index}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendshipTimeline;
