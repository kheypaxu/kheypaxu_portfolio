"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Github,
  Globe,
  MapPin,
  Menu,
  Monitor,
  Moon,
  Smartphone,
  Sun,
  X,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { Flower2, Heart, Sparkles } from "lucide-react";
import { TechIcon, technologies } from "@/components/TechIcon";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Reveal } from "@/components/Reveal";
import { TiltPreview } from "@/components/TiltPreview";
import { ProjectPreview } from "@/components/ProjectPreview";
import { profile, projects } from "@/data/portfolio";

const tools = technologies;

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = mounted && prefersReducedMotion === true;
  useEffect(() => setMounted(true), []);
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [tab, setTab] = useState("All");
  const [copied, setCopied] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setDark(localStorage.getItem("kheypaxu-theme") === "dark");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  const toggle = () => {
    const value = !dark;
    setDark(value);
    localStorage.setItem("kheypaxu-theme", value ? "dark" : "light");
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.github);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.open(profile.github, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <MotionConfig reducedMotion="user">
      <div className={`site ${dark ? "dark" : ""}`}>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="header">
          <div className="header-inner">
            <a href="#home" className="logo" aria-label="kheypaxu home">
              <img
                className="header-portrait"
                src="/images/header-icon.png"
                alt="Nicole Khey"
                width="44"
                height="48"
              />
              <span className="logo-name">
                kheypaxu<span>.</span>
              </span>
            </a>
            <nav className={menu ? "open" : ""} aria-label="Main navigation">
              {[
                ["home", "About"],
                ["projects", "Projects"],
                ["services", "Services"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenu(false)}
                  className={active === id ? "active" : ""}
                >
                  {label}
                </a>
              ))}
            </nav>
            <a className="pill header-contact" href="#contact">
              Contact
            </a>
            <button
              onClick={toggle}
              className="theme-toggle"
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              aria-pressed={dark}
            >
              <span>{dark ? <Moon size={15} /> : <Sun size={15} />}</span>
            </button>
            <button
              className="menu-button"
              onClick={() => setMenu(!menu)}
              aria-expanded={menu}
              aria-label="Toggle navigation"
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </header>
        <main id="main">
          <section id="home" className="hero">
            <div className="hero-grid wrap">
              <motion.div
                className="intro"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <span className="hero-kicker">
                  <Heart size={13} /> a little curiosity, a lot of heart
                </span>
                <h1>
                  <span className="blue-text">Hello world!</span>
                  <span className="hero-name">I’m Nicole Khey Bengaora</span>
                </h1>
                <p>
                  A developer who brings ideas to life through thoughtful
                  websites and mobile experiences. I approach every project with
                  curiosity, care, and a love for the little details.
                </p>
                <div className="location">
                  <MapPin size={17} />
                  {profile.location}
                </div>
                <div className="socials">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github />
                  </a>
                  <a href="#projects" aria-label="Explore web projects">
                    <Globe />
                  </a>
                  <a href="#technologies" aria-label="My development toolkit">
                    <Code2 />
                  </a>
                </div>
                <div className="hero-actions">
                  <a
                    className="pill resume-cta"
                    href="/BENGAORA_Resume_Updated.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume <ArrowUpRight size={17} />
                  </a>
                  <a className="pill" href="#contact">
                    Let’s Talk
                  </a>
                  <a className="pill" href="#projects">
                    My Projects <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.div>
              <motion.figure
                className="portrait"
                initial={
                  reduceMotion ? false : { opacity: 0, scale: 0.96, rotate: 2 }
                }
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
              >
                <div className="portrait-frame">
                  <img
                    className="hero-light"
                    src="/images/light-mode-herp.png"
                    alt="Sketch portrait of Nicole"
                    width="1192"
                    height="1319"
                  />
                  <img
                    className="hero-dark"
                    src="/images/dark-mode-hero.png"
                    alt="Sketch portrait of Nicole for dark mode"
                    width="1192"
                    height="1319"
                  />
                </div>
                <Sparkles
                  className="portrait-sparkle"
                  size={42}
                  strokeWidth={1.2}
                />
                <motion.span
                  whileHover={reduceMotion ? {} : { rotate: -6, scale: 1.04 }}
                  className="portrait-badge"
                >
                  <Heart size={17} /> made with care & code
                </motion.span>
                <figcaption>Nicole Khey / @kheypaxu</figcaption>
              </motion.figure>
            </div>
            <a
              href="#projects"
              className="scroll-cue"
              aria-label="Scroll to learn more"
            >
              <ArrowDown size={22} />
            </a>
          </section>

          <Reveal id="projects" className="projects-section">
            <div className="section-intro">
              <span className="section-flower">
                <Flower2 size={25} />
              </span>
              <h2>
                <span className="blue-text">Featured</span> Projects
              </h2>
              <p>
                A little collection of things I’ve built — from smarter
                agriculture to spaces for study, care, and everyday well-being.
              </p>
            </div>
            <div className="project-list">
              {projects.map((p, i) => (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={reduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
                  className={`project-card ${i % 2 ? "reverse" : ""}`}
                  key={p.id}
                >
                  <div className="project-copy">
                    <span className="project-type">{p.kind}</span>
                    <h3>
                      {p.name}
                      {p.id === "visaia" && (
                        <span className="thesis-badge">Thesis</span>
                      )}
                    </h3>
                    <p>{p.description}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t}>
                          <TechIcon name={t} />
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="project-details">
                      <span>
                        <Code2 size={15} /> {p.category} development
                      </span>
                    </div>
                    <div className="project-links">
                      {p.links.map((link, i) => (
                        <a
                          key={link.url}
                          className={
                            i === 0 ? "project-button" : "project-secondary"
                          }
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} <ArrowUpRight size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <TiltPreview className={`project-image ${p.visual}`}>
                    <ProjectPreview
                      visual={p.visual}
                      image={p.image}
                      name={p.name}
                    />
                  </TiltPreview>
                </motion.article>
              ))}
            </div>
            <a
              className="all-projects"
              href={`${profile.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> More on GitHub <ArrowUpRight size={17} />
            </a>
          </Reveal>
          <Reveal id="testimonials" className="testimonials-section wrap">
            <div className="section-intro">
              <h2>
                Kind words, <span className="blue-text">coming soon.</span>
              </h2>
              <p>Testimonials from the people I get to build with.</p>
            </div>
            <div className="testimonial-grid">
              {[
                "Project collaborator",
                "Thesis teammate",
                "Client or mentor",
              ].map((role) => (
                <article className="testimonial-placeholder" key={role}>
                  <span className="testimonial-quote" aria-hidden="true">
                    “
                  </span>
                  <p>A little space for a real story about working together.</p>
                  <div>
                    <span className="testimonial-avatar" />
                    <span>
                      {role}
                      <small>Testimonial placeholder</small>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal className="contributions wrap">
            <GitHubActivity />
          </Reveal>

          <Reveal id="technologies" className="technology-section wrap">
            <div className="section-intro">
              <h2>
                <span className="blue-text">Technologies</span>
                <br />
                and Tools I use
              </h2>
              <p>
                The toolkit behind my projects. Always exploring, learning, and
                finding better ways to build.
              </p>
            </div>
            <div
              className="tool-tabs"
              role="tablist"
              aria-label="Technology categories"
            >
              {["All", "Frameworks", "Languages", "Tools"].map((t) => (
                <button
                  key={t}
                  role="tab"
                  id={`tab-${t}`}
                  aria-selected={t === tab}
                  aria-controls="tool-panel"
                  className={tab === t ? "selected" : ""}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <motion.div
              layout
              id="tool-panel"
              role="tabpanel"
              aria-labelledby={`tab-${tab}`}
              className="tool-grid"
            >
              <AnimatePresence mode="popLayout">
                {tools
                  .filter((t) => tab === "All" || t.type === tab)
                  .map((t) => (
                    <motion.div
                      layout
                      key={t.name}
                      initial={
                        reduceMotion ? false : { opacity: 0, scale: 0.9 }
                      }
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={reduceMotion ? {} : { y: -4, rotate: -2 }}
                      transition={{ duration: 0.22 }}
                      className="tool"
                    >
                      <TechIcon name={t.name} />
                      {t.name}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </Reveal>
          <Reveal id="services" className="services-section">
            <div className="wrap services-heading">
              <h2>
                <span className="blue-text">What</span>
                <br />I excel at
              </h2>
              <p>
                I build useful digital experiences that are visually appealing
                and easy to use, from a first idea to a working product.
              </p>
            </div>
            <div className="service-rail wrap" ref={rail}>
              {[
                {
                  title: "Web Design",
                  sub: "Interfaces that feel right.",
                  image: "web-design-bg",
                  icon: <Monitor />,
                  type: "web",
                },
                {
                  title: "App Development",
                  sub: "Ideas, in your hands.",
                  image: "backend-dev-bg",
                  icon: <Smartphone />,
                  type: "app",
                },
                {
                  title: "Landing Pages",
                  sub: "Make a memorable first impression.",
                  image: "landing-page-bg",
                  icon: <Globe />,
                  type: "landing",
                },
                {
                  title: "And even more...",
                  sub: "Have something else in mind? Let’s talk.",
                  image: "",
                  icon: <Code2 />,
                  type: "more",
                },
              ].map((s) => (
                <article
                  className={`service-card ${s.type}`}
                  key={s.title}
                  style={
                    s.image
                      ? { backgroundImage: `url(/images/${s.image}.webp)` }
                      : undefined
                  }
                >
                  <div className="service-card-copy">
                    <span>{s.sub}</span>
                    <h3>{s.title}</h3>
                  </div>
                  <div className="service-art">{s.icon}</div>
                  {s.type === "more" && (
                    <a className="pill" href="#contact">
                      Get Started
                    </a>
                  )}
                </article>
              ))}
            </div>
            <div className="carousel-controls wrap">
              <span>Design. Develop. Bring it to life.</span>
              <div>
                <button
                  onClick={() =>
                    rail.current?.scrollBy({
                      left: -460,
                      behavior: reduceMotion ? "instant" : "smooth",
                    })
                  }
                  aria-label="Previous services"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    rail.current?.scrollBy({
                      left: 460,
                      behavior: reduceMotion ? "instant" : "smooth",
                    })
                  }
                  aria-label="Next services"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </Reveal>
          <Reveal id="contact" className="contact-section">
            <div className="wrap contact-grid">
              <div>
                <h2>
                  <span className="blue-text">Let’s work</span>
                  <br />
                  together.
                </h2>
                <p>
                  Have a project in mind? A question, an idea,
                  <br />
                  or just a hello — I’d love to connect.
                </p>
                <div className="contact-name">
                  {profile.name}
                  <span>
                    @{profile.handle} · {profile.location}
                  </span>
                </div>
              </div>
              <div className="contact-box">
                <Github size={32} />
                <h3>
                  Good conversations
                  <br />
                  start somewhere.
                </h3>
                <p>
                  Find me on GitHub to explore my work and get in touch. More
                  contact details coming soon.
                </p>
                <a
                  className="pill"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Let’s connect <ArrowUpRight size={18} />
                </a>
                <button className="copy" onClick={copy}>
                  {copied ? <Check size={15} /> : <Copy size={15} />}{" "}
                  {copied ? "Copied!" : "Copy profile link"}
                </button>
              </div>
            </div>
          </Reveal>
        </main>
        <footer className="wrap footer">
          <a href="#home">
            kheypaxu<span>.</span>
          </a>
          <p>
            © {new Date().getFullYear()} {profile.name}. Made with care.
          </p>
          <a className="back-top" href="#home">
            Back to top <ArrowUpRight size={15} />
          </a>
        </footer>
      </div>
    </MotionConfig>
  );
}
