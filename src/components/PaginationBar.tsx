import { useEffect, useState } from "react";

export default function PaginationBar({
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  const [showPagination, setShowPagination] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShowPagination(false);
      } else {
        // scrolling up → show
        setShowPagination(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-transform duration-500 ${
        showPagination ? "translate-y-0" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="flex justify-center items-center gap-2 bg-white/80 dark:bg-gray-900/80 
                      backdrop-blur-xl shadow-lg px-4 py-2 rounded-full 
                      border border-gray-200 dark:border-gray-700">
        
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
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
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
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
  );
}
