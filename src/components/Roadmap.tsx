import { motion } from "framer-motion";
import { Check, Circle, Rocket, Brain, Languages } from "lucide-react";

const milestones = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed" as const,
    items: [
      { text: "Human Skeleton 3D Model", done: true },
      { text: "Animal Cell Explorer", done: true },
      { text: "Solar System Journey", done: true },
      { text: "Mobile-first web experience", done: true },
    ],
    icon: Check,
    color: "bg-primary/15",
    textColor: "text-foreground",
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    status: "current" as const,
    items: [
      { text: "Electric Motor Simulation", done: false },
      { text: "Plant Cell Comparison", done: false },
      { text: "Water Cycle Visualization", done: false },
      { text: "Teacher dashboard", done: false },
    ],
    icon: Rocket,
    color: "bg-[hsl(140,40%,85%)]/40",
    textColor: "text-foreground",
  },
  {
    phase: "Phase 3",
    title: "Intelligence",
    status: "upcoming" as const,
    items: [
      { text: "AI-powered explanations", done: false },
      { text: "Voice commands & narration", done: false },
      { text: "Adaptive learning paths", done: false },
      { text: "Progress tracking", done: false },
    ],
    icon: Brain,
    color: "bg-support/20",
    textColor: "text-foreground",
  },
  {
    phase: "Phase 4",
    title: "Global Reach",
    status: "upcoming" as const,
    items: [
      { text: "Multi-language support", done: false },
      { text: "Offline-first experience", done: false },
      { text: "Gamification & rewards", done: false },
      { text: "Community contributions", done: false },
    ],
    icon: Languages,
    color: "bg-[hsl(280,60%,80%)]/30",
    textColor: "text-foreground",
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-nova font-bold mb-4">
            Building the <span className="text-primary">Future of Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our roadmap to making science education accessible worldwide
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Connection line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-border">
              <div 
                className="h-full gradient-hero" 
                style={{ width: '25%' }} 
              />
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Phase indicator */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3 ${milestone.color} ${milestone.textColor}`}
                    >
                      <milestone.icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${milestone.color} ${milestone.textColor}`}
                    >
                      {milestone.phase}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`p-5 rounded-xl ${milestone.color}`}
                  >
                    <h3 className={`text-lg font-display font-semibold mb-3 ${milestone.textColor}`}>
                      {milestone.title}
                    </h3>
                    <ul className="space-y-2">
                      {milestone.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          {item.done ? (
                            <Check className={`w-4 h-4 ${milestone.textColor} mt-0.5 shrink-0`} />
                          ) : (
                            <Circle className={`w-4 h-4 ${milestone.textColor} opacity-60 mt-0.5 shrink-0`} />
                          )}
                          <span className={`${milestone.textColor} ${item.done ? "" : "opacity-80"}`}>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-5 rounded-xl ${milestone.color}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/20 ${milestone.textColor}`}
                  >
                    <milestone.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs ${milestone.textColor} opacity-80`}>{milestone.phase}</span>
                    <h3 className={`text-lg font-display font-semibold ${milestone.textColor}`}>{milestone.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {milestone.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      {item.done ? (
                        <Check className={`w-4 h-4 ${milestone.textColor} mt-0.5 shrink-0`} />
                      ) : (
                        <Circle className={`w-4 h-4 ${milestone.textColor} opacity-60 mt-0.5 shrink-0`} />
                      )}
                      <span className={`${milestone.textColor} ${item.done ? "" : "opacity-80"}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
