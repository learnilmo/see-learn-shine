import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-soft"
          : "bg-white"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Ilmo" 
              className="h-8 md:h-10 group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#experiences"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Experiences
            </a>
            <a
              href="#roadmap"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Roadmap
            </a>
            <a
              href="#contact"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-foreground/10"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#experiences"
                className="text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experiences
              </a>
              <a
                href="#roadmap"
                className="text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Roadmap
              </a>
              <a
                href="#contact"
                className="text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
