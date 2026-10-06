import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioData = [
  { id: 1, category: 'Weddings', title: 'Royal Wedding Celebration', location: 'Udaipur Palace', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80', description: 'A grand royal setup with gold accents and ivory florals.' },
  { id: 2, category: 'Parties', title: 'Luxury Birthday Experience', location: 'Private Villa', image: '/luxury_birthday.jpg', description: 'Exclusive 50th birthday celebration with a futuristic theme.' },
  { id: 3, category: 'Conferences', title: 'Corporate Annual Conference', location: 'Grand Hyatt', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', description: 'Seamless tech conference for 1000+ delegates.' },
  { id: 4, category: 'Stage Productions', title: 'Live Stage Production', location: 'City Arena', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80', description: 'Complete lighting, sound, and stage management for a music festival.' },
  { id: 5, category: 'Weddings', title: 'Engagement Celebration', location: 'Ritz Carlton', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80', description: 'Intimate engagement dinner under the stars.' },
  { id: 6, category: 'Parties', title: 'Premium Private Party', location: 'Luxury Yacht', image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80', description: 'High-end yacht party with bespoke catering and entertainment.' }
];

const categories = ['All', 'Weddings', 'Parties', 'Conferences', 'Stage Productions'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredData = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-4"
            >
              OUR <span className="text-gradient">PORTFOLIO</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-[1px] bg-luxury-gold"
            ></motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mt-8 md:mt-0"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs uppercase tracking-widest px-4 py-2 transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-luxury-gold text-luxury-white' 
                    : 'text-luxury-charcoal/60 hover:text-luxury-charcoal'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative h-80 overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-luxury-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-luxury-gold text-xs uppercase tracking-widest font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-serif text-luxury-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                  <p className="text-luxury-white/80 text-sm font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <a href="#contact" className="inline-block px-10 py-4 border border-luxury-charcoal text-luxury-charcoal uppercase tracking-widest text-sm hover:bg-luxury-charcoal hover:text-luxury-white transition-colors duration-300 rounded-sm">
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
