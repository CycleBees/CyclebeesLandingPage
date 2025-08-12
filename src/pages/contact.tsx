import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import DownloadAppSection from '@/components/DownloadAppSection';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const contactInfo = [
    {
      title: 'Phone',
      value: '+91 95973 12212',
      icon: '📞',
      description: 'Available 24/7 for emergencies'
    },
    {
      title: 'Email', 
      value: 'mail@cyclebees.in',
      icon: '✉️',
      description: 'We reply within 2 hours'
    },
    {
      title: 'Address',
      value: 'Coimbatore, Tamil Nadu',
      icon: '📍', 
      description: 'Service across the city'
    },
    {
      title: 'Hours',
      value: '6 AM - 10 PM',
      icon: '🕐',
      description: 'Emergency service 24/7'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you reach my location?',
      answer: 'Our average response time is 30-45 minutes within Coimbatore city limits. For emergency services, we strive to reach within 20-30 minutes. We have strategically positioned mechanics across the city to ensure quick response times.'
    },
    {
      question: 'Do you provide service on weekends and holidays?',
      answer: 'Yes! We provide service 7 days a week including weekends and holidays. Our regular hours are 6 AM to 10 PM, with 24/7 emergency service available. We understand that bike issues don\'t wait for business hours, so we\'re always ready to help.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment options for your convenience: Cash, UPI (Google Pay, PhonePe, Paytm), Credit/Debit cards, and Mobile wallets. Payment is due after service completion and your satisfaction. We also provide digital receipts for all transactions.'
    },
    {
      question: 'Is there a service charge for coming to my location?',
      answer: 'No, we don\'t charge any extra fees for doorstep service within our standard service areas in Coimbatore. The price you see is what you pay - no hidden charges, no surprise fees. We believe in transparent pricing and honest service.'
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'We offer 100% satisfaction guarantee. If you\'re not happy with our service, we\'ll re-service your bike free of charge or provide a full refund. Your satisfaction is our top priority, and we stand behind the quality of our work.'
    },
    {
      question: 'What types of bicycles do you service?',
      answer: 'We service all types of bicycles including Mountain bikes, Road bikes, Hybrid bikes, Electric bikes, Kids bikes, and BMX bikes. Our certified mechanics are trained to handle all brands and models with professional expertise.'
    },
    {
      question: 'Do you provide bike rental services?',
      answer: 'Yes, we offer premium bike rental services for various durations - hourly, daily, weekly, and monthly rentals. All rental bikes are regularly maintained and come with safety equipment. Perfect for tourists, fitness enthusiasts, or anyone wanting to explore Coimbatore on two wheels.'
    },
    {
      question: 'How do I book a service appointment?',
      answer: 'Booking is easy! You can book through our mobile app, call us directly at +91 95973 12212, use the contact form on this page, or message us on WhatsApp. We\'ll confirm your appointment and send you real-time updates about our mechanic\'s arrival.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    // Add form submission logic here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - CycleBees Customer Support</title>
        <meta name="description" content="Get in touch with CycleBees for bike service inquiries, support, or feedback. Available 24/7 with quick response times across Coimbatore." />
        <meta name="keywords" content="CycleBees contact, bike service support, Coimbatore bike repair contact, customer service" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[30vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-secondary-100/90 max-w-2xl mx-auto">
                Professional support & assistance - We're here to help 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
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
              
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Contact Information</h2>
                          </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📞</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Phone</h3>
                    <p className="text-xs text-secondary-600">+91 95973 12212<br/>Available 24/7</p>
                          </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">✉️</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Email</h3>
                    <p className="text-xs text-secondary-600">mail@cyclebees.in<br/>Reply within 2 hours</p>
                          </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📍</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Address</h3>
                    <p className="text-xs text-secondary-600">Coimbatore, Tamil Nadu<br/>Service across city</p>
                        </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🕐</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Hours</h3>
                    <p className="text-xs text-secondary-600">6 AM - 10 PM<br/>Emergency 24/7</p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <p className="text-base text-secondary-600">Professional support - We respond within one hour</p>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="flex items-start">
                <div className="bg-white rounded-xl shadow-xl border border-primary/20 p-6 w-full">
              {isSubmitted ? (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl mx-auto mb-3">
                    ✅
                  </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                      <p className="text-sm text-secondary-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
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
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                          <label className="block text-sm font-medium text-secondary-100 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                            className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                          <label className="block text-sm font-medium text-secondary-100 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                            className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    
                    <div>
                          <label className="block text-sm font-medium text-secondary-100 mb-1">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                            className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                      >
                        <option value="">Select a subject</option>
                        <option value="service-inquiry">Service Inquiry</option>
                        <option value="booking-support">Booking Support</option>
                        <option value="technical-issue">Technical Issue</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                        <label className="block text-sm font-medium text-secondary-100 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                          rows={3}
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none text-sm bg-gray-50/50"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                      <div className="text-center pt-2">
                    <button
                      type="submit"
                          className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl text-sm transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 my-3 bg-secondary-300/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">Frequently Asked Questions</h2>
              <p className="text-base text-secondary-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-secondary-300/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-secondary-300/5 transition-colors duration-200"
                  >
                    <h3 className="text-base font-bold text-secondary-100 pr-4">{faq.question}</h3>
                    <div className={`text-primary transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      openFAQ === index 
                        ? 'max-h-64 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 border-t border-secondary-300/20 bg-gradient-to-br from-primary/5 to-secondary-100/5">
                      <p className="text-sm leading-relaxed text-secondary-600 pt-4">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <DownloadAppSection />
      </Layout>
    </>
  );
};

export default ContactPage;