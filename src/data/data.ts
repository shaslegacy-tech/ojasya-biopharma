import { ReactElement } from "react";
import { LucideIcon } from "lucide-react";
import { 
  Microscope, 
  Pill, 
  ShieldCheck,
  TestTube,
  Lightbulb,
  Shield, 
  Handshake, 
  Search, 
  Database, 
  Box, 
  Cpu,
  Truck,
  Syringe
} from "lucide-react";


// const LOGO_SRC = "/assets/hero_image.png"; // place your logo here
const LOGO_SRC = "/favicon.png";

const footerMenu = [ 
  { title: "Company", links: [ 
    { label: "About Us", href: "/about" }, 
    { label: "Our Team", href: "/about#team" }, 
    { label: "Careers", href: "/careers" }, 
  ], 
}, 
// { title: "Services", links: [ 
//   { label: "Pharma Supplies", href: "/services/pharma-supplies" }, 
//   { label: "Injections & Devices", href: "/services/injections" }, 
//   { label: "Hospital Delivery", href: "/services/delivery" }, 
//  ], 
// }, 
{ title: "Resources", links: [
   { label: "Blog", href: "/blog" }, 
   { label: "Contact Us", href: "/contact" },
   ], 
  }, 
  { title: "Legal", links: [ 
    { label: "Privacy Policy", href: "/privacy-policy" }, 
    { label: "Terms & Conditions", href: "/terms" }, 
  ], 
}, 
];

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
  { title: "Cipla", logo: "/images/partners/cipla.png", website: "https://www.cipla.com/" },
  { title: "Wellona", logo: "/images/partners/wellona.png", website: "https://www.wellona.com/" },
  { title: "Alkem", logo: "/images/partners/alkem.png", website: "https://www.alkemlabs.com/" },
  { title: "Biocon", logo: "/images/partners/biocon.png", website: "https://www.biocon.com/" },
  { title: "Glenmark", logo: "/images/partners/glenmark.png", website: "https://www.glenmarkpharma.com/" },
  { title: "Lupin", logo: "/images/partners/lupin.png", website: "https://www.lupin.com/" },
  { title: "Novo", logo: "/images/partners/novo.png", website: "https://www.novopharma.com/" },
  { title: "Aurobindo", logo: "/images/partners/aurobindo.png", website: "https://www.aurobindo.com/" },
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

export { LOGO_SRC, footerMenu, stats, products, testimonials, partners, coreValues, teamMembers, milestones };


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

// Service page
export const services: { title: string; desc: string; icon?: LucideIcon }[] = [
  { title: "Clinical Trials", desc: "Managing trials to meet global regulatory standards.", icon: Database },
  { title: "Hospital Supply", desc: "Delivering all pharma products directly to hospitals efficiently.", icon: Truck },
  { title: "Medicines", desc: "High-quality medicines from top pharmaceutical brands.", icon: Pill },
  { title: "Injections & Vaccines", desc: "Safe, temperature-controlled supply of injections and vaccines.", icon: Syringe },
  { title: "Medical Equipment", desc: "Reliable delivery of hospital equipment and consumables.", icon: Box },
  { title: "Research & Innovation", desc: "Innovative solutions for improving patient outcomes.", icon: Cpu },

];
