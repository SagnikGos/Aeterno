import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gradient-to-b from-green-900 to-green-700 min-h-screen text-white">
      {/* Background Image with Overlay
      <div className="absolute inset-0 z-0">
        <img 
          src="src/assets/1.png" 
          alt="Forest Background"
          className="z-2"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 to-green-800/90 z-1" />
      </div> */}

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-green-100">
            <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
              Aeterno
            </span>
            <p className="text-sm mt-1">Crafting tomorrow from yesterday</p>
          </div>
          
          <ul className="flex items-center gap-6">
            {['Products', 'Artists', 'B2B', 'Blog'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="hover:text-green-300 font-medium transition-colors text-green-100"
                >
                  {item}
                </a>
              </li>
            ))}
            
            <li>
              <motion.a
                href="#"
                className="bg-green-300 text-green-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <motion.span 
                  animate={{ x: [-2, 2, -2] }} 
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  →
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-50">
            Transform Waste into<br/>
            <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
              Timeless Creations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-200 max-w-3xl mx-auto mb-8">
            Bridging the gap between sustainable recycling and artistic innovation. 
            Empower artisans while reducing environmental impact.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-300 text-green-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg"
            >
              Browse Collection
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-green-300 text-green-100 px-8 py-3 rounded-full font-bold shadow-lg"
            >
              Join as Artist
            </motion.button>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            {[
              { value: '850+', label: 'Tonnes Waste Saved' },
              { value: '2.3k+', label: 'Artisan Partners' },
              { value: '15k+', label: 'Upcycled Products' },
              { value: '₹4.2Cr+', label: 'Artist Earnings' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center bg-green-900/30 p-4 rounded-xl backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-green-300">{stat.value}</div>
                <div className="text-sm text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div 
          className="max-w-7xl mx-auto py-20 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-green-50">Our Circular Economy Model</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                title: 'List Scrap Materials',
                desc: 'Businesses & individuals list recyclable materials',
                icon: '♻️'
              },
              { 
                title: 'Eco-Collection',
                desc: 'Scheduled pickup by our green logistics partners',
                icon: '🚚'
              },
              { 
                title: 'Artisan Transformation',
                desc: 'Skilled artisans create beautiful upcycled products',
                icon: '🎨'
              },
              { 
                title: 'Sustainable Purchase',
                desc: 'Buy unique eco-friendly products directly',
                icon: '🛒'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="p-6 bg-green-900/30 rounded-xl backdrop-blur-sm hover:bg-green-900/40 transition-all"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring' }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-green-50">{step.title}</h3>
                <p className="text-green-200">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="bg-green-900/40 py-16 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-50">
              Ready to Transform Your Business Waste?
            </h2>
            <p className="text-green-200 mb-8">
              Join 500+ companies already reducing their environmental impact
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-300 text-green-900 px-8 py-3 rounded-full font-bold shadow-lg"
            >
              Start Scrap Subscription
            </motion.button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-green-800 mt-20 py-12 bg-green-900/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-green-50">Aeterno</h3>
              <p className="text-green-200 text-sm">
                Bridging sustainability and craftsmanship through innovative upcycling solutions.
              </p>
            </div>
            
            {[
              { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
              { title: 'Resources', links: ['Artisan Hub', 'Business Solutions', 'Sustainability Report', 'FAQs'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Contact'] }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-green-50">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-green-200 hover:text-green-300 text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;