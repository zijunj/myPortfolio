"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "next/image";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI-Driven Esports Statistics Platform",
    category: "Full-Stack Web App",
    year: "2025",
    link: "https://main.dj5wgqe9zayl7.amplifyapp.com/",
    image: "/strafe-sc.png",
    description:
      "Built a real-time Valorant statistics platform with React, Supabase, API integrations, Java and Node.js services, OpenAI-powered insights, and AWS deployment.",
    stack: ["React", "Supabase", "Node.js", "Java", "AWS", "OpenAI"],
  },
  {
    title: "Personalized Skincare & Makeup App",
    category: "Android Application",
    year: "2025",
    link: "https://github.com/zijunj/SKIN",
    image: "/skin-sc.png",
    description:
      "Developed a Kotlin app with Jetpack Compose for personalized product recommendations, barcode scanning, Firebase-backed flows, and product API integrations.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "APIs"],
  },
  {
    title: "Ultimate Frisbee Statistics Website",
    category: "Data + Web Platform",
    year: "2024",
    link: "https://scientist-quotes-0e629fe0ba9a.herokuapp.com/",
    image: "/ultistats-sc.png",
    description:
      "Created a Django-based analytics site with scraping pipelines, advanced filtering, and predictive modeling for collegiate frisbee player performance.",
    stack: ["Django", "Python", "Data Scraping", "Modeling"],
  },
  {
    title: "Rideshare Price Prediction Model",
    category: "Machine Learning Project",
    year: "2024",
    link: "#contact",
    description:
      "Analyzed Uber and Lyft pricing behavior with regression, decision trees, clustering, and a visualization layer for trend exploration and forecasting.",
    stack: ["Python", "Scikit-learn", "Data Viz", "Forecasting"],
  },
];

