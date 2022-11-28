import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Body3LeftCardArray from './Body3LeftCardArray';
import Body3LeftCardArray2 from './Body3LeftCardArray2';


const Body3LeftStart = styled.div`
  flex-basis: 66.66666667% !important;
  max-width: 66.66666667%;
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-left: 8px;
  padding-right: 8px;
`

const Body3Wrap = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  padding: 28px 16px 0 34px;
  width: 100%;
  max-width: 720px;
`
const Body3Left1 = styled.div`
  margin-bottom: 16px;
  line-height: 1.45;
  letter-spacing: -.3px;
  color: #343a40;
  font-size: 22px;

  .Body3LeftStrong {
    font-weight: 700;
  }
`

const Body3Left2 = styled.div`
  margin-bottom: 8px;
  line-height: 1.69;
  color: #495057;
  font-size: 16px;
`

const Body3Left3 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 32px 24px 32px 16px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  background-color: #fff;
  letter-spacing: -.3px;

  #Body3Left31 {
    flex-shrink: 0;
    flex-basis: 130px;
    margin-right: 16px;
    line-height: 1.39;
    letter-spacing: -.3px;
    color: #343a40;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  #Body3Left32 {
    flex: 1 1 auto;
  }

  .Body3Left32Text {
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -.3px;
    font-size: 16px;
    display: flex;
    align-items: baseline;
    color: #343a40;
    margin-top: 10px;
  }

  .Body3Left32TextCheck {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`

const Body3Left4 = styled.div`
  text-align: center;
  background-color: #eeeeee;
  color: #34495e;
  padding: 0.8rem;
  margin-bottom: 8px;
  line-height: 1.69;
  color: #495057;
  font-size: 16px;
  letter-spacing: -.3px;

  #Body3Left4Strong {
    font-weight: 700;
  }
`

const Body3Left5 = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  line-height: 1.45;
  color: #343a40;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -.3px;

  #Body3Left5Strong {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
  }
`

const Body3Left6 = styled.div`
  padding-top: 8px;
  margin-bottom: 10px;
  line-height: 1.45;
  color: #343a40;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -.3px;
`

const Body3Left7 = styled.div`
  margin-bottom: 8px;
  line-height: 1.69;
  color: #495057;
  font-size: 16px;
  letter-spacing: -.3px;
`

const Body3Left8 = styled.div`
  padding-top: 10px;
  margin-bottom: 8px;
  line-height: 1.69;
  color: #495057;
  font-size: 16px;
  letter-spacing: -.3px;

  #Body3Left81 {
    background-color: #ddfcfd;
    font-weight: inherit;
    font-style: inherit;
    line-height: 1.69;
    color: #495057;
    font-size: 16px;
  }
`

const Body3Left9 = styled.div`
  padding-top: 10px;
  margin-bottom: 8px;
  line-height: 1.69;
  color: #495057;
  font-size: 16px;
  letter-spacing: -.3px;
`

const Body3Left10 = styled.div`
  margin: unset;
  padding-bottom: 16px;
`

const Body3Left11 = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.8rem;
  margin: 1rem 0 2rem 0;
  border-top: 1px solid #dcdcdc;
  padding-bottom: 16px;
`

const Body3Left12 = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  line-height: 1.45;
  color: #343a40;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -.3px;
`

const Body3Left13 = styled.div`
  margin: unset;
  padding-bottom: 16px;
`

const Body3Left14 = styled.div`
  margin: unset;
  padding-bottom: 16px;
  padding-top: 10px;
`

const Body3Left15 = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.8rem;
  margin: 1rem 0 2rem 0;
  border-top: 1px solid #dcdcdc;
  padding-bottom: 16px;
  padding-top: 10px;
`

const Body3Left16 = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
    line-height: 1.45;
    color: #343a40;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -.3px;
`

const Body3Left17 = styled.div`
  margin-bottom: 8px;
    line-height: 1.69;
    color: #495057;
    font-size: 16px;
`

const Body3Left18 = styled.div`
  margin: unset;
    padding-bottom: 16px;
    padding-top: 10px;

