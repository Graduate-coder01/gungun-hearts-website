
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gungun-pink/20 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart size={16} className="text-gungun-rose" fill="currentColor" />
          <p className="text-sm text-gray-600">Made with love for my bestie</p>
          <Heart size={16} className="text-gungun-rose" fill="currentColor" />
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} • Friendship Forever • Gungun Goyal's Special Place
        </p>
      </div>
    </footer>
  );
};

export default Footer;
