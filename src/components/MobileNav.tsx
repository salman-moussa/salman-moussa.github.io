import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiZap, FiGrid, FiBriefcase, FiLayers, FiBook, FiMessageCircle } from 'react-icons/fi'
import Starfield from './Starfield'

const links = [
  { href: '#about', label: 'About', icon: <FiZap /> },
  { href: '#skills', label: 'Skills', icon: <FiGrid /> },
  { href: '#experience', label: 'Experience', icon: <FiBriefcase /> },
  { href: '#projects', label: 'Projects', icon: <FiLayers /> },
  { href: '#education', label: 'Education', icon: <FiBook /> },
  { href: '#languages', label: 'Languages', icon: <FiBook /> },
  { href: '#contact', label: 'Contact', icon: <FiMessageCircle /> },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        aria-label="Open menu"
        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white"
        onClick={() => setOpen(true)}
      >
        <FiMenu />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            {/* panel */}
            <motion.div
              className="absolute inset-x-3 top-3 bottom-3 rounded-3xl overflow-hidden"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            >
              <div className="absolute inset-0 glass" />
              <div className="absolute inset-0 -z-10 opacity-60">
                <Starfield density={200} />
              </div>
              <div className="relative h-full flex flex-col">
                <div className="flex items-center justify-between p-4">
                  <div className="font-[Poppins] text-lg font-bold">Menu</div>
                  <button
                    aria-label="Close menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    <FiX />
                  </button>
                </div>
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                    show: { transition: { staggerChildren: 0.06 } },
                  }}
                  className="mt-2 grid grid-cols-1 gap-2 px-4"
                >
                  {links.map((l) => (
                    <motion.li
                      key={l.href}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white/90">
                          {l.icon}
                        </span>
                        <span className="flex-1">{l.label}</span>
                        <span className="opacity-0 group-hover:opacity-100 text-neutral-300 text-sm transition-opacity">Go</span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-auto p-4 text-center text-xs text-neutral-400">
                  Tap anywhere outside to close
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

