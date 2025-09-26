import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/business-background.jpg"
          alt="Modern business meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/80 via-deep-navy/60 to-deep-navy-dark/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Creative Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Websites, Marketing,
            </span>
            and Product Development
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Courte Consulting delivers over 15 years of expertise in digital marketing, website design, and full-cycle product development. From custom websites to manufacturing and branding solutions, our team helps businesses grow with strategy, creativity, and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToServices}
              className="group bg-primary-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-orange-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Work With Us
              <ArrowDown className="inline-block ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="group flex items-center text-white hover:text-primary-orange transition-colors duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mr-3 group-hover:bg-white/30 transition-all duration-300">
                <Play className="h-6 w-6 fill-current" />
              </div>
              <span className="text-lg font-medium">Let's Talk About Your Next Project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-4 h-4 bg-primary-orange/30 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-1/3 right-16 animate-float-delayed">
        <div className="w-6 h-6 bg-deep-navy/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float">
        <div className="w-3 h-3 bg-primary-orange/40 rounded-full blur-sm"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToServices} className="text-white/60 hover:text-white transition-colors">
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;