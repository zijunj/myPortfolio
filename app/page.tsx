"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI-Driven Esports Statistics Platform",
    kind: "AI / Full-Stack Platform / 2025",
    href: "https://strafe-phi.vercel.app/",
    description:
      "Full-stack Valorant esports platform with matches, tournaments, results, stats, and news. Built with API ingestion, Supabase data flows, OpenAI-powered natural-language stats search, and AWS deployment.",
    stack: ["React", "Next.js", "TypeScript", "Supabase", "AWS", "OpenAI"],
  },
  {
    title: "Personalized Skincare & Makeup App",
    kind: "Android App / Mobile / 2025",
    href: "https://github.com/zijunj/SKIN",
    description:
      "Kotlin and Jetpack Compose app for personalized product recommendations, barcode scanning, Firebase-backed user flows, and product API integrations.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "REST APIs"],
  },
  {
    title: "Ultimate Frisbee Statistics Website",
    kind: "Data / Web Platform / 2024",
    href: "https://scientist-quotes-0e629fe0ba9a.herokuapp.com/",
    description:
      "Django analytics site with scraping pipelines, dynamic filtering, and predictive modeling for collegiate Ultimate player performance.",
    stack: ["Django", "Python", "BeautifulSoup", "scikit-learn"],
  },
  {
    title: "Rideshare Price Prediction Model",
    kind: "Machine Learning / Forecasting / 2024",
    href: "#contact",
    description:
      "Analyzed Uber and Lyft pricing behavior with regression, decision trees, clustering, and a visualization layer for trend exploration and forecasting.",
    stack: ["Python", "scikit-learn", "Data Viz", "Forecasting"],
  },
];

