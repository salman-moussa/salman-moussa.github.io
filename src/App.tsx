import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiZap, FiLayers, FiCpu, FiCode } from 'react-icons/fi'
import { person, skills, experience, projects, education, languages } from './data/resume'
import Aurora from './components/Aurora'
import Starfield from './components/Starfield'
import InfinityMarquee from './components/InfinityMarquee'
import Magnetic from './components/Magnetic'
import SkillIcons from './components/SkillIcons'
import ExperienceTimeline from './components/ExperienceTimeline'
import ProjectCard from './components/ProjectCard'
import EducationSection from './components/EducationSection'
import LanguagesSection from './components/LanguagesSection'
import BouncyBall from './components/BouncyBall'
import MobileNav from './components/MobileNav'

const Section = ({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container">{children}</div>
  </section>
)

const GradientBlob = ({ className = '', delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 0.6, scale: 1 }}
    transition={{ duration: 1.2, delay }}
    className={`pointer-events-none absolute blur-3xl ${className}`}
  />
)

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', '#7c3aed')
    document.documentElement.style.setProperty('--accent-2', '#22d3ee')
  }, [])

  return (
    <div className="min-h-screen">
      <BouncyBall />
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.15),transparent),radial-gradient(900px_400px_at_10%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(900px_400px_at_90%_20%,rgba(56,189,248,0.10),transparent)]" />
        <GradientBlob className="top-10 left-10 h-56 w-56 bg-fuchsia-600/30 rounded-full" delay={0.2} />
        <GradientBlob className="bottom-10 right-10 h-72 w-72 bg-cyan-400/25 rounded-full" delay={0.4} />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="font-semibold tracking-tight text-neutral-100">
            <span className="font-[Poppins] text-lg">SM</span>
            <span className="ml-2 text-neutral-400 hidden sm:inline">{person.role}</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a className="hover:text-white transition-colors" href="#about">About</a>
            <a className="hover:text-white transition-colors" href="#skills">Skills</a>
            <a className="hover:text-white transition-colors" href="#experience">Experience</a>
            <a className="hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="hover:text-white transition-colors" href="#education">Education</a>
            <a className="hover:text-white transition-colors" href="#languages">Languages</a>
            <a className="hover:text-white transition-colors" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={`mailto:${person.email}`} aria-label="Email" className="text-neutral-300 hover:text-white">
              <FiMail />
            </a>
            <a href={person.linkedin} target="_blank" aria-label="LinkedIn" className="text-neutral-300 hover:text-white">
              <FiLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="text-neutral-300 hover:text-white">
              <FiGithub />
        </a>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <MobileNav />
            </div>
      </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="top" className="pt-24 md:pt-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 glass">
          <div className="absolute inset-0">
            <Parallax speed={-10}>
              <div className="h-64 md:h-96" />
            </Parallax>
            <Aurora />
          </div>
          <div className="relative z-10 px-6 py-16 md:px-14 md:py-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-[Poppins] text-5xl md:text-7xl font-extrabold tracking-tight hero-gradient-text"
            >
              {person.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 text-lg md:text-xl text-neutral-300"
            >
              {person.summary}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Magnetic>
                <a href="#projects" className="inline-flex items-center rounded-full bg-white text-neutral-950 px-5 py-2 text-sm font-semibold hover:opacity-90 transition">
                  View Projects
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-white/40 transition">
                  Contact Me
                </a>
              </Magnetic>
            </motion.div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-neutral-300">
              <span className="inline-flex items-center gap-2 text-sm"><FiMapPin />{person.location}</span>
              <a className="inline-flex items-center gap-2 text-sm hover:text-white" href={`tel:${person.phone.replace(/\\s/g,'')}`}><FiPhone />{person.phone}</a>
              <a className="inline-flex items-center gap-2 text-sm hover:text-white" href={person.linkedin} target="_blank"><FiLinkedin />LinkedIn</a>
            </div>
            <div className="mt-10">
              <InfinityMarquee speed={28}>
                {skills.slice(0, 14).map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-200">{s}</span>
                ))}
              </InfinityMarquee>
            </div>
          </div>
          <div className="absolute inset-0 -z-10">
            <Starfield density={260} />
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 glass">
          {/* decorative blobs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-fuchsia-600/20 blur-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          />

          <div className="relative z-10 grid gap-10 md:grid-cols-2 items-start p-6 md:p-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-[Poppins] text-3xl md:text-4xl font-bold"
              >
                <span className="hero-gradient-text">About</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-4 text-neutral-300 leading-relaxed"
              >
                I craft expressive, animated digital products across web, mobile, XR, and AI. I love
                performance, realtime data, and thoughtful motion that tells a story. From ERP and ITSM to
                AR games and AI vision systems — I ship polished experiences end‑to‑end.
              </motion.p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: <FiZap />, title: 'Realtime', desc: 'WebSockets • Redis • RabbitMQ' },
                  { icon: <FiLayers />, title: 'Full‑Stack', desc: 'React • FastAPI • Laravel' },
                  { icon: <FiCpu />, title: 'AI/XR', desc: 'PyTorch • Unity • TFLite' },
                  { icon: <FiCode />, title: 'DX & CI', desc: 'Vite • Docker • CI/CD' },
                ].map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-neutral-900/50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white/90">{f.icon}</span>
                      <div>
                        <div className="font-medium">{f.title}</div>
                        <div className="text-xs text-neutral-400">{f.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* stats panel */}
            <div className="grid gap-3">
              {[
                { k: '3+', label: 'Years building cross‑platform products' },
                { k: '10+', label: 'Production apps shipped' },
                { k: 'XR • AI • Web', label: 'Creative tech stack' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 * i }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-5"
                >
                  <motion.div
                    aria-hidden
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                  />
                  <div className="text-3xl font-extrabold">{s.k}</div>
                  <div className="mt-1 text-sm text-neutral-300">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" className="py-16 md:py-20">
        <h2 className="font-[Poppins] text-2xl md:text-3xl font-bold">Skills</h2>
        <div className="mt-6">
          <SkillIcons items={skills} />
        </div>
        <div className="mt-8">
          <InfinityMarquee speed={22}>
            {skills.slice(0, 18).map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-200">{s}</span>
            ))}
          </InfinityMarquee>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" className="py-16 md:py-20">
        <h2 className="font-[Poppins] text-2xl md:text-3xl font-bold">Experience</h2>
        <div className="mt-6">
          <ExperienceTimeline items={experience} />
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="py-16 md:py-20">
        <h2 className="font-[Poppins] text-2xl md:text-3xl font-bold">Projects</h2>
     
        
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} item={p} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" className="py-16 md:py-20">
        <h2 className="font-[Poppins] text-2xl md:text-3xl font-bold">Education</h2>
        <div className="mt-6">
          <EducationSection items={education} />
        </div>
      </Section>

      {/* Languages */}
      <Section id="languages" className="py-16 md:py-20">
        <h2 className="font-[Poppins] text-2xl md:text-3xl font-bold">Languages</h2>
        <div className="mt-6">
          <LanguagesSection items={languages as { name: string; level: string }[]} />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 glass p-8 md:p-12 text-center">
          <div className="absolute inset-0 -z-10 opacity-40">
            <Starfield density={140} />
          </div>
          <h2 className="font-[Poppins] text-2xl md:text-3xl font-bold">Let’s work together</h2>
          <p className="mt-3 text-neutral-300">Open to full‑stack roles and select freelance collaborations.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Magnetic>
              <a href={`mailto:${person.email}`} className="inline-flex items-center rounded-full bg-white text-neutral-950 px-5 py-2 text-sm font-semibold hover:opacity-90 transition">
                <FiMail className="mr-2" /> Email Me
              </a>
            </Magnetic>
            <Magnetic>
              <a href={person.linkedin} target="_blank" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-white/40 transition">
                <FiLinkedin className="mr-2" /> LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-white/40 transition">
                <FiGithub className="mr-2" /> GitHub
              </a>
            </Magnetic>
          </div>
          <div className="mt-4 text-sm text-neutral-400">
            <span className="inline-flex items-center gap-2"><FiPhone /> {person.phone}</span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center gap-2"><FiMapPin /> {person.location}</span>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {person.name}. All rights reserved.
      </footer>
      </div>
  )
}
