import { link } from "fs";

export default function Home() {
  const projects = [
    {
      title: "AI-Driven Esports Statistics Platform",
      category: "FULL-STACK WEB APP",
      year: "2025",
      link: "https://github.com/zijunj/strafe", // 👈 ADD THIS
      description:
        "Built a real-time Valorant statistics platform using React and Supabase, with external REST API integrations, Java and Node.js backend logic, OpenAI-powered natural language insights, and AWS deployment for scalable performance.",
    },
    {
      title: "Personalized Skincare & Makeup App",
      category: "ANDROID APPLICATION",
      year: "2025",
      link: "https://github.com/zijunj/SKIN",
      description:
        "Developed a Kotlin app with Jetpack Compose for personalized skincare and makeup recommendations, integrating barcode scanning, product APIs, Firebase, and cross-device user research.",
    },
    {
      title: "Ultimate Frisbee Statistics Website",
      category: "DATA + WEB PLATFORM",
      year: "2024",
      link: "https://github.com/zijunj/Ultimate-Frisbee-Website",
      description:
        "Created a Django-based statistics site for collegiate frisbee with dynamic filtering, automated scraping from USA Ultimate data sources, and predictive modeling for future player performance.",
    },
    {
      title: "Rideshare Price Prediction Model",
      category: "MACHINE LEARNING PROJECT",
      year: "2024",
      description:
        "Analyzed Uber and Lyft pricing patterns using regression, decision trees, and clustering, then built a user-friendly interface to visualize pricing trends and key factors like weather.",
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
      period: "2024 — Present",
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

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <section className="flex min-h-screen flex-col justify-between px-6 py-6 md:px-10 lg:px-14">
        <header className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/60">
          <div>Victor Jiang</div>
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
        </header>

        <div className="grid gap-10 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-white/45">
              Software Engineer / Frontend Developer
            </p>
            <h1 className="max-w-5xl text-[52px] font-light uppercase leading-[0.88] tracking-[-0.06em] sm:text-[72px] md:text-[96px] lg:text-[132px]">
              Victor
              <br />
              Jiang
            </h1>
          </div>

          <div className="max-w-md justify-self-end border-t border-white/15 pt-6 text-sm leading-7 text-white/70">
            <p>
              I’m a Boston University computer science graduate building
              polished web experiences with a strong front-end eye and a growing
              full-stack skill set.
            </p>
            <p className="mt-5">
              My work spans React interfaces, API integrations, machine learning
              projects, and product-focused applications — from esports
              analytics platforms to mobile skincare recommendation tools.
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-white/50">
          <div>Boston / New York</div>
          <div>Open to software engineering opportunities</div>
        </div>
      </section>

      <section
        id="work"
        className="border-t border-white/10 px-6 py-16 md:px-10 md:py-20 lg:px-14"
      >
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-light uppercase tracking-[-0.05em] md:text-5xl">
              Featured Projects
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-white/60 md:block">
            A mix of web, mobile, and machine learning projects that reflect
            both strong implementation and product thinking.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article
                key={project.title}
                className="group grid gap-4 border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-white/25 hover:bg-white/[0.04] md:grid-cols-[120px_1fr_auto] md:items-start md:p-7"
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                  0{index + 1}
                </div>
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-white/40">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-light uppercase tracking-[-0.04em] md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                    {project.description}
                  </p>
                </div>
                <div className="text-left text-[11px] uppercase tracking-[0.24em] text-white/35 md:text-right">
                  {project.year}
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="grid gap-12 border-t border-white/10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1fr_1fr] lg:px-14"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
            About
          </p>
          <h2 className="mt-3 text-3xl font-light uppercase leading-[0.95] tracking-[-0.05em] md:text-5xl">
            Front-end focused.
            <br />
            Full-stack capable.
            <br />
            Product minded.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="text-sm leading-7 text-white/70">
            <p>
              I like building interfaces that feel modern, responsive, and
              intentional. My background includes full-stack development, mobile
              app development, machine learning coursework, and hands-on
              projects that combine clean UI with real data and useful
              functionality.
            </p>
            <p className="mt-5">
              I’ve worked with technologies like React, Django, Flask, AWS,
              Kotlin, Java, Python, and SQL, and I enjoy turning complex ideas
              into experiences that are actually intuitive to use.
            </p>
          </div>

          <div className="space-y-4">
            {experience.map((item) => (
              <div key={item.role} className="border-t border-white/10 pt-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-medium uppercase tracking-[-0.03em] text-white/90">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-white/55">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-light uppercase tracking-[-0.05em] md:text-5xl">
              Technical Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/75"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 px-6 py-16 md:px-10 md:py-20 lg:px-14"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Contact
            </p>
            <h2 className="mt-3 text-[42px] font-light uppercase leading-[0.9] tracking-[-0.06em] sm:text-[56px] md:text-[82px]">
              Let’s build
              <br />
              something great.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/70">
            <p>
              I’m currently looking for software engineering opportunities where
              I can keep growing as a developer while building thoughtful,
              high-quality products.
            </p>
            <div className="flex flex-col gap-2 text-[12px] uppercase tracking-[0.22em] text-white/85">
              <a
                href="mailto:victor.jiang987@gmail.com"
                className="transition hover:text-white"
              >
                victor.jiang987@gmail.com
              </a>
              <a
                target="_blank"
                href="https://github.com/zijunj"
                className="transition hover:text-white"
              >
                GitHub
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/zi-jun-jiang/"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
