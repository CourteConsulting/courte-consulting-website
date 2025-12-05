import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, ArrowUp, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page with hash
      navigate(`/#${sectionId}`);
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
              <a
                href="https://www.linkedin.com/in/ariannacourte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary-orange rounded-full p-2 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'About', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
                  >
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
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-orange mr-3 flex-shrink-0" />
                <a href="mailto:info@courteconsulting.com" className="text-gray-300 text-sm hover:text-primary-orange transition-colors">
                  info@courteconsulting.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            ©{' '}
            <a
              href="https://courteconsulting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-orange transition-colors"
            >
              {currentYear} Courte Consulting
            </a>
            . All rights reserved. |{' '}
            <Link to="/privacy-policy" className="hover:text-primary-orange transition-colors">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/terms-of-service" className="hover:text-primary-orange transition-colors">
              Terms of Service
            </Link>
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