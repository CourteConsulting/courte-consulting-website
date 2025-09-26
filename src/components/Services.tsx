import React from 'react';
import { Globe, Megaphone, Package, Palette } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development & Design',
    description: 'Mobile-responsive, conversion-focused websites optimized for growth on Shopify, Squarespace, WordPress, and custom builds.',
    image: '/images/services/website-development.jpg',
    features: ['Custom Development', 'Mobile Responsive', 'Conversion Focused', 'Platform Expertise']
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing & Automation',
    description: 'Strategic campaigns that drive measurable results through social media, SEO, ads, email marketing, and chatbot automation.',
    image: '/images/services/digital-marketing.jpg',
    features: ['Social Media Management', 'SEO & Ads', 'Email Marketing', 'Chatbot Automation']
  },
  {
    icon: Palette,
    title: 'Branding & Graphic Design',
    description: 'Visual storytelling and identity systems that align with your brand mission, from logos to full-scale collateral.',
    image: '/images/services/branding-design.jpg',
    features: ['Logo Design', 'Brand Identity', 'Packaging Design', 'Marketing Collateral']
  },
  {
    icon: Package,
    title: 'Product Design & Manufacturing',
    description: 'A-Z product development across jewelry, skincare, apparel, and hospitality with CAD design and production management.',
    image: '/images/services/product-development.jpg',
    features: ['CAD Design', 'Manufacturing Partners', 'Packaging Solutions', 'Production Management']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-accent-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-charcoal mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Services</span>
          </h2>
          <p className="text-xl text-text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting solutions designed to accelerate your success 
            and transform challenges into competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-text-charcoal mb-4 group-hover:text-primary-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-charcoal/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 flex-grow">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                      <span className="text-sm text-text-charcoal/70 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 text-primary-orange font-semibold hover:text-primary-orange-dark transition-colors duration-300 flex items-center group self-start">
                  Learn More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;