import { ReactNode } from 'react'

export default function InfinityMarquee({ children, speed = 30 }: { children: ReactNode; speed?: number }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="marquee-track flex gap-6 whitespace-nowrap will-change-transform"
        style={
          {
            '--marquee-duration': `${speed}s`,
          } as React.CSSProperties
        }
      >
        <div className="flex gap-6">{children}</div>
        <div className="flex gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

