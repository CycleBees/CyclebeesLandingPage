import React from 'react';
import Image from 'next/image';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Select Service/Rental',
      description: 'Choose from our comprehensive range of services or rental bicycles.',
      icon: '🔧'
    },
    {
      number: '2',
      title: 'Confirm Slot & Address',
      description: 'Pick your preferred time slot and confirm your location.',
      icon: '📍'
    },
    {
      number: '3',
      title: 'Pay Securely in App',
      description: 'Complete payment securely through our app with multiple payment options.',
      icon: '💳'
    },
    {
      number: '4',
      title: 'We Arrive & Deliver',
      description: 'Our certified mechanic arrives at your doorstep with all necessary tools.',
      icon: '✅'
    }
  ];

  return (
    <section id="howItWorks" className="h-[70vh] bg-white py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-3">
            How CycleBees Works
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Get professional bicycle service in just 4 simple steps
          </p>
        </div>

        <div className="relative flex-1 flex items-center py-2">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary transform -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-10 h-10 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center text-sm relative z-10">
                  <span className="text-secondary-100 font-bold">{step.number}</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-md border border-secondary-300/20">
                  <div className="text-xl mb-1">{step.icon}</div>
                  <h3 className="text-sm font-bold text-secondary-100 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-secondary-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;