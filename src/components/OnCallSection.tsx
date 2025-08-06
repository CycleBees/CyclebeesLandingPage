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
    <section id="onCall" className="h-[70vh] bg-secondary-300/10 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-3">
            Mechanic-on-Call Service
          </h2>
          <p className="text-lg text-secondary-600">Professional service at your doorstep</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 items-center mb-4">
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