import React from 'react';
import './HomePage.css';
import oilchange from '../assets/oil-change.jpeg'; 
import tirerotation from '../assets/tirerotation.jpeg';
import brake from '../assets/brake.jpeg';

const HomePage2 = () => {
  return (
    <div className="home-container">
    
          <h2>Your Trusted Partner for Vehicle Maintenance</h2>
          <p>Experience hassle-free service right at your doorstep.</p>
          <br></br>
          <br></br>
          <a href="#services" className="cta-button">
            Explore Our Services
          </a>
        
    
        <h2>Our Services</h2>
      <section id="services" className="services">
        <div className="service-card">
          <img src={oilchange} alt="Oil Change" />
          <h3>Oil Change</h3>
          <p>Regular oil changes to keep your engine running smoothly.</p>
        </div>
        <div className="service-card">
          <img src={tirerotation} alt="Tire Rotation" />
          <h3>Tire Rotation</h3>
          <p>Ensure even tire wear and extend the life of your tires.</p>
        </div>
        <div className="service-card">
          <img src={brake} alt="Brake Inspection" />
          <h3>Brake Inspection</h3>
          <p>Professional brake inspections and maintenance services.</p>
        </div>
        {/* Add more service cards as needed */}
      </section>
      <section id="promotions" className="promotions">
        <h2>Current Promotions</h2>
        <div className="promotion-card">
          <h3>First-Time Customers</h3>
          <p>Get 10% off on your first service with us!</p>
        </div>
        {/* Add more promotion cards as needed */}
      </section>
  
    </div>
  );
};

export default HomePage2;