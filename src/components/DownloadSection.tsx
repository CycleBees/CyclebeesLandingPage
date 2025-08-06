import React from 'react';
import Image from 'next/image';

const DownloadSection: React.FC = () => {
  const handleDownloadApp = (platform: 'android' | 'ios') => {
    const urls = {
      android: 'https://play.google.com/store/apps',
      ios: 'https://apps.apple.com'
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <section id="download" className="min-h-[70vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[50vh]">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4 leading-tight">
              Ready to Ride?{' '}
              <span className="text-secondary-100">Download CycleBees</span>{' '}
              Now
            </h2>
            
            <p className="text-lg text-secondary-100/90 mb-6 leading-relaxed max-w-xl">
              Join thousands of satisfied riders who trust CycleBees for their bicycle service needs. Download now and get your first service at a special discount!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button
                onClick={() => handleDownloadApp('android')}
                className="bg-secondary-100 text-white px-8 py-4 rounded-xl hover:bg-secondary-100/90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a.996.996 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.5 12l2.198-2.491zM5.864 2.658L16.802 8.99 14.5 11.293 5.864 2.658z"/>
                </svg>
                Download for Android
              </button>
              <button
                onClick={() => handleDownloadApp('ios')}
                className="bg-secondary-100 text-white px-8 py-4 rounded-xl hover:bg-secondary-100/90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </button>
            </div>


            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-secondary-100 font-semibold">🎉 20% Off First Service</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-secondary-100 font-semibold">📱 Easy Booking</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-secondary-100 font-semibold">🚀 Quick Service</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary-100/30 opacity-30 blur-3xl rounded-full transform scale-110"></div>
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/hero-app.webp"
                  alt="CycleBees Mobile App Download"
                  width={450}
                  height={900}
                  className="max-w-full h-auto drop-shadow-2xl"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-100/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DownloadSection;