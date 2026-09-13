import { motion } from "motion/react";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import { Section } from "./Section";
import { experiences } from "@/lib/portfolio-data";

function initials(company: string) {
  return company
    .replace(/[—–-].*$/, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Experience() {
  return (
    <Section
      id="experience"
      number="04"
      eyebrow="Experience & Education"
      title="My professional and academic timeline."
      description="Engineering, research, teaching, and academic milestones at Auburn University and beyond."
      meta={`${experiences.length} milestones`}
    >
      <div className="relative">
        {/* Vertical spine */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-1/2 sm:-translate-x-1/2"
        />

        <ol className="space-y-12 sm:space-y-16">
          {experiences.map((exp, i) => {
            const isRight = i % 2 === 1;
            const isEducation = exp.type === "education";
            return (
              <motion.li
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
                className="relative sm:grid sm:grid-cols-2 sm:gap-10"
              >
                {/* Node */}
                <span
                  aria-hidden
                  className="absolute left-4 top-6 z-10 grid size-4 -translate-x-1/2 place-items-center rounded-full border-2 border-background bg-[image:var(--gradient-primary)] ring-4 ring-background sm:left-1/2"
                >
                  <span className="size-1.5 rounded-full bg-background" />
                </span>

                {/* Spacer for opposite side on desktop */}
                {isRight && <div className="hidden sm:block" aria-hidden />}

                <div
                  className={`ml-12 sm:ml-0 ${
                    isRight ? "sm:pl-10" : "sm:pr-10 sm:text-left"
                  }`}
                >
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="flex items-start gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-border/60 bg-background/60 font-mono text-sm font-semibold tracking-tight text-primary">
                        {isEducation ? (
                          <GraduationCap className="size-5" aria-hidden />
                        ) : (
                          initials(exp.company)
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm text-primary">
                          {isEducation ? (
                            <GraduationCap className="size-3.5 shrink-0" />
                          ) : (
                            <Briefcase className="size-3.5 shrink-0" />
                          )}
                          <span className="truncate">{exp.company}</span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border/60 bg-background/60 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.article>
                </div>

                {!isRight && <div className="hidden sm:block" aria-hidden />}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}