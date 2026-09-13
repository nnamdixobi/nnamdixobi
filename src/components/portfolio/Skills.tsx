import { motion } from "motion/react";
import { Section } from "./Section";
import { skillGroups } from "@/lib/portfolio-data";

const totalSkills = skillGroups.reduce((acc, group) => acc + group.items.length, 0);

function SkillGroupRow({
  group,
  index,
}: {
  group: (typeof skillGroups)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group flex flex-col gap-3 border-b border-border/50 py-5 sm:flex-row sm:items-start sm:gap-10"
    >
      <h3 className="w-full shrink-0 text-sm font-semibold uppercase tracking-wider text-foreground sm:w-40">
        {group.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border/50 bg-card/40 px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      number="03"
      eyebrow="Toolkit"
      title="Technical Skills."
      meta={`${totalSkills} skills`}
    >
      <div className="divide-y divide-border/50 border-t border-border/50">
        {skillGroups.map((group, i) => (
          <SkillGroupRow key={group.name} group={group} index={i} />
        ))}
      </div>
    </Section>
  );
}
