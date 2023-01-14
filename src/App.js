import React from 'react'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TokenSec from './components/TokenSec';


function App() {
  return (
    <div className='font-sans'>
      <Navbar/>
      <div>
        <Home/>
        <About/>
        <TokenSec/>
      </div>
    </div>
  );
}

export default App;
