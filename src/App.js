import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Site from './Site/Site';
import Lecture from './LecturePage/Lecture';
import Login from './Site/Login/Login';
import SiteHomepage from './SiteHomepage/SiteHomepage';
import LecturePrecise from './LecturePrecise/LecturePrecise';
import SignUp from './SignUp/SignUp';
import { useSelector } from 'react-redux';
import Login1 from './SiteHomepage/Login/Login1';
import { useState } from 'react';
import RealCart from './RealCart/RealCart';


function App() {

  
  const [Inproducts,setInproducts] = useState([])
  const [InCart, setInCart] = useState([]);

  // const loginButton = useSelector(state => state.loginClick.isClick);
  return (
    <BrowserRouter>
      {/* {loginButton&&<Login1 />} */}
      <Routes>
        <Route path='/realCart' element={<RealCart InCart={InCart} setInCart={setInCart}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/lecture' element={<Lecture/>} />
        <Route path='/loginHome' element={<Site InCart={InCart} setInCart={setInCart} Inproducts={Inproducts} setInproducts={setInproducts}/>}/>
        <Route path='/' element={<SiteHomepage />} />
        // this is the one This is the page I want to link to with dynamic routing
        <Route path='/lecturePrecise/:id' element={<LecturePrecise/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
