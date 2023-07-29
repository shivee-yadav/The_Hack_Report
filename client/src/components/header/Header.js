import React from 'react';
import "./Header.css";
import  cbs2 from "../../assets/cbs2.webp" ;
import Button from '../UI/button/Button';
import '../UI/button/Button.css';
import { BsMouse } from "react-icons/bs";

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
             from cyber threats.</p>
        <div className="header-cta">
        <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"} />
        <Button text={"How it works"} btnClass={"btn-orange"} href={"#faq"} />
        </div>
        </div>
        <div className="header-right">
          <img src={cbs2} alt="cbs2" />
        </div>
    </div>
    <div className="floating-icon">
      <a href="#features">
        <BsMouse color='#fff' size={25} className='mouse'/>
      </a>
    </div>
  </section>
  )
}

export default Header;
