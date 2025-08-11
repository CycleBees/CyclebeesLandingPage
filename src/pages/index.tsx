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
        <title>CycleBees - Professional Bicycle Services</title>
        <meta name="description" content="Premium bicycle services at your doorstep. Expert repairs, quality rentals & professional coaching. Trusted by riders across Coimbatore." />
        <meta name="keywords" content="professional bicycle repair, premium bike service, expert mobile mechanic, quality bike rental, professional cycling coach, Coimbatore bicycle services" />
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