import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Designed & built with
          care.
        </p>
        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}