`

const Body3Left19 = styled.div`
  font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.8rem;
    margin: 1rem 0 2rem 0;
    border-top: 1px solid #dcdcdc;
    padding-bottom: 16px;
    padding-top: 10px;
`

const Body3Left20 = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
    line-height: 1.45;
    color: #343a40;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -.3px;
`

const Body3Left21 = styled.div`
  margin-bottom: 8px;
  line-height: 1.69;
  color: #495057;
  font-size: 16px;
  letter-spacing: -.3px;

  .Body3Left21Strong {
    font-weight: 700;
  }
`

const Body3Left22= styled.div`
  margin-bottom: 8px;
  line-height: 1.69;
  color: #495057;
  font-size: 16px;
  letter-spacing: -.3px;
  padding-top: 10px;

  .Body3Left21Strong {
    font-weight: 700;
  }
`

const Body3Left23= styled.div`
  margin-bottom: 8px;
  line-height: 1.69;
  color: #495057;
  font-size: 16px;
  letter-spacing: -.3px;
  padding-top: 10px;

  .Body3Left21Strong {
    font-weight: 700;
  }
`

const Body3Left24= styled.div`
  margin: unset;
  padding-bottom: 16px;
  padding-top: 10px;
`

const Body3Left25= styled.div`
      font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.8rem;
    margin: 1rem 0 2rem 0;
    border-top: 1px solid #dcdcdc;
    padding-bottom: 16px;
    padding-top: 10px;
`

const Body3Left26= styled.div`
  margin-top: 40px;
  margin-bottom: 8px;
    line-height: 1.56;
    color: #343a40;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -.3px;
`

const Body3Left27 = styled.div`
  margin: unset;
    padding-bottom: 16px;
`

const Body3Left28 = styled.div`
  margin-top: 42px;
    margin-bottom: 24px;
    line-height: 1.45;
    letter-spacing: -.3px;
    color: #343a40;
    font-size: 22px;
`

const Body3Left29 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 32px 24px 32px 16px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  background-color: #fff;
  letter-spacing: -.3px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`

const Body3Left29Left = styled.div`
    flex-shrink: 0;
    flex-basis: 130px;
    margin-right: 16px;
    line-height: 1.39;
    letter-spacing: -.3px;
    color: #343a40;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
`

const Body3Left29Right = styled.div`
  flex: 1 1 auto;

  .Body3Left29RightText {
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -.3px;
    font-size: 16px;
    display: flex;
    align-items: baseline;
    color: #343a40;
  }

  .Body3Left29RightSpan {
    
    margin-right: 8px;
    width: 16px;
    height: 16px;

  }
`

const Body3Left30 = styled.div`
  display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 32px 24px 32px 16px;
    border-radius: 8px;
    border: 1px solid #e9ecef;
    background-color: #fff;
`

const Body3Left30Left = styled.div`
  flex-shrink: 0;
    flex-basis: 130px;
    margin-right: 16px;
    line-height: 1.39;
    letter-spacing: -.3px;
    color: #343a40;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
`

const Body3Left30Right = styled.div`
  flex: 1 1 auto;

  #Body3Left30RightText {
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -.3px;
    font-size: 16px;
    display: flex;
    align-items: baseline;
    color: #343a40;
  }

  #Body3Left30RightIcon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`

const Body3Left31 = styled.div`
  margin-bottom: 64px;
`

const Body3Left31Wrap = styled.div`
  font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    display: block;
    box-sizing: border-box;

    #Body3Left31WrapTop {
      margin-bottom: 16px;
    display: flex;
    align-items: center;
    }

    #Body3Left31WrapTopText {
      line-height: 1.45;
    letter-spacing: -.3px;
    color: #212529;
    font-size: 22px;
    }

    #Body3Left31WrapTopStrong {
      margin-right: 4px;
    font-weight: 700;
    text-decoration: underline;
    }

    #Body3Left31WrapTopIcon {
      margin-left: 4px;
    margin-bottom: 1px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color .15s ease;
    }

    #Body3Left31WrapBot {
      overflow-x: auto;
    line-break: anywhere;
    }

    #Body3Left31WrapBotText {
      font-size: 1.5rem;
      font-weight: 400;
    }

    #Body3Left31WrapBotSpan {
      text-decoration: underline;
      font-size: 1.5rem;
    }

    #Body3Left31WrapBotTextBot {
      line-height: 1.63;
    letter-spacing: -.3px;
    color: #495057;
    font-size: 16px;
    }

    #Body3Left31WrapTopImg {
      flex-shrink: 0;
    overflow: hidden;
    margin-left: auto;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    border: 1px solid #dee2e6;
    }
`

