import React from 'react';

export default function InstitutionalPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About SGD Digital</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6">
            SGD Digital is a leading publisher of self-help books and audiobooks, dedicated to helping people transform their lives through powerful content.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
          <p>
            Our mission is to empower individuals with the knowledge and tools they need to overcome challenges, achieve their goals, and live more fulfilling lives. We believe that everyone has the potential for personal growth and transformation.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Story</h2>
          <p>
            Founded in 2018, SGD Digital began with a simple idea: to make high-quality self-help content accessible to everyone. What started as a small collection of digital books has grown into a comprehensive library of resources covering topics from personal development and productivity to mental health and financial success.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Quality:</strong> We are committed to publishing only the highest quality content that delivers real value to our readers.</li>
            <li><strong>Accessibility:</strong> We believe that transformative content should be accessible to everyone, regardless of their circumstances.</li>
            <li><strong>Integrity:</strong> We stand behind the advice and strategies we publish, ensuring they are evidence-based and effective.</li>
            <li><strong>Innovation:</strong> We continuously explore new formats and approaches to help our readers learn and grow.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Team</h2>
          <p>
            Our team consists of passionate writers, editors, and digital content specialists who are experts in their respective fields. Together, we work to create content that is not only informative but also engaging and actionable.
          </p>
        </div>
      </div>
    </div>
  );
}
