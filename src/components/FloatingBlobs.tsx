// FloatingBlobs.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingBlobs() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blobs = [
    { size: 300, top: -50, left: -80, color: "bg-emerald-300/30", xSpeed: 0.3, ySpeed: 0.2, rotSpeed: 5, opacitySpeed: 0.0005 },
    { size: 250, top: 200, left: 50, color: "bg-teal-300/20", xSpeed: -0.2, ySpeed: 0.25, rotSpeed: -4, opacitySpeed: 0.0006 },
    { size: 400, top: 500, left: -100, color: "bg-sky-300/20", xSpeed: 0.25, ySpeed: -0.15, rotSpeed: 3, opacitySpeed: 0.0004 },
    { size: 200, top: 600, left: 300, color: "bg-emerald-400/20", xSpeed: -0.15, ySpeed: 0.2, rotSpeed: -6, opacitySpeed: 0.0005 },
  ];

  return (
    <>
      {blobs.map((b, idx) => (
        <motion.div
          key={idx}
          className={`absolute rounded-full ${b.color} blur-3xl`}
          style={{
            width: b.size,
            height: b.size,
            top: b.top + scrollY * b.ySpeed,
            left: b.left + scrollY * b.xSpeed,
            rotate: scrollY * b.rotSpeed,
            opacity: 0.6 + Math.sin(scrollY * b.opacitySpeed) * 0.2,
          }}
          animate={{
            x: [0, b.xSpeed * 20, 0],
            y: [0, b.ySpeed * 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        />
      ))}
    </>
  );
}
