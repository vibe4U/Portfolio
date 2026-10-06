import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Event Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-ivory/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4 block">
            WE PLAN YOU CELEBRATE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-luxury-charcoal mb-6 leading-tight">
            VIBE4U
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center space-x-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-luxury-gold"></div>
          <p className="font-serif italic text-xl md:text-2xl text-luxury-charcoal/80">
            Your Vision • Our Creation
          </p>
          <div className="h-[1px] w-12 bg-luxury-gold"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto text-luxury-charcoal/70 text-lg md:text-xl font-light mb-12 leading-relaxed"
        >
          From intimate celebrations to grand productions, we plan, create and execute unforgettable experiences tailored just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-luxury-charcoal text-luxury-white tracking-widest uppercase text-sm hover:bg-luxury-gold transition-colors duration-300 rounded-sm w-full sm:w-auto"
          >
            Plan Your Event
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-luxury-charcoal text-luxury-charcoal tracking-widest uppercase text-sm hover:bg-luxury-charcoal hover:text-luxury-white transition-colors duration-300 rounded-sm w-full sm:w-auto"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-luxury-charcoal/60 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-luxury-gold"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
