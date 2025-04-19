
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineMilestoneProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

const TimelineMilestone = ({ 
  year, 
  title, 
  description, 
  isLeft = false 
}: TimelineMilestoneProps) => {
  return (
    <div className={cn(
      "grid grid-cols-9 gap-0 mb-8",
    )}>
      {isLeft ? (
        <>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-4 pr-4 text-right"
          >
            <div className="glass-card p-4">
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          </motion.div>
          <div className="col-span-1 relative flex items-center justify-center">
            <div className="h-full w-1 bg-gungun-magenta/30 absolute"></div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="bg-gungun-purple rounded-full w-6 h-6 z-10 flex items-center justify-center"
            >
              <div className="bg-white rounded-full w-3 h-3"></div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-4 pl-4 flex items-center"
          >
            <div className="text-gungun-magenta font-bold">{year}</div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-4 pr-4 flex items-center justify-end"
          >
            <div className="text-gungun-magenta font-bold">{year}</div>
          </motion.div>
          <div className="col-span-1 relative flex items-center justify-center">
            <div className="h-full w-1 bg-gungun-magenta/30 absolute"></div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="bg-gungun-purple rounded-full w-6 h-6 z-10 flex items-center justify-center"
            >
              <div className="bg-white rounded-full w-3 h-3"></div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-4 pl-4"
          >
            <div className="glass-card p-4">
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default TimelineMilestone;
