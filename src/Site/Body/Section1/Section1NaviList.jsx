import React from 'react'
import {FaUserCheck} from 'react-icons/fa';
import {FaListUl} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';
import {FaRoad} from 'react-icons/fa';
import {FaEllipsisH} from 'react-icons/fa';
import Section1Navi from './Section1Navi';
import './section1.css';

const array = [
  {
    icon : <FaUserCheck />,
    text : "대시보드"
  },
  {
    icon : <FaListUl />,
    text : "강의"
  },
  {
    icon : <FaHome />,
    text :  "홈"
  },
  {
    icon : <FaRoad />,
    text : "로드맵"
  },
  {
    icon : <FaEllipsisH />,
    text : "더보기"
  }
  
]


function Section1NaviList() {
  return (
    <div id='Section1NaviReal'>
      {
        array.map((a, i) => {
          return (
            <Section1Navi item={a} key={i} />
          )
        })
      }
    </div>
  )
}

export default Section1NaviList;
