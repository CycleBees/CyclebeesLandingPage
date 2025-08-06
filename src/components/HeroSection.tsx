import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const benefits = [
    'Doorstep repairs for kids\' & pro bikes',
    'Premium rentals delivered to your hotel', 
    'Coaching programs from certified riders'
  ];

  const handleDownloadApp = () => {
    window.open('https://play.google.com/store/apps', '_blank');
  };

  const handleBookService = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-100 mb-4 leading-tight">
              Download{' '}
              <span className="gradient-text">CycleBees</span>{' '}
              for Bike Service
            </h1>
            
            <p className="text-lg text-secondary-100/90 mb-6 max-w-xl">
              Professional mechanics at your doorstep. Repairs, rentals & coaching in one tap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button
                onClick={handleDownloadApp}
                className="bg-secondary-100 text-white px-6 py-3 rounded-lg hover:bg-secondary-100/90 transition-all duration-200 font-semibold shadow-lg"
              >
                Download App
              </button>
              <button
                onClick={handleBookService}
                className="bg-white/10 backdrop-blur-sm text-secondary-100 border-2 border-secondary-100 px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold"
              >
                Book Service
              </button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-secondary-100">⭐ 4.8/5</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-secondary-100">🚴 1000+ Riders</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-secondary-100">⚡ 60min Service</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary-100/30 blur-2xl rounded-full transform scale-110"></div>
              <div className="relative z-10">
                <Image
                  src="/hero-app.webp"
                  alt="CycleBees Mobile App"
                  width={400}
                  height={800}
                  className="max-w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;