import React from 'react';
import Top from './Header/Top';
import Navi from './Header/Navi/Navi';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import NaviRight from './Header/Navi/Components/NaviRight';
import { useSelector } from 'react-redux';
import Login1 from './Login/Login1';
import Weather from './Weather/Weather';


function SiteHomepage (props) {

  const loginButton = useSelector(state => state.loginClick.isClick);

  return (
    <>
      {loginButton&&<Login1 />}
      <Top />
      <Navi />
      <Body />
      <Weather />
      <Footer />
    </>  
  );
}


export default SiteHomepage;