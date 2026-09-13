import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";
import Gradpic from "@/assets/Gradpic.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Animated gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-40 left-1/2 h-[720px] w-[1200px] -translate-x-1/2"
          style={{ background: "var(--gradient-radial)" }}
        />

        <motion.div
          aria-hidden
          className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "oklch(0.63 0.19 258 / 0.35)" }}
          animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          aria-hidden
          className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full blur-3xl"
          style={{ background: "oklch(0.74 0.14 200 / 0.30)" }}
          animate={{ x: [0, -50, 30, 0], y: [0, -30, 20, 0] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          aria-hidden
          className="absolute top-1/3 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "oklch(0.7 0.16 300 / 0.20)" }}
          animate={{ scale: [1, 1.15, 0.95, 1] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <Sparkles className="size-3.5 text-accent" />
              Available for Summer 2027 internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
              className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              {profile.name.split(" ")[0]}{" "}
              <span className="text-gradient">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-5 font-display text-lg font-medium tracking-tight text-foreground/90 sm:text-xl"
            >
              Computer Science & Software Engineering Masters Student with a
              concentration in AI & Cyber Security Engineering
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              {profile.valueProposition}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                <FolderGit2 className="size-4" />
                View Projects
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* View Resume */}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/70 hover:text-primary"
              >
                <ExternalLink className="size-4" />
                View Resume
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Mail className="size-4" />
                Contact
              </a>

              <div className="ml-1 flex items-center gap-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid size-11 place-items-center rounded-lg border border-border/60 bg-card/60 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  <Github className="size-4" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-11 place-items-center rounded-lg border border-border/60 bg-card/60 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  <Linkedin className="size-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5" />
                {profile.location}
              </span>

              <span className="hidden h-3 w-px bg-border sm:inline-block" />

              <span>
                Auburn University · M.S. Computer Science & Software
                Engineering
              </span>

              <span className="hidden h-3 w-px bg-border sm:inline-block" />

              <span className="inline-flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                Open to opportunities
              </span>
            </motion.div>
          </div>

          {/* Right: Gradpic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-primary)] opacity-30 blur-2xl"
            />

            {/* Corner brackets — editorial framing */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-2 size-6 border-l-2 border-t-2 border-primary/70"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-2 size-6 border-r-2 border-t-2 border-accent/70"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-2 -left-2 size-6 border-b-2 border-l-2 border-accent/70"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-2 -right-2 size-6 border-b-2 border-r-2 border-primary/70"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 p-1.5 backdrop-blur shadow-[var(--shadow-elegant)]">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src={Gradpic}
                  alt={`${profile.name} — ${profile.title}`}
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                  className="aspect-square w-full object-cover"
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 rounded-xl border border-border/50 bg-background/70 px-3 py-2 text-xs backdrop-blur"
                >
                  <span className="font-mono uppercase tracking-wider text-muted-foreground">
                    {profile.handle}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-foreground">
                    <span className="size-1.5 rounded-full bg-accent" />
                    Auburn, AL
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}