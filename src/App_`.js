import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Site from './Site/Site';
import { useState } from 'react';
import RealCart from './RealCart/RealCart';


function App() {

  
  const [Inproducts,setInproducts] = useState([])
  const [InCart, setInCart] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/realCart' element={<RealCart InCart={InCart} setInCart={setInCart}/>} />
        <Route path='/loginHome' element={<Site InCart={InCart} setInCart={setInCart} Inproducts={Inproducts} setInproducts={setInproducts}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
