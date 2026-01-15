import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2">
            <img src={logo} alt="Ilmo" className="h-8" />
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            Making learning visual.
          </p>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ilmo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
