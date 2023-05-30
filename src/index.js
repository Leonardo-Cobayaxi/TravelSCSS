import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/JoinUs';
import Pricing from './components/Pricing';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  </Router>,
);

