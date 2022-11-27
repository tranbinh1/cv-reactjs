import React from 'react';
import './assets/boostrap.css';
import './assets/topbar.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <>
      <Header />
      <About ProgressBar={ProgressBar}/>
    </>
  );
}

export default App;
