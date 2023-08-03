import React from "react";
import "./ProductCard.css";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";



const ProductCard = () => {
  return (
   
    <div class="card" >
  <img class="card-img-top" src="https://www.bugcrowd.com/wp-content/uploads/2022/04/icon-bug-bounty.svg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    <Button text={"Learn More"} btnClass={"btn-orange"} href={"#faq"} />
  </div>


  );
};

export default ProductCard;
