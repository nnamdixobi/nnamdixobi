import { motion } from "motion/react";
import { Image } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";

export function About() {
  return (
    <Section
      id="about"
      number="02"
      eyebrow="About"
      title="About"
      description=""
    >
      <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
        {/* Left: image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[16rem] lg:mx-0"
        >
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[1.5rem] bg-[image:var(--gradient-primary)] opacity-25 blur-2xl"
          />
          {/* Corner brackets — editorial framing */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1.5 -top-1.5 size-5 border-l-2 border-t-2 border-primary/70"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-1.5 -top-1.5 size-5 border-r-2 border-t-2 border-accent/70"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-1.5 -left-1.5 size-5 border-b-2 border-l-2 border-accent/70"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-1.5 -right-1.5 size-5 border-b-2 border-r-2 border-primary/70"
          />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/60 p-1 backdrop-blur shadow-[var(--shadow-elegant)]">
            <div className="relative flex aspect-square w-48 items-center justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-primary/10 via-background to-accent/10 sm:w-56">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <div className="grid size-12 place-items-center rounded-xl border border-border/60 bg-card/70">
                  <Image className="size-5 text-primary" />
                </div>
                <span className="text-xs font-medium">Image placeholder</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: paragraph + interests */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>
              I am a Computer Science and Software Engineering Master’s student at Auburn University, specializing in Artificial Intelligence and Cybersecurity Engineering. I currently serve as a Graduate Assistant with the Auburn University Libraries Innovation & Research Commons, where I support the Virtual Reality Area and contribute to research-driven VR applications using Unity and C#. My master’s thesis focuses on Large Language Models (LLMs) and their application to language learning, allowing me to explore AI research and the development of intelligent systems. My experience spans software engineering, research, cybersecurity, cloud computing, IT, and technical leadership, with hands-on work developing applications, analyzing software, and supporting emerging technologies.
            </p>
            <p>
              I am particularly interested in the intersection of software engineering, artificial intelligence, and cybersecurity, where I enjoy applying creative problem-solving to complex technical challenges. I also have a strong interest in data science, cloud infrastructure, computer networking, and immersive technologies.
            </p>
            <p>
              Outside of work I love keeping up with the developments of science & technology. I also enjoy fitness, watching and playing sports, especially basketball & listening to music.
            </p>
          </motion.div>

          

          

          
        </div>
      </div>
    </Section>
  );
}
