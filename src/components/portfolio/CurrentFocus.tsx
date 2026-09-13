import { motion } from "motion/react";
import {
  Brain,
  Cloud,
  Code2,
  FlaskConical,
  Server,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";
import { currentFocus, type FocusItem } from "@/lib/portfolio-data";

const iconMap: Record<FocusItem["icon"], LucideIcon> = {
  cloud: Cloud,
  shield: Shield,
  brain: Brain,
  flask: FlaskConical,
  server: Server,
  code: Code2,
};

const tagAccent: Record<string, string> = {
  "In progress": "border-amber-500/40 bg-amber-500/10 text-amber-300",
  Concentration: "border-primary/40 bg-primary/10 text-primary",
  Ongoing: "border-accent/40 bg-accent/10 text-accent",
  Exploring: "border-purple-400/40 bg-purple-400/10 text-purple-300",
  Practice: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
};

export function CurrentFocus() {
  return (
    <Section
      id="focus"
      number="01"
      eyebrow="Roadmap"
      title="What I'm actively working toward."
      description="A living roadmap of the certifications, concentrations, and craft I'm investing in right now."
      meta={`${currentFocus.length} tracks`}
    >
      <ol className="relative border-l border-border/60 pl-0 sm:border-l-0">
        {currentFocus.map((item, i) => {
          const Icon = iconMap[item.icon];
          const num = String(i + 1).padStart(2, "0");
          const accent =
            tagAccent[item.tag] ??
            "border-border/60 bg-card/60 text-muted-foreground";
          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="group relative"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/40 py-6 transition-colors hover:border-primary/40 sm:grid-cols-[64px_48px_minmax(0,1fr)_auto] sm:gap-6 sm:py-7">
                <span className="hidden font-mono text-xs tabular-nums text-muted-foreground sm:block">
                  {num}
                </span>
                <span className="hidden size-10 place-items-center rounded-lg border border-border/60 bg-background/60 text-primary transition-colors group-hover:border-primary/50 group-hover:text-accent sm:grid">
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 sm:hidden">
                    <Icon className="size-4 shrink-0 text-primary" />
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                      {num}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-foreground sm:mt-0 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span
                  className={`shrink-0 self-start rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] sm:self-center ${accent}`}
                >
                  {item.tag}
                </span>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}