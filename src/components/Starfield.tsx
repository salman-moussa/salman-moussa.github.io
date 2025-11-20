import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; z: number; pz: number }

export default function Starfield({ density = 350 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const starsRef = useRef<Star[]>([])
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const ctx = canvasEl.getContext('2d')
    if (!ctx) return

    function resize() {
      const c = canvasEl as HTMLCanvasElement
      const context = ctx as CanvasRenderingContext2D
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      c.width = Math.floor(c.clientWidth * dpr)
      c.height = Math.floor(c.clientHeight * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      // regenerate stars
      const count = Math.floor((c.clientWidth * c.clientHeight) / 8000)
      const target = Math.max(density, count)
      const stars: Star[] = []
      for (let i = 0; i < target; i++) {
        stars.push({
          x: (Math.random() - 0.5) * c.clientWidth,
          y: (Math.random() - 0.5) * c.clientHeight,
          z: Math.random() * c.clientWidth,
          pz: 0,
        })
      }
      starsRef.current = stars
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const c = canvasEl as HTMLCanvasElement
      const context = ctx as CanvasRenderingContext2D
      const w = c.clientWidth
      const h = c.clientHeight
      context.clearRect(0, 0, w, h)
      context.translate(w / 2, h / 2)
      const speed = 2
      for (const s of starsRef.current) {
        s.z -= speed
        if (s.z < 1) {
          s.x = (Math.random() - 0.5) * w
          s.y = (Math.random() - 0.5) * h
          s.z = w
          s.pz = s.z
        }
        const sx = (s.x / s.z) * w
        const sy = (s.y / s.z) * w
        const r = Math.max(0.7, 2 - s.z / (w * 0.5))
        context.fillStyle = 'rgba(255,255,255,0.8)'
        context.beginPath()
        context.arc(sx, sy, r, 0, Math.PI * 2)
        context.fill()

        const px = (s.x / s.pz) * w
        const py = (s.y / s.pz) * w
        s.pz = s.z
        context.strokeStyle = 'rgba(124,58,237,0.25)'
        context.beginPath()
        context.moveTo(px, py)
        context.lineTo(sx, sy)
        context.stroke()
      }
      context.setTransform(1, 0, 0, 1, 0, 0)
      frameRef.current = requestAnimationFrame(draw)
    }
    frameRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [density])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}

