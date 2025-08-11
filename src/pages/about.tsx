import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

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

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started CycleBees with a vision to bring professional bike service to your doorstep' },
    { year: '2021', title: 'First 100 Customers', description: 'Achieved our first milestone of 100 satisfied customers in Coimbatore' },
    { year: '2022', title: 'Mobile App Launch', description: 'Launched our user-friendly mobile app for easy booking and tracking' },
    { year: '2023', title: '1000+ Services', description: 'Successfully completed over 1000 bike services with 4.8-star rating' },
    { year: '2024', title: 'Team Expansion', description: 'Grew to 15+ certified mechanics and expanded service coverage' },
    { year: '2025', title: 'Innovation Continues', description: 'Introducing AI-powered diagnostics and eco-friendly service solutions' }
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
        <section className="min-h-[50vh] bg-gradient-to-br from-primary to-secondary-100 pt-16 border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-100 mb-4">
                About CycleBees
              </h1>
              <p className="text-xl text-secondary-100/90 max-w-3xl mx-auto">
                Revolutionizing bike service with passion, expertise, and innovation since 2020
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-100 mb-6">Our Story</h2>
              <div className="text-lg text-secondary-600 space-y-6 leading-relaxed">
                <p>
                  CycleBees was born from a simple frustration shared by every cyclist - the hassle of getting quality bike service. 
                  Long queues at repair shops, unreliable service quality, and the inconvenience of transporting bikes led our founders 
                  to envision a better solution.
                </p>
                <p>
                  What started as a small team of passionate cyclists and mechanics in Coimbatore has grown into a trusted brand 
                  that has served over 1000 customers. We&apos;ve combined traditional craftsmanship with modern technology to create 
                  an experience that puts the customer first.
                </p>
                <p>
                  Today, CycleBees stands as a testament to the power of innovation in traditional industries. We&apos;re not just fixing bikes; 
                  we&apos;re building a community of cyclists who can ride with confidence, knowing that professional help is always just a tap away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-12 bg-secondary-300/20 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-100 mb-4">Meet Our Founders</h2>
              <p className="text-lg text-secondary-600">The visionary team behind CycleBees</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-secondary-300/20">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-100 mb-2">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-4">{founder.role}</p>
                  <p className="text-secondary-600 text-sm leading-relaxed">{founder.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-secondary-100 mb-6">Our Mission</h2>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  To make professional bike service accessible, convenient, and reliable for every cyclist. 
                  We believe that quality bike maintenance should never be a barrier to enjoying the freedom 
                  and joy of cycling.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-secondary-100 mb-6">Our Vision</h2>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  To become India&apos;s most trusted bike service platform, fostering a culture where cycling is 
                  the preferred mode of transport through exceptional service, innovation, and community building.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 bg-secondary-100 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg text-white/90">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-100 mb-4">Our Journey</h2>
              <p className="text-lg text-secondary-600">Key milestones in the CycleBees story</p>
            </div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary-100 font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-100 mb-2">{milestone.title}</h3>
                    <p className="text-secondary-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary-100 mb-2">1000+</div>
                <div className="text-secondary-100/80">Services Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary-100 mb-2">4.8★</div>
                <div className="text-secondary-100/80">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary-100 mb-2">15+</div>
                <div className="text-secondary-100/80">Expert Mechanics</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary-100 mb-2">24/7</div>
                <div className="text-secondary-100/80">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white border-t border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary-100 mb-4">Join the CycleBees Family</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Experience the difference that passion, expertise, and innovation can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/services'}
                className="bg-primary text-secondary-100 px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Book a Service
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-secondary-100 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;