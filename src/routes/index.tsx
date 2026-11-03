import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Github,
  Copy,
  Check,
  Menu,
  X,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eno Osuji — Backend Engineer | APIs & Distributed Systems" },
      {
        name: "description",
        content:
          "Portfolio of Eno Osuji, a backend engineer building high-performance APIs, distributed systems, and reliable server-side applications.",
      },
      { property: "og:title", content: "Eno Osuji — Backend Engineer | APIs & Distributed Systems" },
      {
        property: "og:description",
        content:
          "Portfolio of Eno Osuji, a backend engineer building high-performance APIs, distributed systems, and reliable server-side applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://enoosuji.com" },
      { property: "og:image", content: "https://enoosuji.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Eno Osuji — Backend Engineer Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eno Osuji — Backend Engineer | APIs & Distributed Systems" },
      {
        name: "twitter:description",
        content:
          "Portfolio of Eno Osuji, a backend engineer building high-performance APIs, distributed systems, and reliable server-side applications.",
      },
      { name: "twitter:image", content: "https://enoosuji.com/og-image.png" },
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
    repoUrl: "https://github.com/Dickson-Hardy",
    actionLabel: "View Source",
  },
  {
    name: "kitchen-order-api",
    type: "Kitchen Ordering API & WhatsApp Bot",
    description:
      "High-throughput conversational ordering backend powered by Meta WhatsApp Cloud API webhooks. Implements session-based cart state machines in Redis, dynamic interactive menu dispatch, automated payment webhook verification, and real-time Kitchen Display System (KDS) order routing via WebSockets with instant customer status tracking.",
    stack: ["Node.js", "PostgreSQL", "Redis", "WhatsApp Cloud API", "WebSockets"],
    status: "production",
    repoUrl: "https://github.com/Dickson-Hardy",
    actionLabel: "View Architecture",
  },
];

function Nav({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          <img src="/logo.svg" alt="Eno Osuji Monogram" className="h-6 w-auto" />
          <span>~/eno-osuji</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a
            href="#about"
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
          >
            About
          </a>
          <a
            href="#skills"
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
          >
            Projects
          </a>
          <a
            href="https://github.com/Dickson-Hardy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-md border border-primary/40 px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="#contact"
            className="rounded-md border border-primary/40 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      {mobileMenuOpen && (
        <div className="border-b border-border/60 bg-background/95 px-5 py-4 backdrop-blur-lg sm:hidden animate-fade-up">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              // about
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              // skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              // projects
            </a>
            <a
              href="https://github.com/Dickson-Hardy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" /> github.com/Dickson-Hardy
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_65%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-5 pb-20 pt-32 sm:pt-40 lg:flex-row lg:items-center lg:gap-14">
        <div className="flex-1 animate-fade-up">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Eno Osuji Mark" className="h-9 w-auto" />
            <p className="font-mono text-sm text-primary">$ whoami</p>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Eno Osuji
          </h1>
          <p className="text-glow mt-2 font-mono text-lg text-primary sm:text-xl font-medium">
            Backend & Systems Engineer
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build APIs, distributed data pipelines, and reliable server-side architectures — systems that
            stay up under load, scale out gracefully, and are a pleasure to integrate with.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/Dickson-Hardy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eno Osuji GitHub Profile"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-3.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>

        {/* Terminal card with realistic syntax highlighting */}
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
              <span className="text-terminal-green">➜</span>{" "}
              <span className="text-terminal-blue">~</span> cat profile.json
            </p>
            <div className="rounded-md border border-border/40 bg-background/70 p-3.5 text-muted-foreground">
              <p><span className="text-primary font-semibold">&#123;</span></p>
              <p className="pl-4">
                <span className="text-foreground/90 font-medium">"role"</span>: <span className="text-terminal-green">"Backend & Systems Engineer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-foreground/90 font-medium">"focus"</span>: [<span className="text-terminal-blue">"APIs"</span>, <span className="text-terminal-blue">"Distributed Systems"</span>, <span className="text-terminal-blue">"TCP/IP"</span>],
              </p>
              <p className="pl-4">
                <span className="text-foreground/90 font-medium">"stack"</span>: [<span className="text-terminal-amber">"Node.js"</span>, <span className="text-terminal-amber">"Go"</span>, <span className="text-terminal-amber">"Python"</span>],
              </p>
              <p className="pl-4">
                <span className="text-foreground/90 font-medium">"databases"</span>: [<span className="text-terminal-amber">"PostgreSQL"</span>, <span className="text-terminal-amber">"Redis"</span>],
              </p>
              <p className="pl-4">
                <span className="text-foreground/90 font-medium">"uptime"</span>: <span className="text-terminal-green font-semibold">"99.99%"</span>
              </p>
              <p><span className="text-primary font-semibold">&#125;</span></p>
            </div>
            <p className="pt-1">
              <span className="text-terminal-green">➜</span>{" "}
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
            <div className="flex items-center gap-3.5 rounded-lg border border-border bg-card p-3.5 shadow-sm">
              <img
                src="/avatar.png"
                alt="Eno Osuji"
                className="h-11 w-11 shrink-0 rounded-md border border-border object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">Eno Osuji</p>
                <p className="font-mono text-xs text-primary">Backend & Systems Specialist</p>
              </div>
            </div>
            {[
              { icon: GitBranch, label: "API-first development" },
              { icon: Cloud, label: "Cloud-native deployments" },
              { icon: Terminal, label: "Infrastructure as code" },
              { icon: MapPin, label: "Port Harcourt, Nigeria — available for remote work" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground/90 shadow-sm"
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
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary border border-border/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
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
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`card-hover flex flex-col justify-between rounded-xl border border-border bg-card p-6${
                i === projects.length - 1 && projects.length % 2 === 1
                  ? " md:col-span-2"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-lg font-semibold text-primary">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {p.type}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-terminal-green/30 bg-terminal-green/10 px-2.5 py-0.5 font-mono text-xs text-terminal-green shrink-0 whitespace-nowrap">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terminal-green opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-terminal-green"></span>
                    </span>
                    {p.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2 border-t border-border/70 pt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-secondary border border-border/50 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between pt-2">
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>{p.actionLabel}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="#contact"
                    className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    Inquire details ➜
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("enoosuji@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <SectionHeading kicker="// contact" title="Let's build something reliable" />
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          Have an API to design, a system to scale, or a backend role to fill?
          My inbox is always open — I'll get back to you within a day.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:enoosuji@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Mail className="h-4 w-4" /> enoosuji@gmail.com
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-terminal-green" />
                <span className="text-terminal-green font-mono text-xs">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-muted-foreground" />
                <span>Copy email</span>
              </>
            )}
          </button>

          <a
            href="https://github.com/Dickson-Hardy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>

          <a
            href="https://wa.me/?text=Hi%20Eno,%20I%20saw%20your%20backend%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <MessageCircle className="h-4 w-4 text-terminal-green" />
            <span>WhatsApp</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Eno Osuji Mark" className="h-4 w-auto opacity-75" />
          <p className="font-mono text-xs">
            <span className="text-primary">➜</span> © {new Date().getFullYear()} Eno Osuji
          </p>
        </div>
        <div className="flex items-center gap-5 text-xs font-mono">
          <a
            href="https://github.com/Dickson-Hardy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            github
          </a>
          <span>•</span>
          <a href="#top" className="transition-colors hover:text-primary">
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      <Nav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
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
