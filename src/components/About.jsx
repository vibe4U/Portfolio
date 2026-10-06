import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-6 leading-tight">
              MORE THAN EVENTS.<br />
              <span className="text-gradient">WE CREATE MEMORIES.</span>
            </h2>
            
            <p className="text-luxury-charcoal/70 text-lg mb-8 font-light leading-relaxed">
              VIBE4U handles the entire event journey — from concept and planning to execution and final coordination. We believe that every celebration should be a reflection of your unique style and story.
            </p>
            
            <p className="font-serif text-2xl italic text-luxury-charcoal mb-10 border-l-2 border-luxury-gold pl-6 py-2">
              "Your vision. Our creativity. One unforgettable experience."
            </p>

            {/* Stats / Features */}
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-luxury-beige pt-8">
              <div>
                <span className="block text-3xl font-serif text-luxury-gold mb-2">100%</span>
                <span className="text-sm tracking-wider uppercase text-luxury-charcoal/80 font-medium">Personalized</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-luxury-gold mb-2">A-Z</span>
                <span className="text-sm tracking-wider uppercase text-luxury-charcoal/80 font-medium">End-to-End Planning</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-luxury-gold mb-2">Art</span>
                <span className="text-sm tracking-wider uppercase text-luxury-charcoal/80 font-medium">Creative Concepts</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-luxury-gold mb-2">Pro</span>
                <span className="text-sm tracking-wider uppercase text-luxury-charcoal/80 font-medium">Professional Execution</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
              alt="Elegant Event Setup"
              className="w-full h-full object-cover rounded-sm shadow-2xl"
            />
            {/* Decorative element */}
            <div className="absolute -inset-4 border border-luxury-gold/30 -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
