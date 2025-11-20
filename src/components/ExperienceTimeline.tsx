import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { ExperienceItem } from '../data/resume'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const line = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative">
      {/* timeline rail */}
      <div className="absolute left-4 top-0 bottom-0 hidden sm:block">
        <div className="h-full w-px bg-white/10" />
        <motion.div
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-fuchsia-500 via-cyan-400 to-transparent"
          style={{ height: line }}
        />
      </div>

      <ul className="space-y-6">
        {items.map((job, i) => (
          <li key={job.role + job.company} className="relative sm:pl-12">
            {/* marker */}
            <div className="hidden sm:block absolute left-[13px] top-6">
              <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="grid h-5 w-5 place-items-center rounded-full bg-white text-neutral-900 shadow"
              >
                <FiBriefcase className="h-3 w-3" />
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-neutral-900/50 p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white text-neutral-900 px-2.5 py-0.5 text-xs font-bold">{job.role}</span>
                  <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-neutral-200">{job.company}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span className="inline-flex items-center gap-1"><FiCalendar />{job.period}</span>
                  {job.location && <span className="inline-flex items-center gap-1"><FiMapPin />{job.location}</span>}
                </div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-1">
                {job.bullets.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {job.stack && job.stack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-neutral-800/50 px-2.5 py-0.5 text-xs text-neutral-300">{t}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  )
}

