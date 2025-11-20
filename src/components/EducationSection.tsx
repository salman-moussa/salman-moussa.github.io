import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiClock } from 'react-icons/fi'
import type { EducationItem } from '../data/resume'

export default function EducationSection({ items }: { items: EducationItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((e, i) => (
        <motion.div
          key={e.title + e.org}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-5 border-animated"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white/90">
                {i === 0 ? <FiAward /> : <FiBookOpen />}
              </span>
              <div>
                <div className="text-lg font-semibold">{e.title}</div>
                <div className="text-sm text-neutral-300">{e.org}</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
              <FiClock /> {e.period}
            </div>
          </div>
          {e.bullets && (
            <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-1">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  )
}

