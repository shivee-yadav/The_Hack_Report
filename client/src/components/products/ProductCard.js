import React from "react";
import "./ProductCard.css";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";



const ProductCard = ({img,heading,text}) => {
  return (
   
    <div class="card" data-aos="fade-right" >
      <div class="card-img-top">{img}</div>
      <div class="card-body">
      <h5 class="card-title">{heading}</h5>
      <p class="card-text">{text}</p>
      <a href="#" class='card-link'></a>
    </div>
    <div className="button">
    <Button text={"Learn More"} btnClass={"btn-orange"} href={"#faq"} />
    </div>
    
    </div>


  );
};

export default ProductCard;
