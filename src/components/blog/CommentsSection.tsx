// CommentsSection.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Comment {
  id: number;
  parentId?: number;
  username: string;
  content: string;
  date: string;
  likes?: number;
  dislikes?: number;
}

interface CommentsSectionProps {
  blogId: number;
}

const getAvatarColor = (name: string) => {
  const colors = [
    "bg-teal-400",
    "bg-pink-400",
    "bg-emerald-400",
    "bg-violet-400",
    "bg-orange-400",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export default function CommentsSection({ blogId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`blog-comments-${blogId}`);
    if (stored) setComments(JSON.parse(stored));
  }, [blogId]);

  const saveComments = (newComments: Comment[]) => {
    setComments(newComments);
    localStorage.setItem(`blog-comments-${blogId}`, JSON.stringify(newComments));
  };

  const handleSubmit = () => {
    if (!username.trim() || !content.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      parentId: replyTo || undefined,
      username: username.trim(),
      content: content.trim(),
      date: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
    };

    saveComments([...comments, newComment]);
    setUsername("");
    setContent("");
    setReplyTo(null);
  };

  const handleReply = (id: number) => setReplyTo(id);

  const handleLike = (id: number) => {
    const updated = comments.map((c) =>
      c.id === id ? { ...c, likes: (c.likes || 0) + 1 } : c
    );
    saveComments(updated);
  };

  const handleDislike = (id: number) => {
    const updated = comments.map((c) =>
      c.id === id ? { ...c, dislikes: (c.dislikes || 0) + 1 } : c
    );
    saveComments(updated);
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Comments</h2>

      {/* Comment Form */}
      <div className="mb-8 space-y-4">
        {replyTo && (
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Replying to comment #{replyTo}{" "}
            <button className="text-[var(--brand-1)] dark:text-[var(--brand-2)] underline" onClick={() => setReplyTo(null)}>Cancel</button>
          </div>
        )}
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand-1)] transition"
        />
        <textarea
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand-1)] transition"
          rows={4}
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Post Comment
        </button>
      </div>

      {/* Comment List */}
      <div className="space-y-6">
        <AnimatePresence>
          {comments
            .filter((c) => !c.parentId)
            .map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getAvatarColor(comment.username)}`}>
                    {comment.username[0].toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-zinc-900 dark:text-white">{comment.username}</span>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>

                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className="text-sm px-2 py-1 rounded-full hover:bg-[var(--brand-1)] hover:text-white transition"
                  >
                    👍 {comment.likes || 0}
                  </button>
                  <button
                    onClick={() => handleDislike(comment.id)}
                    className="text-sm px-2 py-1 rounded-full hover:bg-[var(--brand-2)] hover:text-white transition"
                  >
                    👎 {comment.dislikes || 0}
                  </button>
                  <button
                    onClick={() => handleReply(comment.id)}
                    className="text-sm text-[var(--brand-1)] dark:text-[var(--brand-2)] hover:underline"
                  >
                    Reply
                  </button>
                </div>

                {/* Replies */}
                <div className="ml-12 mt-4 space-y-2">
                  {comments
                    .filter((c) => c.parentId === comment.id)
                    .map((reply) => (
                      <motion.div
                        key={reply.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${getAvatarColor(reply.username)}`}>
                            {reply.username[0].toUpperCase()}
                          </div>
                          <span className="font-semibold text-zinc-900 dark:text-white">{reply.username}</span>
                          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{reply.content}</p>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