const Body3LeftSection = styled.div`
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000a12;
  box-sizing: border-box;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;

  #Body3Section1 {
    display: flex;
    align-items: flex-end;
    margin-bottom: 8px;
  }

  #Body3Section1::before {
    display: block;
    margin-top: -71px;
    padding-top: 71px;
    visibility: hidden;
    content: " ";
    z-index: 0;
  }

  #Body3Section1Span {
    margin-right: 8px;
    line-height: 1.45;
    letter-spacing: -.3px;
    color: #343a40;
    font-size: 22px;
    font-weight: 700;
  }

  #Body3Section1Span2 {
    line-height: 1.5;
    letter-spacing: -.3px;
    font-size: 16px;
    color: #adb5bd;
    font-weight: 500;
  }
`

const Body3LeftSection2 = styled.div`
  display: flex;
    margin-bottom: 20px;
    align-items: flex-end;

    #Body3LeftSection2Text {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    margin-right: 12px;
    color: #495057;
    word-break: keep-all;
    }

    #Body3LeftSection2Button {
      border-color: #d5dbe2;
    color: #495057;
    background-color: #fff;
    flex-shrink: 0;
    margin-left: auto;
    border: 1px solid;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    -webkit-appearance: none;
    padding: 0 12px;
    height: 40px;
    line-height: 1.43;
    font-size: 14px;
    letter-spacing: -.3px;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
    }
`

const Body3LeftToggleWrap = styled.div`
  overflow: hidden;
    border: 1px solid #e9ecef;
    border-radius: 4px;
`

const Body3LeftToggle1Wrap = styled.div`
  display: block;
`

const Body3LeftToggle1Top = styled.div`
  border-top: unset;
  display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #f1f3f5;
    background-color: #f8f9fa;
    cursor: pointer;

    #Arrow {
      display: inline-flex;
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }

    #Text1 {
      line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    color: #343a40;
    font-weight: 700;
    }

    #Text2 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    margin-left: auto;
    color: #343a40;
    }
`
const Body3LeftToggle1BotWrap = styled.div`
  max-height: 50px;
  overflow: hidden;
  display: ${props => props.isCheck ? "block" : "none"};
`

const Body3LeftToggle1Bot = styled.div`
  display: flex;
    align-items: center;
    padding: 14px 20px;

    #Icon {
      margin-right: 8px;
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color .15s ease;
    }

    #Text1 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    color: #495057;
    }

    #Text2Wrap {
      display: inline-flex;
    align-items: center;
    margin-left: auto;
    flex-shrink: 0;
    }

    #Text2 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    margin-left: 16px;
    color: #343a40;
    }
`

const Body3LeftToggle2Wrap = styled.div`
  display: block;
`

const Body3LeftToggle2Top = styled.div`
  border-top: unset;
  display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #f1f3f5;
    background-color: #f8f9fa;
    cursor: pointer;

    #Arrow {
      display: inline-flex;
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }

    #Text1 {
      line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    color: #343a40;
    font-weight: 700;
    }

    #Text2 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    margin-left: auto;
    color: #343a40;
    }
`

const Body3LeftToggle2BotWrap = styled.div`
  max-height: 101px;
  overflow: hidden;
  display: ${props => props.isCheck ? "block" : "none"};
`

const Body3LeftToggle2Bot = styled.div`
  display: flex;
    align-items: center;
    padding: 14px 20px;

    #Icon {
      margin-right: 8px;
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color .15s ease;
    }

    #Text1 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    color: #495057;
    }

    #Text2Wrap {
      display: inline-flex;
    align-items: center;
    margin-left: auto;
    flex-shrink: 0;
    }

    #Text2 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    margin-left: 16px;
    color: #343a40;
    }
`

