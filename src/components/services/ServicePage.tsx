import React from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Truck, Syringe, Pill, Box, ClipboardCheck, Hospital, Package as BoxPackage } from "lucide-react";
import { Card, Section } from "../../utility/utility";

// Sample Data
const services = [
  { title: "Hospital Supply", desc: "Delivering all pharma products directly to hospitals efficiently.", icon: Truck },
  { title: "Medicines", desc: "High-quality medicines from top pharmaceutical brands.", icon: Pill },
  { title: "Injections & Vaccines", desc: "Safe, temperature-controlled supply of injections and vaccines.", icon: Syringe },
  { title: "Medical Equipment", desc: "Reliable delivery of hospital equipment and consumables.", icon: Box },
];

const timelineSteps = [
  { title: "Order Received", icon: ClipboardCheck },
  { title: "Warehouse Processing", icon: BoxPackage },
  { title: "Transport to Hospital", icon: Truck },
  { title: "Delivered Safely", icon: Hospital },
];

const partnersData = [
  { title: "Pharma Brand A", logo: "/logos/pharma-a.svg" },
  { title: "Pharma Brand B", logo: "/logos/pharma-b.svg" },
  { title: "Pharma Brand C", logo: "/logos/pharma-c.svg" },
  { title: "Pharma Brand D", logo: "/logos/pharma-d.svg" },
];

const medicalProducts = [
  { name: "Paracetamol 500mg", desc: "Effective pain relief for fever and aches.", image: "/products/paracetamol.png" },
  { name: "Vitamin D Injection", desc: "Supports bone health and immunity.", image: "/products/vitamin-d.png" },
  { name: "Amoxicillin 250mg", desc: "Broad-spectrum antibiotic.", image: "/products/amoxicillin.png" },
  { name: "Insulin Injection", desc: "Regulates blood sugar levels.", image: "/products/insulin.png" },
  { name: "Ceftriaxone 1g", desc: "Used for severe bacterial infections.", image: "/products/ceftriaxone.png" },
  { name: "Ibuprofen 400mg", desc: "Relieves inflammation and pain.", image: "/products/ibuprofen.png" },
];

// ================= Floating Blobs =================
function FloatingBlobs() {
  return (
    <>
      <div className="absolute top-[-80px] left-[-60px] w-72 h-72 rounded-full bg-emerald-300/40 blur-3xl animate-pulse opacity-70" />
      <div className="absolute top-[200px] left-[60%] w-64 h-64 rounded-full bg-teal-300/30 blur-3xl animate-pulse opacity-60" />
      <div className="absolute top-[400px] left-[-50px] w-52 h-52 rounded-full bg-sky-300/20 blur-3xl animate-pulse opacity-50" />
    </>
  );
}

// ================= Services Carousel =================
export default function ServicesCarousel() {
  const slidesToShow = 3;
  const gap = 24;
  const totalSlides = services.length;
  const [index, setIndex] = React.useState(0);
  const x = useMotionValue(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = React.useState(0);

  React.useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      setSlideWidth((containerWidth - (slidesToShow - 1) * gap) / slidesToShow);
    }
  }, [carouselRef.current?.offsetWidth]);

  React.useEffect(() => {
    const interval = setInterval(() => slideToIndex(index + slidesToShow), 6000);
    return () => clearInterval(interval);
  }, [index]);

  const slideToIndex = (newIndex: number) => {
    if (newIndex < 0) newIndex = 0;
    if (newIndex > totalSlides - slidesToShow) newIndex = totalSlides - slidesToShow;
    setIndex(newIndex);
    animate(x, -newIndex * (slideWidth + gap), { type: "spring", stiffness: 200, damping: 30 });
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const movedSlides = Math.round(-info.offset.x / (slideWidth + gap));
    slideToIndex(index + movedSlides);
  };

  return (
    <div className="relative overflow-hidden px-4">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-emerald-50 dark:from-zinc-900 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-emerald-50 dark:from-zinc-900 pointer-events-none" />

      <motion.div
        ref={carouselRef}
        className="flex gap-6 cursor-grab"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -(totalSlides - slidesToShow) * (slideWidth + gap), right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16,185,129,0.3)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ flex: `0 0 calc((100% - ${(slidesToShow - 1) * gap}px)/${slidesToShow})` }}
            className="bg-white dark:bg-zinc-900 rounded-3xl px-8 py-10 text-center"
          >
            {s.icon && <div className="text-5xl mb-4 text-emerald-500 dark:text-emerald-400">{React.createElement(s.icon)}</div>}
            <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-2">{s.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-300">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-3">
        {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map((_, i) => (
          <button
            key={i}
            onClick={() => slideToIndex(i * slidesToShow)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === Math.floor(index / slidesToShow)
                ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 scale-125"
                : "bg-zinc-400/40 dark:bg-zinc-600/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
