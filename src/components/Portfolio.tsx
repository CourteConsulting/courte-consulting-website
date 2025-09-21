import React from 'react';
import { ExternalLink, ArrowRight, Quote, Package } from 'lucide-react';

const testimonials = [
  {
    quote: "Arianna has a great business mindset along with the experience and knowledge to really get business done. I'm grateful to have her as a connection.",
    author: 'David Paulsen',
    company: 'Citadel',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  },
  {
    quote: "You were instrumental and a huge inspiration in helping me take that first big step.",
    author: 'Danny Costanzo',
    company: 'Plant Based Mafia',
    image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  },
  {
    quote: "I can't begin to express my gratitude to you for creating my website and marketing SEO funnels for my start up. The professionalism, care, and consideration for my business needs has been superb.",
    author: 'Kisore Alquamdi',
    company: 'Startup Founder',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  },
  {
    quote: "Courte Consulting was able to save me an extensive amount of money on branding and promotional products for my business. I couldn't have scaled my business and received the profit margins I did, without them.",
    author: 'Laura Hangenfeld',
    company: 'Just Jump',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  }
];

const websites = [
  {
    url: 'foieviare.com',
    title: 'Foie Viare',
    category: 'E-commerce & Branding',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800'
  },
  {
    url: 'garagegirlsjewelry.com',
    title: 'Garage Girls Jewelry',
    category: 'E-commerce & Product Design',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800'
  },
  {
    url: 'chefjamestrees.com',
    title: 'Chef James Trees',
    category: 'Restaurant & Hospitality',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800'
  },
  {
    url: 'vegasunstripped.com',
    title: 'Vegas Unstripped',
    category: 'Travel & Entertainment',
    image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800'
  },
  {
    url: 'bayles.law',
    title: 'Bayles Law',
    category: 'Legal Services',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800'
  },
  {
    url: 'shoetieai.com',
    title: 'ShoeTie AI',
    category: 'Technology & AI',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800'
  },
  {
    url: 'seggswater.com',
    title: 'Seggs Water',
    category: 'Health & Wellness',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800'
  },
  {
    url: 'teeboxtactics.com',
    title: 'Tee Box Tactics',
    category: 'Sports & Recreation',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-br from-deep-navy to-deep-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our clients about their experience working with Courte Consulting 
            and the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.author} - ${testimonial.company}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-primary-orange text-white rounded-full p-2">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-bold text-lg">{testimonial.author}</div>
                    <div className="text-primary-orange text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Website Portfolio Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Featured <span className="text-primary-orange">Websites</span>
          </h3>
          <p className="text-gray-300 mb-8">
            A selection of websites we've designed and developed for our clients
          </p>
        </div>
      </div>

      {/* Full-width Featured Websites Grid */}
      <div className="w-full mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {websites.slice(0, 8).map((website, index) => (
            <a
              key={website.url}
              href={`https://${website.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-80 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:z-10"
            >
              <img
                src={website.image}
                alt={`${website.url} website`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-white text-2xl font-bold mb-2 group-hover:text-primary-orange transition-colors duration-300">
                      {website.title}
                    </div>
                    <div className="text-gray-300 text-lg mb-1">www.{website.url}</div>
                    <div className="text-gray-400 text-sm">{website.category}</div>
                  </div>
                  <div className="bg-primary-orange group-hover:bg-white rounded-full p-3 transition-all duration-300 transform group-hover:scale-110">
                    <ExternalLink className="h-6 w-6 text-white group-hover:text-primary-orange transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Manufacturing Expertise Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Manufacturing & Design <span className="text-primary-orange">Expertise</span>
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
              With a strong background in design and production, Courte Consulting guides businesses through every stage of product creation. With over 15 years of experience across apparel, skincare, jewelry, and hospitality, we manage projects from concept to manufacturing, ensuring quality, efficiency, and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Jewelry Design', 'Skincare Products', 'Apparel & Accessories', 'Hospitality Solutions'].map((category) => (
              <div key={category} className="text-center">
                <div className="bg-primary-orange/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-primary-orange" />
                </div>
                <h4 className="text-white font-semibold mb-2">{category}</h4>
                <p className="text-gray-400 text-sm">CAD design, manufacturing partnerships, and production management</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-orange-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;