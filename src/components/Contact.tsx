import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Handshake, Mail, ArrowRight } from "lucide-react";

const collaborationTypes = [
  {
    icon: Heart,
    title: "Funding & Grants",
    description: "Help us expand to more schools and communities. Your support creates lasting impact.",
    cta: "Explore Partnership",
    color: "primary" as const,
  },
  {
    icon: Handshake,
    title: "School Partnerships",
    description: "Bring Ilmo to your classrooms. We offer pilot programs and training for teachers.",
    cta: "Start a Pilot",
    color: "accent" as const,
  },
  {
    icon: Mail,
    title: "Get in Touch",
    description: "Have questions or ideas? We'd love to hear from you.",
    cta: "Contact Us",
    color: "support" as const,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 gradient-subtle">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-nova font-bold mb-4">
            Join the <span className="text-primary">Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Together, we can make quality science education accessible to every student
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {collaborationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-8 rounded-2xl border border-border hover:shadow-elevated transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  type.color === "primary"
                    ? "bg-primary/10"
                    : type.color === "accent"
                    ? "bg-accent/10"
                    : "bg-support/10"
                }`}
              >
                <type.icon
                  className={`w-8 h-8 ${
                    type.color === "primary"
                      ? "text-primary"
                      : type.color === "accent"
                      ? "text-accent"
                      : "text-support"
                  }`}
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {type.description}
              </p>
              <Button
                variant={type.color === "primary" ? "hero" : type.color === "accent" ? "accent" : "outline"}
                className={`w-full group/btn ${type.color === "support" ? "border-support text-support hover:bg-support hover:text-support-foreground" : ""}`}
              >
                {type.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-card border border-border"
        >
          <div className="w-16 h-16 rounded-full gradient-accent mx-auto mb-6 flex items-center justify-center">
            <Heart className="w-8 h-8 text-accent-foreground" />
          </div>
          <h3 className="text-2xl md:text-3xl font-nova font-bold mb-4">
            Quality education for{" "}
            <span className="text-gradient-hero">every school</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Not every school has a science lab. Not every student has access to expensive equipment. 
            But almost every teacher has a smartphone. Ilmo makes quality science education 
            accessible to schools that have been left behind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
