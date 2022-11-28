import React, { useState } from 'react';
import '../section5.css';
import {FaCartPlus} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import './card.css';
import { Link } from 'react-router-dom';


function Section5Card({product, InCart, setInCart}) {

  
  const [isHovering,setIsHovering] = useState(0);
  const dispatch = useDispatch();

  const reConvertPrice = (price) => {
    return price.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  } 

  const handleCart = () => {
    const cartItem = {
      id : product.id,
      image : product.image,
      provider : product.provider,
      price : product.price,
      name : product.name
    }
    setInCart([...InCart, cartItem])
  }

  console.log(InCart)

  return (
   <div>
    <div id='CardWrap'>
          <div>
            <img id='Section5CardImg' src={product.image} />
          </div>
          <div>
            <FaCartPlus size='20' style={{color:'black', position:'relative', top:'124px', left:'130px', cursor:'pointer'}} onClick={()=>{dispatch({type:"ADD"}); handleCart()}} />
          </div>
          
          <div id='CardBot'>
          <Link to={`/lecturePrecise/${product.id}`} style={{textDecoration:'none', color: 'inherit' }}>
            <div div id='CardBotName'>
              {product.name}
            </div>
            <div id='CardBotProvider'>
              {product.provider}
            </div>
          </Link>
            <div id='CardBotBPrice'>
              ₩{reConvertPrice(product.price)}
            </div>
            <div id='CardBotTag'>
              {product.people?
              <span id='CardBotTagPeople'>
                {product.people}명
              </span>:
              <>
                <span id='CardBotTagNew'>
                  {product.new}
                </span>
                <span id='CardBotTagSale'>
                  {product.sale}
                </span>
              </>}            
          </div>          
        </div>
      </div>  
   </div>
  )
}

export default Section5Card;
