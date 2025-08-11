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
      value: '+91 98765 43210',
      icon: '📞',
      description: 'Available 24/7 for emergencies'
    },
    {
      title: 'Email', 
      value: 'hello@cyclebees.com',
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
      answer: 'Our average response time is 30-45 minutes within Coimbatore city limits. For emergency services, we strive to reach within 20-30 minutes.'
    },
    {
      question: 'Do you provide service on weekends?',
      answer: 'Yes! We provide service 7 days a week including weekends and holidays. Our regular hours are 6 AM to 10 PM, with 24/7 emergency service available.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, UPI, credit/debit cards, and mobile wallets. Payment is due after service completion and your satisfaction.'
    },
    {
      question: 'Is there a service charge for coming to my location?',
      answer: 'No, we don\'t charge any extra fees for doorstep service within our standard service areas in Coimbatore. The price you see is what you pay.'
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'We offer 100% satisfaction guarantee. If you\'re not happy with our service, we\'ll re-service your bike free of charge or provide a full refund.'
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
        <section className="min-h-[30vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow">
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
        <section className="py-12 my-5 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-secondary-100 mb-3">Office Address</h2>
                  <div className="bg-gradient-to-br from-primary/5 to-secondary-100/5 rounded-lg p-4 border border-primary/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-lg flex-shrink-0">🏢</div>
                      <div>
                        <h3 className="text-lg font-bold text-secondary-100 mb-2">CycleBees Office</h3>
                        <p className="text-sm text-secondary-600 mb-3">RS Puram, Coimbatore<br/>Tamil Nadu - 641002</p>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center space-x-2">
                            <span className="text-primary">📞</span>
                            <span>+91 95973 12212</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-primary">✉️</span>
                            <span>mail@cyclebees.in</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-primary">🕐</span>
                            <span>6 AM - 10 PM (24/7 Emergency)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div>
                  <h3 className="text-lg font-bold text-secondary-100 mb-3">Quick Contact</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="tel:+919597312212" className="bg-green-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-center flex items-center justify-center space-x-1 text-sm">
                      <span>📞</span>
                      <span>Call</span>
                    </a>
                    <a href="https://wa.me/919597312212" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 text-center flex items-center justify-center space-x-1 text-sm">
                      <span>📱</span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div>
                <h2 className="section-title text-center mb-6">Send us a Message</h2>
                <p className="section-subtitle text-center mb-8">Professional support - We respond within 2 hours</p>

                <div className="bg-white rounded-xl shadow-xl border border-primary/10 p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-secondary-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
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
                      <label className="block text-sm font-medium text-secondary-100 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-100 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary-100 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary"
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
                    <label className="block text-sm font-medium text-secondary-100 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-primary text-secondary-100 px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg"
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
              <p className="text-sm text-secondary-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-secondary-300/20 rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-300/5 transition-colors duration-200"
                  >
                    <h3 className="text-sm font-bold text-secondary-100 text-left">{faq.question}</h3>
                    <div className={`text-primary transition-transform duration-200 ${openFAQ === index ? 'transform rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-xs leading-relaxed text-secondary-600">{faq.answer}</p>
                    </div>
                  )}
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