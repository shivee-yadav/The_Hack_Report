import React from 'react';
import "./Header.css";
import  THR1 from "../../assets/THR1.jpg" ;
import Button from '../UI/button/Button';
import '../UI/button/Button.css';

const Header = () => {
  return (
    <section id='header'>
    <div className="container header">
        <div className="header-left">
          <h1>
            <span>One Stop For All Your Cybersecurity Needs!</span>
            <span>Your all time cybersecurity partner</span>
          </h1>
          <p className='u-text-small u-text-light'>
             Welcome to TheHackReport! We specialize in top-notch penetration testing services, empowering businesses of all sizes
             and industries to strengthen their security. Unveil vulnerabilities, gain valuable insights, and protect your organization 
             from cyber threats. Achieve peace of mind with our expert team as your trusted security partner. Contact us today for a secure tomorrow.</p>
        <div className="header-cta">
        <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"} />
        <Button text={"How it works"} btnClass={"btn-orange"} href={"#faq"} />
        </div>
        </div>
        <div className="header-right">
          <img src={THR1} alt="THR1" />
        </div>
    </div>
  </section>
  )
}

export default Header;
