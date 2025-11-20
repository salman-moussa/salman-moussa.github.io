import { useRef } from 'react'

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateX = (py - 0.5) * -10
    const rotateY = (px - 0.5) * 10
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
    el.style.setProperty('--px', px.toString())
    el.style.setProperty('--py', py.toString())
  }
  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="tilt-card relative transition-transform duration-300"
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            'radial-gradient(600px circle at calc(var(--px,0.5) * 100%) calc(var(--py,0.5) * 100%), rgba(255,255,255,0.08), transparent 50%)',
        }}
      />
    </div>
  )
}

