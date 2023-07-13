import React from 'react';
import { motion } from 'framer-motion';
import "./css/AboutUs.css"

function AboutUs() {
  return (
    <div className="about-us-container">
      <motion.article
        className="about-us-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-text">
          At our company, we are dedicated to helping you achieve your weight loss goals in a healthy and sustainable way.
        </p>
        <p className="about-us-text">
          Our team of experts is passionate about providing personalized guidance and support to each individual on their weight loss journey.
        </p>
        <p className="about-us-text">
          We offer a range of services including customized meal plans, exercise programs, and ongoing monitoring to ensure your success.
        </p>
        <p className="about-us-text">
          Our goal is to empower you with the knowledge, tools, and motivation needed to make positive changes and reach your desired weight.
        </p>
      </motion.article>
    </div>

    

    
  );
}

export default AboutUs;