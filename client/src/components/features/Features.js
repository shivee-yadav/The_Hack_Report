import React from 'react';
import "./Features.css";
import Feature from './Feature.js';
import { featureList } from './data';


import  cbs4 from "../../assets/cbs4.webp" ;
import { BsFillBookmarkStarFill } from "react-icons/bs";

const Features = () => {
  return (
    <section id='features'>
      <div className="container features">
        <div className="proc u-title">
          {/* <BsFillBookmarkStarFill className="star" color='orangered' size={30}/> */}
          <h2>Core Features</h2>
          <p className="our-title">
          We are an independent software testing services company helping enterprises deliver unique user experience through next-gen software applications.
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
              <img src={cbs4} alt="cbs4" />
          </div>
          <div className="features-right">
            {
              featureList.map((feature) => (
                <Feature key={feature.id} icon={feature.icon}
                heading={feature.heading} text={feature.text}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
