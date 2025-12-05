import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Testimonials from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation from footer links on other pages
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
