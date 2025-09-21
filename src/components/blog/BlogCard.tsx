import { motion } from "framer-motion";
import { BlogPost } from "../../data/blogData";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <motion.div
      className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all hover:shadow-2xl relative"
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-70 group-hover:opacity-90 transition" />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white shadow-md">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-[var(--brand-1)] transition">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <a
          href={`/blog/${post.id}`}
          className="font-semibold text-[var(--brand-1)] dark:text-[var(--brand-2)] hover:underline"
        >
          Read More →
        </a>
      </div>
    </motion.div>
  );
}
