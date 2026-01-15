import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Smartphone } from "lucide-react";

const TryDemo = () => {
  return (
    <section id="try-demo" className="py-20 md:py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-nova font-bold mb-4">
            Try It <span className="text-primary">Right Now</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No signup, no download. Just point your phone and explore.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Demo 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Human Skeleton
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">
                  Explore the Skeleton
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Rotate and tap any bone to learn its name. Perfect for biology class.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Smartphone className="w-4 h-4" />
                  <span>Works on any smartphone</span>
                </div>
              </div>
            </motion.div>

            {/* Demo 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Animal Cell
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">
                  Dive Into a Cell
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  See organelles up close. Understand what textbook diagrams can't show.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Smartphone className="w-4 h-4" />
                  <span>Works on any smartphone</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* QR Code hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Button variant="hero" size="lg">
              Open Demo on Your Phone
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Or scan the QR code that appears
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TryDemo;
