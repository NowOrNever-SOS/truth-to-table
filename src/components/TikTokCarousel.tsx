import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "HOOK",
    topLine: "Illinois says",
    headline: "the budget is\nbalanced.",
    bottomLine: "They forgot to mention",
    statValue: "$228.5B",
    statLabel: "in total debt.",
    bg: "from-[hsl(220,20%,6%)] to-[hsl(0,72%,15%)]",
  },
  {
    id: 2,
    tag: "YOUR TAB",
    topLine: "Every Illinois taxpayer",
    headline: "personally owes",
    statValue: "$38,800",
    statLabel: "in state debt right now.",
    bottomLine: "That's a car. A year of college.\nGone before you spend a dime.",
    bg: "from-[hsl(220,20%,6%)] to-[hsl(220,18%,12%)]",
  },
  {
    id: 3,
    tag: "THE PENSION SCAM",
    topLine: "Illinois paid a record",
    statValue: "$11.2B",
    headline: "into pensions last year.",
    bottomLine: "The debt still grew.",
    statLabel: "Interest outran every payment.\nTotal pension debt: $147.8 Billion.",
    bg: "from-[hsl(220,20%,6%)] to-[hsl(0,60%,12%)]",
  },
  {
    id: 4,
    tag: "WHERE YOUR MONEY GOES",
    topLine: "28 cents of every",
    headline: "General Fund dollar",
    bottomLine: "goes to pensions & debt",
    statValue: "BEFORE",
    statLabel: "a single teacher is paid,\na road is fixed,\nor a classroom is funded.",
    bg: "from-[hsl(220,20%,6%)] to-[hsl(45,40%,10%)]",
  },
  {
    id: 5,
    tag: "THE HIDDEN COST",
    topLine: "Migrant healthcare spending:",
    statValue: "$1.6B+",
    headline: "through July 2024",
    bottomLine: "Original 3-year projection: $126M\nActual cost: $485M",
    statLabel: "Nearly 4× over budget.",
    bg: "from-[hsl(220,20%,6%)] to-[hsl(0,50%,10%)]",
  },
  {
    id: 6,
    tag: "THE TAX SQUEEZE",
    topLine: "Illinois families pay",
    statValue: "$13,099",
    headline: "per year in taxes.",
    bottomLine: "#1 highest burden in the nation.",
    statLabel: "That's 52% more than\nthe national average —\n$4,472 extra, every single year.",
    bg: "from-[hsl(220,20%,6%)] to-[hsl(0,72%,12%)]",
  },
  {
    id: 7,
    tag: "THE EXODUS",
    topLine: "Since 2020,",
    statValue: "420,678",
    headline: "residents left Illinois.",
    bottomLine: "They didn't just move.",
    statLabel: "They voted with their U-Haul.\nThe people leaving are the ones\nwho were paying for everything.",
    bg: "from-[hsl(220,20%,6%)] to-[hsl(220,14%,10%)]",
  },
  {
    id: 8,
    tag: "THE BOTTOM LINE",
    topLine: "Budget grew 30% under Pritzker.",
    headline: "Revenue up 51%.",
    bottomLine: "Your taxes up 52%\nabove national average.",
    statValue: "Still broke.",
    statLabel: "$152.8B net deficit.\nLowest bond rating — 13 years straight.\n50th in transparency.",
    bg: "from-[hsl(0,72%,15%)] to-[hsl(220,20%,6%)]",
  },
  {
    id: 9,
    tag: "SHARE THIS",
    topLine: "Now you know.",
    headline: "The math\ndoesn't lie.",
    statValue: "",
    statLabel: "",
    bottomLine: "Share this with every\nIllinois taxpayer you know.\n\n#IllinoisTaxpayer #TheTab",
    bg: "from-[hsl(220,20%,6%)] to-[hsl(0,72%,20%)]",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const statPop = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.6,
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

const glowPulse = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 0.6, 0.3, 0.6],
    transition: {
      delay: 0.5,
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
  },
};

const TikTokCarousel = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      const next = current + newDirection;
      if (next >= 0 && next < slides.length) {
        setCurrent([next, newDirection]);
      }
    },
    [current]
  );

  const goTo = useCallback(
    (index: number) => {
      setCurrent([index, index > current ? 1 : -1]);
    },
    [current]
  );

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Header */}
      <div className="w-full max-w-[400px] mb-4 flex items-center justify-between">
        <p className="font-mono text-xs text-subtext tracking-widest uppercase">
          TikTok Carousel Preview
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {current + 1} / {slides.length}
        </p>
      </div>

      {/* Phone frame */}
      <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-[2rem] border-2 border-border overflow-hidden shadow-2xl">
        {/* Slide content */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-b ${slide.bg} flex flex-col justify-center px-8 py-12 select-none`}
          >
            {/* Glow effect behind stat */}
            {slide.statValue && (
              <motion.div
                variants={glowPulse}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-48 h-48 rounded-full bg-stat-glow blur-3xl" />
              </motion.div>
            )}

            {/* Tag */}
            <motion.div
              variants={textReveal}
              custom={0}
              initial="hidden"
              animate="visible"
              className="absolute top-8 left-8"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-sm bg-[hsl(var(--stat)/0.15)] text-stat border border-[hsl(var(--stat)/0.3)]">
                {slide.tag}
              </span>
            </motion.div>

            <div className="relative z-10 flex flex-col gap-3">
              {/* Top line */}
              {slide.topLine && (
                <motion.p
                  variants={textReveal}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  className="text-subtext font-mono text-sm leading-relaxed"
                >
                  {slide.topLine}
                </motion.p>
              )}

              {/* Stat value */}
              {slide.statValue && (
                <motion.div
                  variants={statPop}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="stat-number text-5xl sm:text-6xl leading-none py-1">
                    {slide.statValue}
                  </p>
                </motion.div>
              )}

              {/* Headline */}
              {slide.headline && (
                <motion.h2
                  variants={textReveal}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl sm:text-3xl font-bold text-foreground leading-tight whitespace-pre-line"
                >
                  {slide.headline}
                </motion.h2>
              )}

              {/* Bottom line */}
              {slide.bottomLine && (
                <motion.p
                  variants={textReveal}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mt-2"
                >
                  {slide.bottomLine}
                </motion.p>
              )}

              {/* Stat label */}
              {slide.statLabel && (
                <motion.p
                  variants={textReveal}
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  className="text-highlight font-mono text-xs leading-relaxed whitespace-pre-line mt-1"
                >
                  {slide.statLabel}
                </motion.p>
              )}
            </div>

            {/* Slide indicator dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-[hsl(var(--stat))]"
                      : "w-1.5 bg-[hsl(var(--foreground)/0.2)]"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Touch/click zones */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
          aria-label="Previous slide"
        />
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
          aria-label="Next slide"
        />
      </div>

      {/* Controls below */}
      <div className="w-full max-w-[400px] mt-6 flex items-center justify-between">
        <button
          onClick={() => paginate(-1)}
          disabled={current === 0}
          className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <p className="font-mono text-[10px] text-subtext text-center">
          Tap left/right side to navigate
        </p>
        <button
          onClick={() => paginate(1)}
          disabled={current === slides.length - 1}
          className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TikTokCarousel;
