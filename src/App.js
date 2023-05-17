import React from 'react'
import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import { Data } from './components/Data'
function App() {
  return (
    <div className="App">
      <Header />
      <Section slides={Data} />
    </div>
  );
}

export default App;
