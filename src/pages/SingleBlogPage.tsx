// SingleBlogPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CommentsSection from "../components/blog/CommentsSection";

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

export default function SingleBlogPage() {
  const { id } = useParams<{ id: string; slug?: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === Number(id));
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentName, setCommentName] = useState("");
  const [commentMessage, setCommentMessage] = useState("");

  if (!post) {
    navigate("/blog");
    return null;
  }

  // Scrollspy for TOC
  useEffect(() => {
    if (!post.content) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, "text/html");
    const hs = Array.from(doc.querySelectorAll("h2, h3")).map((h) => ({
      id: h.id || h.textContent?.replace(/\s+/g, "-").toLowerCase() || "",
      text: h.textContent || "",
    }));
    setHeadings(hs);
  }, [post]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -50% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Comments handling
  useEffect(() => {
    const saved = localStorage.getItem(`comments-${post.id}`);
    if (saved) setComments(JSON.parse(saved));
  }, [post.id]);

  const handleCommentSubmit = () => {
    if (!commentName || !commentMessage) return;
    const newComment = {
      id: Date.now(),
      name: commentName,
      message: commentMessage,
      date: new Date().toLocaleString(),
    };
    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(`comments-${post.id}`, JSON.stringify(updated));
    setCommentName("");
    setCommentMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-light-2)] to-[var(--teal-light-1)] dark:from-[var(--bg-dark-1)] dark:to-[var(--teal-dark-2)] transition-colors duration-500">

      {/* Hero */}
      <section className="relative py-20 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20 bg-gradient-to-r from-[var(--brand-1)] via-[var(--brand-2)] to-[var(--brand-b)] blur-3xl"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[var(--brand-1)] opacity-20"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[var(--brand-2)] opacity-20"
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h1
          className="relative text-5xl md:text-6xl font-bold gradient-text z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {post.title}
        </motion.h1>
        <p className="relative mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto z-10">
          {post.category} — {post.date} {post.author && `| By ${post.author}`}
        </p>
      </section>

      {/* Main Content + TOC */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col lg:flex-row gap-12">
        {/* Blog Content */}
        <div className="flex-1 max-w-4xl mx-auto lg:mx-0 prose dark:prose-invert prose-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-8 shadow-lg"
          />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          {/* Comments */}
            <CommentsSection blogId={post.id} />
          {/* Back Button */}
          <div className="mt-12">
            <button
              onClick={() => navigate("/blog")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              ← Back to Blog
            </button>
          </div>
        </div>

        {/* TOC */}
        {headings.length > 0 && (
          <div className="hidden lg:block w-64 sticky top-32 self-start">
            <h4 className="font-bold mb-4 text-zinc-900 dark:text-white">On this page</h4>
            <ul className="space-y-2">
              {headings.map((h) => (
                <li key={h.id}>
                  <button
                    onClick={() => scrollToHeading(h.id)}
                    className={`text-left w-full transition-all px-3 py-1 rounded hover:bg-[var(--brand-1)] hover:text-white ${
                      activeId === h.id ? "bg-[var(--brand-1)] text-white font-semibold" : "text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {h.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Related Posts */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white text-center">
          Related Posts
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts
            .filter((p) => p.id !== post.id && p.category === post.category)
            .map((p) => (
              <motion.div
                key={p.id}
                className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.5 }}
                onClick={() => navigate(`/blog/${p.id}`)}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[250px] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-4 text-left text-white">
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-sm">{p.excerpt}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}
