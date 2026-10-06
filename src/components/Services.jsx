import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GlassWater, Presentation, Music } from 'lucide-react';

const servicesData = [
  {
    title: 'WEDDINGS',
    description: 'From intimate ceremonies to grand celebrations, we create weddings that feel uniquely yours.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'PARTIES',
    description: 'Birthdays, anniversaries, private celebrations and unforgettable social experiences.',
    icon: GlassWater,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'CONFERENCES',
    description: 'Professional, seamless and impactful corporate conferences and business events.',
    icon: Presentation,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'STAGE PRODUCTIONS',
    description: 'Lights, sound, staging and complete production management for spectacular events.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-luxury-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-4"
          >
            OUR <span className="text-gradient">SERVICES</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-luxury-gold mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden mb-6 rounded-sm shadow-sm">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full border border-luxury-white/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-luxury-gold transition-colors duration-500">
                    <service.icon className="text-luxury-white w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif text-luxury-charcoal tracking-widest mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-luxury-charcoal/60 font-light text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a href="#contact" className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-luxury-charcoal border-b border-luxury-gold pb-1 group-hover:text-luxury-gold transition-colors duration-300">
                  Explore Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
