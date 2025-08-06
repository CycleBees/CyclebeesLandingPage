import React from 'react';
import Image from 'next/image';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Select Service/Rental',
      description: 'Choose from our comprehensive range of services or rental bikes.',
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
    <section id="howItWorks" className="h-[70vh] bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
            How CycleBees Works
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Get professional bike service in just 4 simple steps
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <Image
              src="/hero-app.webp"
              alt="CycleBees App Process"
              width={200}
              height={400}
              className="drop-shadow-xl"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary transform -translate-y-1/2"></div>
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-2xl relative z-10">
                    <span className="text-secondary-100 font-bold">{step.number}</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-secondary-300/20">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="text-lg font-bold text-secondary-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-lg font-bold text-secondary-100 flex-shrink-0">
                {step.number}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-secondary-300/20 flex-1">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{step.icon}</span>
                  <h3 className="text-lg font-bold text-secondary-100">
                    {step.title}
                  </h3>
                </div>
                <p className="text-secondary-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;