import React from 'react'
import Body3LeftCard from './Body3LeftCard';

const array = [
  {
    image : "https://cdn.inflearn.com/public/files/courses/324671/46cc484f-fc5d-4489-a052-b40b61000caf/frontdev-opt-2.png",
    title : '# Node.js',
    content : 'Node.js는 프론트엔드 개발환경을 구성하는데 기본 바탕이 되는 기술입니다. 대부분의 도구가 Node.js 기반으로 동작하기 때문이죠. 뿐만 아니라 일련의 개발 프로세스를 자동화하는데도 큰 역할을 담당하고 있습니다. 프론트엔드 개발 과정에서 Node.js의 역할을 이해할 수 있습니다.'
  },
  {
    image : 'https://cdn.inflearn.com/public/files/courses/324671/3be39879-b902-4776-8080-7da993ce7b56/frontdev-opt-1.png',
    title : '# Webpack',
    content : '모듈 기반의 개발을 가능하게 해주는 것이 바로 웹팩입니다. 같은 역할을 하는 대체제들이 나왔지만 여전히 가장 많이 사용하는 것은 웹팩입니다. 웹팩의 동작 원리를 들여다보고 이해한 뒤 직접 개발 환경을 구성해보고 ',
    strong : '로더를 직접 구현',
    content2 : '도 해보는 실습을 통해 사용법을 손에 익힐수 있습니다.'
  },
  {
    image : 'https://cdn.inflearn.com/public/files/courses/324671/d0923369-ea10-4810-99a5-33c575f81007/frontdev-opt-3.png',
    title : '# Babel + SASS',
    content : 'ECMAScirpt+, Typescript 같은 고수준 프로그래밍 언어나, React.js, Vue.js 같은 프레임웍을 사용해서 개발할 때 반드시 필요한 것이 바벨입니다. 물론 바벨 없이도 개발할 수 있지만, 누가 그렇게 개발하나요? 개발 생산성을 위해서는 반드시 바벨의 도움을 받아야 합니다. 바벨의 원리를 이해하고 직접 사용해 보면서 어떻게 프로젝트에 최적화된 환경을 만들 수 있는지 알아보세요.'
  },
  {
    image : 'https://cdn.inflearn.com/public/files/courses/324671/de2fa908-81b3-41de-9f22-4aba23750a89/frontdev-opt-4.png',
    title : '# Node.js',
    content : '코딩 컨벤션으로 인한 논쟁은 무척 피곤한 일이죠? 도구의 도움을 받는다면 좀 더 수월하게 코딩 스타일을 맞출 수 있을 거에요. 게다가 자동화 도구를 개발 절차에 추가해 놓으면 일관적인 코드를 지속적으로 유지할 수 있습니다.'
  }
]

function Body3LeftCardArray() {
  return (
    <>
      {
        array.map((a, i)=>{
          return (
            <Body3LeftCard 
            products={a} 
            key={i}/>
          )
        })
      }
    </>
  )
}

export default Body3LeftCardArray;
