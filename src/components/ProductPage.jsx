import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Wood Console Table",
      artist: "Artisan Woodworks",
      materials: ["Teak", "Iron"],
      price: 18999,
      impact: 22,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 2,
      name: "Industrial Pipe Bookshelf",
      artist: "Metal & Wood Studio",
      materials: ["Recycled pipes", "Pine wood"],
      price: 25499,
      impact: 18,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 3,
      name: "Upcycled Metal Wall Art",
      artist: "Steel Canvas",
      materials: ["Scrap metal", "Copper"],
      price: 12499,
      impact: 15,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 4,
      name: "Vintage Wooden Chair Set",
      artist: "Retro Furnishings",
      materials: ["Mahogany", "Brass"],
      price: 32999,
      impact: 25,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 5,
      name: "Recycled Glass Coffee Table",
      artist: "Eco Glassworks",
      materials: ["Recycled glass", "Steel"],
      price: 27999,
      impact: 20,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 6,
      name: "Bamboo Room Divider",
      artist: "Green Bamboo Crafts",
      materials: ["Bamboo", "Hemp"],
      price: 18999,
      impact: 12,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 7,
      name: "Upcycled Tire Ottoman",
      artist: "Eco Seating",
      materials: ["Recycled tires", "Cotton"],
      price: 8999,
      impact: 8,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 8,
      name: "Recycled Paper Wall Art",
      artist: "Paper Creations",
      materials: ["Recycled paper", "Natural dyes"],
      price: 7499,
      impact: 5,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 9,
      name: "Salvaged Wood Dining Table",
      artist: "Rustic Tables",
      materials: ["Reclaimed wood", "Iron"],
      price: 45999,
      impact: 30,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 10,
      name: "Upcycled Barrel Chair",
      artist: "Barrel Designs",
      materials: ["Recycled barrels", "Fabric"],
      price: 15999,
      impact: 10,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 11,
      name: "Recycled Metal Sculpture",
      artist: "Iron Art Studio",
      materials: ["Scrap metal", "Copper"],
      price: 19999,
      impact: 18,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 12,
      name: "Eco-Friendly Bamboo Lamp",
      artist: "Light & Nature",
      materials: ["Bamboo", "LED"],
      price: 12999,
      impact: 7,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 13,
      name: "Recycled Glass Vase Set",
      artist: "Eco Glassworks",
      materials: ["Recycled glass"],
      price: 8999,
      impact: 6,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 14,
      name: "Upcycled Pallet Sofa",
      artist: "Pallet Designs",
      materials: ["Recycled pallets", "Foam"],
      price: 28999,
      impact: 22,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 15,
      name: "Recycled Fabric Rug",
      artist: "Textile Revival",
      materials: ["Recycled cotton", "Wool"],
      price: 14999,
      impact: 9,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 16,
      name: "Salvaged Wood Headboard",
      artist: "Bedroom Designs",
      materials: ["Reclaimed wood"],
      price: 21999,
      impact: 15,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 17,
      name: "Upcycled Bottle Chandelier",
      artist: "Light & Glass",
      materials: ["Recycled glass", "Brass"],
      price: 34999,
      impact: 12,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 18,
      name: "Recycled Metal Planters",
      artist: "Green Thumb Designs",
      materials: ["Scrap metal"],
      price: 7999,
      impact: 6,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 19,
      name: "Upcycled Record Clock",
      artist: "Time & Vinyl",
      materials: ["Recycled vinyl", "Metal"],
      price: 5999,
      impact: 3,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
    {
      id: 20,
      name: "Recycled Wood Mirror",
      artist: "Reflections Studio",
      materials: ["Reclaimed wood", "Glass"],
      price: 17999,
      impact: 14,
      image: "/src/assets/Green Floral Background Flyer (1).png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-900 to-green-700 min-h-screen text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-green-300">
          <Link
            to="/"
            className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent"
          >
            Aeterno
          </Link>
          <p className="text-sm mt-1">Crafting tomorrow from yesterday</p>
        </div>

        <ul className="flex items-center gap-6">
          {["Products", "Artists", "B2B", "Blog"].map((item) => (
            <li key={item}>
              <Link
                to="#"
                className="hover:text-green-400 font-medium transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}

          <li>
            <motion.a
              href="#"
              className="bg-green-400 text-green-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Cart (2)</span>
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

      {/* Products Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        {/* Advanced Filters Toggle */}
        {/* Advanced Filters Toggle */}
        <div className="flex justify-end mb-4">
          <motion.button
            onClick={() => setShowAdvancedFilters((prev) => !prev)}
            className="bg-green-800/30 border-2 border-green-700/50 rounded-full px-6 py-3 flex items-center gap-2 hover:border-green-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">
              {showAdvancedFilters ? "Hide Filters" : "Advanced Filters"}
            </span>
            <motion.span
              animate={{ rotate: showAdvancedFilters ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-green-400 text-lg"
            >
              ▼
            </motion.span>
          </motion.button>
        </div>

        {/* Advanced Filter Panel */}
        <AnimatePresence>
          {showAdvancedFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 overflow-hidden"
            >
              <div className="bg-green-800/30 p-6 rounded-xl border-2 border-green-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6 text-green-300 border-b border-green-700/50 pb-4">
                  Refine Your Search
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-4 text-green-400 uppercase tracking-wider">
                      Product Category
                    </h4>
                    <div className="space-y-3">
                      {["Furniture", "Decor", "Art"].map((category) => (
                        <motion.label
                          key={category}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-3 group cursor-pointer"
                        >
                          <div className="relative">
                            <input type="checkbox" className="sr-only" />
                            <div className="w-5 h-5 rounded-md bg-green-900/30 border-2 border-green-700/50 flex items-center justify-center group-hover:border-green-400 transition-colors">
                              <svg
                                className="w-3 h-3 text-green-400 opacity-0 check-animation"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          </div>
                          <span className="text-sm text-green-200 group-hover:text-green-400 transition-colors">
                            {category}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Materials Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-4 text-green-400 uppercase tracking-wider">
                      Materials Used
                    </h4>
                    <div className="space-y-3">
                      {["Wood", "Metal", "Glass", "Fabric", "Plastic"].map(
                        (material) => (
                          <motion.label
                            key={material}
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-3 group cursor-pointer"
                          >
                            <div className="relative">
                              <input type="checkbox" className="sr-only" />
                              <div className="w-5 h-5 rounded-md bg-green-900/30 border-2 border-green-700/50 flex items-center justify-center group-hover:border-green-400 transition-colors">
                                <svg
                                  className="w-3 h-3 text-green-400 opacity-0 check-animation"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                            </div>
                            <span className="text-sm text-green-200 group-hover:text-green-400 transition-colors">
                              {material}
                            </span>
                          </motion.label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-4 text-green-400 uppercase tracking-wider">
                      Price Range (₹)
                    </h4>
                    <div className="flex items-center space-x-3">
                      <div className="relative flex-1">
                        <input
                          type="number"
                          placeholder="Min"
                          className="w-full bg-green-900/30 text-white rounded-lg px-4 py-2 border-2 border-green-700/50 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition-all"
                        />
                      </div>
                      <span className="text-green-400">-</span>
                      <div className="relative flex-1">
                        <input
                          type="number"
                          placeholder="Max"
                          className="w-full bg-green-900/30 text-white rounded-lg px-4 py-2 border-2 border-green-700/50 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-green-700/50 flex justify-end gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full font-medium border-2 border-green-700/50 text-green-300 hover:border-green-400 hover:text-green-400 transition-colors"
                  >
                    Reset Filters
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full font-medium bg-green-400/90 text-green-900 hover:bg-green-400 transition-colors"
                  >
                    Apply Filters
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-green-800/30 rounded-xl overflow-hidden border border-green-700/50"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    ♻️ {product.impact}kg saved
                  </span>
                </div>

                <p className="text-green-300 text-sm mb-2">
                  By {product.artist}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.materials.map((material) => (
                    <span
                      key={material}
                      className="bg-green-900/40 px-2 py-1 rounded-md text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-green-400">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-400 text-green-900 px-4 py-2 rounded-full font-medium flex items-center gap-2"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          {[1, 2, 3, 4].map((page) => (
            <motion.button
              key={page}
              whileHover={{ y: -2 }}
              className={`px-4 py-2 rounded-full ${
                page === 1
                  ? "bg-green-400 text-green-900"
                  : "bg-green-800/30 text-white hover:bg-green-700/40"
              }`}
            >
              {page}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-green-800 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Aeterno</h3>
            <p className="text-green-200 text-sm">
              Bridging sustainability and craftsmanship through innovative
              upcycling solutions.
            </p>
          </div>

          {[
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            {
              title: "Resources",
              links: [
                "Artisan Hub",
                "Business Solutions",
                "Sustainability Report",
                "FAQs",
              ],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security", "Contact"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-green-200 hover:text-green-400 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Products;
