import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const receiptItems = [
  { label: "State Income Tax", value: "$35.1B" },
  { label: "Property Tax (median household)", value: "$4,942/yr" },
  { label: 'Sin Revenue (gambling/weed/lottery)', value: "$3.4B" },
  { label: "Federal Pass-Through", value: "$39.5B" },
];

const hiddenItems = [
  { label: "Pension Debt", value: "$147.8B", alert: true },
  { label: "Total Liabilities", value: "$228.5B", alert: true },
  { label: 'Sanctuary Care (FY23–25)', value: "$2.5B+", alert: true },
];

const ReceiptSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 px-6 section-divider" ref={ref}>
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-4">The Receipt</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Your Illinois Bill</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-border rounded-sm p-8 receipt-shadow font-mono text-sm"
        >
          {/* Header */}
          <div className="text-center border-b border-border pb-6 mb-6">
            <p className="text-lg font-bold text-foreground tracking-wider">STATE OF ILLINOIS</p>
            <p className="text-subtext text-xs mt-1">THANK YOU FOR YOUR RESIDENCY</p>
          </div>

          {/* Regular items */}
          <div className="space-y-3 mb-6">
            {receiptItems.map((item, i) => (
              <div key={i} className="flex justify-between text-muted-foreground">
                <span>{item.label}</span>
                <span className="text-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-border border-dashed pt-4 mb-4">
            <div className="flex justify-between text-muted-foreground">
              <span>SUBTOTAL IN</span>
              <span className="text-foreground">$126.3B</span>
            </div>
            <div className="flex justify-between text-muted-foreground mt-1">
              <span>SUBTOTAL OUT</span>
              <span className="text-foreground">$125.8B</span>
            </div>
          </div>

          {/* The reveal */}
          <div className="border-t border-stat pt-6 mt-6">
            <p className="text-stat text-xs tracking-widest uppercase mb-4">⚠ Tab we didn't mention</p>
            <div className="space-y-3">
              {hiddenItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className="flex justify-between"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="text-stat font-bold">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
            className="border-t border-border border-double mt-6 pt-6"
          >
            <div className="flex justify-between items-baseline">
              <span className="text-foreground font-bold tracking-wider">YOUR PERSONAL SHARE</span>
              <span className="text-stat text-2xl font-bold">$38,800</span>
            </div>
            <p className="text-subtext text-xs mt-4 text-center">⚠ GRATUITY NOT OPTIONAL</p>
          </motion.div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-border text-center">
            <p className="text-muted-foreground text-xs italic">
              "We balanced the budget!" — IL Gov
            </p>
            <p className="text-subtext text-[10px] mt-2">
              * Does not include $147.8B pension debt
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReceiptSection;
