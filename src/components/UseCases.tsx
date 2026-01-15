import { motion } from "framer-motion";
import { School, Users, Home, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import usecaseClassroom from "@/assets/usecase-classroom.jpg";
import usecaseNgo from "@/assets/usecase-ngo.jpg";
import usecaseHome from "@/assets/usecase-home.jpg";
import usecaseRemote from "@/assets/usecase-remote.jpg";

const useCases = [
  {
    icon: School,
    title: "Classroom Teaching",
    description: "Teachers project Ilmo or gather students around one phone. The whole class explores together.",
    image: usecaseClassroom,
    stats: "30+ students per session",
    color: "bg-[#FFCE00]",
    textColor: "text-[#2D2D2D]",
  },
  {
    icon: Users,
    title: "NGO Workshops",
    description: "Bring science to underserved communities. No infrastructure needed — just a smartphone.",
    image: usecaseNgo,
    stats: "Works offline after first load",
    color: "bg-[#02873E]",
    textColor: "text-white",
  },
  {
    icon: Home,
    title: "Home Learning",
    description: "Students explore on their own, at their own pace. Parents can learn alongside their children.",
    image: usecaseHome,
    stats: "Self-paced exploration",
    color: "bg-[#0061EF]",
    textColor: "text-white",
  },
  {
    icon: Globe,
    title: "Remote Areas",
    description: "Schools without labs can now teach with 3D models. Equal access to quality education.",
    image: usecaseRemote,
    stats: "Any phone, any browser",
    color: "bg-[#3B197F]",
    textColor: "text-white",
  },
];

const UseCases = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="use-cases" className="py-20 md:py-32 gradient-subtle">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-nova font-bold mb-4">
            Where Ilmo <span className="text-primary">Makes an Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From classrooms to community centers, Ilmo adapts to how you teach
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className="flex-[0_0_100%] min-w-0 px-4 md:px-8"
                >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`${useCase.color} rounded-3xl p-8 md:p-16 lg:p-20`}
                  >
                    {/* Two column layout */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center">
                      {/* Image column */}
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-lg max-w-[280px] mx-auto">
                          <img
                            src={useCase.image}
                            alt={useCase.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Text column */}
                      <div className="w-full md:w-2/3 flex flex-col justify-center">
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                          <useCase.icon className={`w-5 h-5 ${useCase.textColor}`} />
                        </div>

                        {/* Content */}
                        <h3 className={`text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 ${useCase.textColor}`}>
                          {useCase.title}
                        </h3>
                        <p className={`text-base md:text-lg mb-5 ${useCase.textColor} opacity-90 max-w-md`}>
                          {useCase.description}
                        </p>
                        <span className={`inline-block self-start text-xs font-medium px-3 py-1.5 rounded-full bg-white/30 ${useCase.textColor}`}>
                          {useCase.stats}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-muted transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-muted transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;