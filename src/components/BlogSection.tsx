import React, { useState } from 'react';
import Image from 'next/image';

const BlogSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const navButtonStyles = "w-8 h-8 bg-secondary-100/20 rounded-full flex items-center justify-center text-secondary-100 hover:bg-secondary-100/30 transition-colors duration-200";
  
  const blogPosts = [
    {
      title: 'Essential Bicycle Maintenance Tips for Monsoon Season',
      excerpt: 'Keep your bicycle in perfect condition during the rainy season with these expert maintenance tips...',
      image: '/hero-app.webp',
      date: 'Aug 5, 2025',
      category: 'Maintenance',
      readTime: '5 min read'
    },
    {
      title: 'Choosing the Right Bicycle for Coimbatore Streets',
      excerpt: 'Navigate Coimbatore\'s unique terrain with confidence. Our guide to selecting the perfect bicycle...',
      image: '/hero-app.webp',
      date: 'Aug 3, 2025',
      category: 'Guide',
      readTime: '7 min read'
    },
    {
      title: 'E-Bicycle Revolution: Future of Urban Commuting',
      excerpt: 'Discover how electric bicycles are transforming daily commutes and reducing carbon footprints...',
      image: '/hero-app.webp',
      date: 'Aug 1, 2025',
      category: 'Technology',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="min-h-[120vh] sm:min-h-[60vh] bg-secondary-300/20 py-8 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
            Latest from the Hive
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Stay updated with the latest cycling tips, maintenance guides, and industry insights
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Mobile Carousel View */}
        <div className="md:hidden mb-6">
          <article className="bg-white rounded-xl overflow-hidden shadow-lg mb-4">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={blogPosts[currentSlide].image}
                alt={blogPosts[currentSlide].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-secondary-100 px-3 py-1 rounded-full text-sm font-semibold">
                  {blogPosts[currentSlide].category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-secondary-600 mb-3">
                <span>{blogPosts[currentSlide].date}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[currentSlide].readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-secondary-100 mb-3">
                {blogPosts[currentSlide].title}
              </h3>
              
              <p className="text-secondary-600 mb-4">
                {blogPosts[currentSlide].excerpt}
              </p>
              
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center">
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
          
          <div className="flex justify-center items-center space-x-4">
            <button onClick={prevSlide} className={navButtonStyles}>
              ‹
            </button>
            
            <div className="flex justify-center space-x-2">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-primary' : 'bg-secondary-300/30'
                  }`}
                />
              ))}
            </div>
            
            <button onClick={nextSlide} className={navButtonStyles}>
              ›
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="bg-secondary-100 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200">
            View All Articles
          </button>
        </div>

        <div className="mt-12 sm:mt-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary-300 to-transparent mb-8"></div>
          <div className="bg-gradient-to-r from-primary/10 via-secondary-300/20 to-primary/10 rounded-xl p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-secondary-100 mb-4">
                🚴‍♀️ Stay in the Loop
              </h3>
              <p className="text-secondary-600 mb-8 text-lg">
                Subscribe to our newsletter for the latest cycling tips, maintenance guides, and exclusive CycleBees updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg"
                />
                <button className="bg-primary text-secondary-100 px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
              <p className="text-secondary-600/70 text-sm mt-4">✨ Join 500+ cycling enthusiasts who trust our expert advice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;