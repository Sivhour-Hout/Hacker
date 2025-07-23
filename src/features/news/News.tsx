import { useState } from "react";
import { useNews } from "../../hooks/useNews";
import NewsItem from "../../components/NewsItem";

export function News() {
  // Example: fetch news with optional query param "q"
  const [page, setPage] = useState(1);
  const { news, totalPages } = useNews(page, 20);

  return (
    <div style={{ 
      margin: "auto",
      backgroundColor: "#f0f0f0",  // light gray background
      padding: "1rem", 
    }} >
      <ul>
        {news.map((news, currentIndex) => (
          <NewsItem key={news.id} news={news} index={currentIndex + 1} />
        ))}
      </ul>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}