import React from 'react'
import Body3LeftCard2 from './Body3LeftCard2';

const array = [
  {
    image : 'https://cdn.inflearn.com/wp-content/uploads/software-1-1.jpg',
    title : '견고한 JS 소프트웨어 만들기',
    content : '테스트 주도 개발, 자바스크립트 디자인 패턴 배우기'
  },
  {
    image : 'https://cdn.inflearn.com/wp-content/uploads/vuejsandpure-1.png',
    title : '실습 UI 개발로 배워보는 순수 javascript와 VueJS 개발',
    content : 'Vue.JS 기초, MVC/MVVM 아키텍처, 컴포넌트 개발'
  },
  {
    image : 'https://cdn.inflearn.com/wp-content/uploads/nodetdd-1.png',
    title : '테스트주도개발(TDD)로 만드는 NodeJS API 서버',
    content : 'NodeJS 기초, ExpressJS 기초, Rest API 서버 개발'
  },
  {
    image : 'https://cdn.inflearn.com/public/files/courses/324671/b18526ef-d00e-48a6-b5d1-2b7adf9fc74b/kjh_Vuejs-3.jpg',
    title : '견고한 JS 소프트웨어 만들기',
    content1 : '트렐로 개발로 배우는 ',
    content2 : 'Vuejs, Vuex, Vue-Router 프론트엔드 실전 기술 ',
    content3 : '트렐로를 따라 만들며 ',
    content4 : 'Vue.js, Vuex, Vue-Router 실전 기술 학습'
  }
]

function Body3LeftCardArray2() {
  return (
    <>
      {
        array.map((a,i)=>{
          return(
            <Body3LeftCard2 products={a} key={i} />
          )
        })
      }
    </>
  )
}

export default Body3LeftCardArray2;