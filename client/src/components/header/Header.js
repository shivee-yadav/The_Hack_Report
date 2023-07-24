import React from 'react';
import "./Header.css";
import  THR4 from "../../assets/THR4.jpg" ;

const Header = () => {
  return (
    <section id='header'>
    <div className="container header">
        <div className="header-left">
          <h1>
            <span>One Stop For All Your Cybersecurity Needs!</span>
            <span>Your all time cybersecurity partner</span>
          </h1>
          <p>Welcome to TheHackReport! We specialize in top-notch penetration testing services, empowering businesses of all sizes
             and industries to strengthen their security. Unveil vulnerabilities, gain valuable insights, and protect your organization 
             from cyber threats. Achieve peace of mind with our expert team as your trusted security partner. Contact us today for a secure tomorrow.</p>
        </div>
        <div className="header-right">
          

        </div>
    </div>
  </section>
  )
}

export default Header;
