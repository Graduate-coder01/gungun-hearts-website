
import { cn } from "@/lib/utils";
import { Music, Pause, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MusicControlProps {
  className?: string;
}

const MusicControl = ({ className }: MusicControlProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const audio = new Audio("https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_07_-_Downfall.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log("Audio playback prevented:", err);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cn("fixed z-50", className)}>
      <motion.div 
        initial={{ x: 100 }}
        animate={{ x: showControls ? 0 : 60 }}
        className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm py-2 pl-3 pr-2 rounded-l-full shadow-lg"
      >
        <button 
          onClick={() => setShowControls(!showControls)}
          className="rounded-full p-2 bg-gungun-purple text-white hover:bg-gungun-magenta transition-colors"
        >
          <Music size={16} />
        </button>
        
        {showControls && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-gungun-purple">Friendship Song</p>
            <button 
              onClick={togglePlay}
              className="rounded-full p-2 bg-gungun-rose text-white hover:bg-gungun-magenta transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MusicControl;
