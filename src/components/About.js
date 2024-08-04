import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-content">
        <img src={process.env.PUBLIC_URL + '/about.jpg'} alt="About Us" className="about-image" />
        <p>
          Welcome to our Shoe Brands Website. Our mission is to provide you with the best information
          on the most popular shoe brands and their top-selling products. We strive to keep you updated 
          with the latest trends and help you make informed decisions when it comes to choosing the perfect 
          pair of shoes. Our team is dedicated to bringing you high-quality content and a seamless user 
          experience. Thank you for visiting our website, and we hope you enjoy exploring the world of 
          shoes with us.
        </p>
      </div>
    </div>
  );
};

export default About;
