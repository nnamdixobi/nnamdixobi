import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio-data";
import { useActiveSection } from "@/hooks/use-active-section";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const sectionIds = navItems.map((n) => n.href.replace("#", ""));

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <motion.div
        aria-hidden
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="absolute inset-x-0 top-0 h-0.5 bg-[image:var(--gradient-primary)]"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 rounded-md font-display text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          <span className="grid size-7 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
            N
          </span>
          <span className="hidden sm:inline">{profile.name.split(" ")[0]}</span>
          <span className="hidden text-muted-foreground sm:inline">/</span>
          <span className="hidden text-muted-foreground sm:inline">
            {profile.handle}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-[image:var(--gradient-primary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Github className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="ml-1 hidden items-center gap-2 rounded-md border border-border/60 bg-card/60 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:inline-flex"
          >
            <Mail className="size-4" /> Get in touch
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="ml-1 grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:hidden"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-border/60 bg-background/95 backdrop-blur"
            >
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = active === id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-card text-foreground"
                          : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}