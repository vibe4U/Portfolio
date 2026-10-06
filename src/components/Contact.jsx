import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guests: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New Event Inquiry: ${formData.eventType} - ${formData.name}`;
    const body = `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Event Details:
Type: ${formData.eventType}
Date: ${formData.eventDate || 'Not specified'}
Guests: ${formData.guests || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}

Message:
${formData.message}`;

    window.location.href = `mailto:vibe4uevents@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-luxury-ivory border-t border-luxury-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-6 leading-tight">
              LET'S CREATE SOMETHING<br />
              <span className="text-gradient">UNFORGETTABLE.</span>
            </h2>
            <p className="text-luxury-charcoal/70 text-lg mb-12 font-light leading-relaxed">
              Tell us about your event and let VIBE4U bring your vision to life.
            </p>

            <div className="space-y-8">
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-luxury-charcoal/60 mb-2">Email Us</span>
                <a href="mailto:vibe4uevents@gmail.com" className="text-xl font-serif text-luxury-charcoal hover:text-luxury-gold transition-colors">
                  vibe4uevents@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-luxury-charcoal/60 mb-2">Call Us</span>
                <div className="flex flex-col space-y-2">
                  <a href="tel:8919318077" className="text-xl font-serif text-luxury-charcoal hover:text-luxury-gold transition-colors">
                    8919318077
                  </a>
                  <a href="tel:9666220658" className="text-xl font-serif text-luxury-charcoal hover:text-luxury-gold transition-colors">
                    9666220658
                  </a>
                </div>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-luxury-charcoal/60 mb-2">Follow Us</span>
                <a href="https://www.instagram.com/vibe4u_events?stkn=MWgxZDFxMnE1Nml1Ng==" target="_blank" rel="noopener noreferrer" className="text-xl font-serif text-luxury-charcoal hover:text-luxury-gold transition-colors">
                  Instagram
                </a>
              </div>
              
              <div className="pt-8">
                <a 
                  href="https://wa.me/918919318077" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white tracking-widest uppercase text-sm hover:bg-[#128C7E] transition-colors duration-300 rounded-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-luxury-white p-8 md:p-12 shadow-sm rounded-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-charcoal/40 font-light" required />
                </div>
                <div>
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-charcoal/40 font-light" required />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-charcoal/40 font-light" required />
                </div>
                <div>
                  <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors font-light appearance-none" required>
                    <option value="" disabled className="text-luxury-charcoal/40">Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Party">Party</option>
                    <option value="Conference">Conference</option>
                    <option value="Stage Production">Stage Production</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors font-light" />
                </div>
                <div>
                  <input type="number" name="guests" placeholder="Expected Guests" value={formData.guests} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-charcoal/40 font-light" />
                </div>
                <div className="md:col-span-2">
                  <input type="text" name="budget" placeholder="Estimated Budget" value={formData.budget} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-charcoal/40 font-light" />
                </div>
                <div className="md:col-span-2">
                  <textarea name="message" placeholder="Tell us more about your vision..." value={formData.message} onChange={handleChange} rows={4} className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-charcoal/40 font-light resize-none" required></textarea>
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-luxury-charcoal text-luxury-white tracking-widest uppercase text-sm hover:bg-luxury-gold transition-colors duration-300 rounded-sm mt-4">
                START PLANNING
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
