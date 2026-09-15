import { motion } from "motion/react";
import { Section } from "./Section";
import aboutPicture from "../../assets/AboutPicture.JPG";

function ProfileImage({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative mx-auto w-full max-w-[12rem] sm:max-w-[14rem] ${className}`}
    >
      {/* Glow behind image */}
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[1.5rem] bg-[image:var(--gradient-primary)] opacity-25 blur-2xl"
      />

      {/* Corner brackets */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-1.5 -top-1.5 z-10 size-5 border-l-2 border-t-2 border-primary/70"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -right-1.5 -top-1.5 z-10 size-5 border-r-2 border-t-2 border-accent/70"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1.5 -left-1.5 z-10 size-5 border-b-2 border-l-2 border-accent/70"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1.5 -right-1.5 z-10 size-5 border-b-2 border-r-2 border-primary/70"
      />

      {/* Image container */}
      <div className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/60 p-1 backdrop-blur shadow-[var(--shadow-elegant)]">
        <div className="relative aspect-square w-full overflow-hidden rounded-[1.2rem]">
          <img
            src={aboutPicture}
            alt="Nnamdi Obi"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <Section
      id="about"
      number="02"
      eyebrow="About"
      title="About"
      description=""
    >
      <div className="grid items-start gap-10 sm:grid-cols-[auto_1fr]">
        {/* Left: Profile Image — shown only on sm+ (tablet/laptop) in its normal side position */}
        <ProfileImage className="hidden sm:block" />

        {/* Right: About Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>
              I am a Computer Science and Software Engineering Master’s student
              at Auburn University, specializing in Artificial Intelligence and
              Cybersecurity Engineering. I currently serve as a Graduate
              Assistant with the Auburn University Libraries Innovation &
              Research Commons, where I support the Virtual Reality Area and
              contribute to research-driven VR applications using Unity and C#.
              My master’s thesis focuses on Large Language Models (LLMs) and
              their application to language learning, allowing me to explore AI
              research and the development of intelligent systems. My experience
              spans software engineering, research, cybersecurity, cloud
              computing, IT, and technical leadership, with hands-on work
              developing applications, analyzing software, and supporting
              emerging technologies.
            </p>

            <p>
              I am particularly interested in the intersection of software
              engineering, artificial intelligence, and cybersecurity, where I
              enjoy applying creative problem-solving to complex technical
              challenges. I also have a strong interest in data science, cloud
              infrastructure, computer networking, and immersive technologies.
            </p>

            {/* Phone only: image dropped in between paragraphs */}
            <div className="sm:hidden">
              <ProfileImage className="my-2" />
            </div>

            <p>
              Outside of work I love keeping up with the developments of science
              & technology. I also enjoy fitness, watching and playing sports,
              especially basketball & listening to music.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}