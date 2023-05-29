import React from 'react'
import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import { Data } from './components/Data'
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Section slides={Data} />
      <Product />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
