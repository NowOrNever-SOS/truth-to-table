import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { label: "Tax burden per household", value: "$13,099/yr", sub: "#1 in the nation for median-income earners (WalletHub)" },
  { label: "Above national average", value: "52%", sub: "$4,472 extra per family, every year" },
  { label: "Low-income tax rate", value: "14%", sub: "Worst state in the country (WalletHub)" },
  { label: "Property tax rank", value: "#1", sub: "Highest effective rate in the nation — surpassed New Jersey" },
  { label: "Bond rating rank", value: "50th", sub: "Lowest of any U.S. state — even after 2025 upgrade" },
  { label: "Financial transparency rank", value: "50th", sub: "774 days late on financial reporting — a national record (Truth in Accounting)" },
];

const ExodusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 sm:py-32 px-6 section-divider" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-4">The Exodus</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="stat-number text-4xl sm:text-5xl"><AnimatedCounter end={420678} duration={2} /></span>
          </h2>
          <p className="text-2xl text-foreground font-serif">
            people didn't just move. They voted with their U-Haul.
          </p>
          <p className="text-subtext mt-4 max-w-xl mx-auto">
            Since 2020, Illinois has lost over 420,000 residents to domestic outmigration. 
            The people leaving are the taxpayers who were funding everything.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-card border border-border rounded-sm p-6"
            >
              <p className="font-mono text-[10px] text-subtext uppercase tracking-widest mb-3">{stat.label}</p>
              <p className="stat-number text-3xl mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-xl sm:text-2xl font-serif text-foreground italic leading-relaxed">
            This isn't a budget. It's a slow transfer of wealth from people who worked here 
            to a system that's been broken longer than your kids have been alive.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ExodusSection;
