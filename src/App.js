import React from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Home from "./Routes/Home"
import Services from "./Routes/Services"
import Projects from "./Routes/Projects"
import Skills from "./Routes/Skills"
import About from "./Routes/About"
import Contact from "./Routes/Contact"
function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
