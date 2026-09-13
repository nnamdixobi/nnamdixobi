import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
  id: string;
  /** Two-digit chapter number, e.g. "02". Rendered as a monospace marker. */
  number?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional monospace meta rendered right of the divider (e.g. "6 roles"). */
  meta?: string;
  children: ReactNode;
};

export function Section({
  id,
  number,
  eyebrow,
  title,
  description,
  meta,
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-border/40 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          {(number || eyebrow || meta) && (
            <div className="mb-6 flex items-center gap-4">
              {number && (
                <span className="font-mono text-xs text-primary">
                  <span aria-hidden>§</span>{" "}
                  <span className="tabular-nums">{number}</span>
                </span>
              )}
              {eyebrow && (
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {eyebrow}
                </span>
              )}
              <span
                aria-hidden
                className="h-px flex-1 bg-gradient-to-r from-border/80 via-border/40 to-transparent"
              />
              {meta && (
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
                  {meta}
                </span>
              )}
            </div>
          )}
          <h2
            id={`${id}-title`}
            className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}