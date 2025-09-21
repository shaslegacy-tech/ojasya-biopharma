import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "../components/blog/BlogCard";
import { blogPosts } from "../data/blogData";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Featured post
  const featuredPost = filteredPosts[0];
  const restPosts = filteredPosts.slice(1);

  // Pagination
  const postsPerPage = 6;
  const totalPages = Math.ceil(restPosts.length / postsPerPage);
  const paginatedPosts = restPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Load More
  const visiblePosts = restPosts.slice(0, visibleCount);
  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

  useEffect(() => {
    if (loadMoreRef.current) {
      loadMoreRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [visibleCount, currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-light-2)] to-[var(--teal-light-1)] dark:from-[var(--bg-dark-1)] dark:to-[var(--teal-dark-2)] transition-colors duration-500">
      
      {/* Hero */}
      <section className="relative py-20 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30 bg-gradient-to-r from-[var(--brand-1)] via-[var(--brand-2)] to-[var(--brand-b)] blur-3xl"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        <motion.h1
          className="relative text-5xl md:text-6xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ojasya Insights
        </motion.h1>
        <p className="relative mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Explore stories, innovations, and updates shaping the future of healthcare and pharma.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container mx-auto px-6 mb-16">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-8 text-left text-white">
              <span className="px-4 py-1 text-sm rounded-full bg-[var(--brand-1)] text-white shadow-md">
                Featured
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-snug">
                {featuredPost.title}
              </h2>
              <p className="mt-3 text-gray-200 max-w-2xl">{featuredPost.excerpt}</p>
              <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-semibold shadow-lg hover:scale-105 transition">
                Read More
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* Filters */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <input
            type="text"
            placeholder="🔍 Search articles..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(6);
              setCurrentPage(1);
            }}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                       bg-white/80 dark:bg-gray-900/70 shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-[var(--brand-1)] transition"
          />
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setVisibleCount(6);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === cat
                    ? "bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 pb-16">
        {restPosts.length > 0 ? (
          <>
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence>
                {paginatedPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More */}
            {visibleCount < restPosts.length && (
              <div ref={loadMoreRef} className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-semibold shadow-xl hover:scale-105 transition"
                >
                  Load More
                </button>
              </div>
            )}

            {/* Sticky Pagination with Arrows */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
            <div className="flex justify-center items-center gap-2 bg-white/80 dark:bg-gray-900/80 
                            backdrop-blur-xl shadow-lg px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                
                {/* Previous Button */}
                <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                    currentPage === 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                >
                ←
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${
                    currentPage === page
                        ? "bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                    {page}
                </button>
                ))}

                {/* Next Button */}
                <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                    currentPage === totalPages
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                >
                →
                </button>
            </div>
            </div>

          </>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg py-20">
            No articles found.
          </p>
        )}
      </section>
    </div>
  );
}
