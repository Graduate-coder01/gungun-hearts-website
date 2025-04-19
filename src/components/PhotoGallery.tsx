
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  className?: string;
}

const PhotoGallery = ({ className }: PhotoGalleryProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const photos = [
    {
      src: "/lovable-uploads/655deff5-0a4e-46cb-bc6c-198db013bee3.png",
      caption: "Car mein selfie time! Always ready with that beautiful smile ❤️",
    },
    {
      src: "/lovable-uploads/d492edd2-12b4-4e3d-b8e4-5068bde7ac07.png", 
      caption: "Traditional look mein jab tu purple saree mein aati hai, duniya ruk jaati hai ✨",
    },
    {
      src: "/lovable-uploads/cc9509c9-a726-4230-95f9-02be51dd2e18.png",
      caption: "Beach vibes! Your smile is brighter than the sunshine ☀️",
    },
    {
      src: "/lovable-uploads/2b7db44f-711f-4044-9361-a75982fb637c.png",
      caption: "That pink suit and the perfect pose! Looking absolutely stunning 💕",
    },
    {
      src: "/lovable-uploads/ac767a8f-c96e-42c4-a1d8-225460cac608.png",
      caption: "Temple visit mein bhi tu photoshoot ready! Festival vibes on point 🪔",
    },
  ];

  return (
    <section className={cn("py-16 relative", className)} id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-shimmer">
          Beautiful Memories Together
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={cn(
                "photo-frame group transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                { "delay-100": index % 3 === 0, "delay-300": index % 3 === 1, "delay-500": index % 3 === 2 }
              )}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={photo.src} 
                  alt={`Photo ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