const experience = [
  {
    company: "Skinstric AI",
    role: "Software Engineer Intern",
    period: "2026",
    location: "Remote",
    bullets: [
      "Build responsive React, Next.js, and Tailwind features for a production skincare AI platform.",
      "Integrate REST APIs and the OpenAI Vision API for image-based skin analysis and real-time insights.",
      "Create reusable component systems and improve cross-device rendering performance.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "OpenAI API"],
  },
  {
    company: "Personal & Academic Projects",
    role: "Frontend / Full-Stack Developer",
    period: "2024 - Present",
    location: "New York / Boston",
    bullets: [
      "Ship end-to-end web, mobile, analytics, and machine learning projects across product surfaces.",
      "Work across React, Django, Kotlin, Firebase, Supabase, AWS, and API-driven systems.",
      "Turn open-ended ideas into clear interfaces, useful data flows, and deployable software.",
    ],
    stack: ["React", "Django", "Kotlin", "Firebase", "AWS"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    count: "10",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C++",
      "SQL",
      "Go",
      "Kotlin",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks",
    count: "09",
    items: [
      "React",
      "Next.js",
      "Tailwind",
      "Redux",
      "Axios",
      "Node.js",
      "Express",
      "Django",
      "Flask",
    ],
  },
  {
    title: "Data & Cloud",
    count: "07",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Supabase",
      "AWS EC2",
      "AWS S3",
      "AWS Amplify",
    ],
  },
  {
    title: "Tools & AI",
    count: "08",
    items: [
      "Git",
      "GitHub",
      "CI/CD",
      "REST APIs",
      "OpenAI API",
      "scikit-learn",
      "pandas",
      "NumPy",
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "victor.jiang987@gmail.com",
    href: "mailto:victor.jiang987@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/zijunj",
    href: "https://github.com/zijunj",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zi-jun-jiang/",
    href: "https://www.linkedin.com/in/zi-jun-jiang/",
  },
  {
    label: "Project",
    value: "strafe-phi.vercel.app",
    href: "https://strafe-phi.vercel.app/",
  },
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
        stagger: 0.08,
        ease: "power2.out",
      });

      gsap.utils
        .toArray<HTMLElement>("[data-animate-group]")
        .forEach((group) => {
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
            stagger: 0.07,
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
    <main ref={rootRef} className="portfolio-shell">
      <div className="grid-bg" />
      <div className="noise-bg" />

      <nav className="top-nav">
        <div className="wrap nav-row">
          <a href="#" className="brand">
            <span className="brand-dot" />
            <strong>Zi Jun Jiang</strong>
            <span>/ FSE</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <a className="pill" href="#contact">
              Available 2026
            </a>
            <a className="pill solid" href="mailto:victor.jiang987@gmail.com">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="wrap">
          <div className="hero-layout">
            <div>
              <p data-hero-item className="eyebrow">
                Full Stack Developer / New York
              </p>
              <h1 data-hero-item className="display-title">
                Zi Jun
                <br />
                <span>Jiang.</span>
              </h1>
              <p data-hero-item className="hero-copy">
                I build production-grade web and mobile products at the
                intersection of design, AI, and infrastructure using React,
                Next.js, TypeScript, Python, Kotlin, and AWS.
              </p>
              <div data-hero-item className="chip-row">
                <span className="chip">
                  <span />
                  Open to full-time roles
                </span>
                <span className="chip">
                  B.A. Computer Science / Boston University
                </span>
                <span className="chip">GPA 3.73 / 4.00</span>
              </div>
            </div>

            <div data-hero-item className="hero-side">
              <article className="panel hero-card">
                <p className="status">
                  <span />
                  Currently / Software Engineer Intern
                </p>
                <h2>Skinstric AI</h2>
                <p className="meta">2026 / Remote</p>
                <p>
                  Building reusable React and Next.js component systems and
                  integrating OpenAI Vision workflows into a live skincare
                  analysis platform.
                </p>
              </article>

              <article className="panel spec-card">
                <p className="card-label">Engineering DNA</p>
                <div className="spec-grid">
                  <div>
                    <span>Frontend</span>
                    React / Next.js / TS
                  </div>
                  <div>
                    <span>Backend</span>
                    Python / Django / Node
                  </div>
                  <div>
                    <span>Cloud</span>
                    AWS / Firebase / Supabase
                  </div>
                  <div>
                    <span>Mobile</span>
                    Kotlin / Jetpack Compose
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div data-hero-item className="stat-row">
            <div className="stat">
              <strong>
                1<sup>+</sup>yr
              </strong>
              <span>Hands-on full-stack experience</span>
            </div>
            <div className="stat">
              <strong>
                5<sup>+</sup>
              </strong>
              <span>Portfolio-ready builds shipped</span>
            </div>
            <div className="stat">
              <strong>
                10<sup>+</sup>
              </strong>
              <span>Languages and frameworks in active use</span>
            </div>
          </div>

          <div data-hero-item className="marquee-row">
            <span>Brooklyn / New York</span>
            <span>Available May 2026</span>
            <span>victor.jiang987@gmail.com</span>
          </div>
        </div>
      </section>

      <section id="about" data-animate-group className="page-section">
        <div className="wrap">
          <header className="section-head">
            <p data-animate-item className="section-label">
              [ 01 ] / About
            </p>
            <div data-animate-item>
              <h2>
                A full-stack engineer who treats <span>interface</span> and{" "}
                <span>infrastructure</span> as one craft.
              </h2>
              <p>
                I write code that ships, and I care about how it feels. Most of
                my work lives where AI-driven systems meet human-scale UX.
              </p>
            </div>
          </header>

          <div className="about-grid">
            <article data-animate-item className="panel bio-card">
              <p>
                <strong>I am a Full Stack Developer based in New York</strong>,
                with hands-on experience building scalable, AI-driven
                applications. I am fluent in React, Next.js, TypeScript, and
                Tailwind on the frontend, and comfortable in Python, Django,
                Java, and AWS on the backend.
              </p>
              <p>
                Currently I am a Software Engineer Intern at Skinstric AI, where
                I build production React systems and OpenAI Vision powered
                experiences. My independent work includes a Valorant esports
                platform, an Android skincare recommendation app, a Django stats
                site, and ML forecasting projects.
              </p>
              <p className="pull-quote">
                Actively seeking junior full-stack or frontend full-time roles,
                starting immediately.
              </p>
            </article>

            <aside className="about-sidebar">
              <article data-animate-item className="panel info-box">
                <p className="card-label">Quick facts / profile</p>
                <dl>
                  <dt>Based</dt>
                  <dd>New York</dd>
                  <dt>Status</dt>
                  <dd>Open to opportunities</dd>
                  <dt>Role</dt>
                  <dd>Full-Stack / Frontend Engineer</dd>
                  <dt>Degree</dt>
                  <dd>B.A. Computer Science, BU</dd>
                  <dt>GPA</dt>
                  <dd>3.73 / 4.00</dd>
                </dl>
              </article>

              <article data-animate-item className="panel info-box">
                <p className="card-label">Currently working on / now</p>
                <div className="now-list">
                  <div>
                    <span>S</span>
                    <p>
                      <strong>Skinstric AI</strong>
                      Frontend systems, OpenAI Vision integration, reusable
                      components.
                    </p>
                  </div>
                  <div>
                    <span>P</span>
                    <p>
                      <strong>Portfolio projects</strong>
                      Web platforms, Android apps, data pipelines, and ML
                      models.
                    </p>
                  </div>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section id="experience" data-animate-group className="page-section">
        <div className="wrap">
          <header className="section-head">
            <p data-animate-item className="section-label">
              [ 02 ] / Experience
            </p>
            <div data-animate-item>
              <h2>
                Currently shipping with a <span>product</span> mindset.
              </h2>
              <p>
                Remote, async, and practical: I build useful product surfaces
                while sharpening the engineering foundation underneath them.
              </p>
            </div>
          </header>

          <div className="experience-grid">
            {experience.map((item) => (
              <article
                key={item.role}
                data-animate-item
                className="panel exp-card"
              >
                <div className="exp-head">
                  <div>
                    <p>{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <span>
                    {item.period}
                    <br />
                    {item.location}
                  </span>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {item.stack.map((stack) => (
                    <span key={stack} className="tag">
                      {stack}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            <article data-animate-item className="panel education-card">
              <div className="exp-head">
                <div>
                  <p>Boston University</p>
                  <h3>Bachelor of Arts, Computer Science</h3>
                </div>
                <span>
                  Graduated
                  <br />
                  May 2025
                </span>
              </div>
              <div className="course-grid">
                <div>
                  <span>Coursework</span>
                  Full Stack Development
                </div>
                <div>
                  <span>Coursework</span>
                  Mobile App Development
                </div>
                <div>
                  <span>Coursework</span>
                  Machine Learning
                </div>
                <div>
                  <span>GPA</span>
                  3.73 / 4.00
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="work" data-animate-group className="page-section">
        <div className="wrap">
          <header className="section-head">
            <p data-animate-item className="section-label">
              [ 03 ] / Selected Work
            </p>
            <div data-animate-item>
              <h2>
                Things I have <span>built</span> and shipped.
              </h2>
              <p>
                A mix of full-stack platforms, mobile apps, analytics, and
                machine learning work, scoped and engineered end to end.
              </p>
            </div>
          </header>

          <div className="project-list">
            {projects.map((project, index) => (
              <a
                key={project.title}
                data-animate-item
                className="project-row"
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span className="project-num">
                  / {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p>{project.kind}</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-body">
                  {project.description}
                  <div className="tag-row">
                    {project.stack.map((stack) => (
                      <span key={stack} className="tag">
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="arrow">-&gt;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" data-animate-group className="page-section">
        <div className="wrap">
          <header className="section-head">
            <p data-animate-item className="section-label">
              [ 04 ] / Stack
            </p>
            <div data-animate-item>
              <h2>
                The <span>tools</span> I reach for daily.
              </h2>
              <p>
                A working set curated from real production, academic, and
                independent project use.
              </p>
            </div>
          </header>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                data-animate-item
                className="panel skill-card"
              >
                <p className="card-label">
                  {group.title} <span>/ {group.count}</span>
                </p>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-animate-group
        className="page-section contact-section"
      >
        <div className="wrap">
          <div data-animate-item className="contact-panel">
            <div>
              <p className="eyebrow">[ 05 ] / Contact</p>
              <h2>
                Let&apos;s build something <span>precise.</span>
              </h2>
              <p>
                I am looking for junior full-stack or frontend roles, starting
                immediately. If you are hiring or have an interesting product
                problem, I would love to talk.
              </p>
            </div>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                  <i>-&gt;</i>
                </a>
              ))}
            </div>
          </div>

          <footer className="footer-row">
            <span>2026 / Zi Jun Jiang</span>
            <span>Designed and engineered end to end</span>
            <span>New York / Open to relocation</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
