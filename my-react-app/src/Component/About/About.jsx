import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-right">
        <img src={about_img} alt="About Us" className='about-img' />
        <img src={play_icon} alt="Play Icon" className='play-icon' />
      </div>
      <div className="about-left">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>We are committed to providing a transformative educational experience that equips students with the knowledge and skills needed to succeed in a globalized world.</p>
        <p>Our university offers a wide range of programs, from undergraduate to postgraduate, designed to foster creativity, critical thinking, and leadership in our students.</p>
        <p>With a rich history of excellence in teaching and research, we aim to create a vibrant community that empowers students to thrive academically, socially, and professionally.</p>
      </div>
    </div>
  );
};

export default About;
