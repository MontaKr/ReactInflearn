import React, { useState } from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  left: 900px;
  bottom: 260px;
`


function CartAside({InCart}) {

  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    setTotal(calculateTotal(InCart))
  }, [InCart])

  
  const calculateTotal = (cartItems) => {
    if(cartItems) {
      return cartItems.reduce((acc, obj) => acc + obj.price)
    }else {
      return 0;
    }
  }

  return (
    <Wrap>
    <div id='Price1'> 
      <span id='Price11'>
        선택상품 금액 {total}
      </span>
    </div>
   </Wrap>
  )
}


export default CartAside;