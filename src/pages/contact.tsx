import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
        <section className="h-[50vh] bg-gradient-to-br from-primary to-secondary-100 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-100 mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-secondary-100/90 max-w-3xl mx-auto">
                Have questions? Need support? We're here to help 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary-100 mb-2">{info.title}</h3>
                  <p className="text-primary font-semibold mb-1">{info.value}</p>
                  <p className="text-secondary-600 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-secondary-300/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-100 mb-4">Send us a Message</h2>
              <p className="text-lg text-secondary-600">We'll get back to you within 2 hours</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
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
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-100 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-secondary-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-secondary-300/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-secondary-100 mb-3">{faq.question}</h3>
                  <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-red-100 border border-red-200 rounded-xl p-8">
              <div className="text-4xl mb-4">🚨</div>
              <h2 className="text-2xl font-bold text-red-700 mb-4">Emergency Bike Service</h2>
              <p className="text-red-600 mb-6">
                Stuck on the road with a bike breakdown? Our emergency response team is available 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919876543210"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  Call Emergency: +91 98765 43210
                </a>
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  WhatsApp Emergency
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-secondary-300/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-100 mb-4">Our Service Area</h2>
              <p className="text-lg text-secondary-600">We cover all areas across Coimbatore</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="h-64 bg-secondary-300/20 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-lg text-secondary-600">Interactive map coming soon</p>
                  <p className="text-sm text-secondary-600 mt-2">Currently serving all areas within Coimbatore city limits</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-primary/20 rounded-lg p-3">
                  <div className="font-semibold text-secondary-100">RS Puram</div>
                  <div className="text-secondary-600">15-25 min</div>
                </div>
                <div className="bg-primary/20 rounded-lg p-3">
                  <div className="font-semibold text-secondary-100">Gandhipuram</div>
                  <div className="text-secondary-600">20-30 min</div>
                </div>
                <div className="bg-primary/20 rounded-lg p-3">
                  <div className="font-semibold text-secondary-100">Peelamedu</div>
                  <div className="text-secondary-600">25-35 min</div>
                </div>
                <div className="bg-primary/20 rounded-lg p-3">
                  <div className="font-semibold text-secondary-100">Saibaba Colony</div>
                  <div className="text-secondary-600">20-30 min</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;