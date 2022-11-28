import React, { useState } from 'react'
import Top from '../SiteHomepage/Header/Top'
import Navi from '../SiteHomepage/Header/Navi/Navi'
import Main from './Components/Main';
import Footer from '../SiteHomepage/Footer/Footer'

function SignUp() {

  return (
    <div>
      <Top />
      <Navi />
      <Main />
      <Footer />
    </div>
  )
}

export default SignUp;
