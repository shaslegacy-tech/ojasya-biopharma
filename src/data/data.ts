import { ReactElement } from "react";
import { Microscope, Pill, ShieldCheck, TestTube, Lightbulb, Shield, Handshake, Search  } from "lucide-react";

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
  { quote: "Ojasya's scientific rigor and speed-to-execute helped us cut our pre-clinical timeline in half.", name: "Dr. A. Mehra", role: "Head of R&D, Medinova", image: "" },
  { quote: "Reliable partners with outstanding QC documentation — audits have never been smoother.", name: "S. Rao", role: "Regulatory Lead, PharmEdge", image: ""  },
  { quote: "Their mRNA platform is truly plug-and-play. Exceptional tech transfer support.", name: "K. Fernandes", role: "VP Biotech, Novalytica", image: "" },
  { quote: "Their mRNA platform is truly plug-and-play. Exceptional tech transfer support.", name: "R. Raghavan", role: "MP Biotech, Novalytica", image: "" },
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

const coreValues = [
  { title: "Innovation", desc: "Pioneering solutions for modern healthcare.", icon: Lightbulb },
  { title: "Integrity", desc: "Maintaining ethical standards in all operations.", icon: Shield },
  { title: "Collaboration", desc: "Partnering to deliver the best outcomes.", icon: Handshake },
  { title: "Excellence", desc: "Striving for top quality in all we do.", icon: Search },
];

const teamMembers: { name: string; role: string; avatar?: string }[] = [
  { name: "Dr. Ramesh Kumar", role: "CEO" },
  { name: "Dr. Anita Sharma", role: "CTO" },
  { name: "Suresh Patel", role: "Head of Operations" },
  { name: "Neha Jain", role: "Marketing Lead" },
  { name: "Rahul Verma", role: "Research Scientist" },
  { name: "Priya Mehta", role: "Quality Manager" },
];

const milestones: { year: string; event: string }[] = [
  { year: "2015", event: "Company Founded with a vision to innovate in pharma" },
  { year: "2017", event: "Launched first proprietary pharmaceutical product" },
  { year: "2019", event: "Expanded operations internationally" },
  { year: "2021", event: "Recognized as a top Biopharma innovator" },
];

export { LOGO_SRC, stats, products, testimonials, partners, coreValues, teamMembers, milestones };


// export const partners: { title: string; logo: string }[] = [
//   { title: "HealthCorp", logo: "https://via.placeholder.com/80x40?text=HealthCorp" },
//   { title: "BioLab", logo: "https://via.placeholder.com/80x40?text=BioLab" },
//   { title: "PharmaPlus", logo: "https://via.placeholder.com/80x40?text=PharmaPlus" },
//   { title: "MediLife", logo: "https://via.placeholder.com/80x40?text=MediLife" },
//   { title: "GlobalPharma", logo: "https://via.placeholder.com/80x40?text=GlobalPharma" },
//   { title: "CureTech", logo: "https://via.placeholder.com/80x40?text=CureTech" },
// ];

// export const testimonials: { name: string; role: string; quote: string }[] = [
//   { name: "Dr. Rajesh Kumar", role: "Research Partner", quote: "Ojasya Biopharma delivers unmatched quality and professionalism." },
//   { name: "Anita Singh", role: "Healthcare Consultant", quote: "Their innovative solutions make them leaders in Biopharma." },
//   { name: "Vikram Mehta", role: "Pharma Distributor", quote: "Reliable and committed partner in every collaboration." },
//   { name: "Sneha Verma", role: "Medical Advisor", quote: "Exceptional team and groundbreaking research." },
//   { name: "Rohan Joshi", role: "Supply Chain Partner", quote: "Consistently delivers high standards and excellent support." },
//   { name: "Priya Sharma", role: "Clinical Researcher", quote: "Their commitment to innovation is truly inspiring." },
// ];
