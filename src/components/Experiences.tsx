import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bone, Atom, Sun, Zap, ChevronLeft, ChevronRight, Maximize2, Minimize2, X, Globe, Smartphone, ChevronDown, ChevronUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import skeletonPreview from "@/assets/skeleton-preview.jpg";
import cellPreview from "@/assets/cell-preview.jpg";
import solarSystemPreview from "@/assets/solar-system-preview.jpg";
import motorPreview from "@/assets/motor-preview.jpg";

const experiences = [
  {
    id: "skeleton",
    icon: Bone,
    title: "Human Skeleton",
    description: "Explore the 206 bones of the human body. Rotate, zoom, and tap any bone to learn its name and function.",
    grade: "JS 2",
    learningOutcomes: [
      "Identify major bones in the human body",
      "Understand skeletal structure and function",
      "Learn bone names and locations",
    ],
    images: [skeletonPreview, skeletonPreview, skeletonPreview],
    color: "primary" as const,
    url: "https://ilmo-humanskeleton.netlify.app",
    ar: "https://8th.io/q6tdw",
  },
  {
    id: "cell",
    icon: Atom,
    title: "Animal Cell",
    description: "Dive inside a cell to discover organelles like the nucleus, mitochondria, and more.",
    grade: "JS 1",
    learningOutcomes: [
      "Identify cell organelles",
      "Understand organelle functions",
      "Compare plant and animal cells",
    ],
    images: [cellPreview, cellPreview, cellPreview],
    color: "accent" as const,
    url: "https://ilmo-animalcell.netlify.app",
    ar: "",
  },
  {
    id: "solar-system",
    icon: Sun,
    title: "Solar System",
    description: "Journey through space to explore planets, moons, and the sun. Compare sizes and learn about orbits.",
    grade: "JS 3",
    learningOutcomes: [
      "Name planets in order from the sun",
      "Compare planet sizes and distances",
      "Understand orbital mechanics",
    ],
    images: [solarSystemPreview, solarSystemPreview, solarSystemPreview],
    color: "support" as const,
    url: "https://ilmo-solarsystem.netlify.app",
    ar: "https://8th.io/984ft",
  },
  {
    id: "motor",
    icon: Zap,
    title: "Simple Motor",
    description: "Build and understand a simple electric motor. See how electricity, magnetism, and motion connect.",
    grade: "JS 3",
    learningOutcomes: [
      "Understand electromagnetic principles",
      "Learn how motors convert electricity to motion",
      "Identify motor components and their roles",
    ],
    images: [motorPreview, motorPreview, motorPreview],
    color: "primary" as const,
    url: "",
    ar: "",
    comingSoon: true,
  },
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const handleStart = (exp: typeof experiences[0]) => {
    setSelectedExperience(exp);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedExperience(null);
    setCurrentImageIndex(0);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const toggleExpanded = (id: string) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handlePrevious = () => {
    if (selectedExperience) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedExperience.images.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedExperience) {
      setCurrentImageIndex((prev) => 
        prev === selectedExperience.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-nova font-bold mb-4">
            Try the <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open these on any phone to see Ilmo in action
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const isExpanded = expandedCards.has(exp.id);
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  exp.color === "primary"
                    ? "bg-primary"
                    : exp.color === "accent"
                    ? "bg-accent"
                    : "bg-support"
                }`}
              >
                {/* Image */}
                <div className={`h-40 overflow-hidden relative ${
                  exp.comingSoon ? "grayscale" : ""
                }`}>
                  <img
                    src={exp.images[0]}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {exp.comingSoon && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/20">
                      <exp.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-display font-semibold ${
                        exp.color === "primary" ? "text-white" : "text-foreground"
                      }`}>
                        {exp.title}
                      </h3>
                      <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-1 bg-white/20 text-white">
                        Grade: {exp.grade}
                      </span>
                    </div>
                  </div>

                  {/* View More Button */}
                  <button
                    onClick={() => toggleExpanded(exp.id)}
                    className={`flex items-center gap-1 text-sm font-medium mb-3 transition-colors ${
                      exp.color === "primary" ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {isExpanded ? "View less" : "View more"}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className={`text-sm mb-3 ${
                          exp.color === "primary" ? "text-white/80" : "text-foreground/70"
                        }`}>
                          {exp.description}
                        </p>

                        <div className="mb-4">
                          <p className={`text-xs font-semibold mb-1.5 ${
                            exp.color === "primary" ? "text-white" : "text-foreground"
                          }`}>Learning Outcomes:</p>
                          <ul className={`text-xs space-y-1 ${
                            exp.color === "primary" ? "text-white/70" : "text-foreground/60"
                          }`}>
                            {exp.learningOutcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-white" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Dual buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className={`flex-1 bg-white border-white text-foreground hover:bg-white/90 hover:text-foreground`}
                      onClick={() => window.open(exp.url, '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-1.5" />
                      View Online
                    </Button>
                    <Button
                      variant="outline"
                      className={`flex-1 border-2 border-white bg-transparent hover:bg-white/10 ${
                        exp.color === "primary" ? "text-white" : "text-foreground"
                      }`}
                      onClick={() => window.open(exp.ar, '_blank')}
                    >
                      <Smartphone className="w-4 h-4 mr-1.5" />
                      Try in AR
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Experience Modal - Pinterest Style */}
      <Dialog open={!!selectedExperience} onOpenChange={handleClose}>
        <DialogContent 
          hideCloseButton
          className={`p-0 overflow-hidden transition-all duration-300 border-none bg-transparent shadow-none ${
            isFullscreen 
              ? "max-w-[100vw] w-screen h-screen max-h-screen rounded-none" 
              : "max-w-4xl"
          }`}
        >
          {selectedExperience && (
            <>
              {/* Close Button - Top Left Pinterest Style */}
              <DialogClose className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6 text-gray-800" />
                <span className="sr-only">Close</span>
              </DialogClose>

              {/* Fullscreen Toggle - Top Right */}
              <button
                onClick={toggleFullscreen}
                className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5 text-gray-800" />
                ) : (
                  <Maximize2 className="w-5 h-5 text-gray-800" />
                )}
              </button>

              {/* Centered Content */}
              <div className={`flex flex-col items-center justify-center ${isFullscreen ? "h-full" : ""}`}>
                {/* Main Image Container */}
                <div className={`relative ${isFullscreen ? "w-full h-full flex items-center justify-center p-12" : "max-w-2xl w-full"}`}>
                  <div className={`rounded-2xl overflow-hidden shadow-2xl ${isFullscreen ? "max-h-[80vh]" : "aspect-[4/5]"}`}>
                    <img
                      src={selectedExperience.images[currentImageIndex]}
                      alt={`${selectedExperience.title} preview ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <h3 className="text-2xl md:text-3xl font-nova font-bold text-white mb-2">
                        {selectedExperience.title}
                      </h3>
                      <span
                        className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${
                          selectedExperience.color === "primary"
                            ? "bg-primary/80 text-white"
                            : selectedExperience.color === "accent"
                            ? "bg-accent/80 text-gray-900"
                            : "bg-support/80 text-gray-900"
                        }`}
                      >
                        Grade: {selectedExperience.grade}
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={handlePrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                  </div>

                  {/* Thumbnails - Bottom */}
                  <div className="flex gap-2 justify-center mt-4">
                    {selectedExperience.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all shadow-md ${
                          idx === currentImageIndex
                            ? "border-white scale-110"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Experiences;