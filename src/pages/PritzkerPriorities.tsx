import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, TrendingUp, TrendingDown, Scale, Users, DollarSign, Building2, ShieldAlert } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

/* ─── DATA ─── */

const forThem = [
  {
    year: "2019–25",
    title: "Lawmaker Pay: $67K → $93K+ (39% Raise)",
    detail: "Through annual cost-of-living adjustments legislators vote on for themselves, IL lawmaker base pay has climbed from ~$67K to over $93,000 — making them the 4th highest-paid state legislators in America. Plus per diems, mileage, and leadership stipends worth tens of thousands more.",
    source: "Capitol News Illinois / NewsChannel 20",
  },
  {
    year: "2025",
    title: "Pension Sweetener for Chicago Police & Fire",
    detail: "Public Act 104-0065 boosted Tier II pension benefits for Chicago police and firefighters — adding billions in long-term liability to an already $147.8B unfunded system.",
    source: "CTBA / NPR Illinois",
  },
  {
    year: "2021–25",
    title: "State Salaries Up 57% Faster Than Private Sector",
    detail: "Since 2021, unionized state employee pay has grown 57% faster than private-sector wages. AFSCME contracts guaranteed raises while private workers faced inflation cuts.",
    source: "Illinois Policy Institute",
  },
  {
    year: "2025",
    title: "Tier 2 Pension Reform Bill (Pending)",
    detail: "A bill moving through Springfield would expand pension benefits for all Tier II government employees — teachers, state workers, university staff. Illinois Policy Institute estimate: $53 billion in new unfunded liability passed to taxpayers.",
    source: "NPR Illinois / IL Policy Institute",
  },
  {
    year: "2023–25",
    title: "$2.5 Billion on Migrant Care",
    detail: "Illinois spent $2.5B on migrant healthcare, shelter, and services by end of 2025 — with massive cost overruns and a 'troubling lack of transparency.' One immigration group alone received $63M in 7 months.",
    source: "IL Policy Institute / Fox 32",
  },
  {
    year: "2021",
    title: "No Pension or Spending Reform — Ever",
    detail: "Pritzker's FY2022 budget proposed 9 new taxes worth ~$1B but zero structural pension reforms. The pattern repeated every year since.",
    source: "Illinois Policy Institute",
  },
];

const forUs = [
  {
    year: "2019",
    title: "Gas Tax Doubled",
    detail: "Motor fuel tax jumped from 19¢ to 38¢/gallon overnight — part of a $45B infrastructure plan. Illinois now has one of the highest gas tax burdens in the nation.",
    amount: "$1.9B",
  },
  {
    year: "2019",
    title: "Vehicle Registration Fees Up 50%",
    detail: "Standard registration rose from $101 to $151. Electric vehicle fees jumped to $248. Part of the same 20-tax package.",
    amount: "$490M",
  },
  {
    year: "2019",
    title: "Cigarette Tax +$1/Pack",
    detail: "Tax went from $1.98 to $2.98 per pack — one of the steepest in the country.",
    amount: "$160M",
  },
  {
    year: "2019",
    title: "Parking Tax, Rideshare Tax, and More",
    detail: "New taxes on garage parking, ride-shares (Uber/Lyft), real estate transfers, and sports betting — all in a single legislative session.",
    amount: "$400M+",
  },
  {
    year: "2021",
    title: "9 New Tax Proposals in One Budget",
    detail: "Business tax hikes labeled as 'closing corporate loopholes,' plus new levies on data centers, streaming services, and managed care. No reforms attached.",
    amount: "~$1B",
  },
  {
    year: "2025",
    title: "No Tax on Tips? Blocked.",
    detail: "SB 140 would have exempted tipped workers from state income tax on tips. Democrats refused to even hold a hearing. Meanwhile, government workers got raises.",
    amount: "—",
  },
  {
    year: "2019–25",
    title: "Total: 24+ Tax & Fee Hikes Under Pritzker",
    detail: "Combined, Pritzker-era tax and fee increases have extracted over $5.24 billion annually from Illinois taxpayers. The state's fiscal problems? Worse than ever.",
    amount: "$5.24B/yr",
  },
];

