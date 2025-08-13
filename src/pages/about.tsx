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
      bio: 'Over 11 years as a professional cyclist and lifelong rider. Guru leads product direction and rider experience, turning first-hand rider pain into product and ops decisions.'
    },
    {
      name: 'Hitesh Gupta', 
      role: 'Co-founder & CTO',
      image: '/founder_2_Hitesh_Gupta_Co_founder_&_CTO.webp',
      bio: 'Tech lead who built CycleBees\' platform and tracking systems. Hitesh brings product & engineering experience (including leadership roles in tech recruiting and product design) to scale the digital experience.'
    },
    {
      name: 'Babu Kumaran',
      role: 'Co-founder & Chief Mechanic Trainer',
      image: '/founder_3_Babu_Kumaran_Co_Founder_Chief_Mechanic_Trainer.webp',
      bio: '35+ years of hands-on bicycle mechanics expertise. Babu leads the CycleBees Academy and ensures every mechanic meets our quality and safety standards.'
    }
  ];

  const values = [
    {
      title: 'Quality first',
      description: 'No compromises on workmanship and parts.',
      icon: '🏆'
    },
    {
      title: 'Customer centric',
      description: 'We design around rider needs and convenience.',
      icon: '❤️'
    },
    {
      title: 'Innovation',
      description: 'Tech and logistics create predictable, scalable service.',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Encouraging cycling as a greener city transport option.',
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
                Built by riders. Backed by repair. Powered by tech.
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
                    CycleBees was founded in Coimbatore to fix a simple problem: getting reliable, professional bicycle service should be effortless. What began as a rider&apos;s frustration with long shop queues and inconsistent quality became a platform that combines expert mechanics, smart logistics and a clean app experience — so riders can book certified doorstep repairs, lease premium bikes and get fast on-road support without leaving home or hotel.
                  </p>
                  <h3 className="text-lg font-bold text-secondary-100 mb-2">What we do</h3>
                  <p className="text-base text-secondary-600 leading-relaxed">
                    We offer app & web booking for on-demand doorstep repairs, premium bicycle leasing and accessories delivery. Every visit is backed by certified technicians, genuine parts, transparent pricing and a workmanship guarantee — designed so riders spend less time managing bikes and more time riding.
                  </p>
                  <h3 className="text-lg font-bold text-secondary-100 mb-2">The 3-Bees story</h3>
                  <p className="text-base text-secondary-600 leading-relaxed">
                    Frustrated by unreliable local repairs, a professional cyclist (Guru) teamed with his trusted neighbor and veteran mechanic (Babu) to build a faster, more dependable service — and they brought in a technical co-founder (Hitesh) to turn the idea into a platform. Built by riders. Backed by repair. Powered by tech.
                  </p>
                  <h3 className="text-lg font-bold text-secondary-100 mb-2">Impact & traction</h3>
                  <p className="text-base text-secondary-600 leading-relaxed">
                    Trusted by riders in Coimbatore — we&apos;ve served over 1000+ customers during our pilot and early rollouts, and continue to scale service capacity, rental inventory and B2B partnerships with hotels and events.
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

        {/* Mission, Vision & Promise */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Our mission, vision & promise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary-100/5 rounded-xl p-6 text-center shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">🎯</div>
                <h3 className="text-lg font-bold text-secondary-100 mb-3">Mission</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  Make professional bicycle service accessible, convenient and reliable for every rider.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary-100/5 to-primary/5 rounded-xl p-6 text-center shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">🔭</div>
                <h3 className="text-lg font-bold text-secondary-100 mb-3">Vision</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  To be India&apos;s most trusted bicycle-service platform, expanding consistent standards of quality, training and experience city by city.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary-100/5 rounded-xl p-6 text-center shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">🤝</div>
                <h3 className="text-lg font-bold text-secondary-100 mb-3">Our promise</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  Transparent pricing, certified technicians, and a service experience that puts rider safety and satisfaction first.
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
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Work with us / Partnerships */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-300/20 to-primary/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">Work with us / Partnerships</h2>
            <p className="text-base text-secondary-600 mb-6 max-w-4xl mx-auto">
              Want CycleBees at your hotel, event or corporate campus? Interested in franchise or academy partnerships? Get in touch via the Contact page or email mail@cyclebees.in — we&apos;re actively building B2B programs to scale access to quality bike service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md text-base"
              >
                Contact for Partnerships
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:mail@cyclebees.in'}
                className="bg-secondary-100 text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200 shadow-md text-base"
              >
                Email Us
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