import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-20 px-6 section-divider" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-mono text-xs text-subtext tracking-widest uppercase mb-6">Sources & Methodology</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          All data sourced from WalletHub (2024, 2025), Illinois Comptroller CAFR reports, 
          Illinois Policy Institute analysis, U.S. Census Bureau population estimates, 
          and state budget documents. Every number is verifiable. 
          The critique is about fiscal policy and accountability — not a party bumper sticker.
        </p>
        <div className="w-16 h-px bg-border mx-auto mb-6" />
        <p className="text-subtext text-xs font-mono">
          Built by Illinoisans, for Illinoisans. Because now you know.
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
