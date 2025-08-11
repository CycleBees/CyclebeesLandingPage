import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrollingUp ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-sm shadow-lg' 
          : 'bg-primary'
      }`}
      style={{ height: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.webp"
                alt="CycleBees Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <span className="text-xl font-bold text-secondary-100">CycleBees</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary-100 hover:text-secondary-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="relative bg-secondary-100 text-white px-6 py-2 rounded-lg hover:bg-secondary-100/90 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl group overflow-hidden"
              onClick={() => {
                const element = document.getElementById('download');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
              <span className="relative z-10">Download App</span>
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-100 hover:text-secondary-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-secondary-100 hover:text-secondary-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                className="relative w-full mt-4 bg-secondary-100 text-white px-6 py-2 rounded-lg hover:bg-secondary-100/90 transition-all duration-200 font-semibold shadow-lg group overflow-hidden"
                onClick={() => {
                  setIsMenuOpen(false);
                  const element = document.getElementById('download');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
                <span className="relative z-10">Download App</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;