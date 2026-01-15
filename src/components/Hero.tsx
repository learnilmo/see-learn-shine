import { motion } from "framer-motion";
import { Smartphone, Users, Sparkles } from "lucide-react";
import mascot from "@/assets/mascot.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Decorative flat illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes - Headspace style */}
        <motion.div
          className="absolute top-20 right-[10%] w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-[5%] w-16 h-16 md:w-20 md:h-20 bg-support rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-32 right-[15%] w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-20 h-20 md:w-28 md:h-28"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={mascot} alt="Ilmo mascot" className="w-full h-full" />
        </motion.div>
        {/* Abstract wave shape */}
        <svg 
          className="absolute bottom-0 left-0 right-0 w-full h-32 md:h-48"
          viewBox="0 0 1440 200" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,160 C320,200 420,120 720,140 C1020,160 1140,100 1440,120 L1440,200 L0,200 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-primary-foreground text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>No apps. No headsets. One phone is enough.</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-nova font-bold leading-tight mb-6 text-primary-foreground"
          >
            AI-Powered{" "}
            <span className="text-accent">Visual Learning</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10"
          >
            Ilmo turns any smartphone into an interactive 3D learning experience. 
            Students explore complex concepts together — no expensive equipment needed.
          </motion.p>

          {/* CTA Button - Headspace style yellow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="#experiences"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Try for free
            </a>
          </motion.div>

          {/* Stats - Flat design with mascot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-display font-bold text-primary-foreground">1</p>
                <p className="text-sm text-primary-foreground/80">Phone needed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                <Users className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-display font-bold text-primary-foreground">30+</p>
                <p className="text-sm text-primary-foreground/80">Students per session</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-support flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-support-foreground" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-display font-bold text-primary-foreground">0</p>
                <p className="text-sm text-primary-foreground/80">Apps to install</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
