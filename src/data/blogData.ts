export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Pharma Supplies in India",
    excerpt: "A look at how pharmaceutical supply chains are evolving with technology and efficiency.",
    category: "Pharma News",
    image: "/images/blog/pharma-future.jpg",
    date: "Sep 15, 2025",
  },
  {
    id: 2,
    title: "How Ojasya Ensures Quality in Every Delivery",
    excerpt: "Our commitment to delivering medicines and injections with precision and safety.",
    category: "Company Updates",
    image: "/images/blog/quality-delivery.jpg",
    date: "Sep 05, 2025",
  },
  {
    id: 3,
    title: "Top Innovations in Medical Injections",
    excerpt: "Exploring the latest breakthroughs in injectable medical technologies.",
    category: "Healthcare",
    image: "/images/blog/injections.jpg",
    date: "Aug 28, 2025",
  },
];