const Body3LeftToggle3Wrap = styled.div`
  display: block;
`

const Body3LeftToggle3Top = styled.div`
  border-top: unset;
  display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #f1f3f5;
    background-color: #f8f9fa;
    cursor: pointer;

    #Arrow {
      display: inline-flex;
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }

    #Text1 {
      line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    color: #343a40;
    font-weight: 700;
    }

    #Text2 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    margin-left: auto;
    color: #343a40;
    }
`
const Body3LeftToggle3BotWrap = styled.div`
  overflow: hidden;
  display: ${props => props.isCheck ? "block" : "none"};
`

const Body3LeftToggle3Bot = styled.div`
  display: flex;
    align-items: center;
    padding: 14px 20px;

    #Icon {
      margin-right: 8px;
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color .15s ease;
    }

    #Text1 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    color: #495057;
    }

    #Text2Wrap {
      display: inline-flex;
    align-items: center;
    margin-left: auto;
    flex-shrink: 0;
    }

    #Text2 {
      font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    margin-left: 16px;
    color: #343a40;
    }
`

const SectionLast = styled.div`
  margin-bottom: 64px;

  #Div1 {
    display: flex;
    justify-content: center;
    padding: 14px 0;
    border-radius: 4px;
    background-color: #f8f9fa;
    align-items: center;
  }

  #Span1 {
    display: flex;
    justify-content: center;
    padding: 14px 0;
    border-radius: 4px;
    background-color: #f8f9fa;
  }

  #Span2 {
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    color: #868e96;
    margin-left: 4px;
  }
`

