import FloatingBadges from "@/components/FloatingBadges";
import FloatingHearts from "@/components/FloatingHearts";
import Footer from "@/components/Footer";
import FriendshipQuote from "@/components/FriendshipQuote";
import FriendshipRibbon from "@/components/FriendshipRibbon";
import FriendshipTimeline from "@/components/FriendshipTimeline";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";
import MemoriesSection from "@/components/MemoriesSection";
import MessageSection from "@/components/MessageSection";
import MusicControl from "@/components/MusicControl";
import ParallaxHearts from "@/components/ParallaxHearts";
import PhotoGallery from "@/components/PhotoGallery";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SurpriseButton from "@/components/SurpriseButton";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "❤️ For Gungun - My Bestie Forever";
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-gungun-lavender/20 to-gungun-peach/30">
          <FriendshipRibbon />
          <ParallaxHearts />
          <FloatingHearts />
          <FloatingBadges />
          <MusicControl className="top-4 right-0" />
          <ScrollToTopButton />
          <SurpriseButton />
          <HeroSection />
          <FriendshipQuote />
          <PhotoGallery />
          <FriendshipTimeline />
          <MemoriesSection />
          <MessageSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
