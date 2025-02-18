import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ScrapListing = () => {
  const [formData, setFormData] = useState({
    scrapType: '',
    quantity: '',
    description: '',
    location: '',
    contactNumber: '',
    pickupDate: new Date(),
    images: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-b from-green-900 to-green-700 min-h-screen text-white">
      

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
            <li>
              <Link 
                to="/scrap-listing" 
                className="hover:text-green-300 font-medium transition-colors text-green-100"
              >
                Sell Scrap
              </Link>
            </li>
            <li>
              <motion.a
                href="#"
                className="bg-green-300 text-green-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Dashboard</span>
                <motion.span 
                  animate={{ x: [-2, 2, -2] }} 
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  →
                </motion.span>
              </motion.a>
            </li>
          </ul>
        </nav>

        {/* Main Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-4 py-12"
        >
          <div className="bg-green-900/30 p-8 rounded-xl backdrop-blur-sm border border-green-700/50">
            <h2 className="text-3xl font-bold mb-8 text-green-50 text-center">
              List Your Scrap Materials
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-green-300 mb-4">Contact Details</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
              </motion.div>

              {/* Scrap Details */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-green-300 mb-4">Scrap Details</h3>
                
                <select
                  className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                >
                  <option value="">Select Scrap Type</option>
                  <option>Metal</option>
                  <option>Wood</option>
                  <option>Plastic</option>
                  <option>Glass</option>
                  <option>Textiles</option>
                  <option>Electronics</option>
                </select>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Approximate Weight (kg)"
                    className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Dimensions (optional)"
                    className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <textarea
                  placeholder="Additional Description"
                  className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400 h-32"
                />
              </motion.div>

              {/* Pickup Details */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-green-300 mb-4">Pickup Details</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <DatePicker
                    selected={formData.pickupDate}
                    onChange={(date) => setFormData({ ...formData, pickupDate: date })}
                    className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholderText="Select Preferred Pickup Date"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="w-full bg-green-900/20 border border-green-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
              </motion.div>

              {/* Terms and Submit */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm bg-green-900/20 border-green-600 checked:bg-green-400 checked:border-green-400"
                    required
                  />
                  <span className="text-sm text-green-200">
                    I agree to the terms of scrap collection and recycling process
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-green-300 text-green-900 py-3 rounded-full font-bold shadow-lg mt-6"
                >
                  Schedule Free Pickup
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>

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
};

export default ScrapListing;