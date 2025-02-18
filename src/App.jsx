import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';




import Home from './components/Home';
import Products from './components/ProductPage';
import ScrapListing from './components/Scrap';

import './index.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products/>}/>
        <Route path='/scrap' element={<ScrapListing/>}/>
        
      </Routes>
      
    </Router>
  );
}

export default App;