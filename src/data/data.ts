import { Microscope, Pill, ShieldCheck, TestTube } from "lucide-react";

// const LOGO_SRC = "/assets/hero_image.png"; // place your logo here
const LOGO_SRC = "/favicon.png";

const stats = [
  { label: "Years of Innovation", value: 12 },
  { label: "Global Clients", value: 48 },
  { label: "Research Patents", value: 36 },
  { label: "Products Launched", value: 22 },
];

const products = [
  { title: "Targeted Biologics", desc: "Monoclonal antibodies designed for precision therapy with optimized efficacy.", icon: Pill },
  { title: "mRNA Platforms", desc: "Flexible, scalable mRNA tech for vaccines and rare-disease therapeutics.", icon: TestTube },
  { title: "Cell Therapies", desc: "Cutting-edge CAR-T research with GMP-compliant manufacturing pipelines.", icon: Microscope },
  { title: "Quality & Compliance", desc: "WHO-GMP, ISO 13485, and GLP-backed processes across the product lifecycle.", icon: ShieldCheck },
];

const testimonials = [
  { quote: "Ojasya's scientific rigor and speed-to-execute helped us cut our pre-clinical timeline in half.", name: "Dr. A. Mehra", role: "Head of R&D, Medinova" },
  { quote: "Reliable partners with outstanding QC documentation — audits have never been smoother.", name: "S. Rao", role: "Regulatory Lead, PharmEdge" },
  { quote: "Their mRNA platform is truly plug-and-play. Exceptional tech transfer support.", name: "K. Fernandes", role: "VP Biotech, Novalytica" },
];

const partners = [
  { title: "Cipla", logo: "/images/partners/cipla.png" },
  { title: "Wellona", logo: "/images/partners/wellona.png" },
  { title: "Alkem", logo: "/images/partners/alkem.png" },
  { title: "Biocon", logo: "/images/partners/biocon.png" },
  { title: "Glenmark", logo: "/images/partners/glenmark.png" },
  { title: "Lupin", logo: "/images/partners/lupin.png" },
  { title: "Novo", logo: "/images/partners/novo.png" },
  { title: "Aurobindo", logo: "/images/partners/aurobindo.png" },
];

// const partners = ["Novalytica", "Medinova", "PharmEdge", "BioSynaptix", "LifeSpring Labs", "CelluGen"];


// Remove React component definitions from this data file.
// Move Section and Card components to a separate file (e.g., src/components/Section.tsx).

export { LOGO_SRC, stats, products, testimonials, partners };