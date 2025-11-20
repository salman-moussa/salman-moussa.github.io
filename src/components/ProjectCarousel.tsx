import ProjectCard from './ProjectCard'
import type { ProjectItem } from '../data/resume'
import { motion } from 'framer-motion'

export default function ProjectCarousel({ items }: { items: ProjectItem[] }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-neutral-950 to-transparent" />
      <div className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
        {items.map((item, i) => (
          <motion.div key={item.name} className="snap-start min-w-[85%] sm:min-w-[60%] lg:min-w-[45%]">
            <ProjectCard item={item} delay={i * 0.05} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

