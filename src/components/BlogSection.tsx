import React from 'react';
import Image from 'next/image';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'Essential Bike Maintenance Tips for Monsoon Season',
      excerpt: 'Keep your bike in perfect condition during the rainy season with these expert maintenance tips...',
      image: '/hero-app.webp',
      date: 'Aug 5, 2025',
      category: 'Maintenance',
      readTime: '5 min read'
    },
    {
      title: 'Choosing the Right Bike for Coimbatore Streets',
      excerpt: 'Navigate Coimbatore\'s unique terrain with confidence. Our guide to selecting the perfect bike...',
      image: '/hero-app.webp',
      date: 'Aug 3, 2025',
      category: 'Guide',
      readTime: '7 min read'
    },
    {
      title: 'E-Bike Revolution: Future of Urban Commuting',
      excerpt: 'Discover how electric bikes are transforming daily commutes and reducing carbon footprints...',
      image: '/hero-app.webp',
      date: 'Aug 1, 2025',
      category: 'Technology',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="h-[70vh] bg-secondary-300/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
            Latest from the Hive
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Stay updated with the latest cycling tips, maintenance guides, and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-secondary-100 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-secondary-600 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary-100 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-secondary-600 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="bg-secondary-100 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200">
            View All Articles
          </button>
        </div>

        <div className="mt-6 bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-secondary-100 mb-4">
            Stay in the Loop
          </h3>
          <p className="text-secondary-600 mb-6">
            Subscribe to our newsletter for the latest cycling tips and CycleBees updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-secondary-100 px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;