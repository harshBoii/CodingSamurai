// app/providers/LenisProvider.js
'use client'

import { ReactLenis } from 'lenis/react'

export default function LenisProvider({ children }) {
  return (
    <ReactLenis options={{ duration: 1, smooth: true, autoRaf: false }}>
      {children}
    </ReactLenis>
  )
}
