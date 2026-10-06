import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-luxury-white pt-20 pb-10 border-t border-luxury-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="text-3xl font-serif font-bold tracking-widest text-luxury-charcoal block mb-4">
              VIBE4U<span className="text-luxury-gold">.</span>
            </a>
            <p className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-medium mb-6">
              WE PLAN YOU CELEBRATE
            </p>
            <p className="text-luxury-charcoal/60 text-sm font-light leading-relaxed">
              Premium event management creating unforgettable experiences across weddings, parties, and corporate events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif tracking-widest uppercase text-luxury-charcoal mb-6">Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-luxury-charcoal/60 hover:text-luxury-gold transition-colors text-sm font-light uppercase tracking-wider">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif tracking-widest uppercase text-luxury-charcoal mb-6">Services</h4>
            <ul className="space-y-4">
              {['Weddings', 'Parties', 'Conferences', 'Stage Productions'].map((service) => (
                <li key={service}>
                  <span className="text-luxury-charcoal/60 text-sm font-light uppercase tracking-wider">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Founders */}
          <div>
            <h4 className="font-serif tracking-widest uppercase text-luxury-charcoal mb-6">Founders</h4>
            <ul className="space-y-4">
              {['Navadeep', 'Manideep', 'Nikhila', 'Sanjana'].map((founder) => (
                <li key={founder}>
                  <span className="text-luxury-charcoal/60 text-sm font-light uppercase tracking-wider">
                    {founder}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif tracking-widest uppercase text-luxury-charcoal mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:vibe4uevents@gmail.com" className="text-luxury-charcoal/60 hover:text-luxury-gold transition-colors text-sm font-light">
                  vibe4uevents@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:8919318077" className="text-luxury-charcoal/60 hover:text-luxury-gold transition-colors text-sm font-light block">
                  8919318077
                </a>
                <a href="tel:9666220658" className="text-luxury-charcoal/60 hover:text-luxury-gold transition-colors text-sm font-light block mt-2">
                  9666220658
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/vibe4u_events?stkn=MWgxZDFxMnE1Nml1Ng==" target="_blank" rel="noopener noreferrer" className="text-luxury-charcoal/60 hover:text-luxury-gold transition-colors text-sm font-light block mt-2">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-luxury-charcoal/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-luxury-charcoal/50 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} VIBE4U. All Rights Reserved.
          </p>
          <p className="text-luxury-charcoal text-sm font-serif italic">
            DREAM • PLAN • CELEBRATE • WITH VIBE4U
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
