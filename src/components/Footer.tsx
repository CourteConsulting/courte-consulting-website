import React from 'react';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              Courte<span className="text-primary-orange">.</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Over 15 years of expertise in digital marketing, website design, and product development. 
              Helping businesses grow with strategy, creativity, and measurable results.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                <button
                  key={social}
                  className="bg-white/10 hover:bg-primary-orange rounded-full p-2 transition-all duration-300 hover:scale-110"
                >
                  <div className="w-5 h-5"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'About', 'Testimonials', 'Contact', 'Portfolio'].map((link) => (
                <li key={link}>
                  <button className="text-gray-300 hover:text-primary-orange transition-colors duration-300">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-orange mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Business Plaza<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-orange mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">hello@courteconsulting.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-300 text-sm">Available for consultation calls</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Courte Consulting. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary-orange hover:bg-primary-orange-dark rounded-full p-2 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;