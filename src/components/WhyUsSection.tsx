import React from 'react';

const WhyUsSection: React.FC = () => {
  const features = [
    {
      title: 'Doorstep Convenience',
      content: 'No more hauling your bicycle to distant repair shops or waiting in long queues. Our certified mechanics come directly to your home, office, or wherever you are in Coimbatore. We bring all the necessary tools and equipment, transforming any location into a professional service center.'
    },
    {
      title: 'Trained Professionals',
      content: 'Every CycleBees mechanic undergoes rigorous training and background verification. With years of experience across all bicycle types—from kids\' cycles to professional road bicycles and e-bicycles—our team ensures expert handling of your valuable ride with precision and care.'
    },
    {
      title: 'Competitive & Transparent',
      content: 'We believe in honest pricing with zero surprises. Get upfront quotes before any work begins, with detailed breakdowns of parts and labor costs. Our competitive rates, combined with premium service quality, deliver exceptional value for your investment.'
    },
    {
      title: 'Always-On Support',
      content: 'Bicycle emergencies don\'t follow business hours, and neither do we. Our 24/7 support team and emergency on-road assistance ensure you\'re never stranded. Whether it\'s a flat tire during your morning commute or a chain issue during your evening ride, we\'re just a call away.'
    }
  ];

  return (
    <section id="whyUs" className="h-[70vh] bg-white py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
            The CycleBees Difference
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Why thousands of riders trust us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary-300/10 rounded-lg p-5">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary-100 font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {feature.content.substring(0, 140)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;