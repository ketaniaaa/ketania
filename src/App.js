import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
//Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
//Work Imports
import ScrollTroll from './pages/ScrollTroll';
import HandsUp from './pages/HandsUp';
import Swiftify from './pages/Swiftify';
//Component Imports 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
class App extends Component {
  render(){
    return (
      <div className="App">
    

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Work" element={<Work />} />
          <Route exact path="/Contact" element={<Contact />} />

          {/* Work */}
           <Route exact path="/HandsUp" element={<HandsUp />} />
          <Route exact path="/ScrollTroll" element={<ScrollTroll />} />
            <Route exact path="/Swiftify" element={<Swiftify />} />
        
          
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;