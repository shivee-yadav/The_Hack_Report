import React from 'react';
import "./Footer.css"
import  logo from "../../assets/THR-logo.jpg" ;
const Footer = () => {
  return (
    <footer id='footer'>
    <div className='container footer'>
      <div className="footer-box">
        <h4>Products</h4>
        <div className="footer-links">
          <a href="#">&bull; Web Application Pen Test</a>
          <a href="#">&bull; Cloud Pen Test</a>
          <a href="#">&bull; Thick Client Pen Test</a>
          <a href="#">&bull; API Pen Test</a>
          <a href="#">&bull; Mobile App Pen Test</a>
          <a href="#">&bull; IoT Pen Test</a>
        </div>
      </div>
      <div className="footer-box">
      <h4>News</h4>
        <div className="footer-links">
          <a href="#">&bull; Cyber Attacks</a>
          <a href="#">&bull; Data Breaches</a>
          <a href="#">&bull; Industry News</a>
          <a href="#">&bull; Uncategorized</a>
          <a href="#">&bull; Vulnerabilities</a>
          <a href="#">&bull; Archives</a>
        </div>
      </div>
      <div className="footer-box">
      <h4>About</h4>
        <div className="footer-links">
          <a href="#">&bull; About Us</a>
          <a href="#">&bull; Leaders</a>
          <a href="#">&bull; Customers</a>
          <a href="#">&bull; Partners</a>
          <a href="#">&bull; Careers</a>
          <a href="#subscribe">&bull; Contact Us</a>
        </div>
      </div>
      <div className="footer-box">
        <img src={logo} alt="logo" />
      </div>
    </div>
    </footer>
  )
}

export default Footer
