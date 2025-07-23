// src/components/NewsItem.tsx
import React from 'react';
import type { NewsResponse } from '../models/newsResponse';

interface NewsItemProps {
  news: NewsResponse;
  index: number;
}

const NewsItem: React.FC<NewsItemProps> = ({ news, index }) => {

  const { id, title, score, by, url } = news;

  return (
    <div className="text-sm px-4 py-2">
        <div className="flex items-start space-x-1">
          <span className="text-gray-400">{index}.</span>
          <span className="text-gray-400 cursor-pointer hover:text-black">▲</span>
          <a href={url} className="font-medium hover:underline">
            {title}
          </a>
        </div>
        <div className="text-gray-500 text-xs space-x-2 mt-1 -mx-4 px-4">
          <span>{score} point{score !== 1 ? 's' : ''}</span>
          <span>by {by}</span>
          <span>|</span>
          {/* <span className="cursor-pointer hover:underline">hide</span> */}
          {/* <span>|</span> */}
          <span className="cursor-pointer hover:underline">Post Detail </span>
          <span>|</span>
          <span className="cursor-pointer hover:underline" >Comment</span>
        </div>
    </div>
  );
};

export default NewsItem;
