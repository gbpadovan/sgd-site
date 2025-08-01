import React from 'react';
import Link from 'next/link';

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  category: string;
  amazonLink?: string;
}

export function BookCard({ id, title, author, description, cover, category, amazonLink = "https://www.amazon.com" }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden flex justify-center items-center">
        {cover.includes('placeholder') ? (
          <div className="text-white text-center p-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm mt-2">by {author}</p>
          </div>
        ) : (
          <img 
            src={cover} 
            alt={`${title} cover`} 
            className="h-full object-contain max-w-[80%]"
          />
        )}
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">by {author}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <a 
          href={amazonLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
}
