import React, { useState } from 'react';

const OnCallSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const navButtonStyles = "w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-secondary-100 hover:bg-primary/30 transition-colors duration-200";
  
  const benefits = [
    {
      title: 'Less Time Consuming',
      description: 'Get back on the road in under 60 minutes on average.',
      icon: '⏱️'
    },
    {
      title: 'Book in Real-Time',
      description: 'Schedule from home, office or on the move—track your mechanic live.',
      icon: '📱'
    },
    {
      title: 'Sit & Relax',
      description: 'Enjoy your coffee while we service your ride at your doorstep.',
      icon: '☕'
    }
  ];

  return (
    <section id="onCall" className="min-h-[80vh] sm:min-h-[70vh] bg-secondary-300/10 py-8 sm:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-3">
            Mechanic-on-Call Service
          </h2>
          <p className="text-lg text-secondary-600">Professional service at your doorstep</p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-3 gap-6 flex-1 items-center mb-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center text-3xl">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden flex-1 mb-4">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center text-3xl">
              {benefits[currentSlide].icon}
            </div>
            <h3 className="text-lg font-bold text-secondary-100 mb-3">
              {benefits[currentSlide].title}
            </h3>
            <p className="text-sm text-secondary-600 leading-relaxed mb-4">
              {benefits[currentSlide].description}
            </p>
            
            <div className="flex justify-center items-center space-x-4">
              <button onClick={prevSlide} className={navButtonStyles}>
                ‹
              </button>
              
              <div className="flex justify-center space-x-2">
                {benefits.map((_, index) => (
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
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-primary/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-secondary-100 font-semibold text-sm">Available 24/7 across Coimbatore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnCallSection;