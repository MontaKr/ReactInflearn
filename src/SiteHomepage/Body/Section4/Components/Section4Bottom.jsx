import React from 'react';
import "../section4.css";
import Card from './Card';

const array = [
  {
    image : "https://cdn.inflearn.com/public/courses/328976/cover/ebb42813-8e52-40ca-b2b5-804bbf46c47a/328976-eng.png",
    title : "지금 바로 리액트 시작하기",
    text1 : "기한: 무제한",
    text2 : "진도율: 43.75%",
    rate : "43.75"
  },
  {
    image : "https://cdn.inflearn.com/public/courses/328866/cover/174035a3-ca6b-48cd-b122-c88df540cb04/처음_만난_리액트_v2_cover_inflearn.png",
    title : "처음 만난 리액트(React)",
    text1 : "기한: 무제한",
    text2 : "진도율: 0.00%",
    rate : "0"
  }
]


function Section4Bottom() {
  return (
    <div id='Section4Bottom'>
      {
        array.map((a, i) => {
          return (
            <Card products={a} key={i} />
          )
        })
      }
    </div>
    
  )
}

export default Section4Bottom;
