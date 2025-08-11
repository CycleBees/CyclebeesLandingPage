import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

const ServicesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    preferredDateTime: '',
    address: '',
    bikeType: ''
  });

  const allServices = [
    { name: 'Chain Repair', icon: '🔗', price: '₹150-300', time: '30-45 min' },
    { name: 'Brake Tuning', icon: '🛑', price: '₹200-400', time: '45-60 min' },
    { name: 'Gear Adjustment', icon: '⚙️', price: '₹250-500', time: '45-75 min' },
    { name: 'Tyre Replacement', icon: '🛞', price: '₹300-800', time: '30-60 min' },
    { name: 'Wheel Truing', icon: '⚪', price: '₹400-600', time: '60-90 min' },
    { name: 'E-Bike Diagnostics', icon: '🔋', price: '₹500-1000', time: '60-120 min' },
    { name: 'Periodic Service', icon: '📅', price: '₹800-1500', time: '90-120 min' },
    { name: 'Full Overhaul', icon: '🔧', price: '₹2000-4000', time: '2-4 hours' },
    { name: 'Quick Wash', icon: '💧', price: '₹100-200', time: '15-30 min' },
    { name: 'Emergency On-Road Assist', icon: '🚨', price: '₹300-600', time: '30-60 min' },
    { name: 'Suspension Service', icon: '🏍️', price: '₹600-1200', time: '90-150 min' },
    { name: 'Electric Motor Service', icon: '⚡', price: '₹800-1500', time: '120-180 min' }
  ];

  const serviceCategories = [
    {
      title: 'Basic Maintenance',
      services: allServices.slice(0, 4),
      description: 'Essential services to keep your bike running smoothly'
    },
    {
      title: 'Advanced Services', 
      services: allServices.slice(4, 8),
      description: 'Comprehensive repairs and maintenance for optimal performance'
    },
    {
      title: 'Specialized Services',
      services: allServices.slice(8),
      description: 'Expert services for e-bikes and emergency situations'
    }
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
        <section className="min-h-[50vh] bg-gradient-to-br from-primary to-secondary-100 pt-16 border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-100 mb-4">
                Professional Bike Services
              </h1>
              <p className="text-xl text-secondary-100/90 max-w-3xl mx-auto">
                From quick repairs to complete overhauls, our certified mechanics provide quality service at your doorstep
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="py-10 bg-white border-t border-light-yellow border-b border-light-yellow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-secondary-100 mb-4">{category.title}</h2>
                <p className="text-lg text-secondary-600 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <div key={index} className="bg-white border-2 border-secondary-300/20 rounded-xl p-6 text-center hover:border-primary transition-all duration-200 hover:shadow-lg">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold text-secondary-100 mb-2">{service.name}</h3>
                    <div className="space-y-2 text-sm text-secondary-600">
                      <p><strong>Price:</strong> {service.price}</p>
                      <p><strong>Time:</strong> {service.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Booking Form Section */}
        <section className="py-10 bg-secondary-300/20 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-100 mb-4">Book Your Service</h2>
              <p className="text-lg text-secondary-600">Fill out the form below and we'll get back to you within 30 minutes</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-100 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-100 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-100 mb-2">Service Type</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      {allServices.map((service, index) => (
                        <option key={index} value={service.name}>
                          {service.name} ({service.price})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-100 mb-2">Bike Type</label>
                    <select
                      name="bikeType"
                      value={formData.bikeType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary"
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
                  <label className="block text-sm font-medium text-secondary-100 mb-2">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-100 mb-2">Service Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Enter complete address where service is needed"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary text-secondary-100 px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg"
                  >
                    Book Service Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-10 bg-white border-t border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-100 mb-4">Why Choose CycleBees?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4">👨‍🔧</div>
                <h3 className="text-xl font-bold text-secondary-100 mb-3">Certified Technicians</h3>
                <p className="text-secondary-600">Expert mechanics with years of experience and proper certification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4">💰</div>
                <h3 className="text-xl font-bold text-secondary-100 mb-3">Transparent Pricing</h3>
                <p className="text-secondary-600">No hidden charges. You know the exact cost before we start</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4">⭐</div>
                <h3 className="text-xl font-bold text-secondary-100 mb-3">Quality Guarantee</h3>
                <p className="text-secondary-600">100% satisfaction guaranteed or we'll re-service for free</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServicesPage;