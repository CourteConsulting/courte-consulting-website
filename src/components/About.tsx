import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const stats = [
  { icon: Users, value: '100+', label: 'Projects Completed' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Clock, value: '24/7', label: 'Project Support' },
  { icon: Target, value: '100%', label: 'Client Satisfaction' }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-accent-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/about/arianna-courte-founder-courte-consulting.jpg"
                alt="Arianna Courte - Founder of Courte Consulting"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-deep-navy to-deep-navy-dark rounded-full opacity-20 blur-xl"></div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-charcoal mb-6">
              Meet Arianna Courte,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Founder & Consultant
              </span>
            </h2>
            <p className="text-lg text-text-charcoal/70 mb-8 leading-relaxed">
              Courte Consulting was founded by Arianna Courte, an entrepreneur and consultant with extensive experience in digital marketing, branding, website development, and product manufacturing. Arianna recognized the need for a consulting partner that could seamlessly combine creativity with technical expertise.
            </p>
            <p className="text-lg text-text-charcoal/70 mb-12 leading-relaxed">
              Drawing on her background in building multiple businesses and managing end-to-end product development, she established Courte Consulting to help brands achieve growth with strategy, efficiency, and innovation. Every project begins with strategy and ends with execution, combining creativity, innovation, and measurable results.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 group-hover:bg-primary-orange/5 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-primary-orange mx-auto mb-3 transition-colors duration-300" />
                    <div className="text-3xl font-bold text-text-charcoal mb-1">{stat.value}</div>
                    <div className="text-sm text-text-charcoal/70 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;