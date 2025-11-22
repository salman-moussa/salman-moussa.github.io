import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; vx: number; vy: number; size: number }

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
        const angle = Math.random() * Math.PI * 2
        const velocity = 0.2 + Math.random() * 0.5
        stars.push({
          x: Math.random() * c.clientWidth,
          y: Math.random() * c.clientHeight,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          size: Math.random() * 1.5 + 0.5,
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
     
      for (const s of starsRef.current) {
        s.x += s.vx
        s.y += s.vy

        // Wrap around screen
        if (s.x < 0) s.x = w
        if (s.x > w) s.x = 0
        if (s.y < 0) s.y = h
        if (s.y > h) s.y = 0
        
        context.fillStyle = 'rgba(255,255,255,0.8)'
        context.beginPath()
        context.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        context.fill()
      }
    
      
    }
    frameRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [density])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}

