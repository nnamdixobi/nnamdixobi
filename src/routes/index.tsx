import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nnamdi Kelvin Ikenna-Obi — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nnamdi Kelvin Ikenna-Obi, a software engineer focused on AI, cybersecurity, cloud systems, and VR research.",
      },
      { property: "og:title", content: "Nnamdi Kelvin Ikenna-Obi — Software Engineer" },
      {
        property: "og:description",
        content: "Software engineering, AI, cybersecurity, cloud, and VR research projects and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: "https://nnamdixobi.com/",
    email: `mailto:${profile.email}`,
    jobTitle: "Software Engineer",
    alumniOf: "Auburn University",
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <div className="relative min-h-dvh">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </div>
  );
}