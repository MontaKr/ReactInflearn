import React from 'react';
import "../section5.css";
import Section5Card from './Section5Card';



const array = [
  {
    'id' : '1',
    'img' : "https://cdn.inflearn.com/public/courses/324119/course_cover/07c45106-3cfa-4dd6-93ed-a6449591831c/%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%204.png",
    'title' : '실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발',
    'name' : '김영한',
    'star' : '5',
    'comment' : '(1473)',
    'price' : '₩88,000',
    'people' : '+12400명',
  },
  {
    'id' : '1',
    'img' : "https://cdn.inflearn.com/public/courses/324671/course_cover/638eee1a-6381-402d-a17b-3724751414f1/frontend-env-eng.png",
    'title' : '프론트엔드 개발환경의 이해와 실습 (webpack, babel, eslint..)',
    'name' : '김정환',
    'star' : '5',
    'comment' : '(169)',
    'price' : '₩69,300',
    'people' : '+2000명',
  },
  {
    'id' : '1',
    'img' : "https://cdn.inflearn.com/public/courses/329477/cover/80fb90fb-0212-4eec-8fb0-7875622b198e/329477-eng.png",
    'title' : '애플 웹사이트 인터랙션 클론!',
    'name' : '1분코딩',
    'star' : '5',
    'comment' : '(187)',
    'price' : '₩77,000',
    'people' : '+3200명',
  },
  {
    'id' : '1',
    'img' : "https://cdn.inflearn.com/public/courses/327193/cover/010c8faf-bfc5-4c6a-9623-a68dc3b38697/327193-eng.png",
    'title' : 'Slack 클론 코딩[백엔드 with NestJS + TypeORM]',
    'name' : '조현영',
    'star' : '4.5',
    'comment' : '(58)',
    'price' : '₩44,000',
    'people' : '+1100명',
  },
  {
    'id' : '5',
    'img' : "https://cdn.inflearn.com/public/courses/329477/cover/80fb90fb-0212-4eec-8fb0-7875622b198e/329477-eng.png",
    'title' : '모바일 웹 퍼블리싱 포트폴리오 with Figma',
    'name' : '코딩웍스(Coding Works)',
    'star' : '0',
    'comment' : '(0)',
    'discount' : '₩132,000',
    'price' : '₩92,400',
    'new' : '새강의',
    'sale' : '할인중'
  }
]

function Section5Bottom() {
  return (
    <div id='Section5Bottom'>
      {
        array.map((a, i) => {
          return (
            <Section5Card products={a} key={i} />
          )
        })
      }
    </div>
  )
}

export default Section5Bottom;
