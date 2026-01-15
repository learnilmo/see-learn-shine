import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 md:py-32 gradient-subtle">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full gradient-accent mx-auto mb-8 flex items-center justify-center">
            <Heart className="w-8 h-8 text-accent-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-nova font-bold mb-6">
            Quality education for{" "}
            <span className="text-gradient-hero">every school</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Not every school has a science lab. Not every student has access to expensive equipment. 
            But almost every teacher has a smartphone. Ilmo makes quality science education 
            accessible to schools that have been left behind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
