import axios from 'axios';
import React, { useEffect } from 'react';
import "../section5.css";
import Section5Card from './Section5Card';
import { useState } from 'react';


function Section5Bottom({Inproducts, setInproducts, InCart, setInCart}) {

  
  useEffect (()=> {
    axios.get("/data/products.json").then((data)=>{
      setInproducts(data.data.products);
    });
  },[setInproducts]);

  return (
    <div id='Section5Bottom'>
      {
        Inproducts.map((product)=>{
          return <Section5Card key={`key-${product.id}`} product={product} InCart={InCart} setInCart={setInCart}/>
        })
      }
    </div>
  )
}

export default Section5Bottom;
