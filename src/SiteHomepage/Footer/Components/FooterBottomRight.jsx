import React from 'react';
import "../footer.css";
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import FooterBottomRightCard from './FooterBottomRightCard';


const array = [
  {
    contents : 'N'
    
  },
  {
    contents : 'B'
  }, 
  {
    contents : <FaInstagram />
  },
  {
    contents : <FaYoutube />
  },
  {
    contents : <FaFacebookF />
  },
  {
    contents : <FaTwitter />
  }
]

function FooterBottomRight() {
  return (
    <div id='FooterBottomRight'>
      {array.map((a, i) => {
        return (
          <FooterBottomRightCard products={a} key={i} />
        )
      })}
    </div>
  )
}

export default FooterBottomRight;