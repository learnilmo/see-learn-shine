import { motion } from "framer-motion";
import { Link2, Hand, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Open a link",
    description: "Teacher opens Ilmo on their phone. No downloads, no logins, no setup required.",
    color: "primary" as const,
    bgColor: "bg-primary",
  },
  {
    icon: Hand,
    title: "Explore together",
    description: "Students gather around and interact — rotating the model, tapping parts, asking questions.",
    color: "accent" as const,
    bgColor: "bg-accent",
  },
  {
    icon: Lightbulb,
    title: "Understanding happens",
    description: "Abstract concepts become tangible. Students see how things actually work.",
    color: "support" as const,
    bgColor: "bg-support",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 gradient-subtle">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-nova font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to transform any classroom
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full gradient-hero items-center justify-center text-primary-foreground text-xs font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className={`p-8 rounded-2xl transition-all duration-300 ${step.bgColor}`}>
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-white/20">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-xl font-display font-semibold mb-3 ${
                      step.color === "primary" ? "text-white" : "text-foreground"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={step.color === "primary" ? "text-white/80" : "text-foreground/70"}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
