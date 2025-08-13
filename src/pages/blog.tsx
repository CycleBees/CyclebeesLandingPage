import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Essential Bicycle Maintenance Tips for Monsoon Season',
      excerpt: 'Keep your bicycle in perfect condition during the rainy season with these expert maintenance tips. From chain care to brake adjustments, learn how to maintain peak performance.',
      content: `The monsoon season brings unique challenges for bicycle maintenance. Here's your comprehensive guide to keeping your ride in perfect condition:

**Chain Care During Monsoons:**
- Clean and lubricate your chain every 2-3 rides
- Use wet lube for better protection against water
- Wipe excess lube to prevent dirt accumulation

**Brake Maintenance:**
- Check brake pads for wear more frequently
- Clean rim surfaces regularly
- Adjust cable tension if brakes feel spongy

**Frame Protection:**
- Apply frame protector or wax before the season
- Clean salt and grime immediately after rides
- Check for rust spots and treat promptly

**Tire Care:**
- Increase tire pressure by 10-15% for better puncture resistance
- Inspect treads for wear patterns
- Consider switching to puncture-resistant tires

Remember, regular maintenance is cheaper than major repairs!`,
      image: '/hero-app.webp',
      date: 'Aug 5, 2025',
      category: 'Maintenance',
      readTime: '5 min read',
      author: 'CycleBees Expert Team'
    },
    {
      id: 2,
      title: 'Choosing the Right Bicycle for Coimbatore Streets',
      excerpt: 'Navigate Coimbatore\'s unique terrain with confidence. Our comprehensive guide to selecting the perfect bicycle for city commuting, from traffic handling to comfort.',
      content: `Coimbatore's diverse terrain requires careful bicycle selection. Here's how to choose the perfect ride:

**Understanding Coimbatore's Terrain:**
- Mixed urban roads with varying quality
- Moderate hills and slopes
- Heavy traffic areas requiring agility
- Monsoon considerations

**Best Bicycle Types for Coimbatore:**

**1. Hybrid Bicycles:**
- Perfect for mixed terrain
- Comfortable upright position
- Good for daily commuting
- Versatile for both roads and light trails

**2. City/Commuter Bikes:**
- Designed for urban environments
- Built-in accessories (lights, racks)
- Comfortable for short to medium distances
- Low maintenance requirements

**3. Electric Bicycles:**
- Ideal for hilly areas
- Less effort required
- Perfect for longer commutes
- Growing charging infrastructure

**Key Features to Consider:**
- Good suspension for comfort
- Reliable braking system
- Puncture-resistant tires
- Weather protection accessories

Visit our service centers for personalized recommendations!`,
      image: '/hero-app.webp',
      date: 'Aug 3, 2025',
      category: 'Guide',
      readTime: '7 min read',
      author: 'Babu Kumaran'
    },
    {
      id: 3,
      title: 'E-Bicycle Revolution: Future of Urban Commuting',
      excerpt: 'Discover how electric bicycles are transforming daily commutes and reducing carbon footprints. Explore the latest trends, technology, and benefits of e-bike adoption.',
      content: `The e-bicycle revolution is reshaping urban mobility. Here's everything you need to know:

**Why E-Bicycles are Taking Over:**

**Environmental Benefits:**
- Zero emissions during operation
- Reduced carbon footprint compared to cars
- Sustainable transportation solution
- Less noise pollution

**Economic Advantages:**
- Lower operating costs than vehicles
- Reduced fuel expenses
- Minimal maintenance requirements
- Government incentives available

**Health and Convenience:**
- Exercise with assistance
- Arrive at work less tired
- Beat traffic congestion
- No parking hassles

**Latest E-Bicycle Technologies:**

**1. Smart Battery Systems:**
- Longer range (40-80km)
- Fast charging capabilities
- Battery level indicators
- Removable batteries

**2. Advanced Motors:**
- Quiet operation
- Multiple assistance levels
- Regenerative braking
- Hill-climbing power

**3. Connected Features:**
- GPS tracking
- Smartphone integration
- Anti-theft systems
- Performance monitoring

**Choosing Your First E-Bicycle:**
- Determine your daily range needs
- Consider terrain and hills
- Check local service availability
- Understand battery maintenance

The future is electric, and it's arriving on two wheels!`,
      image: '/hero-app.webp',
      date: 'Aug 1, 2025',
      category: 'Technology',
      readTime: '6 min read',
      author: 'Hitesh Gupta'
    },
    {
      id: 4,
      title: 'Top 10 Bicycle Safety Tips for Coimbatore Roads',
      excerpt: 'Stay safe on busy Coimbatore streets with these essential safety tips. From proper gear to traffic navigation, protect yourself and enjoy confident cycling.',
      content: `Safety first! Here are essential tips for cycling safely in Coimbatore:

**Essential Safety Gear:**

**1. Quality Helmet:**
- Properly fitted and certified
- Replace every 3-5 years
- Bright colors for visibility
- Proper ventilation for comfort

**2. Visibility Gear:**
- LED lights front and rear
- Reflective clothing/strips
- Bright colored jersey
- Reflective helmet stickers

**3. Protective Equipment:**
- Knee and elbow pads for beginners
- Gloves for better grip
- Eye protection (sunglasses)
- First aid kit for longer rides

**Road Safety Rules:**

**Traffic Navigation:**
- Follow traffic signals religiously
- Use hand signals for turns
- Stay in designated cycling lanes
- Maintain safe distance from vehicles

**Defensive Cycling:**
- Assume you're invisible to drivers
- Make eye contact with motorists
- Avoid blind spots
- Be predictable in movements

**Weather Considerations:**
- Extra caution during monsoons
- Reduce speed on wet roads
- Use fenders to stay dry
- Increase following distance

**Night Riding:**
- Powerful front light (minimum 200 lumens)
- Red rear light (flashing mode)
- Reflective tire sidewalls
- Avoid dark clothing

Remember: It's better to arrive late than not at all!`,
      image: '/hero-app.webp',
      date: 'Jul 28, 2025',
      category: 'Safety',
      readTime: '8 min read',
      author: 'CycleBees Safety Team'
    }
  ];

  const [selectedPost, setSelectedPost] = React.useState<number | null>(null);

  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <>
        <Head>
          <title>{post.title} - CycleBees Blog</title>
          <meta name="description" content={post.excerpt} />
        </Head>
        
        <Layout>
          {/* Hero Section */}
          <section className="min-h-[40vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="w-full">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="mb-6 flex items-center text-secondary-100 hover:text-secondary-100/80 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </button>

                <div className="mb-4">
                  <span className="bg-secondary-100 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center text-secondary-100/90 text-sm">
                  <span>By {post.author}</span>
                  <span className="mx-3">•</span>
                  <span>{post.date}</span>
                  <span className="mx-3">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <article>
                <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="text-lg md:text-xl font-bold text-secondary-100 mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    if (paragraph.includes('**')) {
                      const parts = paragraph.split('**');
                      return (
                        <p key={index} className="text-secondary-600 mb-4 leading-relaxed text-base">
                          {parts.map((part, partIndex) => 
                            partIndex % 2 === 1 ? 
                              <strong key={partIndex} className="text-secondary-100">{part}</strong> : 
                              part
                          )}
                        </p>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                      return (
                        <ul key={index} className="list-disc list-inside text-secondary-600 mb-4 space-y-2 text-base ml-4">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="leading-relaxed">{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={index} className="text-secondary-600 mb-4 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </article>
            </div>
          </section>

          {/* Share & Navigation Section */}
          <section className="py-8 my-3 bg-gradient-to-br from-secondary-300/20 to-primary/10 border-t border-light-yellow border-b border-light-yellow">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-secondary-600 text-sm">Share this article:</span>
                  <button className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium">
                    Share on WhatsApp
                  </button>
                </div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md text-sm"
                >
                  Read More Articles
                </button>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Blog - CycleBees | Cycling Tips & Guides</title>
        <meta name="description" content="Expert cycling tips, maintenance guides, and industry insights from CycleBees professionals. Stay informed about bicycle care and urban cycling trends." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[30vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
                CycleBees Blog
              </h1>
              <p className="text-lg text-secondary-100/90 max-w-2xl mx-auto">
                Expert cycling tips, maintenance guides, and industry insights to keep you rolling smoothly
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white border border-secondary-300/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-primary transition-all duration-150 group cursor-pointer"
                  onClick={() => setSelectedPost(post.id)}
                >
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
                    <div className="flex items-center text-xs text-secondary-600 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-lg font-bold text-secondary-100 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h2>
                    
                    <p className="text-sm text-secondary-600 line-clamp-3 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-secondary-300/20">
                      <span className="text-xs text-secondary-600">By {post.author}</span>
                      <div className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center text-sm">
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-300/20 to-primary/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">Join Our Cycling Community</h2>
            <p className="text-base text-secondary-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest cycling tips, maintenance guides, and exclusive CycleBees updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
              />
              <button className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogPage;