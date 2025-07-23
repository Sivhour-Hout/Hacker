import { useState } from "react";
import { useNews } from "../../hooks/useNews";
import NewsItem from "../../components/NewsItem";

export function Past() {
  // Example: fetch news with optional query param "q"
    const [page, setPage] = useState(1);
    const { news, totalPages } = useNews(page, 20);
  return (
    // <div>
    //   <h2>Past News</h2>
    // </div>
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

      
    </div>
  );
}