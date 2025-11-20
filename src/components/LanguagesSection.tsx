import { motion } from 'framer-motion'

type Lang = { name: string; level: string }

function levelToPercent(level: string): number {
  const l = level.toLowerCase()
  if (l.includes('native')) return 100
  if (l.includes('proficient') || l.includes('professional')) return 90
  if (l.includes('advanced')) return 80
  if (l.includes('intermediate')) return 65
  return 50
}

const colors = ['#22d3ee', '#a78bfa', '#34d399'] // cyan, violet, green

export default function LanguagesSection({ items }: { items: Lang[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-6">
      {items.map((l, idx) => {
        const percent = levelToPercent(l.level)
        const deg = `${(percent / 100) * 360}deg`
        const color = colors[idx % colors.length]
        return (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-neutral-900/50 p-4 text-center"
          >
            <div
              className="mx-auto h-20 w-20 rounded-full ring-progress"
              style={
                {
                  '--deg': deg,
                  '--ring-color': color,
                } as React.CSSProperties
              }
            >
              <div className="ring-progress-inner">{percent}%</div>
            </div>
            <div className="mt-2 text-sm font-medium">{l.name}</div>
            <div className="text-xs text-neutral-400">{l.level}</div>
          </motion.div>
        )
      })}
    </div>
  )
}

