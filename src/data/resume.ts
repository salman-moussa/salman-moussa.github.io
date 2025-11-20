export type ExperienceItem = {
  role: string
  company: string
  period: string
  location?: string
  bullets: string[]
  stack?: string[]
}

export type ProjectItem = {
  name: string
  description: string
  stack: string[]
  href?: string
}

export type EducationItem = {
  title: string
  org: string
  period: string
  bullets?: string[]
}

export const person = {
  name: 'Salman Moussa',
  role: 'Full‑Stack Developer',
  location: 'Lebanon',
  phone: '+961 302 3730',
  email: 'Salman.m.moussaa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/salman-moussa',
  summary:
    'Full‑Stack Developer — Web, XR, AI & Mobile. 3+ years building cross‑platform solutions and shipping 10+ production apps, from real‑time logistics and ERP/POS to AI and XR products.',
}

export const skills: string[] = [
  'React', 'TypeScript', 'React Native', 'TailwindCSS',
  'Node.js', 'Laravel', 'C# /.NET', 'Python', 'FastAPI',
  'Unity', 'Unreal Engine', 'Flutter', 'Dart',
  'PyTorch', 'OpenCV', 'TensorRT', 'MediaPipe',
  'Redis', 'RabbitMQ', 'WebSockets', 'MariaDB/MySQL', 'MongoDB', 'PostgreSQL',
  'Docker', 'Docker Compose', 'AWS', 'Firebase',
  'Git', 'CI/CD', 'REST APIs', 'OOP', 'Figma',
]

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Proficient' },
  { name: 'French', level: 'Advanced' },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Full‑Stack Developer',
    company: 'ITECLDA',
    period: '03/2025 — Present',
    location: 'Beirut · Luanda',
    bullets: [
      'Contributed to Pulsar ERP and Pulsar ITSM with modular, scalable, API‑driven architecture.',
      'Built backend services with FastAPI/Python and C#/.NET; SQLAlchemy with MariaDB/MySQL.',
      'Used Redis & RabbitMQ for caching, messaging, and async workflows.',
      'Developed ITSM modules: ticket automation, asset/device management, analytics, notifications.',
      'Implemented ERP flows for finance, HR, inventory; optimized SQL and automated BI reports.',
      'Built responsive frontends with React, TypeScript, Vite; REST APIs and reusable UI components.',
      'Containerized services with Docker & Compose; contributed to CI/CD and environment automation.',
    ],
    stack: ['FastAPI', 'Python', 'C#', 'SQLAlchemy', 'MariaDB/MySQL', 'Redis', 'RabbitMQ', 'React', 'TypeScript', 'Vite', 'Docker', 'CI/CD'],
  },
  {
    role: 'Full‑Stack Developer',
    company: 'Kazamedia',
    period: '01/2025 — 03/2025',
    location: 'Beirut',
    bullets: [
      'Led a custom CMS (Laravel + React) with modular drag‑and‑drop page builder (−40% content update time).',
      'Implemented role‑based access and granular permissions; secure admin/user workflows.',
      'Integrated media manager with folders and real‑time uploads; SEO‑friendly templates.',
      'JWT auth and REST APIs for seamless frontend‑backend communication.',
    ],
    stack: ['Laravel', 'React', 'MySQL', 'JWT', 'TailwindCSS', 'REST'],
  },
  {
    role: 'Full‑Stack Developer',
    company: 'Lead by Tech',
    period: '01/2024 — 12/2024',
    location: 'Beirut',
    bullets: [
      'AI/CV: Vehicle recognition (make/model/color) with PyTorch + OpenCV; TensorRT reduced latency −35%.',
      'XR: Multiplayer AR game in Unity (ARKit/ARCore); pose estimation via MediaPipe & Unity MARS.',
      'Mobile: AI‑powered retail app (React Native + TFLite); fleet management (Flutter/Dart + Firebase).',
      'Web: Contributed to PHP/Laravel and .NET projects.',
    ],
    stack: ['PyTorch', 'OpenCV', 'TensorRT', 'Unity', 'ARKit', 'ARCore', 'MediaPipe', 'React Native', 'TensorFlow Lite', 'Flutter', 'Firebase', 'Laravel', '.NET'],
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Pulsar ERP/ITSM',
    description:
      'Enterprise ERP/IT service management with modular architecture, analytics, automation, and real‑time ops.',
    stack: ['FastAPI', 'C#', 'React', 'RabbitMQ', 'Redis', 'Docker'],
  },
  {
    name: 'Headless CMS',
    description:
      'Custom CMS with page builder, RBAC, media manager, and SEO‑ready templates.',
    stack: ['Laravel', 'React', 'MySQL', 'TailwindCSS', 'JWT'],
  },
  {
    name: 'FoodAlley',
    description:
      'Customizable food ordering with ingredient options and OpenAI integration.',
    stack: ['Laravel', 'React Native', 'React', 'MySQL', 'OpenAI API'],
  },
]

export const education: EducationItem[] = [
  {
    title: 'Full‑Stack Web Development Bootcamp',
    org: 'SE Factory',
    period: '01/2023 — 05/2023',
    bullets: ['Cloud architecture, front‑ and back‑end, source control, and web security; 14‑week program.'],
  },
  {
    title: 'Foundations of Computer Science',
    org: 'SE Factory',
    period: '09/2022 — 12/2022',
    bullets: ['Python, complexity analysis, data structures, algorithms; 9‑week program.'],
  },
  {
    title: 'B.S. in Computer Science',
    org: 'Lebanese International University',
    period: '09/2021',
  },
]

