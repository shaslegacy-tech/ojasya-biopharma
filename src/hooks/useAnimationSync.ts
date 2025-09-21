// useAnimationSync.ts
import { useEffect } from 'react'

export function useAnimationSync(speed = 12000) {
  useEffect(() => {
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = ((timestamp - start) % speed) / speed
      document.documentElement.style.setProperty('--hero-animation-progress', progress.toString())
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [speed])
}
