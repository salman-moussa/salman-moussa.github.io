import { motion } from 'framer-motion'
import {
  SiReact, SiTypescript, SiNodedotjs, SiPython, SiLaravel, SiUnity, SiUnrealengine,
  SiFlutter, SiDart, SiRedis, SiRabbitmq, SiDocker, SiAmazon, SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiTailwindcss, SiFramer, SiFirebase, SiOpencv, SiPytorch, SiTensorflow, SiVite, SiDotnet
} from 'react-icons/si'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  typescript: SiTypescript,
  'node.js': SiNodedotjs,
  node: SiNodedotjs,
  python: SiPython,
  laravel: SiLaravel,
  'c#': SiDotnet,
  csharp: SiDotnet,
  '.net': SiDotnet,
  dotnet: SiDotnet,
  unity: SiUnity,
  'unreal engine': SiUnrealengine,
  flutter: SiFlutter,
  dart: SiDart,
  redis: SiRedis,
  rabbitmq: SiRabbitmq,
  docker: SiDocker,
  aws: SiAmazon,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  git: SiGit,
  tailwindcss: SiTailwindcss,
  tailwind: SiTailwindcss,
  'framer motion': SiFramer,
  firebase: SiFirebase,
  opencv: SiOpencv,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  vite: SiVite,
}

export default function SkillIcons({ items }: { items: string[] }) {
  const display = items.map((s) => ({
    name: s,
    key: s.toLowerCase(),
  }))
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {display.map((s, i) => {
        const Icon = iconMap[s.key] || iconMap[s.key.replace(/\s+/g, '')] || iconMap[s.key.replace(/\s+motion/, '')]
        return (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="group rounded-2xl border border-white/10 bg-neutral-900/50 p-3 text-center hover:border-white/30"
          >
            {Icon ? (
              <Icon className="mx-auto h-7 w-7 text-neutral-200 group-hover:text-white transition-colors" />
            ) : (
              <div className="mx-auto h-7 w-7 rounded-full bg-white/10 text-xs grid place-items-center">
                {s.name[0]}
              </div>
            )}
            <div className="mt-2 text-xs text-neutral-300">{s.name}</div>
          </motion.div>
        )
      })}
    </div>
  )
}

