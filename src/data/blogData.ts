import { createSlug } from "../utility/utility";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author?: string;
  content: string; // full HTML content for single blog page
  slug?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Pharma Supplies in India",
    excerpt: "A look at how pharmaceutical supply chains are evolving with technology and efficiency.",
    category: "Pharma News",
    image: "/images/blog/pharma-future.webp",
    date: "Sep 15, 2025",
    author: "Admin",
    content: `
      <p>Pharmaceutical supply chains in India are transforming at a rapid pace. With digital tracking, IoT-enabled logistics, and advanced warehouse management systems, Ojasya Biopharma ensures medicines reach hospitals safely and efficiently.</p>
      <h2>Digital Integration</h2>
      <p>We use state-of-the-art software to track every shipment in real-time, ensuring transparency and reliability.</p>
      <h2>Compliance & Safety</h2>
      <p>All pharma deliveries follow strict safety protocols, temperature control, and regulatory compliance.</p>
      <p>Investing in technology today ensures a healthier tomorrow for patients and hospitals alike.</p>
    `,
    slug: createSlug("The Future of Pharma Supplies in India"),
  },
  {
    id: 2,
    title: "How Ojasya Ensures Quality in Every Delivery",
    excerpt: "Our commitment to delivering medicines and injections with precision and safety.",
    category: "Company Updates",
    image: "/images/blog/quality-delivery.jpg",
    date: "Sep 05, 2025",
    author: "Admin",
    content: `
      <p>At Ojasya Biopharma, quality is non-negotiable. Every order is checked multiple times before dispatch, maintaining high standards.</p>
      <h2>Step-by-Step Process</h2>
      <ul>
        <li>Order verification</li>
        <li>Warehouse quality checks</li>
        <li>Secure packaging & labeling</li>
        <li>Temperature-controlled transport</li>
      </ul>
      <p>We prioritize accuracy, safety, and timely delivery for every hospital partner.</p>
    `,
    slug: createSlug("How Ojasya Ensures Quality in Every Delivery"),
  },
  {
    id: 3,
    title: "Top Innovations in Medical Injections",
    excerpt: "Exploring the latest breakthroughs in injectable medical technologies.",
    category: "Healthcare",
    image: "/images/blog/injections.jpg",
    date: "Aug 28, 2025",
    author: "Admin",
    content: `
      <p>Medical injections have evolved significantly with precision delivery systems, safety features, and improved patient comfort.</p>
      <h2>Smart Injection Devices</h2>
      <p>New smart devices reduce errors and monitor dosage automatically.</p>
      <h2>Safety & Sustainability</h2>
      <p>Disposable, eco-friendly injections ensure both patient safety and reduced environmental impact.</p>
      <p>Innovation drives better outcomes and a safer healthcare ecosystem.</p>
    `,
    slug: createSlug("Top Innovations in Medical Injections"),
  },
  {
    id: 4,
    title: "Hospital Supply Chains Optimized by Technology",
    excerpt: "How automation and analytics are improving hospital deliveries.",
    category: "Pharma News",
    image: "/images/blog/supply-chain.png",
    date: "Aug 15, 2025",
    author: "Admin",
    content: `
      <p>Technology is the backbone of modern pharmaceutical supply chains. From predictive analytics to automated sorting, Ojasya Biopharma ensures hospitals get the right medicines on time.</p>
      <h2>Automated Warehousing</h2>
      <p>Robotics and AI optimize storage and reduce errors.</p>
      <h2>Real-Time Monitoring</h2>
      <p>Our systems track every shipment to ensure timely and safe delivery.</p>
    `,
    slug: createSlug("Hospital Supply Chains Optimized by Technology"),
  },
  {
    id: 5,
    title: "Sustainability in Pharma Delivery",
    excerpt: "How Ojasya is reducing carbon footprint in healthcare logistics.",
    category: "Company Updates",
    image: "/images/blog/sustainability.jpg",
    date: "Aug 01, 2025",
    author: "Admin",
    content: `
      <p>Environmental responsibility is part of our mission. We implement green packaging, route optimization, and eco-friendly transport to minimize our impact.</p>
      <h2>Eco-Packaging</h2>
      <p>Biodegradable and recyclable materials reduce waste.</p>
      <h2>Optimized Routes</h2>
      <p>Smart delivery planning cuts unnecessary travel and emissions.</p>
      <p>Our sustainability efforts make pharma deliveries safer for the planet and future generations.</p>
    `,
    slug: createSlug("Sustainability in Pharma Delivery"),
  },
];
