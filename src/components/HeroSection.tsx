import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-stat-glow opacity-40 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <p className="font-mono text-sm tracking-[0.3em] uppercase text-subtext mb-6">
          An Illinois Fiscal Investigation
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-foreground">
          They called it{" "}
          <span className="text-stat italic">balanced.</span>
          <br />
          They forgot to show you{" "}
          <span className="text-highlight">the tab.</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-12 mb-12">
          <StatBlock label="Your personal share of state debt" prefix="$">
            <AnimatedCounter end={38800} duration={2} />
          </StatBlock>
          <StatBlock label="Total state liabilities" prefix="$" suffix="B">
            <AnimatedCounter end={228.5} duration={2.2} decimals={1} />
          </StatBlock>
          <StatBlock label="Residents who left since 2020">
            <AnimatedCounter end={420678} duration={2.5} />
          </StatBlock>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-subtext text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Illinois tells you the budget is balanced. The $228.5 billion in debt they're not talking about 
          says otherwise. Here's what your tax dollars are actually paying for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-16"
        >
          <div className="w-px h-16 bg-muted-foreground/30 mx-auto" />
          <p className="font-mono text-xs text-muted-foreground mt-4 tracking-widest uppercase">Scroll to see the numbers</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const StatBlock = ({ label, prefix = "", suffix = "", children }: {
  label: string;
  prefix?: string;
  suffix?: string;
  children: React.ReactNode;
}) => (
  <div className="text-center">
    <div className="stat-number text-3xl sm:text-4xl md:text-5xl">
      {prefix}{children}{suffix}
    </div>
    <p className="text-subtext text-xs font-mono mt-2 max-w-[180px] mx-auto leading-relaxed">{label}</p>
  </div>
);

export default HeroSection;
