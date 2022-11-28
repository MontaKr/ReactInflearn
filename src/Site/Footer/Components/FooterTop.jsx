import React from 'react';
import "../footer.css";
import FooterTopCard from './FooterTopCard';

const array = [
  {
    'title' : '인프런',
    'body1' : '공지사항',
    'body2' : '인프런 소개',
    'body3' : '인프런랩 실Log',
    'body4' : '인프랩 채용',
    'body5' : '인프랩 스토리',
    'body6' : '인프랩 태크'
  },
  {
    'title' : '고객센터',
    'body1' : '자주묻는 질문',
    'body2' : '수료증 확인',
    'body3' : '이용약관',
    'body4' : '개인정보취급방침',
    'body5' : '저작권 신고센터',
  },
  {
    'title' : '신청하기',
    'body1' : '지식공유참여',
    'body2' : '멘토링 소개',
    'body3' : '인프런 비즈니스',
    'body4' : '인프런 X 대학교',
    'body5' : '인프런 X AWS 제휴',
  },
  {
    'title' : '학습하기',
    'body1' : 'IT 프로그래밍',
    'body2' : '크리에이티브',
    'body3' : '업무스킬',
    'body4' : '수강코드 등록',
    'body5' : '포인트코드 등록',
  },
  {
    'title' : '커뮤니티',
    'body1' : '학습로드맵',
    'body2' : '질문 & 답변',
    'body3' : '수강평 모아보기',
    'body4' : '강의 · 기능요청',
  }
]

function FooterTop() {
  return (
    <div id='FooterTop'>
      {array.map((a, i) => {
        return (
          <FooterTopCard products={a} key={i} />
        )
      })}
    </div>
  )
}

export default FooterTop;
