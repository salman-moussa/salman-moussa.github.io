import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import Magnetic from './Magnetic'
import { FiExternalLink } from 'react-icons/fi'
import type { ProjectItem } from '../data/resume'

export default function ProjectCard({ item, delay = 0 }: { item: ProjectItem; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <TiltCard>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
          <div className="relative aspect-[16/10]">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/30 via-cyan-400/20 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -inset-1 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.25),transparent_30%)] animate-[spin_6s_linear_infinite]" />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{item.name}</h3>
              <span className="text-xs text-neutral-400">{item.stack.slice(0, 2).join(' • ')}</span>
            </div>
            <p className="mt-2 text-sm text-neutral-300">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.stack.slice(0, 6).map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-neutral-800/50 px-2.5 py-0.5 text-xs text-neutral-300">{t}</span>
              ))}
            </div>
            <div className="mt-4">
              <Magnetic>
                <a
                  href={item.href || '#'}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm text-white hover:border-white/40 transition"
                  target={item.href ? '_blank' : undefined}
                >
                  <FiExternalLink /> View
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

