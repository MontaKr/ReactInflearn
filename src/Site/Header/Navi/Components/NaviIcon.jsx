import React from "react";
import "../navi.css";
import { useSelector } from 'react-redux';
import {FaShoppingCart} from 'react-icons/fa'
import {FaRegBell} from 'react-icons/fa';
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    <div id="NaviIcon">
      {props.image==='cart'?
        <div id="NaviCart">
          <CartNumber valid={number}>
            {number}
          </CartNumber>
          <Link to="/realCart" style={{textDecoration : 'none' ,color: 'inherit'}}>
            <div>
              <FaShoppingCart size='20'/>
            </div>
          </Link>
        </div>:
        <>
          {props.image==='bell'?
            <>
              <div id="NaviBell">
                <FaRegBell size='20' />
              </div>
            </>:
            <>
              <div id="NaviUser">
                <img 
                src={props.image} 
                style={{width:"20px"}} />
              </div>
            </>
          }
        </>
        
        }
    </div>
  );
}

export default NaviIcon;
