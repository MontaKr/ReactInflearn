import React from 'react'
import styled from 'styled-components';
import './cartHeader.css'

const CartHeaderWrap = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    width: 828px;
    border-bottom: 1px solid #1b1c1d;
    padding-bottom: 12px;
    position: relative;
    left:55px;
`

const HeaderLeft = styled.div`
  line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    position: relative;
    margin-left: 0;
`

function CartHeader() {
  return (
    <CartHeaderWrap>
      <HeaderLeft>
        <input id='HeaderInput' /> 
        <label id='HeaderLabel'>
          <span id='IconCheck'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7801 4.21983C13.9205 4.36045 13.9994 4.55108 13.9994 4.74983C13.9994 4.94858 13.9205 5.1392 13.7801 5.27983L6.5301 12.5298C6.38947 12.6702 6.19884 12.7491 6.0001 12.7491C5.80135 12.7491 5.61071 12.6702 5.47009 12.5298L2.2201 9.27983C2.08762 9.13765 2.0155 8.94961 2.01892 8.7553C2.02235 8.561 2.10106 8.37562 2.23848 8.2382C2.37589 8.10079 2.56128 8.02208 2.75558 8.01865C2.94988 8.01522 3.13792 8.08735 3.2801 8.21983L6.0001 10.9398L12.7201 4.21983C12.8607 4.07938 13.0513 4.00049 13.2501 4.00049C13.4488 4.00049 13.6395 4.07938 13.7801 4.21983Z" fill="white"></path>
            </svg>
          </span>
        </label>
      </HeaderLeft>
    </CartHeaderWrap>
  )
}

export default CartHeader;