const scorecard = [
  { label: "Unfunded Pension Debt", value: "$147.8B", trend: "up" },
  { label: "Total State Liabilities", value: "$228.5B", trend: "up" },
  { label: "Your Family's Share (family of 4)", value: "$46,400", trend: "up" },
  { label: "Domestic Outmigration Since 2020", value: "420,678", trend: "up" },
  { label: "National Bond Rating Rank", value: "50th", trend: "down" },
  { label: "Migrant Spending (through 2025)", value: "$2.5B", trend: "up" },
];

/* ─── COMPONENTS ─── */

const SectionHeader = ({ children, icon: Icon, color = "text-foreground" }: { children: React.ReactNode; icon: React.ElementType; color?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 mb-8"
    >
      <Icon className={`w-7 h-7 ${color}`} />
      <h2 className={`text-2xl sm:text-3xl font-bold ${color}`}>{children}</h2>
    </motion.div>
  );
};

const LegislationCard = ({ item, index, side }: { item: typeof forThem[0] & { amount?: string }; index: number; side: "them" | "us" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const borderColor = side === "them" ? "border-l-accent" : "border-l-stat";
  const yearColor = side === "them" ? "text-highlight" : "text-stat";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "them" ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`bg-card border border-border ${borderColor} border-l-4 rounded-sm p-5 sm:p-6`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className={`font-mono text-xs font-semibold ${yearColor}`}>{item.year}</span>
        {"amount" in item && item.amount && (
          <span className="font-mono text-xs font-bold text-stat bg-secondary px-2 py-0.5 rounded">{item.amount}</span>
        )}
      </div>
      <h3 className="text-foreground font-serif text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
      {"source" in item && item.source && (
        <p className="font-mono text-[10px] text-subtext mt-3">Source: {item.source}</p>
      )}
    </motion.div>
  );
};

/* ─── PAGE ─── */

