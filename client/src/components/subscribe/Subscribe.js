import React from 'react';
import "./Subscribe.css";
import { FaLinkedin , FaTwitter, FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";


const Subscribe = () => {
  return (
    <section id='subscribe'>
     <div className="container subscribe">
      <h2>Contact us</h2>
      <p>With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed to websites in search for information.</p>
      <form >
        <div className="form-control">
          <input type="text" placeholder='Enter your Name'  />
          <input type="text" placeholder='Enter your Email' />
          <input type="text" placeholder='Enter your phone number' />
          <input type="text" placeholder='Message' />
          <button>submit</button>
        </div>
      </form>
      <div className="social-icons">
        <div className="social-icon">
          <FaTwitter />
        </div>
        <div className="social-icon">
          <FaFacebookSquare />
        </div>
        <div className="social-icon">
          <FaLinkedin />
        </div>
        <div className="social-icon">
          <FaInstagramSquare />
        </div>
      </div>
     </div>
    </section >
  )
}

export default Subscribe
