import React from 'react';
import "./Feature.css";
import { BsHexagon } from "react-icons/bs";


const feature = ({icon,heading,text}) => {
  return (
    <div className='feature' data-aos="fade-up">
      <div className="feature-icon">
        <BsHexagon color='orangered' size={55} />
        <div className="inner-icon">
         {icon}
        </div>
      </div>
      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
     
    </div>
  )
}

export default feature
