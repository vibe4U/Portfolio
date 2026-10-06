import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyVibe4U from './components/WhyVibe4U';
import Process from './components/Process';
import Founders from './components/Founders';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-luxury-ivory text-luxury-charcoal font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyVibe4U />
        <Process />
        <Founders />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
