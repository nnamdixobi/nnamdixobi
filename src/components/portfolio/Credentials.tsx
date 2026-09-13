import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  BadgeCheck,
  Calendar,
  ExternalLink,
  Fingerprint,
  GraduationCap,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  credentialFilters,
  credentialPlaceholder,
  credentialTypeLabels,
  credentials,
  type Credential,
  type CredentialType,
} from "@/lib/credentials";

const typeIcon: Record<CredentialType, LucideIcon> = {
  degree: GraduationCap,
  certification: BadgeCheck,
  badge: Award,
  training: Sparkles,
  license: ShieldCheck,
};

const statusStyles: Record<Credential["status"], string> = {
  active:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  "in-progress":
    "border-amber-500/40 bg-amber-500/10 text-amber-400",
  expired: "border-rose-500/40 bg-rose-500/10 text-rose-400",
};

const statusLabel: Record<Credential["status"], string> = {
  active: "Active",
  "in-progress": "In progress",
  expired: "Expired",
};

function CredentialCard({
  credential,
  index,
  onOpen,
}: {
  credential: Credential;
  index: number;
  onOpen: (c: Credential) => void;
}) {
  const Icon = typeIcon[credential.type];
  const image = credential.image ?? credentialPlaceholder;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur transition-colors hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
    >
      <button
        type="button"
        onClick={() => onOpen(credential)}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-muted/40"
        aria-label={`Open ${credential.title} certificate`}
      >
        <img
          src={image}
          alt={`${credential.title} certificate`}
          loading="lazy"
          width={1600}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-background/0" />
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
          <Icon className="size-3 text-primary" />
          {credentialTypeLabels[credential.type]}
        </div>
        <div
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur ${statusStyles[credential.status]}`}
        >
          {statusLabel[credential.status]}
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-border/60 bg-background/60 text-primary">
            {credential.logo ? (
              <img
                src={credential.logo}
                alt={`${credential.issuer} logo`}
                loading="lazy"
                className="size-6 object-contain"
              />
            ) : (
              <Icon className="size-5" />
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold leading-tight tracking-tight text-foreground">
              {credential.title}
            </h3>
            <p className="mt-0.5 truncate text-sm text-primary">
              {credential.issuer}
            </p>
          </div>
        </div>

        {credential.description && (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {credential.description}
          </p>
        )}

        <div className="mt-auto space-y-2 pt-2 text-xs text-muted-foreground">
          {credential.issueDate && (
            <div className="flex items-center gap-2 font-mono">
              <Calendar className="size-3.5" />
              <span>
                {credential.issueDate}
                {credential.expirationDate
                  ? ` — ${credential.expirationDate}`
                  : ""}
              </span>
            </div>
          )}
          {credential.credentialId && (
            <div className="flex items-center gap-2 font-mono">
              <Fingerprint className="size-3.5" />
              <span className="truncate">ID · {credential.credentialId}</span>
            </div>
          )}
        </div>

        {credential.verificationUrl && (
          <a
            href={credential.verificationUrl}
            target="_blank"
            rel="noreferrer "
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Verify
            <ExternalLink className="size-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Credentials() {
  const [filter, setFilter] = useState<"all" | CredentialType>("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Credential | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return credentials.filter((c) => {
      if (filter !== "all" && c.type !== filter) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        (c.description ?? "").toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  return (
    <Section
      id="credentials"
      number="06"
      eyebrow="Credentials"
      title="Degrees, certifications & badges."
      description="A verifiable record of my academic degrees, professional certifications, digital badges, training, and licenses."
      meta={`${credentials.length} on file`}
    >
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {credentialFilters.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search credentials..."
            aria-label="Search credentials"
            className="pl-9"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/60 bg-card/30 p-12 text-center text-sm text-muted-foreground">
          No credentials match your search.
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <CredentialCard
                key={c.id}
                credential={c}
                index={i}
                onOpen={setActive}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl overflow-hidden border-border/60 bg-card/95 p-0 backdrop-blur">
          {active && (
            <div className="flex flex-col">
              <div className="relative bg-muted/40">
                <img
                  src={active.image ?? credentialPlaceholder}
                  alt={`${active.title} certificate`}
                  className="h-auto max-h-[70vh] w-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-border/60 bg-background/80 text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="space-y-3 p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1 font-medium uppercase tracking-wider text-muted-foreground">
                    {credentialTypeLabels[active.type]}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 font-medium uppercase tracking-wider ${statusStyles[active.status]}`}
                  >
                    {statusLabel[active.status]}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {active.title}
                </h3>
                <p className="text-sm text-primary">{active.issuer}</p>
                {active.description && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {active.description}
                  </p>
                )}
                <div className="grid gap-2 pt-2 text-xs text-muted-foreground sm:grid-cols-2">
                  {active.issueDate && (
                    <div className="flex items-center gap-2 font-mono">
                      <Calendar className="size-3.5" />
                      Issued · {active.issueDate}
                    </div>
                  )}
                  {active.expirationDate && (
                    <div className="flex items-center gap-2 font-mono">
                      <Calendar className="size-3.5" />
                      Expires · {active.expirationDate}
                    </div>
                  )}
                  {active.credentialId && (
                    <div className="flex items-center gap-2 font-mono sm:col-span-2">
                      <Fingerprint className="size-3.5" />
                      ID · {active.credentialId}
                    </div>
                  )}
                </div>
                {active.verificationUrl && (
                  <div className="pt-2">
                    <a
                      href={active.verificationUrl}
                      target="_blank"
                      rel="noreferrer "
                      className="inline-flex items-center gap-1.5 rounded-lg border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      Verify credential
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}