import React from 'react'
import styled from 'styled-components';

const Body2Wrap = styled.div`
  border-bottom: 1px solid #f1f3f5;
  width: 100%;
  height: 46px;
  margin-top: 5px;
`
const Body2Content = styled.div`
  display: flex;
  align-items: flex-end;
  height: 45px;
  overflow-x: auto;
  padding: 0 54px;
  white-space: nowrap;

  .Body2Text {
    margin-right: 30px;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    font-weight: 500;
    display: inline-block;
    min-height: 33px;
    padding: 15px 0 6px;
    color: #abb0b5;
    border-bottom: 2px inset transparent;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
    padding-bottom: 0;
    cursor: pointer;
  }

  #Body2Text_1 {
    color: #1b1c1d;
    border-bottom-color: #1b1c1d;
    font-weight: 700;
    font-size: 15px;
  }

  #Body2Text_2 {
    line-height: 1.45;
    letter-spacing: -.3px;
    font-size: 11px;
    color: #00c471;
    font-weight: 500;
    margin-left: 4px;
  }
`

function Body2() {
  return (
    <Body2Wrap>
      <Body2Content>
        <span className='Body2Text' id='Body2Text_1'>
          강의소개
        </span>
        <span className='Body2Text'>
          커리큘럼
        </span>
        <span className='Body2Text'>
          수강평
          <span id='Body2Text_2'>
            170
          </span>
        </span>
        <span className='Body2Text'>
          커뮤니티
        </span>
        <span className='Body2Text'>
          새소식
        </span>
      </Body2Content>
    </Body2Wrap>
  )
}


export default Body2;