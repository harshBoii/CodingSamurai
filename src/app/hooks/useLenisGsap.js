'use client'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'


export const useLenisGsap = () => {
  const lenis = useLenis({
    duration : 1
  })
  
  useGSAP(() => {
    if (!lenis) return
    
    // Sync animation frame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    // Cleanup
    return () => gsap.ticker.remove(lenis.raf)
  }, [lenis])
}
