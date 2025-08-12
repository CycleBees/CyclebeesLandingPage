import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import DownloadAppSection from '@/components/DownloadAppSection';

const ServicesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    preferredDateTime: '',
    address: '',
    bikeType: ''
  });

  const repairServices = [
    { name: 'Chain Repair', icon: '🔗', description: 'Professional chain cleaning, lubrication and replacement services' },
    { name: 'Brake Tuning', icon: '🛑', description: 'Complete brake adjustment and safety inspection for optimal stopping power' },
    { name: 'Gear Adjustment', icon: '⚙️', description: 'Precise gear shifting calibration for smooth riding experience' },
    { name: 'Tyre Service', icon: '🛞', description: 'Tyre replacement, puncture repair and pressure optimization' },
    { name: 'Wheel Truing', icon: '⚪', description: 'Professional wheel alignment and spoke tension adjustment' },
    { name: 'Full Service', icon: '🔧', description: 'Comprehensive bicycle maintenance and performance optimization' },
    { name: 'Quick Wash', icon: '💧', description: 'Professional cleaning and basic maintenance check' },
    { name: 'Emergency Assist', icon: '🚨', description: '24/7 roadside assistance for bicycle breakdowns and repairs' }
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service booking:', formData);
    // Add booking logic here
  };

  return (
    <>
      <Head>
        <title>Services - CycleBees Professional Bike Service</title>
        <meta name="description" content="Complete range of bicycle services from doorstep repairs to full overhauls. Expert mechanics, transparent pricing, quality guaranteed." />
        <meta name="keywords" content="bike service, bicycle repair, doorstep service, bike maintenance, Coimbatore" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[30vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
                Professional Bicycle Services
              </h1>
              <p className="text-lg text-secondary-100/90 max-w-2xl mx-auto">
                Expert repairs, premium quality, trusted by riders across Coimbatore
              </p>
            </div>
          </div>
        </section>

        {/* Repair Services Section */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Repair Services</h2>
              <p className="text-base text-secondary-600 max-w-lg mx-auto">Professional bicycle repair and maintenance services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              {repairServices.map((service, index) => (
                <div key={index} className="bg-white border border-secondary-300 rounded-lg p-4 text-center hover:border-primary transition-all duration-300 hover:shadow-lg group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-sm font-bold text-secondary-100 mb-2">{service.name}</h3>
                  <p className="text-xs text-secondary-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-100/5 to-primary/5 border-t border-light-yellow border-b border-light-yellow relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/cyclebees_services_page.webp"
              alt="CycleBees Services"
              className="w-full h-full object-cover object-left-center"
            />
            <div className="absolute inset-0 bg-white/90"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column - Info Cards */}
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Service Information</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📍</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Service Areas</h3>
                    <p className="text-xs text-secondary-600">All areas across Coimbatore city limits</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📞</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Contact Information</h3>
                    <p className="text-xs text-secondary-600">Phone: +91 95973 12212<br/>Email: mail@cyclebees.in</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">⏰</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Service Hours</h3>
                    <p className="text-xs text-secondary-600">Regular: 6 AM - 10 PM<br/>Emergency: 24/7 Available</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Response Time</h3>
                    <p className="text-xs text-secondary-600">Average 30-45 minutes within city</p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Book Your Service</h2>
                  <p className="text-base text-secondary-600">Quick response within 30 minutes</p>
                </div>
              </div>
              
              {/* Right Column - Form */}
              <div>
                <div className="bg-white rounded-xl shadow-xl border border-primary/20 p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-100 mb-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-secondary-100 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-100 mb-1">Service Type</label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        >
                          <option value="">Select a service</option>
                          {repairServices.map((service, index) => (
                            <option key={index} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-secondary-100 mb-1">Bike Type</label>
                        <select
                          name="bikeType"
                          value={formData.bikeType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        >
                          <option value="">Select bike type</option>
                          <option value="mountain">Mountain Bike</option>
                          <option value="road">Road Bike</option>
                          <option value="hybrid">Hybrid Bike</option>
                          <option value="electric">Electric Bike</option>
                          <option value="kids">Kids Bike</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-100 mb-1">Preferred Date & Time</label>
                      <input
                        type="datetime-local"
                        name="preferredDateTime"
                        value={formData.preferredDateTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-100 mb-1">Service Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none text-sm bg-gray-50/50"
                        placeholder="Complete address where service is needed"
                      />
                    </div>

                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl text-sm transform hover:scale-105"
                      >
                        Book Service Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-8 bg-gradient-to-br from-secondary-100 to-secondary-400 border-t border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Why Choose CycleBees?</h2>
              <p className="text-base text-white/90">Experience the difference with professional service</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl mx-auto mb-3">👨‍🔧</div>
                <h3 className="text-base font-bold text-white mb-2">Certified Technicians</h3>
                <p className="text-sm text-white/90">Expert mechanics with years of experience</p>
                <div className="mt-2 text-primary font-bold text-sm">5+ Years</div>
                <div className="text-sm text-white/80">Certified</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl mx-auto mb-3">💰</div>
                <h3 className="text-base font-bold text-white mb-2">Transparent Pricing</h3>
                <p className="text-sm text-white/90">No hidden charges or surprise costs. Exact price before service</p>
                <div className="mt-2 text-primary font-bold text-sm">No Hidden Fees</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl mx-auto mb-3">⭐</div>
                <h3 className="text-base font-bold text-white mb-2">Quality Guarantee</h3>
                <p className="text-sm text-white/90">100% satisfaction guaranteed. Free re-service or full refund</p>
                <div className="mt-2 text-primary font-bold text-sm">100% Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl mx-auto mb-3">🚀</div>
                <h3 className="text-base font-bold text-white mb-2">Fast Response</h3>
                <p className="text-sm text-white/90">Quick doorstep service with professional equipment</p>
                <div className="mt-2 text-primary font-bold text-sm">30-45 Min</div>
                <div className="text-sm text-white/80">Average Response</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">Join the CycleBees Family</h2>
            <p className="text-base text-secondary-600 mb-6">
              Experience the difference that passion, expertise, and innovation can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/services'}
                className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md text-base"
              >
                Book a Service
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-secondary-100 text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200 shadow-md text-base"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
        
        {/* Download App Section */}
        <DownloadAppSection />
      </Layout>
    </>
  );
};

export default ServicesPage;