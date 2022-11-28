import React from 'react';
import "./navi.css";
import NaviLogo from './Components/NaviLogo';
import NaviTextList from './Components/NaviTextList';
import NaviSearch from './Components/NaviSearch';
import NaviHiddenLogo from './Components/NaviHiddenLogo';
import NaviHiddenIcon from './Components/NaviHiddenIcon';
import NaviRight from './Components/NaviRight';

function Navi (props) {
  return (
      <div id='Navi'>
        <NaviHiddenIcon />
        <NaviLogo />
        <NaviTextList />
        <NaviSearch />
        <NaviHiddenLogo />
        <NaviRight />
      </div>
  );
}


export default Navi;