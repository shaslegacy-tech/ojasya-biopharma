import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    slug?: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const navigate = useNavigate();

  return (
    <Link to={`/blog/${post.id}`} className="block group">
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500
                 bg-white dark:bg-gray-900 border border-transparent hover:border-gradient-to-r 
                 hover:from-[var(--brand-1)] hover:via-[var(--brand-2)] hover:to-[var(--brand-b)]
                 hover:shadow-2xl hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[var(--brand-1)] text-white shadow-md">
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
          {post.excerpt}
        </p>
        <button 
        onClick={() => navigate(`/blog/${post.id}`)}
        className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          Read More
        </button>
      </div>
    </motion.div>
    </Link>
  );
}
