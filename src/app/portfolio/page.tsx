import React from 'react';
import { BookCard } from '@/components/ui/book-card';

export default function PortfolioPage() {
  // Book data from SGD Digital's catalog
  const books = [
    {
      id: 1,
      title: "How Do You Get Over Someone?: A-to-Z on How to Get Over Lost Love, How to Get Over Someone You Loved, Getting Over Someone You Love, Getting Over a Crush, Get Over a Broken Heart",
      author: "Priscilla Nicchi",
      description: "A comprehensive guide to healing after heartbreak and moving forward with your life.",
      cover: "/images/books/B098DZPRKB.jpg",
      category: "Relationships",
      amazonLink: "https://www.amazon.com/How-you-get-Over-Someone/dp/B098DZPRKB/"
    },
    {
      id: 2,
      title: "Marriage Help: The Definitive Guide to Learn How to Rebuild Your Relationship, Reconnect with Your Spouse, Improve Communication and Grow Intimacy & Love",
      author: "Priscilla Nicchi",
      description: "Practical strategies to strengthen your marriage and build a deeper connection with your spouse.",
      cover: "/images/books/B09WZHXN9H.jpg",
      category: "Relationships",
      amazonLink: "https://www.amazon.com/Marriage-Help-Definitive-Relationship-Communication/dp/B09WZHXN9H"
    },
    {
      id: 3,
      title: "Couples Counseling: The Ultimate Relationship Workbook for an Effective Couples Therapy, Nonviolent Communication, Questions and Conversations for Conflict Resolution",
      author: "Priscilla Nicchi",
      description: "A practical workbook with exercises and techniques to improve communication and resolve conflicts in your relationship.",
      cover: "/images/books/B09X55VYTQ.jpg",
      category: "Relationships",
      amazonLink: "https://www.amazon.com/Couples-Counseling-Relationship-Communication-Conversations/dp/B09X55VYTQ/"
    },
    {
      id: 4,
      title: "Relationship Goals: The Complete Step-by-Step Guide to Overcome Conflicts, Build Trust, Improve Communication and Grow Sexual Intimacy with your Loved One",
      author: "Priscilla Nicchi",
      description: "A step-by-step guide to building a healthy, fulfilling relationship with improved communication and intimacy.",
      cover: "/images/books/B09XLVQ31T.jpg",
      category: "Relationships",
      amazonLink: "https://www.amazon.com/Relationship-Goals-Step-Step-Communication/dp/B09XLVQ31T/"
    },
    {
      id: 5,
      title: "Getting Over Hurt Feelings: The Definitive Guide to Dealing with Guilt and Shame; Relationship Immaturity and Emotional Neglect Recovery",
      author: "Rose Ainsworth",
      description: "Learn how to process difficult emotions and recover from emotional neglect and relationship challenges.",
      cover: "/images/books/B09XJLNK8V.jpg",
      category: "Personal Development",
      amazonLink: "https://www.amazon.com/Getting-Over-Hurt-Feelings-Relationship/dp/B09XJLNK8V/"
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Discover our collection of transformative self-help books and audiobooks, available on Amazon.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard 
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            cover={book.cover}
            category={book.category}
            amazonLink={book.amazonLink}
          />
        ))}
      </div>
    </div>
  );
}
