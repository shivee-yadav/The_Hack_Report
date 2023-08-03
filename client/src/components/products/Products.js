import React from 'react';
import "./Products.css"
import "./ProductCard";
import ProductCard from './ProductCard';
import { productList } from './data';

const Products = () => {
  return (
    <section id='products'>
      <div className="container products">
        <div className="u-title">
          
          <h2>our products</h2>
          <p className="out-title">
          See security differently in multiple ways
          </p>
        </div>
        
          <div className="products-right">
            {
              productList.map((product) => (
                <ProductCard key={product.id} img={product.img}
                heading={product.heading} text={product.text}/>
              ))
            }
          </div>
       
      </div>
    </section>
  )
}

export default Products
