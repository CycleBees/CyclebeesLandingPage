import React, { useState } from 'react';

const BenefitsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const benefits = [
    {
      title: 'Certified Technicians',
      description: 'Trained, background-checked mechanics with years of experience in bicycle repair and maintenance.',
      icon: '👨‍🔧'
    },
    {
      title: 'Transparent Pricing',
      description: 'Up-front quotes with no hidden fees. You know exactly what you\'re paying for before we start.',
      icon: '💰'
    },
    {
      title: 'Genuine Parts',
      description: 'We use only OEM and high-grade spare parts to ensure your bicycle performs at its best.',
      icon: '🔧'
    },
    {
      title: '100% Satisfaction',
      description: 'Re-service free if you\'re not happy. Your satisfaction is our top priority.',
      icon: '⭐'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section id="benefits" className="h-[70vh] bg-gradient-to-br from-secondary-100 to-secondary-400 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Riders Love CycleBees
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Experience the difference with our professional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all duration-200">
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
            <div className="text-4xl mb-4">{benefits[currentSlide].icon}</div>
            <h3 className="text-xl font-bold mb-3">{benefits[currentSlide].title}</h3>
            <p className="text-white/90 leading-relaxed mb-4 text-sm">
              {benefits[currentSlide].description}
            </p>
            
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevSlide}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                ‹
              </button>
              
              <div className="flex justify-center space-x-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-primary' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-white/80">Services Completed</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.8★</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;