import React from 'react';
import "../section7.css";
import Section7Bottom from './Section7Bottom';

const array = [
  {
    'title' : '지식공유자 되기',
    'contentFirst' : '9개월간 온라인 기술 강의로만 1억원!',
    'contentSecond' : '나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.',
    'green' : '지식공유자 참여하기'
  },
  {
    'title' : '인프런 비즈니스 신청',
    'contentFirst' : '모든 팀원의 인프런의 강의들을 자유롭게 학습하는 환경을 제공해주세요.',
    'contentSecond' : '업무 스킬에 집중된 콘텐츠를 통해 최신 트렌드의 업무역량을 습득할 수 있습니다.',
    'green' : '비즈니스 신청하기'
  },
  {
    'title' : '인프런 X 대학생',
    'contentFirst' : '학교와 인프런이 함께 하여,',
    'contentSecond' : '많은 학생 분들께 정해진 커리큘럼 이외에도 필요한 학습을 보완하고, 더욱 성장할 수 있도록 도와드립니다.',
    'green' : '대학생 신청하기'
  }
]

function Section7BottomList() {
  return (
    <div id='Section7BottomList'>
      {
        array.map((a, i) => {
          return (
            <Section7Bottom products={a} key={i} />
          )
        })
      }
    </div>
  )
}

export default Section7BottomList;
