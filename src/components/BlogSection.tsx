import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const navButtonStyles = "w-8 h-8 bg-secondary-100/20 rounded-full flex items-center justify-center text-secondary-100 hover:bg-secondary-100/30 transition-colors duration-200";
  
  const blogPosts = [
    {
      id: 'monsoon-maintenance-tips',
      title: 'Bicycle Maintenance for Monsoon',
      excerpt: 'Expert tips to keep your bike perfect during rainy season',
      image: '/hero-app.webp',
      date: 'Aug 5, 2025',
      category: 'Maintenance',
      readTime: '5 min'
    },
    {
      id: 'coimbatore-bike-guide',
      title: 'Best Bikes for Coimbatore Streets',
      excerpt: 'Navigate city terrain with confidence - our selection guide',
      image: '/hero-app.webp',
      date: 'Aug 3, 2025',
      category: 'Guide',
      readTime: '7 min'
    },
    {
      id: 'electric-bike-future',
      title: 'E-Bike Revolution in Urban Areas',
      excerpt: 'How electric bikes are transforming daily commutes',
      image: '/hero-app.webp',
      date: 'Aug 1, 2025',
      category: 'Technology',
      readTime: '6 min'
    },
    {
      id: 'bike-safety-tips',
      title: 'Essential Safety Tips for Cyclists',
      excerpt: 'Stay safe on the road with these proven cycling tips',
      image: '/hero-app.webp',
      date: 'Jul 30, 2025',
      category: 'Safety',
      readTime: '4 min'
    }
  ];

  return (
    <section id="blog" className="bg-secondary-300/20 py-10 sm:py-8 my-5 border-t border-light-yellow border-b border-light-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">
            Latest from the Hive
          </h2>
          <p className="text-sm text-secondary-600 max-w-xl mx-auto">
            Latest cycling tips, maintenance guides, and industry insights
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-4">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 group">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-primary text-secondary-100 px-2 py-1 rounded text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center text-xs text-secondary-600 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-1">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-sm font-bold text-secondary-100 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-secondary-600 text-xs line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center text-xs"
                >
                  Read More
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden mb-4">
          <article 
            className="bg-white rounded-lg overflow-hidden shadow-md mb-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={blogPosts[currentSlide].image}
                alt={blogPosts[currentSlide].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2">
                <span className="bg-primary text-secondary-100 px-2 py-1 rounded text-xs font-semibold">
                  {blogPosts[currentSlide].category}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center text-xs text-secondary-600 mb-2">
                <span>{blogPosts[currentSlide].date}</span>
                <span className="mx-1">•</span>
                <span>{blogPosts[currentSlide].readTime}</span>
              </div>
              
              <h3 className="text-sm font-bold text-secondary-100 mb-2">
                {blogPosts[currentSlide].title}
              </h3>
              
              <p className="text-secondary-600 text-xs mb-3">
                {blogPosts[currentSlide].excerpt}
              </p>
              
              <Link 
                href={`/blog/${blogPosts[currentSlide].id}`}
                className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center text-xs"
              >
                Read More
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
          <Link 
            href="/blog"
            className="inline-block bg-secondary-100 text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200 text-sm"
          >
            View All Articles
          </Link>
        </div>

        <div className="mt-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary-300 to-transparent mb-6"></div>
          <div className="bg-gradient-to-r from-primary/10 via-secondary-300/20 to-primary/10 rounded-lg p-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-secondary-100 mb-3">
                🚴‍♀️ Join Our Cycling Community
              </h3>
              <p className="text-secondary-600 mb-6 text-sm">
                Get latest cycling tips, maintenance guides, and exclusive CycleBees updates
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
                <button className="bg-primary text-secondary-100 px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 text-sm shadow-md">
                  Subscribe
                </button>
              </div>
              <p className="text-secondary-600/70 text-xs mt-3">✨ 500+ cyclists trust our expert advice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;