const experience = [
  {
    role: "Software Engineering Intern",
    company: "Skinstric",
    period: "2026",
  },
  {
    role: "Frontend / Full-Stack Developer",
    company: "Personal & Academic Projects",
    period: "2024 - Present",
  },
  {
    role: "B.A. in Computer Science",
    company: "Boston University · GPA 3.77",
    period: "Graduated May 2025",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Java",
  "Kotlin",
  "Django",
  "Flask",
  "AWS",
  "SQL",
  "MongoDB",
  "GitHub",
];

const metrics = [
  { value: "5", label: "Shipped portfolio-ready builds" },
  { value: "3", label: "Product areas across web, mobile, and ML" },
  { value: "2025", label: "Boston University CS graduate" },
];

export default function Home() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      gsap.set("[data-hero-item], [data-animate-item]", {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
      });
      return;
    }

    const ctx = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
      const animatedItems = gsap.utils.toArray<HTMLElement>(
        "[data-animate-item]",
      );

      gsap.set(animatedItems, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
      });

      gsap.set(heroItems, {
        autoAlpha: 0,
        y: 20,
        filter: "blur(6px)",
      });

      gsap.to(heroItems, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
        stagger: 0.09,
        ease: "power2.out",
        delay: 0.03,
      });

      const groups = gsap.utils.toArray<HTMLElement>("[data-animate-group]");

      groups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(
          "[data-animate-item]",
        );

        if (!items.length) {
          return;
        }

        gsap.set(items, {
          autoAlpha: 0,
          y: 22,
          filter: "blur(6px)",
        });

        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-black"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="orb orb-cyan absolute left-[-10rem] top-16 h-80 w-80" />
        <div className="orb orb-amber absolute right-[-8rem] top-[28rem] h-72 w-72" />
        <div className="orb orb-blue absolute bottom-24 left-1/3 h-96 w-96" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 md:px-10 lg:px-14">
        <header
          data-hero-item
          className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-white/60 backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]" />
              <span>Zi jun Jiang</span>
            </div>
            <nav className="hidden gap-8 md:flex">
              <a href="#work" className="transition hover:text-white">
                Work
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <div className="relative grid flex-1 items-center gap-10 py-14 md:py-18 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:py-20">
          <div className="space-y-8">
            <div className="space-y-0">
              <p
                data-hero-item
                className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[var(--muted)]"
              >
                Software Engineer / Full Stack Developer
              </p>
              <h1
                data-hero-item
                className="font-display max-w-5xl text-[3.8rem] font-medium uppercase leading-[0.84] tracking-[-0.07em] text-white sm:text-[5rem] md:text-[6.7rem] lg:text-[8.5rem]"
              >
                Zi jun
                <br />
                Jiang
              </h1>
              <p
                data-hero-item
                className="mt-6 max-w-2xl text-sm leading-8 text-white/68 md:text-base"
              >
                Full stack developer with production experience. I ship
                end-to-end products in React, Next.js, Python, and AWS - from a
                live Valorant stats platform to an Android skincare app with
                Firebase and Jetpack Compose
              </p>
            </div>

            <div data-animate-group className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  data-animate-item
                  className="tech-panel rounded-3xl p-5"
                >
                  <p className="font-display text-4xl font-medium tracking-[-0.05em] text-white">
                    {metric.value}
                  </p>
                  <p className="mt-3 max-w-[16rem] text-sm leading-6 text-white/62">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-hero-item className="space-y-5 lg:justify-self-end">
            <div className="tech-panel overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a1322]">
                <Image
                  src="/profilePicLinkenIn.jpg"
                  alt="Portrait of Zi jun Jiang"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101d] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                      Boston / New York
                    </p>
                    <p className="mt-2 text-lg font-medium text-white">
                      Open to software engineering opportunities
                    </p>
                  </div>
                  <span className="h-3 w-3 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_24px_var(--accent)]" />
                </div>
              </div>
            </div>

            <div className="tech-panel rounded-[2rem] p-6">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-white/42">
                <span>Status</span>
                <span>Open to opportunities</span>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/72">
                I am a Computer Science graduate from Boston University (GPA
                3.77) currently interning at Skinstric, where I build production
                React and Next.js components integrated with the OpenAI Vision
                API. My projects span web platforms, Android apps, data
                pipelines, and ML models. I am looking for a junior full-stack
                role where I can keep shipping real product
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="#work"
                  className="rounded-full border border-[color:rgba(120,240,212,0.2)] bg-[color:rgba(120,240,212,0.08)] px-5 py-3 text-center text-[11px] uppercase tracking-[0.28em] text-[var(--foreground)] transition duration-300 hover:border-[color:rgba(120,240,212,0.32)] hover:bg-[color:rgba(120,240,212,0.14)]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/14 px-5 py-3 text-center text-[11px] uppercase tracking-[0.28em] text-white/80 transition duration-300 hover:border-white/30 hover:text-white"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          data-hero-item
          className="flex items-end justify-between gap-4 border-t border-white/10 py-6 text-[11px] uppercase tracking-[0.22em] text-white/48"
        >
          <div>Boston / New York</div>
          <div className="hidden md:block">
            Designing thoughtful software experiences
          </div>
        </div>
      </section>

      <section
        id="work"
        data-animate-group
        className="relative mx-auto w-full max-w-7xl px-6 py-18 md:px-10 md:py-22 lg:px-14"
      >
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-animate-item>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--muted)]">
              Selected Work
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium uppercase tracking-[-0.05em] text-white md:text-6xl">
              Featured Systems
            </h2>
          </div>
          <p
            data-animate-item
            className="max-w-xl text-sm leading-7 text-white/62"
          >
            Projects across product UI, mobile development, analytics, and
            machine learning, designed to show both implementation depth and
            strong technical judgment.
          </p>
        </div>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={
                project.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              data-animate-item
              className="block"
            >
              <article className="project-card rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-[90px_1fr_auto] md:items-start">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/32">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                      {project.category}
                    </p>
                    <h3 className="font-display mt-3 text-3xl font-medium uppercase tracking-[-0.05em] text-white md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {project.image ? (
                      <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between gap-5 text-[11px] uppercase tracking-[0.28em] text-white/35 md:block md:text-right">
                    <span>{project.year}</span>
                    <span className="font-display mt-8 block text-2xl text-[var(--accent)]">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      <section
        id="about"
        data-animate-group
        className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-18 md:px-10 md:py-22 lg:grid-cols-[0.85fr_1.15fr] lg:px-14"
      >
        <div data-animate-item>
          <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--muted)]">
            About
          </p>
          <h2 className="font-display mt-3 text-4xl font-medium uppercase leading-[0.92] tracking-[-0.06em] text-white md:text-6xl">
            Design-led front end.
            <br />
            Systems-minded engineering.
          </h2>
        </div>

        <div className="grid gap-6">
          <div
            data-animate-item
            className="tech-panel rounded-[2rem] p-6 md:p-8"
          >
            <p className="max-w-3xl text-sm leading-8 text-white/72">
              I like building interfaces that feel modern, responsive, and
              intentional. My background spans web development, mobile app
              development, machine learning coursework, and hands-on projects
              that combine polished UI with useful real-world functionality.
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/72">
              I work across React, Next.js, Django, Flask, AWS, Kotlin, Java,
              Python, and SQL, and I enjoy turning ambiguous product ideas into
              experiences that feel clear and confident.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {experience.map((item) => (
              <div
                key={item.role}
                data-animate-item
                className="tech-panel rounded-[1.75rem] p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--muted)]">
                  {item.period}
                </p>
                <h3 className="mt-4 text-lg font-semibold uppercase tracking-[-0.03em] text-white">
                  {item.role}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {item.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-animate-group
        className="relative mx-auto w-full max-w-7xl px-6 py-18 md:px-10 md:py-22 lg:px-14"
      >
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div data-animate-item>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--muted)]">
              Skills
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium uppercase tracking-[-0.05em] text-white md:text-6xl">
              Technical Stack
            </h2>
          </div>

          <div
            data-animate-item
            className="tech-panel rounded-[2rem] p-6 md:p-8"
          >
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/74"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-animate-group
        className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-18 md:px-10 md:pb-20 md:pt-22 lg:px-14"
      >
        <div
          data-animate-item
          className="tech-panel rounded-[2.25rem] p-6 md:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--muted)]">
                Contact
              </p>
              <h2 className="font-display mt-3 text-[2.8rem] font-medium uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-[4rem] md:text-[5.4rem]">
                Let&apos;s build
                <br />
                something precise.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-7 text-white/70">
              <p>
                I&apos;m looking for software engineering opportunities where I
                can keep growing while helping teams ship thoughtful,
                high-quality products with strong front-end craft.
              </p>
              <div className="flex flex-col gap-3 text-[12px] uppercase tracking-[0.24em] text-white/86">
                <a
                  href="mailto:victor.jiang987@gmail.com"
                  className="transition hover:text-[var(--accent)]"
                >
                  victor.jiang987@gmail.com
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/zijunj"
                  className="transition hover:text-[var(--accent)]"
                >
                  GitHub
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/zi-jun-jiang/"
                  className="transition hover:text-[var(--accent)]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
