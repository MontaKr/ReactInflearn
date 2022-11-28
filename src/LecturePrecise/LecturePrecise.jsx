import React from 'react'
import Top from './Header/Top'
import Body from './Body/Body';
import Navi from './Header/Navi/Navi';
import { useParams } from 'react-router-dom';

function LecturePrecise() {

  return (
    <>
      <Top />
      <Navi />
      <Body />
    </>
  )
}


export default LecturePrecise;