import React from 'react';

const OnCallSection: React.FC = () => {
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
    <section id="onCall" className="h-[70vh] bg-gradient-to-br from-secondary-300 to-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
            Mechanic-on-Call Service
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-secondary-100/90 leading-relaxed max-w-xs mx-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-secondary-100 font-semibold text-sm">Available 24/7 across Coimbatore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnCallSection;