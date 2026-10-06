import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'We understand your vision, requirements and expectations.'
  },
  {
    number: '02',
    title: 'PLAN',
    description: 'We develop the event concept, timeline and complete execution plan.'
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'We create the visual identity, decor, theme and experience.'
  },
  {
    number: '04',
    title: 'EXECUTE',
    description: 'Our team manages the event from setup to completion.'
  },
  {
    number: '05',
    title: 'CELEBRATE',
    description: 'You enjoy the moment while we take care of everything.'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-4"
          >
            OUR <span className="text-gradient">PROCESS</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-luxury-gold mx-auto"
          ></motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-luxury-gold/30 -translate-y-1/2"></div>
          
          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-10 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative lg:w-1/5 text-center px-4"
              >
                <div className="w-16 h-16 mx-auto bg-luxury-ivory border border-luxury-gold/50 rounded-full flex items-center justify-center mb-6 shadow-sm z-20 relative text-xl font-serif text-luxury-gold">
                  {step.number}
                </div>
                <h3 className="text-lg font-serif tracking-widest text-luxury-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-luxury-charcoal/70 font-light text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