function Body3Left() {

  const [isCheck, setCheck] = useState(false)
  const [isCheck1, setCheck1] = useState(false)
  const [isCheck2, setCheck2] = useState(false)
  const [isCheckAll, setCheckAll] = useState(true)

  function handleState (e) {
    setCheck(isCheck===false)
    setCheck1(isCheck1===false)
    setCheck2(isCheck2===false)
    setCheckAll(isCheckAll===false)
  }

  function noHandleState (e) {
    setCheck(pre => !pre)
    setCheck1(pre => !pre)
    setCheck2(pre => !pre)
    setCheckAll(pre => !pre)
  }


  return (
    <Body3LeftStart>
      <Body3Wrap>
        <Body3Left1>
          <strong className='Body3LeftStrong'>
            중급자  
          </strong>
          를 위해 준비한
          <br/>
          <strong className='Body3LeftStrong'>
            [웹 개발, 프론트엔드] 강의입니다.
          </strong>
        </Body3Left1>
        <Body3Left2>
          이미 만들어 놓은 개발 환경을 이해할 수 있어요.
          처음부터 직접 개발 환경을 만들 수 있어요.
        </Body3Left2>
        <Body3Left3>
          <div id='Body3Left31'>
            ✍️
            <br/>
            이런 걸
            <br/>
            배워요!
          </div>
          <div id='Body3Left32'>
            <div className='Body3Left32Text'>
              <span className='Body3Left32TextCheck'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              모듈시스템을 사용하고 개발 환경을 자동화하는 방법(Webpack)
            </div>
            <div className='Body3Left32Text'>
              <span className='Body3Left32TextCheck'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              최신 자바스크립트 문법을 사용하는 환경 만들기(Babel)
            </div>
            <div className='Body3Left32Text'>
              <span className='Body3Left32TextCheck'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              동료와 협업하는 개발 환경 만들기 (ESLint, Prettier)
            </div>
          </div>
        </Body3Left3>
        <Body3Left4>
          <strong id='Body3Left4Strong'>
            웹팩, 바벨, 린트 같은 프론트엔드 기술
          </strong>
          을 이해하고 실무에 적용해 보세요!
        </Body3Left4>
        <Body3Left5>
          <strong id='Body3Left5Strong'>
            <img src='https://cdn.inflearn.com/public/files/courses/324671/44b78604-6da0-4524-a983-0797d8e67dd8/a-2.jpg' />
          </strong>
        </Body3Left5>
        <Body3Left6>
          “웹팩은 팀에서 한 명만 다룰 줄 알면 돼!?”
        </Body3Left6>
        <Body3Left7>
        만약 그 한 명이 팀을 떠난다면 어떻게 될까요? 어쩌면 여러분이 그 한 명이 되어야 할지도 모릅니다.
        <br/>
        개발팀에 여러분 혼자라면 웹팩 구성하는 것은 피할 수 없고요.  
        </Body3Left7>
        <Body3Left8>
          <span id='Body3Left81'>
            개발 환경 구성만큼은 내 손으로 직접 다룰 줄 안다면 어떨까요? 
          </span>
          <br/>
          최소한 다른 사람이 만들어 놓은 구성(이를테면 create-react-app이나 vue-cli로 만든 코드)을 읽고 이해할 수 있는 정도가 된다면 훨씬 자신감 있게 일할 수 있을 거에요.
        </Body3Left8>
        <Body3Left9>
        웹팩을 비롯한 바벨, 린트, 프리티어 등 프론트엔드 개발 환경을 자동화하고 생성성을 높여 줄 수 있는 도구들을 익힐 수 있는 강의를 만들었습니다. 
        <br/>
        이것을 통해 더욱 생산성 있게 일할 수 있기를 기대합니다.
        </Body3Left9>
        <Body3Left10 />
        <Body3Left11 />
        <Body3Left12>
          📝 어떤 걸 배우게 되나요?
        </Body3Left12>
        <Body3LeftCardArray />
        <Body3Left13/>
        <Body3Left14/>
        <Body3Left15/>
        <Body3Left16>
          🧰
          <strong style={{fontWeight:'700'}}>
            미리 설치해 주세요
          </strong>
        </Body3Left16>
        <Body3Left17>        
          <a style={{fontWeight:'700'}}>
            VSCode
          </a>
          를 사용하지만 평소에 사용하는 에디터나 IDE가 있다면 그것을 사용하서도 괜찮습니다.
          <br/>
          실습 진행을 위해 
          <a style={{fontWeight:'700'}}>
            Git
          </a>
          을 설치해 주세요. 깃 훅을 사용하는 수업도 있기 때문에 v2.3.0 버전 이상을 사용하시기 바랍니다.
        </Body3Left17>
        <Body3Left18/>
        <Body3Left19/>
        <Body3Left20>
          🙋🏻‍♂️
          <strong style={{fontWeight:'700'}}>
          강의 관련 예상 질문
          </strong>
        </Body3Left20>
        <Body3Left21>
          <strong 
          className='Body3Left21Strong'>
            Q. 이 강의를 시작하게 된 계기를 소개해주세요. 
            <br/>
          </strong>
          A. 프론트엔드 기술이 무척 빠르다고는 하지만 그래도 한번은 정리해 보고 싶었습니다. 웹팩부터 시작해서 일하면서 자주 사용하는 개발 도구 메뉴얼을 하나씩 읽어보면서 블로그에 정리했던 내용이 
          <strong className='Body3Left21Strong'>
          "프론트엔드 개발환경의 이해(총 5편)"
          </strong>
          이고요. &nbsp; 그런뒤 작년 2019년 T아카데미에서 이 주제로 세미나를 열었는데 의외로 저처럼 필요로 하시는 분들이 많더라구요. 반응이 괜찮아서 내용을 더 보강해서 인프런에 온라인 강의를 개설하였습니다.그런뒤 작년 2019년 T아카데미에서 이 주제로 세미나를 열었는데 의외로 저처럼 필요로 하시는 분들이 많더라구요. 반응이 괜찮아서 내용을 더 보강해서 인프런에 온라인 강의를 개설하였습니다.
        </Body3Left21>
        <Body3Left22>
          <strong className='Body3Left21Strong'>
          Q.이 강의만의 특별한 장점이 있을까요?
          <br/>
          </strong>
          A. 개발환경이라는 주제가 실습하기 좀 어려울수도 있을것 같아요. 메뉴얼만 읽어보고 지나가기에는 잘 모르기 때문이죠. 그래서 각 이론 수업마다 조그만 실습을 준비했습니다(
            <strong className='Body3Left21Strong'>
          실습 저장소: lecture-frontend-dev-env
          </strong>
          ).이전 강의 
          <strong className='Body3Left21Strong'>
            "실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발"
          </strong>
          에서 다룬 코드를 기반으로 여기에 개발환경을 구성하도록 단계별로 실습 과제를 준비했어요. 하나하나 풀어보다보면 어느새 개발 환경 구성하는것이 손에 익혀질수 있도록 말이죠.
        </Body3Left22>
        <Body3Left23>
          <strong className='Body3Left21Strong'>
          Q. 이 강의를 통해 어떤 일을 할 수 있나요?
          <br/>
          </strong>
          A. 현재 여러분이 개발하고 있는 프로젝트의 개발환경을 이해할 수 있을거에요. 필요하다면 커스터마이징해서 생산성을 높일 수도 있고요. 이제 막 프로젝트를 시작하는 단계인가요? 그럼 입맛에 맞게 직접 개발 환경을 꾸며볼 수도 있습니다. 
        </Body3Left23>
        <Body3Left24/>
        <Body3Left25/>
        <Body3Left26>
        다른 강의 보기
        </Body3Left26>
        <Body3LeftCardArray2/>
        <Body3Left27/>
        <Body3Left28>
        지식공유자가 알려주는
        <br/>
        <strong style={{fontWeight:700}}>
        강의 수강 꿀팁!
        </strong>
        </Body3Left28>
        <Body3Left29>
          <Body3Left29Left>
            🎓
            <br/>
            이런 분들께
            <br/>
            추천드려요!
          </Body3Left29Left>
          <Body3Left29Right>
            <div className='Body3Left29RightText'>
              <span className='Body3Left29RightSpan'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              미리 세팅된 환경에서만 개발해서 웹팩이나 바벨 설정은 도저히 모르겠어요 
            </div>
            <div className='Body3Left29RightText'>
            <span className='Body3Left29RightSpan'>
              <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              웹팩을 써 보긴 했는데 어떤 방식으로 동작하는 건지 알고 싶어요
            </div>
            <div className='Body3Left29RightText'>
            <span className='Body3Left29RightSpan'>
              <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              일관적인 코딩 컨벤션을 유지하고 싶은데 팀으로 작업하다 보니 잘 안 돼요
            </div>
          </Body3Left29Right>
        </Body3Left29>
        <Body3Left30>
          <Body3Left30Left>
            📚
            <br/>
            선수 지식,
            <br/>
            필요한가요?
          </Body3Left30Left>
          <Body3Left30Right>
            <div id='Body3Left30RightText'>
              <span id='Body3Left30RightIcon'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              기초적인 프론트엔드 개발 경험이 필요합니다. (자바스크립트, HTML, CSS)
            </div>
          </Body3Left30Right>
        </Body3Left30>
        <Body3Left31>
          <Body3Left31Wrap>
            <div id='Body3Left31WrapTop'>
              <div id='Body3Left31WrapTopText'>
                안녕하세요
                <br/>
                <strong id='Body3Left31WrapTopStrong'>
                  김정환
                  <span id='Body3Left31WrapTopIcon'>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#212529" d="M18.258 1.25l-5.578.006c-.13 0-.256.052-.348.144-.093.092-.145.217-.145.348v1.139c0 .065.014.13.039.19s.062.115.11.161c.046.046.101.082.162.106.061.024.126.036.192.035l2.516-.093.07.07-9.53 9.532c-.039.038-.07.083-.09.133-.02.05-.031.103-.031.157 0 .054.01.108.031.158.02.05.051.095.09.133l.785.786c.039.038.084.069.134.09.05.02.103.03.157.03.054 0 .107-.01.157-.03.05-.021.095-.052.133-.09l9.532-9.532.07.07-.093 2.517c-.001.066.01.13.035.192.024.06.06.116.106.163s.1.084.16.11c.061.024.126.038.191.037h1.139c.13 0 .256-.051.348-.144.092-.092.144-.217.144-.348l.006-5.578c0-.13-.052-.256-.144-.348-.093-.092-.218-.144-.348-.144zm-2.242 9.844h-.547c-.145 0-.284.057-.387.16-.103.103-.16.242-.16.387v5.263c0 .055-.022.107-.06.145-.039.039-.09.06-.145.06H3.096c-.055 0-.107-.021-.145-.06-.039-.038-.06-.09-.06-.145V5.284c0-.055.021-.107.06-.146.038-.038.09-.06.145-.06h5.263c.145 0 .285-.057.387-.16.103-.103.16-.242.16-.387v-.547c0-.145-.057-.284-.16-.386-.102-.103-.242-.16-.387-.16H2.891c-.436 0-.853.172-1.16.48-.308.308-.481.725-.481 1.16V17.11c0 .435.173.853.48 1.16.308.308.725.481 1.16.481h12.032c.435 0 .852-.173 1.16-.48.308-.308.48-.726.48-1.16v-5.47c0-.144-.057-.284-.16-.386-.102-.103-.241-.16-.386-.16z"></path></svg>
                  </span>
                </strong>
                입니다.
              </div>
              <div id='Body3Left31WrapTopImg'>
                <img 
                style={{width:'100%'}}
                src='https://cdn.inflearn.com/wp-content/uploads/avatars/7238/5bd0017bf304e-bpfull.jpg' />
              </div>
            </div>
            <div>
              <div  id='Body3Left31WrapBot'>
                <div id='Body3Left31WrapBotText'>
                  👋🏼 안녕하세요 인프런에서 강의하는
                  <span id='Body3Left31WrapBotSpan'>
                    김정환
                  </span> 
                  입니다.
                </div>
                <div id='Body3Left31WrapBotTextBot'>
                  수업 중 궁금한 사항은 질문 사항에 올려주세요.
                  <br/>
                  매일 한 번씩 확인하고 답변 드리겠습니다.
                </div>
              </div>
            </div>
          </Body3Left31Wrap>
        </Body3Left31>
        <Body3LeftSection>
            <div id='Body3Section1'>
              <span id='Body3Section1Span'>
                커리큘럼
              </span>
              <span id='Body3Section1Span2'>
              총 39
              개 ˙ 5시간 2분의 수업
              </span>
            </div>
            <Body3LeftSection2>
              <span id='Body3LeftSection2Text'>
                이 강의는 영상, 수업 노트가 제공됩니다. 미리보기를 통해 콘텐츠를 확인해보세요.
              </span>
              <button onClick={handleState} style={{display:isCheckAll===false?'none':'block'}} id='Body3LeftSection2Button'>
                모두 접기
              </button>
              <button onClick={noHandleState} style={{display:isCheckAll===true?'none':'block'}} id='Body3LeftSection2Button'>
                모두 펼치기
              </button>
              
            </Body3LeftSection2>
            <Body3LeftToggleWrap>
              <Body3LeftToggle1Wrap>
                <Body3LeftToggle1Top>
                  <span id='Arrow'>
                    <svg onClick={()=>{setCheck(!isCheck)}} style={{display:isCheck===false&&'none', width:'16px'}}><path fill="#495057" fill-rule="evenodd" d="M3.22 9.78c-.293-.293-.293-.767 0-1.06l4.25-4.25c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8 6.06 4.28 9.78c-.293.293-.767.293-1.06 0z" clip-rule="evenodd"></path></svg>
                    <svg onClick={()=>{setCheck(!isCheck)}} style={{display:isCheck===true&&'none', width:'16px'}}><path fill="#495057" fill-rule="evenodd" clip-rule="evenodd" d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"></path></svg>
                  </span>
                  <span id='Text1'>
                    섹션 0. 소개
                  </span>
                  <span id='Text2'>
                  1
                    강  ∙  4분
                  </span>
                </Body3LeftToggle1Top>
                <Body3LeftToggle1BotWrap isCheck={isCheck}>
                  <Body3LeftToggle1Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                      강의 소개
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                        04:41
                      </span>
                    </span>
                  </Body3LeftToggle1Bot>
                </Body3LeftToggle1BotWrap>  
              </Body3LeftToggle1Wrap>
              <Body3LeftToggle2Wrap>
                <Body3LeftToggle2Top>
                  <span id='Arrow'>
                    <svg onClick={()=>{setCheck1(!isCheck1)}} style={{display:isCheck1===false&&'none', width:'16px'}}><path fill="#495057" fill-rule="evenodd" d="M3.22 9.78c-.293-.293-.293-.767 0-1.06l4.25-4.25c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8 6.06 4.28 9.78c-.293.293-.767.293-1.06 0z" clip-rule="evenodd"></path></svg>
                    <svg onClick={()=>{setCheck1(!isCheck1)}} style={{display:isCheck1===true&&'none', width:'16px'}}><path fill="#495057" fill-rule="evenodd" clip-rule="evenodd" d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"></path></svg>
                  </span>
                  <span id='Text1'>
                    섹션 1. NPM
                  </span>
                  <span id='Text2'>
                    2 강 ∙ 20분
                  </span>
                </Body3LeftToggle2Top>
                <Body3LeftToggle2BotWrap isCheck={isCheck1}>
                  <Body3LeftToggle2Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    프로젝트 생성
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      10:05
                      </span>
                    </span>
                  </Body3LeftToggle2Bot>
                  <Body3LeftToggle2Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    외부 패키지를 관리하는 방법
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      10:13
                      </span>
                    </span>
                  </Body3LeftToggle2Bot>
                </Body3LeftToggle2BotWrap>
              </Body3LeftToggle2Wrap>
              <Body3LeftToggle3Wrap>
                <Body3LeftToggle3Top>
                <span id='Arrow'>
                    <svg onClick={()=>{setCheck2(!isCheck2)}} style={{display:isCheck2===false&&'none', width:'16px'}}><path fill="#495057" fill-rule="evenodd" d="M3.22 9.78c-.293-.293-.293-.767 0-1.06l4.25-4.25c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8 6.06 4.28 9.78c-.293.293-.767.293-1.06 0z" clip-rule="evenodd"></path></svg>
                    <svg onClick={()=>{setCheck2(!isCheck2)}} style={{display:isCheck2===true&&'none', width:'16px'}}><path fill="#495057" fill-rule="evenodd" clip-rule="evenodd" d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"></path></svg>
                  </span>
                  <span id='Text1'>
                  섹션 2. 웹팩(Webpack) - 기본편
                  </span>
                  <span id='Text2'>
                  12
                    강  ∙ 1시간 48분
                  </span>
                </Body3LeftToggle3Top>
                <Body3LeftToggle3BotWrap isCheck={isCheck2}>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    웹팩이 필요한 이유와 기본 동작
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      10:01
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    엔트리/아웃풋 실습
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      09:44
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    엔트리와 아웃풋(실습) 
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      03:53
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    엔트리와 아웃풋(풀이)
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      05:28
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    로더
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      05:55
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    자주 사용하는 로더
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      18:56
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    로더(실습)
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      03:03
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    로더(풀이)
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      06:13
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    플러그인
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      08:34
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    자주 사용하는 플러그인
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      22:20
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    플러그인(실습)
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      03:28
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    플러그인(풀이)
                    </span>
                    <span id='Text2Wrap'>
                      <span id='Text2'>
                      11:17
                      </span>
                    </span>
                  </Body3LeftToggle3Bot>
                </Body3LeftToggle3BotWrap>
              </Body3LeftToggle3Wrap>
            </Body3LeftToggleWrap>
            <SectionLast>
              <div id='Div1'>
                <span id='Span1'>
                강의 게시일 : 2020년 03월 02일
                </span>
                <span id='Span2'>
                (마지막 업데이트일 : 2020년 03월 02일)
                </span>
              </div>
            </SectionLast>
        </Body3LeftSection>
      </Body3Wrap>
    </Body3LeftStart>
  )
}

export default Body3Left;
