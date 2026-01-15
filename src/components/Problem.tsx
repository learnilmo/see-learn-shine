import { motion } from "framer-motion";
import { BookOpen, Eye, ArrowRight } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-nova font-bold mb-4">
              The Problem We're Solving
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Millions of students learn science through memorization, not understanding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-8 rounded-2xl bg-muted/50 border border-border"
            >
              <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-muted-foreground/20 text-muted-foreground text-sm font-medium">
                Without Ilmo
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted-foreground/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-muted-foreground">
                    Memorize diagrams
                  </h3>
                  <p className="text-muted-foreground/80">
                    Students stare at flat images in textbooks, trying to memorize labels without understanding structure.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                  No labs or 3D models available
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                  Concepts stay abstract and confusing
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                  Students forget after exams
                </li>
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-8 rounded-2xl bg-primary/5 border border-primary/20"
            >
              <div className="absolute -top-4 left-8 px-4 py-1 rounded-full gradient-hero text-primary-foreground text-sm font-medium">
                With Ilmo
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    See and explore
                  </h3>
                  <p className="text-muted-foreground">
                    Students rotate 3D models, tap parts to learn names, and discover how systems work together.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  Works on any smartphone browser
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  Whole class learns together
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  Understanding sticks for life
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
