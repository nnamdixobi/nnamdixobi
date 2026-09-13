import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";
import { Section } from "./Section";
import { projects, type Project } from "@/lib/portfolio-data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />

      <div
        className={`grid gap-0 lg:grid-cols-2 ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="relative overflow-hidden lg:min-h-[420px]">
          <div className="relative h-full w-full">
            <img
              src={project.image}
              alt={`${project.title} — case study cover`}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/70"
            />

            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="rounded-full border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                {project.category}
              </span>

              <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur">
                {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 p-7 sm:p-9 lg:p-10">
          <header>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              Case study · 0{index + 1}
            </p>

            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.overview}
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-border/50 bg-background/40 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <Target className="size-3.5 text-primary" />
                Problem
              </div>

              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {project.problem}
              </p>
            </div>

            <div className="rounded-xl border border-border/50 bg-background/40 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <Lightbulb className="size-3.5 text-accent" />
                Solution
              </div>

              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Only render if achievements exist */}
          {project.achievements?.length ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <CheckCircle2 className="size-3.5 text-accent" />
                Key achievements
              </div>

              <ul className="mt-3 space-y-2">
                {project.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Wrench className="size-3.5 text-primary" />
              Technologies
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground/90 transition-colors group-hover:border-primary/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border/40 pt-5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="group/link inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="size-4" />
                Live Demo
                <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source on GitHub`}
                className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Github className="size-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      number="05"
      eyebrow="Selected work"
      title="Projects."
      meta={`${projects.length} projects`}
    >
      <div className="grid gap-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}