import { useState, useEffect, useRef } from 'react';

export function useCountUp(target: number, startWhenInView: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const startTs = useRef<number | null>(null);
  useEffect(() => {
    if (!startWhenInView) return;
    let raf = 0;
    const step = (ts: number) => {
      if (!startTs.current) startTs.current = ts;
      const progress = Math.min(1, (ts - startTs.current) / duration);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, startWhenInView, duration]);
  return value;
}