import { createFileRoute } from "@tanstack/react-router";
import {
  Server,
  Database,
  ShieldCheck,
  Gauge,
  GitBranch,
  Container,
  Cloud,
  Braces,
  Mail,
  MapPin,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eno Osuji — Backend Engineer" },
      {
        name: "description",
        content:
          "Backend engineer building APIs and reliable server-side applications. Skills, projects, and contact.",
      },
      { property: "og:title", content: "Eno Osuji — Backend Engineer" },
      {
        property: "og:description",
        content:
          "Backend engineer building APIs and reliable server-side applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    icon: Server,
    title: "API Design",
    desc: "REST & GraphQL APIs with clean contracts, versioning, and OpenAPI docs.",
    tags: ["REST", "GraphQL", "OpenAPI"],
  },
  {
    icon: Database,
    title: "Databases",
    desc: "Schema design, query optimization, indexing, and replication strategies.",
    tags: ["PostgreSQL", "Redis", "MongoDB"],
  },
  {
    icon: Braces,
    title: "Languages & Frameworks",
    desc: "Type-safe, well-tested server code across modern runtimes.",
    tags: ["Node.js", "TypeScript", "Python", "Go"],
  },
  {
    icon: Container,
    title: "DevOps & Infra",
    desc: "Containerized deployments, CI/CD pipelines, and infrastructure as code.",
    tags: ["Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: Gauge,
    title: "Performance & Reliability",
    desc: "Caching, queues, observability, and fault-tolerant system design.",
    tags: ["RabbitMQ", "Prometheus", "Grafana"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Auth flows, encryption at rest and in transit, and secure defaults.",
    tags: ["OAuth2", "JWT", "OWASP"],
  },
];

const projects = [
  {
    name: "lab-info-system",
    type: "Laboratory Information System — Backend",
    description:
      "Comprehensive LIS backend with JWT auth and role-based access (Admin, Lab Tech, Receptionist). Complete order lifecycle from creation to completion, patient management, test catalog, and multi-method payment processing. TCP/IP analyzer integration for HL7, ASTM, and LIS2-A2 protocols with automated result import and manual matching. WebSocket notifications and full audit logging.",
    stack: ["NestJS", "MongoDB", "Socket.IO", "JWT + Passport", "HL7 / ASTM"],
    status: "production",
  },
  {
    name: "expense-tracker",
    type: "Open Source — Web App",
    description:
      "Personal expense tracker built with Django and Bootstrap. Filter entries by name or price, sort by date or image availability, and track monthly totals against a set budget.",
    stack: ["Django", "Bootstrap", "Python"],
    status: "open-source",
  },
];

const statusColor: Record<string, string> = {
  production: "text-terminal-green",
  "in-progress": "text-terminal-amber",
  "open-source": "text-terminal-blue",
};

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-primary">
          ~/eno-osuji
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
          <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
          <a
            href="#contact"
            className="rounded-md border border-primary/40 px-3 py-1.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="rounded-md border border-primary/40 px-3 py-1.5 text-sm text-primary sm:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.16_155/8%),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-5 pb-20 pt-32 sm:pt-40 lg:flex-row lg:items-center lg:gap-14">
        <div className="flex-1 animate-fade-up">
          <p className="font-mono text-sm text-primary">$ whoami</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Eno Osuji
          </h1>
          <p className="text-glow mt-2 font-mono text-lg text-primary sm:text-xl">
            Backend Engineer
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build APIs and reliable server-side applications — systems that
            stay up, scale out, and are a pleasure to integrate with.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Terminal card */}
        <div className="w-full max-w-md animate-fade-up rounded-xl border border-border bg-card shadow-2xl [animation-delay:150ms]">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-terminal-amber/70" />
            <span className="h-3 w-3 rounded-full bg-terminal-green/70" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              eno@server: ~
            </span>
          </div>
          <div className="space-y-2 p-5 font-mono text-xs leading-relaxed sm:text-sm">
            <p>
              <span className="text-primary">➜</span>{" "}
              <span className="text-terminal-blue">~</span> cat profile.json
            </p>
            <pre className="text-muted-foreground">
{`{
  "role": "Backend Engineer",
  "focus": ["APIs", "Distributed Systems"],
  "stack": ["Node.js", "Go", "Python"],
  "databases": ["PostgreSQL", "Redis"],
  "uptime": "99.99%"
}`}
            </pre>
            <p>
              <span className="text-primary">➜</span>{" "}
              <span className="text-terminal-blue">~</span>{" "}
              <span className="animate-blink text-primary">▊</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-primary">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <SectionHeading kicker="// about" title="About me" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I'm a backend engineer who cares about the parts of software users
              never see — the APIs, queues, and databases that everything else
              depends on. My work is designing server-side systems that are
              correct under pressure, observable in production, and simple to
              operate.
            </p>
            <p>
              From designing clean API contracts to tuning queries and building
              fault-tolerant pipelines, I focus on reliability first: clear
              error handling, solid test coverage, and infrastructure that
              recovers gracefully when things go wrong.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { icon: GitBranch, label: "API-first development" },
              { icon: Cloud, label: "Cloud-native deployments" },
              { icon: Terminal, label: "Infrastructure as code" },
              { icon: MapPin, label: "Port Harcourt, Nigeria — available for remote work" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <SectionHeading kicker="// skills" title="What I work with" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="card-hover rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <SectionHeading kicker="// projects" title="Proposed & shipped projects" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`card-hover flex flex-col rounded-xl border border-border bg-card p-6${
                i === projects.length - 1 && projects.length % 2 === 1
                  ? " md:col-span-2"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-mono font-semibold text-primary">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {p.type}
                  </p>
                </div>
                <span className={`font-mono text-xs shrink-0 whitespace-nowrap ${statusColor[p.status]}`}>
                  ● {p.status}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <SectionHeading kicker="// contact" title="Let's build something reliable" />
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          Have an API to design, a system to scale, or a backend role to fill?
          My inbox is always open — I'll get back to you within a day.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:enoosuji@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> enoosuji@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono text-xs">
          <span className="text-primary">➜</span> © 2023 Eno Osuji
        </p>
        <p className="font-mono text-xs">built with uptime in mind</p>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
