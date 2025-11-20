import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function BouncyBall() {
  const [isDragging, setIsDragging] = useState(false)
  const [canDrag, setCanDrag] = useState(false) // hold Alt to interact with the ball
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  // Springs for smooth, bouncy motion
  const x = useSpring(cursor.current.x, { stiffness: 300, damping: 20, mass: 0.5 })
  const y = useSpring(cursor.current.y, { stiffness: 300, damping: 20, mass: 0.5 })

  useEffect(() => {
    function onMove(e: PointerEvent) {
      cursor.current.x = e.clientX
      cursor.current.y = e.clientY
      if (!isDragging) {
        x.set(cursor.current.x)
        y.set(cursor.current.y)
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [isDragging, x, y])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.altKey) setCanDrag(true)
    }
    function onKeyUp() {
      setCanDrag(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  const size = 28

  return (
    <motion.div
      className={`fixed left-0 top-0 z-[60] ${canDrag ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{
        x: x,
        y: y,
        // center the ball under the cursor
        translateX: -size / 2,
        translateY: -size / 2,
      }}
      drag={canDrag}
      dragElastic={0.8}
      dragMomentum
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        setIsDragging(false)
        // snap back to current cursor with a bounce
        x.set(cursor.current.x)
        y.set(cursor.current.y)
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      aria-label="Bouncy draggable ball"
    >
      <div
        className="relative grid place-items-center rounded-full"
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_0_25px_rgba(124,58,237,0.6)]" />
        <div className="absolute inset-0 rounded-full bg-white/20 mix-blend-overlay" />
        <div className="absolute -inset-1 rounded-full blur-md bg-fuchsia-500/40" />
      </div>
    </motion.div>
  )
}

