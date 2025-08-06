import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import OnCallSection from '@/components/OnCallSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import WhyUsSection from '@/components/WhyUsSection';
import BlogSection from '@/components/BlogSection';
import DownloadSection from '@/components/DownloadSection';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>CycleBees - Professional Bike Service App</title>
        <meta name="description" content="Professional bicycle mechanics at your doorstep. Repairs, rentals & coaching in one tap. Download CycleBees app for Android & iOS." />
        <meta name="keywords" content="bicycle repair, bike service, mobile mechanic, bike rental, cycling coach, Coimbatore" />
        <link rel="canonical" href="https://cyclebees.com" />
      </Head>
      
      <Layout>
        <HeroSection />
        <ServicesSection />
        <OnCallSection />
        <HowItWorksSection />
        <BenefitsSection />
        <WhyUsSection />
        <BlogSection />
        <DownloadSection />
      </Layout>
    </>
  );
};

export default Home;