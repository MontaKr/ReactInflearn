import React from 'react'
import styled from 'styled-components';

const CartWrap = styled.div`
  max-width: 1160px;
  padding: 0;
  display: flex;
  flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
`

const CartLeft = styled.div`
  width: 100%;
  margin-right: 32px;

`

const CartName = styled.div`
  font-weight: 700;
    color: #1b1c1d;
    padding-top: 32px;
    padding-bottom: 16px;
    font-size: 24px;
    margin: 0;
`

function Cart() {
  return (
    <CartWrap>
      <CartLeft>
        <CartName>
          수강바구니
        </CartName>
      </CartLeft>
    </CartWrap>
  )
}

export default Cart;
