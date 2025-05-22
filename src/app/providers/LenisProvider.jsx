'use client'

import ReactLenis from "@studio-freight/react-lenis"

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      options={{
        duration: 1.2,
        smooth: true,
        lerp: 0.00015,
        smoothTouch: true,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  )
}
