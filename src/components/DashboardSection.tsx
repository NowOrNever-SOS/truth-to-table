import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend,
} from "recharts";

const revenueData = [
  { year: "2018", revenue: 38.5, spending: 37.8 },
  { year: "2019", revenue: 40.1, spending: 39.6 },
  { year: "2020", revenue: 42.3, spending: 43.1 },
  { year: "2021", revenue: 49.2, spending: 46.8 },
  { year: "2022", revenue: 52.1, spending: 48.9 },
  { year: "2023", revenue: 50.8, spending: 49.7 },
  { year: "2024", revenue: 50.4, spending: 50.4 },
];

const pensionData = [
  { year: "2018", pension: 133.7, revenue: 38.5 },
  { year: "2019", pension: 137.0, revenue: 40.1 },
  { year: "2020", pension: 141.0, revenue: 42.3 },
  { year: "2021", pension: 139.7, revenue: 49.2 },
  { year: "2022", pension: 144.2, revenue: 52.1 },
  { year: "2023", pension: 145.1, revenue: 50.8 },
  { year: "2024", pension: 147.8, revenue: 50.4 },
];

const DashboardSection = () => {
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
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-4">Concept: The Dashboard</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Three-Tier Reality</h2>
          <p className="text-subtext max-w-2xl mx-auto">
            The state shows you the checkbook. They don't show you the mortgage underneath it.
          </p>
        </motion.div>

        {/* Tier 1: The Checkbook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-sm p-6 sm:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-sm">TIER 1</span>
            <h3 className="font-serif text-xl text-foreground">The Checkbook</h3>
            <span className="text-subtext text-sm ml-auto hidden sm:block">What Springfield talks about</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} barGap={2}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
                <XAxis dataKey="year" stroke="hsl(220 10% 50%)" fontSize={12} fontFamily="IBM Plex Mono" />
                <YAxis stroke="hsl(220 10% 50%)" fontSize={12} fontFamily="IBM Plex Mono" tickFormatter={(v) => `$${v}B`} />
                <Tooltip
                  contentStyle={{ background: "hsl(220 18% 10%)", border: "1px solid hsl(220 14% 18%)", color: "hsl(40 20% 92%)", fontFamily: "IBM Plex Mono", fontSize: 12 }}
                  formatter={(value: number) => [`$${value}B`]}
                />
                <Bar dataKey="revenue" fill="hsl(220 60% 50%)" name="Revenue" radius={[2, 2, 0, 0]} />
                <Bar dataKey="spending" fill="hsl(220 30% 35%)" name="Spending" radius={[2, 2, 0, 0]} />
                <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-subtext text-sm mt-4 text-center font-mono">
            "Looks almost balanced, right? Keep scrolling."
          </p>
        </motion.div>

        {/* Tier 2: The Mortgage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-card border border-stat rounded-sm p-6 sm:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs bg-primary text-primary-foreground px-3 py-1 rounded-sm">TIER 2</span>
            <h3 className="font-serif text-xl text-foreground">The Mortgage</h3>
            <span className="text-stat text-sm ml-auto hidden sm:block">What they don't tell you</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pensionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
                <XAxis dataKey="year" stroke="hsl(220 10% 50%)" fontSize={12} fontFamily="IBM Plex Mono" />
                <YAxis stroke="hsl(220 10% 50%)" fontSize={12} fontFamily="IBM Plex Mono" tickFormatter={(v) => `$${v}B`} domain={[0, 160]} />
                <Tooltip
                  contentStyle={{ background: "hsl(220 18% 10%)", border: "1px solid hsl(0 72% 51%)", color: "hsl(40 20% 92%)", fontFamily: "IBM Plex Mono", fontSize: 12 }}
                  formatter={(value: number) => [`$${value}B`]}
                />
                <Line dataKey="pension" stroke="hsl(0 72% 51%)" strokeWidth={3} name="Pension Debt" dot={{ fill: "hsl(0 72% 51%)", r: 4 }} />
                <Line dataKey="revenue" stroke="hsl(220 60% 50%)" strokeWidth={2} strokeDasharray="5 5" name="Total Revenue" dot={false} />
                <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-stat text-sm mt-4 text-center font-mono font-bold">
            The state paid a record $11.2 billion into pensions in FY2024. The debt still grew.
          </p>
        </motion.div>

        {/* Tier 3: Your Share */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-card border border-border rounded-sm p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs bg-accent text-accent-foreground px-3 py-1 rounded-sm">TIER 3</span>
            <h3 className="font-serif text-xl text-foreground">Your Share</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ShareCard title="Your Debt Share" value="$38,800" description="Per taxpayer, right now, today" />
            <ShareCard title="What $38,800 Buys" value="≠" description="A new car. 4 years of in-state tuition. A down payment. Gone." isAlt />
            <ShareCard title="28¢ of Every $1" value="28%" description="Goes to pensions & debt before a single teacher is paid" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ShareCard = ({ title, value, description, isAlt = false }: {
  title: string; value: string; description: string; isAlt?: boolean;
}) => (
  <div className="bg-secondary rounded-sm p-6 text-center">
    <p className="font-mono text-xs text-subtext uppercase tracking-wider mb-3">{title}</p>
    <p className={`text-4xl font-bold font-mono mb-3 ${isAlt ? "text-highlight" : "text-stat"}`}>{value}</p>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export default DashboardSection;
