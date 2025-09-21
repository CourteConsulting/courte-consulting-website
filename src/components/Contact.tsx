import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    project: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', business: '', project: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-accent-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-charcoal mb-6">
            Let's Talk About Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Next Project
            </span>
          </h2>
          <p className="text-xl text-text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch with Arianna and discover 
            how Courte Consulting can help your business grow with creativity and strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
              <h3 className="text-2xl font-bold text-text-charcoal mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-orange/10 rounded-lg p-3 mr-4">
                    <Mail className="h-6 w-6 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-charcoal mb-1">Email Us</h4>
                    <p className="text-text-charcoal/70">arianna@courteconsulting.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-orange/10 rounded-lg p-3 mr-4">
                    <Phone className="h-6 w-6 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-charcoal mb-1">Call Us</h4>
                    <p className="text-text-charcoal/70">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-orange/10 rounded-lg p-3 mr-4">
                    <MapPin className="h-6 w-6 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-charcoal mb-1">Visit Us</h4>
                    <p className="text-text-charcoal/70">123 Business Plaza<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-text-charcoal/70 mb-4">Follow us for insights and updates:</p>
                <div className="flex space-x-4">
                  {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                    <button
                      key={social}
                      className="text-text-charcoal/50 hover:text-primary-orange transition-colors duration-300"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-charcoal mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      id="business"
                      name="business"
                      value={formData.business}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                      placeholder="Your Business"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-text-charcoal mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-text-charcoal mb-2">
                    What You're Looking For *
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe your project needs - website development, marketing, product design, branding, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-primary-orange hover:bg-primary-orange-dark text-white hover:scale-[1.02] shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-6 w-6 mr-2" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;