const PritzkerPriorities = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const verdictRef = useRef(null);
  const verdictInView = useInView(verdictRef, { once: true, margin: "-40px" });
  const billRef = useRef(null);
  const billInView = useInView(billRef, { once: true, margin: "-40px" });

  return (
    <main className="bg-background min-h-screen">
      {/* Nav */}
      <div className="px-6 py-4">
        <Link to="/" className="inline-flex items-center gap-2 text-subtext hover:text-foreground transition-colors font-mono text-xs tracking-wider uppercase">
          <ArrowLeft className="w-4 h-4" /> Back to Receipt
        </Link>
      </div>

      {/* Hero */}
      <section ref={heroRef} className="px-6 pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-6"
          >
            Follow the Money
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
          >
            What They Got.{" "}
            <span className="text-stat">What You Paid.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A side-by-side record of Governor Pritzker's legislative priorities — the bills that benefited government insiders vs. the taxes imposed on you.
          </motion.p>
        </div>
      </section>

      {/* Scorecard */}
      <section className="px-6 py-16 section-divider">
        <div className="max-w-5xl mx-auto">
          <SectionHeader icon={TrendingUp} color="text-stat">The Scorecard Under Pritzker</SectionHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {scorecard.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-sm p-4 sm:p-5 text-center"
              >
                <p className="stat-number text-xl sm:text-2xl mb-1">{s.value}</p>
                <p className="text-subtext font-mono text-[10px] sm:text-xs uppercase tracking-wider">{s.label}</p>
                {s.trend === "up" && <TrendingUp className="w-4 h-4 text-stat mx-auto mt-2" />}
                {s.trend === "down" && <TrendingDown className="w-4 h-4 text-stat mx-auto mt-2" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side by Side */}
      <section className="px-6 py-20 section-divider">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-4">The Legislative Record</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-highlight">For Them</span> vs. <span className="text-stat">For Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT: For Them */}
            <div>
              <SectionHeader icon={Building2} color="text-highlight">For Government & Politicians</SectionHeader>
              <div className="space-y-4">
                {forThem.map((item, i) => (
                  <LegislationCard key={i} item={item as any} index={i} side="them" />
                ))}
              </div>
            </div>

            {/* RIGHT: For Us */}
            <div>
              <SectionHeader icon={Users} color="text-stat">For You, the Taxpayer</SectionHeader>
              <div className="space-y-4">
                {forUs.map((item, i) => (
                  <LegislationCard key={i} item={item as any} index={i} side="us" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREAKING: The Pending Bill */}
      <section ref={billRef} className="px-6 py-20 section-divider">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={billInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-card border-2 border-accent rounded-sm p-6 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-highlight" />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-highlight font-semibold">
                Happening Now — Watch This Bill
              </p>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-serif">
              The $53 Billion Pension Sweetener They're Voting On Right Now
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A bill advancing through Springfield would <span className="text-foreground font-semibold">expand pension benefits for all Tier II government employees</span> — teachers, state workers, university staff hired after 2011. The Illinois Policy Institute estimates the cost at <span className="text-stat font-semibold">$53 billion in new unfunded liability</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The justification? Tier II pensions may fall below Social Security's "Safe Harbor" threshold, potentially forcing the state to enroll workers in Social Security. Rather than fix the structural problem, the proposed solution is to <span className="text-stat font-semibold">sweeten pensions and hand the $53 billion tab to taxpayers</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pritzker himself acknowledged there's "a lot more work to do" — but signed the Chicago police/fire pension sweetener anyway. The broader Tier II bill would dwarf that cost.
            </p>
            <div className="bg-secondary border border-border rounded-sm p-4">
              <p className="font-mono text-xs text-subtext uppercase tracking-wider mb-2">Meanwhile, for regular workers:</p>
              <p className="text-foreground text-sm">
                SB 140 — the "No Tax on Tips" bill — would have exempted tipped workers from state income tax. <span className="text-stat font-semibold">Democrats refused to even hold a hearing.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verdict */}
      <section ref={verdictRef} className="px-6 py-24 section-divider">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={verdictInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <ShieldAlert className="w-12 h-12 text-stat mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              This Isn't Mismanagement.<br />
              <span className="text-stat">It's a Choice — and You're Not the One They Chose.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              When government workers get <span className="text-highlight font-semibold">39% pay raises, $53 billion in pension sweeteners, and expanded benefits</span> — while you get <span className="text-stat font-semibold">doubled gas taxes, higher fees, and your relief bills killed in committee</span> — that's not an accident.
            </p>
            <p className="text-foreground text-xl font-serif leading-relaxed mb-8">
              That's a budget that tells you exactly who matters in Springfield — and it isn't you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-card border border-border rounded-sm p-5">
                <p className="stat-number text-2xl mb-1">$5.24B</p>
                <p className="text-subtext font-mono text-[10px] uppercase tracking-wider">New annual tax burden under Pritzker</p>
              </div>
              <div className="bg-card border border-border rounded-sm p-5">
                <p className="stat-number text-2xl mb-1">$2.5B</p>
                <p className="text-subtext font-mono text-[10px] uppercase tracking-wider">Spent on migrant care through 2025</p>
              </div>
              <div className="bg-card border border-border rounded-sm p-5">
                <p className="stat-number text-2xl mb-1">$0</p>
                <p className="text-subtext font-mono text-[10px] uppercase tracking-wider">Structural pension reforms enacted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 section-divider">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-subtext tracking-wider">
            Sources: Capitol News Illinois · Illinois Policy Institute · NPR Illinois · Fox 32 Chicago · CTBA · Civic Federation · U.S. Census Bureau · NewsChannel 20
          </p>
          <p className="font-mono text-[10px] text-subtext mt-2">
            All figures from public records, legislative filings, and nonpartisan analysis. Last verified February 2026.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/" className="text-subtext hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors">Home</Link>
            <Link to="/pensions" className="text-subtext hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors">Pension Explainer</Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default PritzkerPriorities;
