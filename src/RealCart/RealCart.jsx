import React from 'react'
import Top from '../Site/Header/Top'
import Navi from '../Site/Header/Navi/Navi'
import Cart from './Components/Cart';
import CartHeader from './Components/CartHeader';
import CartContent from './Components/CartContent';
import CartAside from './Components/CartAside';

function RealCart({InCart}) {

  return (
    <div>
      <Top />
      <Navi />
      <Cart />
      <CartHeader />
      {InCart.map((cart)=> {
        return <CartContent key={`key-${cart.id}`} cart={cart}/>
      })}
      <CartAside InCart={InCart}/>
    </div>
  )
}

export default RealCart;
