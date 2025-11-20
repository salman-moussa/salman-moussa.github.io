import { useEffect, useRef } from 'react'

type BlobSpec = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  colorStops: Array<[number, string]>
}

function createBlobs(width: number, height: number): BlobSpec[] {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min
  return [
    {
      x: rand(0, width),
      y: rand(0, height),
      vx: rand(-0.25, 0.25),
      vy: rand(-0.25, 0.25),
      radius: Math.max(width, height) * 0.35,
      colorStops: [
        [0, 'rgba(124,58,237,0.55)'], // fuchsia-600
        [1, 'rgba(124,58,237,0.0)'],
      ],
    },
    {
      x: rand(0, width),
      y: rand(0, height),
      vx: rand(-0.25, 0.25),
      vy: rand(-0.25, 0.25),
      radius: Math.max(width, height) * 0.35,
      colorStops: [
        [0, 'rgba(34,211,238,0.45)'], // cyan-400
        [1, 'rgba(34,211,238,0.0)'],
      ],
    },
    {
      x: rand(0, width),
      y: rand(0, height),
      vx: rand(-0.25, 0.25),
      vy: rand(-0.25, 0.25),
      radius: Math.max(width, height) * 0.35,
      colorStops: [
        [0, 'rgba(56,189,248,0.40)'], // sky-400
        [1, 'rgba(56,189,248,0.0)'],
      ],
    },
  ]
}

export default function Aurora() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const blobsRef = useRef<BlobSpec[] | null>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const ctx = canvasEl.getContext('2d', { alpha: true })
    if (!ctx) return

    function resize() {
      const c = canvasEl as HTMLCanvasElement
      const context = ctx as CanvasRenderingContext2D
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      c.width = Math.floor(c.clientWidth * dpr)
      c.height = Math.floor(c.clientHeight * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      blobsRef.current = createBlobs(c.clientWidth, c.clientHeight)
    }
    resize()
    window.addEventListener('resize', resize)

    ;(ctx as CanvasRenderingContext2D).globalCompositeOperation = 'lighter'

    function draw() {
      const c = canvasEl as HTMLCanvasElement
      const context = ctx as CanvasRenderingContext2D
      const blobs = blobsRef.current!
      const { clientWidth: w, clientHeight: h } = c
      context.clearRect(0, 0, w, h)
      for (const b of blobs) {
        // move
        b.x += b.vx
        b.y += b.vy
        // bounce
        if (b.x < -b.radius * 0.2 || b.x > w + b.radius * 0.2) b.vx *= -1
        if (b.y < -b.radius * 0.2 || b.y > h + b.radius * 0.2) b.vy *= -1
        // draw radial gradient
        const g = context.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius)
        for (const [stop, color] of b.colorStops) g.addColorStop(stop, color)
        context.fillStyle = g
        context.beginPath()
        context.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
        context.fill()
      }
      frameRef.current = requestAnimationFrame(draw)
    }
    frameRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

