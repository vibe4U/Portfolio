import React from 'react';
import { motion } from 'framer-motion';

const foundersData = [
  { name: 'Navadeep' },
  { name: 'Manideep' },
  { name: 'Nikhila' },
  { name: 'Sanjana' }
];

const Founders = () => {
  return (
    <section id="founders" className="py-24 bg-luxury-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-4"
          >
            THE PEOPLE BEHIND <span className="text-gradient">VIBE4U</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl text-luxury-charcoal/80 mb-6"
          >
            "Four minds. One vision. Creating experiences that people remember."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-luxury-gold mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {foundersData.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group text-center py-16 border border-luxury-charcoal/10 hover:border-luxury-gold/50 transition-colors duration-500 rounded-sm bg-luxury-white hover:shadow-sm"
            >
              <h3 className="text-3xl font-serif tracking-widest text-luxury-charcoal uppercase group-hover:text-luxury-gold transition-colors duration-300">
                {founder.name}
              </h3>
              <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Founders;
