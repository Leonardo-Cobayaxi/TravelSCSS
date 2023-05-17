import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Places from './components/Places';
import Pricing from './components/Pricing';
import About from './components/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/places' element={<Places />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </Router>,
);

