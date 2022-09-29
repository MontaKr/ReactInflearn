import React from 'react';
import React, {Fragment} from 'react';
import Navi from './Navi';
import Top from './Top';

function Header (props) {
  return (
    <>
      <Top />
      <Navi />
    </>
  );
}


export default Header;