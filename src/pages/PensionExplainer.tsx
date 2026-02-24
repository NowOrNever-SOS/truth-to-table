import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const PensionExplainer = () => {
  useEffect(() => {
    document.title = "J.B.'s Pension Problem — Illinois Pension Crisis Explained";
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "J.B.'s Pension Problem");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", "J.B.'s Pension Problem");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Illinois owes $147.8 billion in pension promises it can't cover. Here's what that means for your family.");
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Illinois owes $147.8 billion in pension promises it can't cover. Here's what that means for your family.");
  }, []);

  return (
    <main className="bg-background min-h-screen text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-subtext hover:text-foreground transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-subtext">Pension Explainer</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-4">
            In plain English
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Illinois owes <span className="text-stat">$147.8 billion</span> in
            pension promises it can't cover.
          </h1>
          <p className="text-subtext text-lg max-w-2xl mx-auto leading-relaxed">
            Here's what that means for your family — no jargon, no spin.
          </p>
        </motion.div>
      </section>

      {/* What is a pension? */}
      <ExplainerBlock
        index={0}
        label="The basics"
        title="What is a pension?"
        body="A pension is a promise: 'Work for the state, and we'll pay you a monthly check for life after you retire.' Teachers, firefighters, state workers — about 800,000 people are counting on these checks."
        analogy="Think of it like a layaway plan. The state promised to set aside money every year so it'd be there at retirement. The problem? They kept skipping payments."
      />

      {/* What does "unfunded" mean? */}
      <ExplainerBlock
        index={1}
        label='The gap'
        title='What does "unfunded" mean?'
        body="The state has promised $261B in future pension checks. It has set aside about $113B. The gap — $147.8 billion — is the unfunded liability. That's money owed with no plan to pay it."
        analogy="Imagine you owe $261,000 on your mortgage but only have $113,000 in savings earmarked for it. You're $148,000 short — and the interest keeps running."
        stat={{ value: 147.8, prefix: "$", suffix: "B", label: "The gap between what's promised and what's saved" }}
      />

      {/* How did it get this bad? */}
      <ExplainerBlock
        index={2}
        label="Decades in the making"
        title="How did it get this bad?"
        body="For 50+ years, governors and legislators from both parties skipped or shorted the required pension contributions. They spent the money on other things to avoid raising taxes or cutting programs — and kicked the bill to the next generation."
        analogy="It's like making the minimum payment on a credit card for 50 years. The original balance might've been manageable. The interest made it a monster."
      />

      {/* What does this cost YOUR family? */}
      <FamilyCostSection />

      {/* The interest trap */}
      <ExplainerBlock
        index={4}
        label="The math problem"
        title="The debt grows faster than the payments"
        body={"In FY2024, Illinois made a \"record\" $11.2 billion pension payment. Sounds great — until you learn the debt still grew. Interest and new benefit accruals outpaced the payment. We're on a treadmill running backward."}
        analogy="You paid $11,200 on your credit card this year — a record! But the card charged $12,500 in interest. Your balance went up, not down."
        stat={{ value: 11.2, prefix: "$", suffix: "B", label: "\"Record\" payment that still didn't shrink the debt" }}
      />

      {/* What it means for your kids */}
      <ExplainerBlock
        index={5}
        label="The future"
        title="What this means for your kids"
        body="Every dollar going to pension debt is a dollar NOT going to schools, roads, public safety, or property tax relief. The state's plan doesn't fully fund pensions until 2045. Your children will be paying for retirements promised before they were born."
        analogy="Your grandparents ate at a restaurant in 1995. The bill is being mailed to your kids in 2035 — with 30 years of late fees."
      />

      {/* The 28 cents visual */}
      <section className="px-6 py-20 section-divider">
        <CentsBreakdown />
      </section>

      {/* Could it be fixed? */}
      <ExplainerBlock
        index={6}
        label="Is there a way out?"
        title="Could this be fixed?"
        body="Honest solutions exist but they're politically painful: amending the pension protection clause, shifting to defined-contribution plans for new hires, or dramatically increasing contributions (meaning higher taxes). No current leader is proposing structural reform."
        analogy='The house needs a new foundation. Instead, leadership keeps repainting the walls and telling you the house looks great.'
      />

      {/* Footer CTA */}
      <section className="px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            This isn't about left or right.
            <br />
            It's about <span className="text-stat">math.</span>
          </h2>
          <p className="text-subtext leading-relaxed mb-8">
            Share this page with someone who deserves to know what their taxes are really paying for.
          </p>
          <Link
            to="/"
            className="inline-block font-mono text-sm tracking-widest uppercase border border-border px-8 py-3 hover:bg-secondary transition-colors rounded-sm text-foreground"
          >
            See the full breakdown →
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

/* ── Reusable explainer block ── */

const ExplainerBlock = ({
  index,
  label,
  title,
  body,
  analogy,
  stat,
}: {
  index: number;
  label: string;
  title: string;
  body: string;
  analogy: string;
  stat?: { value: number; prefix?: string; suffix?: string; label: string };
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-6 py-16 sm:py-20 section-divider">
      <div className="max-w-3xl mx-auto">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-3"
        >
          {label}
        </motion.p>

        <motion.h2
          custom={1}
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-2xl sm:text-3xl font-bold mb-6 text-foreground"
        >
          {title}
        </motion.h2>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-foreground/80 text-lg leading-relaxed mb-6"
        >
          {body}
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-secondary border border-border rounded-sm p-5 sm:p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-highlight mb-2">
            Kitchen-table version
          </p>
          <p className="text-foreground/90 leading-relaxed italic font-serif text-lg">
            "{analogy}"
          </p>
        </motion.div>

        {stat && (
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-8 text-center"
          >
            <div className="stat-number text-4xl sm:text-5xl">
              {stat.prefix}
              <AnimatedCounter end={stat.value} duration={2} decimals={stat.value % 1 !== 0 ? 1 : 0} />
              {stat.suffix}
            </div>
            <p className="text-subtext text-xs font-mono mt-2">{stat.label}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

/* ── Family cost section with per-person math ── */

const FamilyCostSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const costs = [
    { label: "Your share of pension debt", amount: "$11,600", note: "per person" },
    { label: "Family of four's share", amount: "$46,400", note: "before you pay a dime in taxes" },
    { label: "Median IL property tax / year", amount: "$4,942", note: "#1 highest in the nation" },
    { label: "Your annual pension-debt tax bite", amount: "~$2,400", note: "of your state taxes go straight to pensions" },
  ];

  return (
    <section ref={ref} className="px-6 py-16 sm:py-20 section-divider">
      <div className="max-w-3xl mx-auto">
        <motion.p
          custom={0} variants={fade} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-3"
        >
          Your household
        </motion.p>
        <motion.h2
          custom={1} variants={fade} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
        >
          What does this cost <span className="text-stat">your</span> family?
        </motion.h2>
        <motion.p
          custom={2} variants={fade} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-foreground/80 text-lg leading-relaxed mb-8"
        >
          Illinois has about 12.7 million residents. Divide $147.8 billion evenly and every man, woman, and child owes $11,600. A family of four? That's $46,400 in hidden debt — on top of the taxes you already pay.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {costs.map((c, i) => (
            <motion.div
              key={i}
              custom={3 + i * 0.5}
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-card border border-border rounded-sm p-5"
            >
              <p className="stat-number text-2xl sm:text-3xl mb-1">{c.amount}</p>
              <p className="text-foreground text-sm font-medium">{c.label}</p>
              <p className="text-subtext text-xs font-mono mt-1">{c.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={6}
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-secondary border border-border rounded-sm p-5 sm:p-6 mt-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-highlight mb-2">
            Kitchen-table version
          </p>
          <p className="text-foreground/90 leading-relaxed italic font-serif text-lg">
            "Before you buy groceries, fill the tank, or pay your mortgage — you already owe Springfield $46,400 for retirement checks going to people you've never met."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ── 28 cents breakdown ── */

const CentsBreakdown = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const slices = [
    { cents: 28, label: "Pensions & debt", color: "bg-[hsl(var(--stat))]" },
    { cents: 19, label: "Healthcare / Medicaid", color: "bg-[hsl(var(--highlight))]" },
    { cents: 15, label: "Human services", color: "bg-[hsl(var(--muted-foreground))]" },
    { cents: 12, label: "Education", color: "bg-[hsl(var(--accent))]" },
    { cents: 26, label: "Everything else", color: "bg-[hsl(var(--border))]" },
  ];

  return (
    <div className="max-w-3xl mx-auto" ref={ref}>
      <motion.p
        custom={0} variants={fade} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs tracking-[0.3em] uppercase text-subtext mb-3"
      >
        Where each dollar goes
      </motion.p>
      <motion.h2
        custom={1} variants={fade} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="text-2xl sm:text-3xl font-bold mb-2 text-foreground"
      >
        Of every <span className="text-highlight">$1</span> in the General Fund…
      </motion.h2>
      <motion.p
        custom={2} variants={fade} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="text-subtext mb-8 text-lg"
      >
        28¢ is gone before it can help a single classroom, pothole, or family.
      </motion.p>

      {/* Bar */}
      <motion.div
        custom={3} variants={fade} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="flex h-10 rounded-sm overflow-hidden mb-6"
      >
        {slices.map((s, i) => (
          <motion.div
            key={i}
            className={`${s.color} relative`}
            initial={{ width: 0 }}
            animate={inView ? { width: `${s.cents}%` } : {}}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
          />
        ))}
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {slices.map((s, i) => (
          <motion.div
            key={i}
            custom={4 + i * 0.3}
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-start gap-2"
          >
            <div className={`w-3 h-3 rounded-sm mt-1 shrink-0 ${s.color}`} />
            <div>
              <p className="text-foreground text-sm font-medium">{s.cents}¢</p>
              <p className="text-subtext text-xs">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PensionExplainer;
