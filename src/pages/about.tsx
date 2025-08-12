import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import DownloadAppSection from '@/components/DownloadAppSection';

const AboutPage: React.FC = () => {
  const founders = [
    {
      name: 'Guru Moorthy',
      role: 'Founder & CEO',
      image: '/founder_1_Guru Moorthy_Founder_&_CEO.webp',
      bio: 'With 15+ years in the cycling industry, Guru founded CycleBees to revolutionize bike service accessibility in India.'
    },
    {
      name: 'Hitesh Gupta', 
      role: 'Co-founder & CTO',
      image: '/founder_2_Hitesh_Gupta_Co_founder_&_CTO.webp',
      bio: 'Tech visionary who built CycleBees\' digital platform, bringing cutting-edge technology to traditional bike service.'
    },
    {
      name: 'Babu Kumaran',
      role: 'Co-Founder & Chief Mechanic Trainer',
      image: '/founder_3_Babu_Kumaran_Co_Founder_Chief_Mechanic_Trainer.webp',
      bio: 'Master mechanic with 20+ years experience, training our team to deliver world-class bike service standards.'
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on service quality. Every bike receives our full attention and expertise.',
      icon: '🏆'
    },
    {
      title: 'Customer Centric',
      description: 'Your satisfaction drives everything we do. We listen, adapt, and exceed expectations.',
      icon: '❤️'
    },
    {
      title: 'Innovation',
      description: 'We embrace technology to make bike service more convenient and efficient for everyone.',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Promoting cycling culture and eco-friendly practices for a greener tomorrow.',
      icon: '🌱'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - CycleBees Story & Team</title>
        <meta name="description" content="Learn about CycleBees journey, our founding team, and mission to revolutionize bike service in India. Meet our expert founders and their vision." />
        <meta name="keywords" content="CycleBees story, founders, bike service company, Coimbatore startup, cycling industry" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[30vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
                About CycleBees
              </h1>
              <p className="text-lg text-secondary-100/90 max-w-2xl mx-auto">
                Professional bicycle services with passion, expertise, and innovation since 2020
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p className="text-base text-secondary-600 leading-relaxed">
                    CycleBees was born from a simple frustration shared by every cyclist - the hassle of getting quality bike service. 
                    Long queues at repair shops, unreliable service quality, and the inconvenience of transporting bikes led our founders 
                    to envision a better solution.
                  </p>
                  <p className="text-base text-secondary-600 leading-relaxed">
                    What started as a small team of passionate cyclists and mechanics in Coimbatore has grown into a trusted brand 
                    that has served over 1000 customers. We&apos;ve combined traditional craftsmanship with modern technology to create 
                    an experience that puts the customer first.
                  </p>
                  <p className="text-base text-secondary-600 leading-relaxed">
                    Today, CycleBees stands as a testament to the power of innovation in traditional industries. We&apos;re not just fixing bikes; 
                    we&apos;re building a community of cyclists who can ride with confidence, knowing that professional help is always just a tap away.
                  </p>
                </div>
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative max-w-[350px] lg:max-w-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary-100/20 blur-2xl rounded-full transform scale-110"></div>
                  <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-primary/20">
                    <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-secondary-100/10 rounded-xl overflow-hidden">
                      <img
                        src="/cyclebees_Contact_Page_Image_1.webp"
                        alt="CycleBees Cycling"
                        className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-300/20 to-primary/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Meet Our Founders</h2>
              <p className="text-base text-secondary-600">The visionary team behind CycleBees</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {founders.map((founder, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-primary/20 ring-4 ring-primary/20">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base font-bold text-secondary-100 mb-1">{founder.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{founder.role}</p>
                  <p className="text-sm text-secondary-600 leading-relaxed">{founder.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary-100/5 rounded-xl p-6 text-center shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">🎯</div>
                <h2 className="text-lg font-bold text-secondary-100 mb-3">Our Mission</h2>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  To make professional bicycle service accessible, convenient, and reliable for every cyclist. 
                  Quality bike maintenance should never be a barrier to enjoying the freedom and joy of cycling.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary-100/5 to-primary/5 rounded-xl p-6 text-center shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">🔭</div>
                <h2 className="text-lg font-bold text-secondary-100 mb-3">Our Vision</h2>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  To become India's most trusted bicycle service platform, fostering a culture where cycling is 
                  the preferred mode of transport through exceptional service, innovation, and community building.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary-100/5 rounded-xl p-6 text-center shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">🤝</div>
                <h2 className="text-lg font-bold text-secondary-100 mb-3">Our Promise</h2>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  We promise to deliver exceptional service quality, transparent pricing, and unmatched customer support. 
                  Your satisfaction and safety are our top priorities in every interaction.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary-100/5 to-primary/5 rounded-xl p-6 text-center shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">🚀</div>
                <h2 className="text-lg font-bold text-secondary-100 mb-3">Our Goal</h2>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  To revolutionize the cycling industry by making professional bike service as easy as ordering food online. 
                  We aim to create a seamless experience that encourages more people to choose cycling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-100 to-secondary-400 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Our Values</h2>
              <p className="text-base text-white/90">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
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

export default AboutPage;