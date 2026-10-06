import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Box, Clock, PackageCheck } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'PROFESSIONAL TEAM',
    description: 'Experienced people managing every detail.'
  },
  {
    icon: Lightbulb,
    title: 'CREATIVE CONCEPTS',
    description: 'Unique ideas designed around your vision.'
  },
  {
    icon: Box,
    title: 'PREMIUM SETUP',
    description: 'Elegant decor, production and event styling.'
  },
  {
    icon: Clock,
    title: 'ON-TIME EXECUTION',
    description: 'Every detail delivered according to plan.'
  },
  {
    icon: PackageCheck,
    title: 'CUSTOMIZED PACKAGES',
    description: 'Solutions designed according to your event and budget.'
  }
];

const WhyVibe4U = () => {
  return (
    <section className="py-24 bg-luxury-ivory border-t border-luxury-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-4"
          >
            WHY CHOOSE <span className="text-gradient">VIBE4U?</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-luxury-gold mx-auto"
          ></motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="w-full sm:w-1/2 lg:w-1/4 text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-luxury-gold/50 rounded-full group-hover:bg-luxury-gold/10 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif tracking-widest text-luxury-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-luxury-charcoal/70 font-light text-sm px-4">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyVibe4U;
