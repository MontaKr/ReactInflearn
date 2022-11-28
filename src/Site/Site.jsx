import React from 'react';
import Top from './Header/Top';
import Navi from './Header/Navi/Navi';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import { useState } from 'react';


function Site ({Inproducts, setInproducts, InCart, setInCart}) {

  

  return (
    <>
      <Top />
      <Navi />
      <Body Inproducts={Inproducts} setInproducts={setInproducts} InCart={InCart} setInCart={setInCart}/>
      <Footer />
    </>  
  );
}


export default Site;