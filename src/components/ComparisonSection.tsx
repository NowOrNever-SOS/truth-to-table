import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  {
    says: '"We balanced the budget!"',
    truth: "The pension debt grew anyway — to $147.8B",
  },
  {
    says: '"We paid a record amount into pensions"',
    truth: "The debt still grew. Interest outran the payment. ($11.2B)",
  },
  {
    says: '"We serve ALL residents"',
    truth: "$2.5B+ on migrant care by end of 2025. Meanwhile, 95% of the residents leaving go to lower-tax states.",
  },
  {
    says: '"Illinois is a great place to live"',
    truth: "420,678 people left for other states since 2020",
  },
  {
    says: '"We\'re fiscally responsible"',
    truth: "Lowest bond rating in the nation — 13 years running.",
  },
  {
    says: '"Taxes fund vital services"',
    truth: "28¢ of every General Fund dollar goes to pensions & debt before one classroom gets a teacher",
  },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 sm:py-32 px-6 section-divider" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-4">The Side-by-Side</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">What They Say</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-stat">vs. What The Numbers Show</h2>
        </motion.div>

        <div className="space-y-4">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-0 bg-card border border-border rounded-sm overflow-hidden"
            >
              <div className="p-5 sm:p-6 bg-secondary border-b sm:border-b-0 sm:border-r border-border">
                <p className="font-mono text-[10px] text-subtext uppercase tracking-widest mb-2">Illinois says</p>
                <p className="text-foreground font-serif text-lg leading-snug">{item.says}</p>
              </div>
              <div className="p-5 sm:p-6">
                <p className="font-mono text-[10px] text-stat uppercase tracking-widest mb-2">The numbers show</p>
                <p className="text-muted-foreground leading-snug">{item.truth}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
