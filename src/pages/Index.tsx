import { useEffect, useMemo, useState, type ComponentType } from "react";
import { Brain, Code, Cloud, Database, ExternalLink, Globe, Layers, Monitor, Play, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";

const projects = [
  {
    title: "The Merchant's Ledger",
    period: "Dec '25 - Jan '26",
    label: "Enterprise inventory platform",
    image: "/merchant.png",
    description:
      "Enterprise-grade inventory management with real-time stock tracking across 10+ warehouses.",
    highlights: [
      "Event-driven microservices with Spring Boot + RabbitMQ",
      "10,000+ req/min REST APIs, PostgreSQL + Redis caching",
      "Reduced inventory sync latency by 45%",
      "Barcode workflows cut stock discrepancies by 95%",
    ],
    tech: "Java, Spring Boot, PostgreSQL, Redis, RabbitMQ, Docker, WebSockets",
    liveUrl: "https://the-merchant-s-ledger.vercel.app/",
    tone: "from-emerald-500/30 via-slate-900/70 to-black",
  },
  {
    title: "Infinite-Pipeline",
    period: "Nov '25 - Jan '26",
    label: "Distributed CI/CD system",
    image: "/pipeline.png",
    description:
      "End-to-end build, test, and deployment pipelines with real-time execution tracking.",
    highlights: [
      "Docker + Kubernetes microservices for CI/CD orchestration",
      "Jenkins + GitHub integrations for automated deployments",
      "Centralized monitoring cut MTTD by 50%",
    ],
    tech: "Docker, Kubernetes, Spring Boot, Render, React.js, Maven",
    liveUrl: "https://infinite-pipeline-main.vercel.app/",
    tone: "from-blue-500/30 via-slate-900/70 to-black",
  },
  {
    title: "Freelancing Platform",
    period: "Nov '25 - Dec '25",
    label: "Full-stack product",
    image: "/freelance.png",
    description:
      "Scalable platform for project posting, applications, contracts, and payments.",
    highlights: [
      "Realtime messaging and contract proposals",
      "Razor Pay payment integration",
      "Role-based authentication and secure sessions",
      "Reduced coordination effort by 40%",
    ],
    tech: "React.js, Express.js, MongoDB, Node.js, Tailwind CSS",
    liveUrl: "https://prolance-five.vercel.app/",
    tone: "from-amber-500/30 via-slate-900/70 to-black",
  },
];

const stackGroups = [
  {
    title: "Languages",
    items: ["C++", "Java", "JavaScript", "Python"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Spring Boot", "Tailwind CSS"],
  },
  {
    title: "Database & Messaging",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    title: "Tools, Cloud, DevOps & Platforms",
    items: ["Git", "GitHub", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    title: "Core CS Fundamentals",
    items: ["DBMS", "OS", "CN", "SQL", "OOPs"],
  },
  {
    title: "Soft Skills",
    items: ["Problem-Solving", "Team Player", "Project Management", "Adaptability", "Communication"],
  },
];

const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  Languages: Code,
  "Web Technologies": Globe,
  "Frameworks & Libraries": Layers,
  "Database & Messaging": Database,
  "Tools, Cloud, DevOps & Platforms": Cloud,
  "Core CS Fundamentals": Brain,
  "Soft Skills": Sparkles,
};

const trainingDetails = [
  {
    title: "Trainee - Data Structure and Algorithms",
    org: "Lovely Professional University",
    period: "Jun '25 - Jul '25",
    bullets: [
      "Completed structured training in Data Structures and Algorithms using C++.",
      "Benchmarked and tuned C++ solutions to improve time and space efficiency.",
      "Applied algorithmic optimization to achieve up to 40% improvement in execution efficiency.",
    ],
  },
];

const certificates = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    period: "Jun '25",
    image: "/cloudcertificate.png",
    link: "https://drive.google.com/file/d/1mnJ9bx_TDg72iu8hqgLzJYOSIEbcsrOz/view",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    period: "Sep '24",
    image: "/Bits%20and%20byte%20certificate.png",
    link: "https://www.coursera.org/account/accomplishments/verify/VA36IGJSD56Q?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
];

const achievements = [
  {
    text: "Solved 250+ problems on LeetCode with strong DSA focus.",
    image: "/leetcode%20image.png",
  },
];

const education = [
  {
    school: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    program: "Bachelor of Technology - Computer Science and Engineering",
    period: "Aug '23 - Present",
    score: "CGPA: 6.85",
  },
  {
    school: "St. Xavier's School",
    location: "Hazaribagh, Jharkhand",
    program: "Intermediate",
    period: "Apr '21 - Jul '22",
    score: "Percentage: 85.5%",
  },
];

const aboutTabs = [
  {
    id: "about",
    label: "About Me",
    image: "/Shriya.jpeg",
    badgeTop: "Open to opportunities",
    badgeRight: ["Java Fullstack", "Cloud + DevOps"],
    paragraphs: [
      "I am a results-driven Software Engineer specializing in building high-performance, scalable, and production-grade systems across backend, full-stack, and cloud-native architectures. With hands-on experience designing enterprise-scale platforms, distributed microservices, and CI/CD automation, I focus on delivering systems that are reliable, secure, and optimized for real-world scale.",
      "From architecting event-driven systems handling 10,000+ requests per minute to automating cloud-native deployment pipelines, I bring a strong engineering mindset grounded in data structures, system design, and performance engineering. I thrive in fast-paced environments where engineering excellence, ownership, and impact matter.",
      "I enjoy collaborating across product, design, and engineering to translate business goals into reliable architecture. My approach combines clear documentation, measurable KPIs, and continuous improvement so every release improves user experience and system resilience.",
    ],
    highlights: [
      "Core focus: Backend + Full-stack",
      "Cloud-native delivery: CI/CD + Kubernetes",
      "Strengths: Performance + Reliability",
      "Mindset: Ownership + Impact",
    ],
  },
  {
    id: "strengths",
    label: "Strengths",
    image: "/shriyastrength.png",
    badgeTop: "Strengths",
    badgeRight: ["Performance", "Reliability"],
    paragraphs: [
      "Systems Thinking & Architecture - Strong ability to design scalable, distributed systems with microservices, caching, messaging queues, and cloud-native patterns.",
      "Performance & Optimization Mindset - Proven experience in reducing latency, improving throughput, and optimizing APIs and databases for high-load environments.",
      "Strong Problem-Solving (DSA-Driven) - Solved 250+ LeetCode problems with a deep focus on algorithmic efficiency and edge-case handling.",
      "End-to-End Ownership - Comfortable taking projects from architecture and development to CI/CD, deployment, monitoring, and production hardening.",
      "Adaptability & Fast Learning - Quickly picks up new frameworks, tools, and system design patterns to deliver production-grade solutions.",
    ],
    highlights: [
      "System design + architecture",
      "Performance + optimization",
      "DSA-driven problem solving",
      "End-to-end ownership",
    ],
  },
  {
    id: "weaknesses",
    label: "Weaknesses",
    image: "/shriyaweakness.png",
    badgeTop: "Growth zone",
    badgeRight: ["Focus", "Balance"],
    paragraphs: [
      "Tendency to Over-Engineer - Sometimes design for scale earlier than required, which I am actively balancing with pragmatic MVP-first approaches.",
      "High Self-Standards - I can be overly critical of my own work, which I am improving by prioritizing iterative delivery and faster feedback loops.",
    ],
    highlights: [
      "Pragmatic MVP-first balance",
      "Iterative delivery mindset",
      "Faster feedback loops",
      "Continuous improvement",
    ],
  },
  {
    id: "hobbies",
    label: "Hobbies",
    image: "/hobbies.png",
    badgeTop: "Hobbies",
    badgeRight: ["Learning", "Exploration"],
    paragraphs: [
      "Competitive Programming & Coding Challenges - Regularly practicing DSA to sharpen analytical thinking and speed.",
      "Building Side Projects - Creating full-stack and backend systems to experiment with new architectures and technologies.",
      "Reading About System Design & Tech Blogs - Staying updated on scalable system patterns, cloud infrastructure, and backend engineering best practices.",
      "Tech Content & Learning - Exploring new tools, frameworks, and engineering workflows to continuously upskill.",
    ],
    highlights: [
      "Competitive programming",
      "Side projects",
      "System design reading",
      "Continuous learning",
    ],
  },
];

const aboutQuickLinks = [
  { id: "about", label: "About", image: "/Shriya.jpeg" },
  { id: "strengths", label: "Strengths", image: "/shriyastrength.png" },
  { id: "weaknesses", label: "Weaknesses", image: "/shriyaweakness.png" },
  { id: "hobbies", label: "Hobbies", image: "/hobbies.png" },
];

const Index = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [activeAboutTab, setActiveAboutTab] = useState(aboutTabs[0].id);

  const activeSkillGroup = useMemo(
    () => stackGroups[activeSkillIndex % stackGroups.length],
    [activeSkillIndex],
  );
  const activeProjectData = useMemo(
    () => projects.find((project) => project.title === activeProject) ?? null,
    [activeProject],
  );
  const hasActiveProject = activeProject !== null;
  const activeAboutData = useMemo(
    () => aboutTabs.find((tab) => tab.id === activeAboutTab) ?? aboutTabs[0],
    [activeAboutTab],
  );

  const handleAboutQuickLink = (tabId: string) => {
    setActiveAboutTab(tabId);
    window.requestAnimationFrame(() => {
      document.getElementById("about-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % stackGroups.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = hasActiveProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasActiveProject]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div aria-hidden className="film-grain pointer-events-none fixed inset-0 z-[90]" />
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl">
        <div className="border-b border-white/10">
          <div className="container mx-auto px-6 md:px-10">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-sm font-bold text-[#ffd7a3] shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                  S
                </span>
                <span className="text-lg font-semibold tracking-tight">Shriya Verma</span>
              </div>
              <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
                <a className="hover:text-foreground" href="#about">
                  About
                </a>
                <a className="hover:text-foreground" href="#projects">
                  Projects
                </a>
                <a className="hover:text-foreground" href="#stack">
                  Skills
                </a>
                <a className="hover:text-foreground" href="#training">
                  Training
                </a>
                <a className="hover:text-foreground" href="#certificates">
                  Certificates
                </a>
                <a className="hover:text-foreground" href="#achievements">
                  Achievements
                </a>
                <a className="hover:text-foreground" href="#education">
                  Education
                </a>
              </nav>
              <Button size="sm" className="rounded-full bg-primary px-5 font-semibold" asChild>
                <a href="#contact">Hire me</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white/5">
          <div className="container mx-auto flex items-center justify-center gap-6 px-6 py-4 text-sm text-muted-foreground">
            <span className="text-white/70">Get in touch</span>
            <div className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs text-white">
              <Monitor className="h-4 w-4" /> Portfolio
            </div>
            <a
              href="https://drive.google.com/file/d/177mH2SZuyLVbWUWP2JJR5Ro9qkWgMhBe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs text-white transition hover:bg-black/90"
            >
              <Play className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="scene-shell relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-hero opacity-95" />
          <div className="absolute inset-0 bg-dot-grid opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,200,120,0.2),transparent_44%)]" />
          <div className="container relative z-10 mx-auto flex min-h-[70vh] flex-col justify-center px-6 md:px-10">
            <div className="relative mx-auto max-w-4xl text-center opacity-0 animate-fade-in-up" data-reveal>
              <div className="scene-chip mx-auto mb-4">
                <Play className="h-3.5 w-3.5" />
                Scene 01 - Opening
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#ffd7a3]">Engineering in cinematic mode</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Not just projects. Scenes from my engineering story.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-sm text-white/60 sm:text-base">
                Full-stack engineer building scalable, production-grade systems with a focus on
                performance, security, and reliability. I design and ship end-to-end platforms
                using modern web technologies and cloud-native architectures.
              </p>
            </div>


            <div className="mt-12 flex justify-center">
              <div
                id="about-panel"
                className="scene-poster w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-black/65 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-md opacity-0 animate-fade-in-up stagger-1"
                data-reveal
              >
                <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-6 py-4 text-xs text-white/60">
                  <span className="h-8 w-8 rounded-full bg-white/10" />
                  {aboutTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveAboutTab(tab.id)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                        activeAboutTab === tab.id
                          ? "bg-white text-black"
                          : "bg-white/10 text-white/70 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                  <span className="ml-auto flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-white/10" />
                    Shriya Verma
                  </span>
                </div>
                <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="h-full space-y-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {activeAboutData.label}
                    </p>
                    <h3 className="text-3xl font-semibold text-white">{activeAboutData.label}</h3>
                    <div className="space-y-3 text-sm text-white/70">
                      {activeAboutData.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="grid gap-2 text-xs text-white/60 sm:grid-cols-2">
                      {activeAboutData.highlights.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 lg:items-start" data-reveal>
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_18px_50px_rgba(0,0,0,0.45)] rotate-[-2deg] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1">
                      <img
                        src={activeAboutData.image}
                        alt={activeAboutData.label}
                        className={`h-full w-full object-cover ${
                          activeAboutData.id === "strengths" ? "object-top" : "object-center"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
                      <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80">
                        {activeAboutData.badgeTop}
                      </span>
                      <div className="absolute bottom-4 right-4 space-y-2 text-right">
                        {activeAboutData.badgeRight.map((badge) => (
                          <span
                            key={badge}
                            className="block rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scene-shell py-16" data-reveal>
          <div className="container mx-auto px-6 md:px-10">
            <div className="mb-10 text-center">
              <div className="scene-chip mx-auto mb-4">
                <Play className="h-3.5 w-3.5" />
                Scene 02 - Build Montage
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Project scenes</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60">
                Real-world builds with measurable outcomes and production-grade architecture.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#ffd7a3]">
                Click any project to open full-screen scene
              </p>
            </div>
            <div className="grid items-start gap-6 lg:grid-cols-3">
              {projects.map((project) => {
                const isActive = activeProject === project.title;

                return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveProject(project.title)}
                  aria-pressed={isActive}
                  className="scene-poster col-span-12 overflow-hidden rounded-3xl border border-white/15 text-left shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] md:col-span-6 lg:col-span-1"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%), url(${project.image})`,
                    backgroundSize: "100% 200px",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="pt-[200px]">
                    <div className="rounded-b-3xl border-t border-white/10 bg-black/70 p-6 backdrop-blur-sm">
                      <p className="text-xs text-white/60">{project.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{project.description}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">Tap to open scene</p>
                    </div>
                  </div>
                </button>
              )})}
            </div>
          </div>
        </section>

        {activeProjectData && (
          <div className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-sm">
            <button
              type="button"
              aria-label="Close project scene"
              onClick={() => setActiveProject(null)}
              className="absolute right-6 top-6 z-10 rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:bg-black"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-full overflow-y-auto">
              <div className="relative min-h-screen">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 58%, rgba(0,0,0,0.95) 100%), url(${activeProjectData.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-[1] container mx-auto px-6 pb-20 pt-24 md:px-10">
                  <div className="mx-auto max-w-6xl rounded-[32px] border border-white/15 bg-black/55 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl md:p-10">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#ffd7a3]">
                      <span className="scene-chip">Project Scene</span>
                      <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white/70">{activeProjectData.period}</span>
                      <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white/70">{activeProjectData.label}</span>
                    </div>
                    <h3 className="mt-6 text-4xl text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] sm:text-6xl">
                      {activeProjectData.title}
                    </h3>
                    <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/85 md:text-lg">
                      {activeProjectData.description}
                    </p>

                    <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                      <div className="rounded-3xl border border-white/15 bg-black/40 p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Highlights</p>
                        <ul className="mt-4 space-y-3 text-sm text-white/85">
                          {activeProjectData.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-3xl border border-white/15 bg-black/40 p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Tech stack</p>
                        <p className="mt-4 text-sm leading-relaxed text-white/85">{activeProjectData.tech}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button className="rounded-full bg-primary px-5 font-semibold text-white hover:bg-primary/90" asChild>
                            <a href={activeProjectData.liveUrl} target="_blank" rel="noopener noreferrer">
                              Watch Live
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-full border-white/30 bg-black/40 text-white hover:bg-white/10"
                            onClick={() => setActiveProject(null)}
                          >
                            Close Scene
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section id="stack" className="scene-shell py-16" data-reveal>
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center">
              <div className="scene-chip mx-auto mb-4">
                <Play className="h-3.5 w-3.5" />
                Scene 03 - Toolkit Reveal
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                My skills
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">The stack behind each scene.</h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-8 text-center text-sm text-white/70">
              {stackGroups.map((group, index) => {
                const Icon = skillIcons[group.title] ?? Layers;
                const isActive = activeSkillIndex === index;
                return (
                  <button
                    key={group.title}
                    className="flex flex-col items-center gap-3"
                    onClick={() => setActiveSkillIndex(index)}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border bg-white/5 transition duration-300 hover:-translate-y-1 ${
                        isActive
                          ? "border-primary shadow-[0_0_0_3px_rgba(59,130,246,0.35)]"
                          : "border-white/20"
                      }`}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="max-w-[140px]">{group.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeSkillGroup.items.map((item) => (
                <div
                  key={`${activeSkillGroup.title}-${item}`}
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-base font-semibold text-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="training" className="scene-shell py-16" data-reveal>
          <div className="container mx-auto px-6 md:px-10">
            <div className="mb-10 text-center">
              <div className="scene-chip mx-auto mb-4">
                <Play className="h-3.5 w-3.5" />
                Scene 04 - Training Arc
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Training
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Training</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-6">
                {trainingDetails.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/60">
                      <span>{item.org}</span>
                      <span>{item.period}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/60">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/20 text-white"
                        asChild
                      >
                        <a
                          href="https://drive.google.com/file/d/1uLKTlq7CneiOSeLv54iDANopwcsAtjGy/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />
                <div className="relative h-64 w-64">
                  <img
                    src="/training.png"
                    alt="Training certificate 1"
                    className="scene-pan absolute inset-0 h-full w-full rounded-2xl border border-white/10 object-cover shadow-[0_16px_32px_rgba(0,0,0,0.4)] animate-fade-swap"
                  />
                  <img
                    src="/tarining2.png"
                    alt="Training certificate 2"
                    className="scene-pan absolute inset-0 h-full w-full rounded-2xl border border-white/10 object-cover shadow-[0_16px_32px_rgba(0,0,0,0.4)] animate-fade-swap-delayed"
                  />
                </div>
                <div className="absolute bottom-4 text-xs uppercase tracking-[0.2em] text-white/60">
                  Training highlights
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="scene-shell py-16" data-reveal>
          <div className="container mx-auto px-6 md:px-10">
            <div className="mb-10 text-center">
              <div className="scene-chip mx-auto mb-4">
                <Play className="h-3.5 w-3.5" />
                Scene 05 - Credentials Roll
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Certificates
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Certificates</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="scene-poster overflow-hidden rounded-3xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%), url(${cert.image})`,
                    backgroundSize: "100% 220px",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="pt-[220px]">
                    <div className="rounded-b-3xl border-t border-white/10 bg-black/70 p-6 backdrop-blur-sm">
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>{cert.issuer}</span>
                        <span>{cert.period}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-white">{cert.title}</h3>
                      {cert.link && (
                        <div className="mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-white/20 text-white"
                            asChild
                          >
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              View Certificate
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="scene-shell py-16" data-reveal>
          <div className="container mx-auto px-6 md:px-10">
            <div className="mb-10 text-center">
              <div className="scene-chip mx-auto mb-4">
                <Play className="h-3.5 w-3.5" />
                Scene 06 - Wins
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Achievements
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Achievements</h2>
            </div>
            <div className="grid gap-6">
              {achievements.map((item) => (
                <div
                  key={item.text}
                  className="scene-poster overflow-hidden rounded-3xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="rounded-b-3xl border-t border-white/10 bg-black/70 p-6 backdrop-blur-sm">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="scene-shell py-16" data-reveal>
          <div className="container mx-auto px-6 md:px-10">
            <div className="mb-10 text-center">
              <div className="scene-chip mx-auto mb-4">
                <Play className="h-3.5 w-3.5" />
                Scene 07 - Credits
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Education
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Education</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {education.map((item) => (
                <div
                  key={`${item.school}-${item.period}`}
                  className="scene-poster rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{item.location}</span>
                    <span>{item.period}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.school}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.program}</p>
                  <p className="mt-2 text-xs text-white/60">{item.score}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row">
          <span>Shriya Verma - Product focused engineer</span>
          <div className="flex items-center gap-4">
            <a className="hover:text-foreground" href="#about">
              About
            </a>
            <a className="hover:text-foreground" href="#projects">
              Projects
            </a>
            <a className="hover:text-foreground" href="#stack">
              Skills
            </a>
            <a className="hover:text-foreground" href="#training">
              Training
            </a>
            <a className="hover:text-foreground" href="#education">
              Education
            </a>
            <a className="hover:text-foreground" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
