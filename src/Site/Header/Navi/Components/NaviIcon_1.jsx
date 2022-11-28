import React from "react";
import "../navi.css";
import { useSelector } from 'react-redux';
import {FaShoppingCart} from 'react-icons/fa'
import styled from "styled-components";

const CartNumber = styled.span`
  position: absolute;
  z-index: 2;
  top: 7px;
  right: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5 5px;
  min-width: 16px;
  height: 16px;
  width: 16px;
  color: #fff;
  background: #ff5b16;
  border-radius: 20px;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -1px;
  display: ${props=>props.valid===0?'none':'flex'};
`

function NaviIcon (props) {

  const number = useSelector(state => state.goodsReducer.goods);

  return (
    <>
      {props.image==='cart'?
        <>
          <CartNumber valid={number}>
            {number}
          </CartNumber>
          <div>
            <FaShoppingCart size='20'/>
          </div>
        </>:
        <div id="NaviIcon">
          <img 
            src={props.image} 
            style={{width:"20px"}} />
        </div>
        }
    </>
  );
}

export default NaviIcon;
