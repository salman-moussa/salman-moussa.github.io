import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; z: number; pz: number }

export default function Starfield({ density = 350 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const starsRef = useRef<Star[]>([])
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(canvas.clientWidth * dpr)
      canvas.height = Math.floor(canvas.clientHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // regenerate stars
      const count = Math.floor((canvas.clientWidth * canvas.clientHeight) / 8000)
      const target = Math.max(density, count)
      const stars: Star[] = []
      for (let i = 0; i < target; i++) {
        stars.push({
          x: (Math.random() - 0.5) * canvas.clientWidth,
          y: (Math.random() - 0.5) * canvas.clientHeight,
          z: Math.random() * canvas.clientWidth,
          pz: 0,
        })
      }
      starsRef.current = stars
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)
      ctx.translate(w / 2, h / 2)
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
        ctx.fillStyle = 'rgba(255,255,255,0.8)'
        ctx.beginPath()
        ctx.arc(sx, sy, r, 0, Math.PI * 2)
        ctx.fill()

        const px = (s.x / s.pz) * w
        const py = (s.y / s.pz) * w
        s.pz = s.z
        ctx.strokeStyle = 'rgba(124,58,237,0.25)'
        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(sx, sy)
        ctx.stroke()
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0)
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

