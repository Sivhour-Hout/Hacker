// src/hooks/useNews.ts
import { useEffect, useState } from 'react';
import { getNewsDetail, getNewsIds } from '../services/newsService';
import type { NewsResponse } from '../models/newsResponse';

export function useNews(page: number, pageSize: number = 10) {

  const [news, setNews] = useState<NewsResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function getNews() {
      setLoading(true);
      setError(null);
      try {
        const ids = await getNewsIds();

        const total = ids.length;
        setTotalPages(Math.ceil(total / pageSize));

        const start = (page - 1) * pageSize;
        const pageIds = ids.slice(start, start + pageSize);

        const stories = await Promise.all(pageIds.map((id) => getNewsDetail(id)));

        if (!cancelled) setNews(stories);
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    getNews();

    return () => {
      cancelled = true;
    };
  }, [page, pageSize]);

  return { news, loading, error, totalPages };
}