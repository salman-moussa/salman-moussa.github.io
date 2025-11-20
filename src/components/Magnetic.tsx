import { useRef } from 'react'

export default function Magnetic({ children, strength = 30 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${(dx / rect.width) * strength}px, ${(dy / rect.height) * strength}px)`
  }
  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = `translate(0px, 0px)`
  }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="transition-transform duration-200 will-change-transform">
      {children}
    </div>
  )
}

