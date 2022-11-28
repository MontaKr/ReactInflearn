import React from 'react';
import "./navi.css";
import NaviLogo from './Components/NaviLogo';
import NaviTextList from './Components/NaviTextList';
import NaviSearch from './Components/NaviSearch';
import NaviRecent from './Components/NaviRecent';
import NaviIconList from './Components/NaviIconList';
import NaviHiddenLogo from './Components/NaviHiddenLogo';
import NaviHiddenIcon from './Components/NaviHiddenIcon';

function Navi (props) {
  return (
      <div id='Navi'>
        <NaviHiddenIcon />
        <NaviLogo />
        <NaviTextList />
        <NaviSearch />
        <NaviRecent />
        <NaviHiddenLogo />
        <NaviIconList />
      </div>
  );
}


export default Navi;