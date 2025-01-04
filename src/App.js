import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footor from './Footor';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Gallery from './Component/Gallery/Gallery';
import Contact from './Component/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
          <Route path='/Service' element={<Service/>}></Route>
          <Route path='/Gallery' element={<Gallery/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        <Footor/>
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
