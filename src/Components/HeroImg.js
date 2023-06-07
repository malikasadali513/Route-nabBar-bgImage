import React from 'react';
import "./HeroImgStyle.css";
import bgImage from '../assets/backgroundimg.jpg';
import { Link } from 'react-router-dom';
const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={bgImage} alt='bg-image'/>
      </div>
      <div className='content'>
        <p>HI, I m Freelancer</p>
        <h1>Full Stack developer</h1>
        <Link to="/projects" className='btn'>Projects</Link>
        <Link to="/contact" className='btn btn-light'>Contact</Link>
      </div>
      </div>
      
  )
}

export default HeroImg
