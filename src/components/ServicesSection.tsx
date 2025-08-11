import React, { useState } from 'react';

const ServicesSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: ''
  });

  const inputStyles = "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary text-sm";

  const services = [
    { name: 'Chain Repair', icon: '🔗' },
    { name: 'Brake Tuning', icon: '🛑' },
    { name: 'Gear Adjustment', icon: '⚙️' },
    { name: 'Tyre Replacement', icon: '🛞' },
    { name: 'Wheel Truing', icon: '⚪' },
    { name: 'E-Bicycle Diagnostics', icon: '🔋' },
    { name: 'Periodic Service', icon: '📅' },
    { name: 'Full Overhaul', icon: '🔧' },
    { name: 'Bike Cleaning', icon: '🧽' },
    { name: 'Emergency On-Road Assist', icon: '🚨' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello CycleBees! I would like to enquire about your services.
    
Name: ${formData.name}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}

Please contact me for more details.`;
    
    // Send to WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919597312212&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      serviceType: ''
    });
  };

  return (
    <section id="services" className="bg-white py-8 sm:py-6 border-t border-light-yellow border-b border-light-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 lg:items-start">
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
                Bicycle Services at Home
              </h2>
              <p className="text-lg text-secondary-600">
                Door-step Repair service - Coimbatore ready service
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {services.map((service, index) => (
                <div key={index} className="bg-secondary-300/20 hover:bg-primary/20 rounded-lg p-4 text-center transition-all duration-200 hover:scale-105 cursor-pointer">
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <h3 className="text-xs font-semibold text-secondary-100 leading-tight">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="bg-secondary-100 rounded-lg p-5 text-white w-full max-w-sm">
              <h3 className="text-lg font-bold mb-3">Enquire Now</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={inputStyles}
                  placeholder="Your name"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  className={inputStyles}
                  placeholder="+91 XXXXXXXXXX"
                />

                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className={inputStyles}
                >
                  <option value="" className="text-secondary-100">Select service</option>
                  <option value="Repair Services" className="text-secondary-100">Repair Services</option>
                  <option value="Rental Services" className="text-secondary-100">Rental Services</option>
                  <option value="Courses Booking" className="text-secondary-100">Courses Booking</option>
                  <option value="Business Enquiry" className="text-secondary-100">Business Enquiry</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-primary text-secondary-100 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-sm"
                >
                  Enquire Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;