import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <Section
      id="contact"
      number="07"
      eyebrow="Contact"
      title="CONTACT"
      description=""
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-10 backdrop-blur sm:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/20 blur-3xl"
        />

        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Say hello
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block font-display text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-4xl md:text-5xl"
            >
              {profile.email}
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              
            </p>
            <a
              href={`tel:${profile.phoneHref}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4" aria-hidden />
              {profile.phone}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center justify-between gap-6 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="size-4" /> Email me
              </span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-6 rounded-xl border border-border/60 bg-background/40 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              <span className="inline-flex items-center gap-2">
                <Linkedin className="size-4" /> LinkedIn
              </span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-6 rounded-xl border border-border/60 bg-background/40 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              <span className="inline-flex items-center gap-2">
                <Github className="size-4" /> GitHub
              </span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}