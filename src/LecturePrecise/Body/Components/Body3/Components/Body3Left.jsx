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
            ?????????  
          </strong>
          ??? ?????? ?????????
          <br/>
          <strong className='Body3LeftStrong'>
            [??? ??????, ???????????????] ???????????????.
          </strong>
        </Body3Left1>
        <Body3Left2>
          ?????? ????????? ?????? ?????? ????????? ????????? ??? ?????????.
          ???????????? ?????? ?????? ????????? ?????? ??? ?????????.
        </Body3Left2>
        <Body3Left3>
          <div id='Body3Left31'>
            ??????
            <br/>
            ?????? ???
            <br/>
            ?????????!
          </div>
          <div id='Body3Left32'>
            <div className='Body3Left32Text'>
              <span className='Body3Left32TextCheck'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              ?????????????????? ???????????? ?????? ????????? ??????????????? ??????(Webpack)
            </div>
            <div className='Body3Left32Text'>
              <span className='Body3Left32TextCheck'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              ?????? ?????????????????? ????????? ???????????? ?????? ?????????(Babel)
            </div>
            <div className='Body3Left32Text'>
              <span className='Body3Left32TextCheck'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              ????????? ???????????? ?????? ?????? ????????? (ESLint, Prettier)
            </div>
          </div>
        </Body3Left3>
        <Body3Left4>
          <strong id='Body3Left4Strong'>
            ??????, ??????, ?????? ?????? ??????????????? ??????
          </strong>
          ??? ???????????? ????????? ????????? ?????????!
        </Body3Left4>
        <Body3Left5>
          <strong id='Body3Left5Strong'>
            <img src='https://cdn.inflearn.com/public/files/courses/324671/44b78604-6da0-4524-a983-0797d8e67dd8/a-2.jpg' />
          </strong>
        </Body3Left5>
        <Body3Left6>
          ???????????? ????????? ??? ?????? ?????? ??? ?????? ???!????
        </Body3Left6>
        <Body3Left7>
        ?????? ??? ??? ?????? ?????? ???????????? ????????? ?????????? ????????? ???????????? ??? ??? ?????? ????????? ????????? ????????????.
        <br/>
        ???????????? ????????? ???????????? ?????? ???????????? ?????? ?????? ??? ?????????.  
        </Body3Left7>
        <Body3Left8>
          <span id='Body3Left81'>
            ?????? ?????? ??????????????? ??? ????????? ?????? ?????? ??? ????????? ????????????? 
          </span>
          <br/>
          ????????? ?????? ????????? ????????? ?????? ??????(???????????? create-react-app?????? vue-cli??? ?????? ??????)??? ?????? ????????? ??? ?????? ????????? ????????? ?????? ????????? ?????? ?????? ??? ?????? ?????????.
        </Body3Left8>
        <Body3Left9>
        ????????? ????????? ??????, ??????, ???????????? ??? ??????????????? ?????? ????????? ??????????????? ???????????? ?????? ??? ??? ?????? ???????????? ?????? ??? ?????? ????????? ??????????????????. 
        <br/>
        ????????? ?????? ?????? ????????? ?????? ?????? ??? ????????? ???????????????.
        </Body3Left9>
        <Body3Left10 />
        <Body3Left11 />
        <Body3Left12>
          ???? ?????? ??? ????????? ??????????
        </Body3Left12>
        <Body3LeftCardArray />
        <Body3Left13/>
        <Body3Left14/>
        <Body3Left15/>
        <Body3Left16>
          ????
          <strong style={{fontWeight:'700'}}>
            ?????? ????????? ?????????
          </strong>
        </Body3Left16>
        <Body3Left17>        
          <a style={{fontWeight:'700'}}>
            VSCode
          </a>
          ??? ??????????????? ????????? ???????????? ???????????? IDE??? ????????? ????????? ??????????????? ???????????????.
          <br/>
          ?????? ????????? ?????? 
          <a style={{fontWeight:'700'}}>
            Git
          </a>
          ??? ????????? ?????????. ??? ?????? ???????????? ????????? ?????? ????????? v2.3.0 ?????? ????????? ??????????????? ????????????.
        </Body3Left17>
        <Body3Left18/>
        <Body3Left19/>
        <Body3Left20>
          ?????????????????
          <strong style={{fontWeight:'700'}}>
          ?????? ?????? ?????? ??????
          </strong>
        </Body3Left20>
        <Body3Left21>
          <strong 
          className='Body3Left21Strong'>
            Q. ??? ????????? ???????????? ??? ????????? ??????????????????. 
            <br/>
          </strong>
          A. ??????????????? ????????? ?????? ??????????????? ????????? ????????? ????????? ????????? ?????? ???????????????. ???????????? ???????????? ???????????? ?????? ???????????? ?????? ?????? ???????????? ????????? ??????????????? ???????????? ???????????? ????????? 
          <strong className='Body3Left21Strong'>
          "??????????????? ??????????????? ??????(??? 5???)"
          </strong>
          ?????????. &nbsp; ????????? ?????? 2019??? T?????????????????? ??? ????????? ???????????? ???????????? ????????? ????????? ????????? ????????? ????????? ???????????????. ????????? ???????????? ????????? ??? ???????????? ???????????? ????????? ????????? ?????????????????????.????????? ?????? 2019??? T?????????????????? ??? ????????? ???????????? ???????????? ????????? ????????? ????????? ????????? ????????? ???????????????. ????????? ???????????? ????????? ??? ???????????? ???????????? ????????? ????????? ?????????????????????.
        </Body3Left21>
        <Body3Left22>
          <strong className='Body3Left21Strong'>
          Q.??? ???????????? ????????? ????????? ?????????????
          <br/>
          </strong>
          A. ????????????????????? ????????? ???????????? ??? ??????????????? ????????? ?????????. ???????????? ???????????? ?????????????????? ??? ????????? ????????????. ????????? ??? ?????? ???????????? ????????? ????????? ??????????????????(
            <strong className='Body3Left21Strong'>
          ?????? ?????????: lecture-frontend-dev-env
          </strong>
          ).?????? ?????? 
          <strong className='Body3Left21Strong'>
            "?????? UI ????????? ???????????? ?????? javascript ??? VueJS ??????"
          </strong>
          ?????? ?????? ????????? ???????????? ????????? ??????????????? ??????????????? ???????????? ?????? ????????? ???????????????. ???????????? ?????????????????? ????????? ?????? ?????? ?????????????????? ?????? ???????????? ????????? ?????????.
        </Body3Left22>
        <Body3Left23>
          <strong className='Body3Left21Strong'>
          Q. ??? ????????? ?????? ?????? ?????? ??? ??? ??????????
          <br/>
          </strong>
          A. ?????? ???????????? ???????????? ?????? ??????????????? ??????????????? ????????? ??? ???????????????. ??????????????? ???????????????????????? ???????????? ?????? ?????? ?????????. ?????? ??? ??????????????? ???????????? ???????????????? ?????? ????????? ?????? ?????? ?????? ????????? ????????? ?????? ????????????. 
        </Body3Left23>
        <Body3Left24/>
        <Body3Left25/>
        <Body3Left26>
        ?????? ?????? ??????
        </Body3Left26>
        <Body3LeftCardArray2/>
        <Body3Left27/>
        <Body3Left28>
        ?????????????????? ????????????
        <br/>
        <strong style={{fontWeight:700}}>
        ?????? ?????? ??????!
        </strong>
        </Body3Left28>
        <Body3Left29>
          <Body3Left29Left>
            ????
            <br/>
            ?????? ?????????
            <br/>
            ???????????????!
          </Body3Left29Left>
          <Body3Left29Right>
            <div className='Body3Left29RightText'>
              <span className='Body3Left29RightSpan'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              ?????? ????????? ??????????????? ???????????? ???????????? ?????? ????????? ????????? ??????????????? 
            </div>
            <div className='Body3Left29RightText'>
            <span className='Body3Left29RightSpan'>
              <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              ????????? ??? ?????? ????????? ?????? ???????????? ???????????? ?????? ?????? ?????????
            </div>
            <div className='Body3Left29RightText'>
            <span className='Body3Left29RightSpan'>
              <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              ???????????? ?????? ???????????? ???????????? ????????? ????????? ???????????? ?????? ??? ??? ??????
            </div>
          </Body3Left29Right>
        </Body3Left29>
        <Body3Left30>
          <Body3Left30Left>
            ????
            <br/>
            ?????? ??????,
            <br/>
            ????????????????
          </Body3Left30Left>
          <Body3Left30Right>
            <div id='Body3Left30RightText'>
              <span id='Body3Left30RightIcon'>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>
              </span>
              ???????????? ??????????????? ?????? ????????? ???????????????. (??????????????????, HTML, CSS)
            </div>
          </Body3Left30Right>
        </Body3Left30>
        <Body3Left31>
          <Body3Left31Wrap>
            <div id='Body3Left31WrapTop'>
              <div id='Body3Left31WrapTopText'>
                ???????????????
                <br/>
                <strong id='Body3Left31WrapTopStrong'>
                  ?????????
                  <span id='Body3Left31WrapTopIcon'>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#212529" d="M18.258 1.25l-5.578.006c-.13 0-.256.052-.348.144-.093.092-.145.217-.145.348v1.139c0 .065.014.13.039.19s.062.115.11.161c.046.046.101.082.162.106.061.024.126.036.192.035l2.516-.093.07.07-9.53 9.532c-.039.038-.07.083-.09.133-.02.05-.031.103-.031.157 0 .054.01.108.031.158.02.05.051.095.09.133l.785.786c.039.038.084.069.134.09.05.02.103.03.157.03.054 0 .107-.01.157-.03.05-.021.095-.052.133-.09l9.532-9.532.07.07-.093 2.517c-.001.066.01.13.035.192.024.06.06.116.106.163s.1.084.16.11c.061.024.126.038.191.037h1.139c.13 0 .256-.051.348-.144.092-.092.144-.217.144-.348l.006-5.578c0-.13-.052-.256-.144-.348-.093-.092-.218-.144-.348-.144zm-2.242 9.844h-.547c-.145 0-.284.057-.387.16-.103.103-.16.242-.16.387v5.263c0 .055-.022.107-.06.145-.039.039-.09.06-.145.06H3.096c-.055 0-.107-.021-.145-.06-.039-.038-.06-.09-.06-.145V5.284c0-.055.021-.107.06-.146.038-.038.09-.06.145-.06h5.263c.145 0 .285-.057.387-.16.103-.103.16-.242.16-.387v-.547c0-.145-.057-.284-.16-.386-.102-.103-.242-.16-.387-.16H2.891c-.436 0-.853.172-1.16.48-.308.308-.481.725-.481 1.16V17.11c0 .435.173.853.48 1.16.308.308.725.481 1.16.481h12.032c.435 0 .852-.173 1.16-.48.308-.308.48-.726.48-1.16v-5.47c0-.144-.057-.284-.16-.386-.102-.103-.241-.16-.386-.16z"></path></svg>
                  </span>
                </strong>
                ?????????.
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
                  ???????? ??????????????? ??????????????? ????????????
                  <span id='Body3Left31WrapBotSpan'>
                    ?????????
                  </span> 
                  ?????????.
                </div>
                <div id='Body3Left31WrapBotTextBot'>
                  ?????? ??? ????????? ????????? ?????? ????????? ???????????????.
                  <br/>
                  ?????? ??? ?????? ???????????? ?????? ??????????????????.
                </div>
              </div>
            </div>
          </Body3Left31Wrap>
        </Body3Left31>
        <Body3LeftSection>
            <div id='Body3Section1'>
              <span id='Body3Section1Span'>
                ????????????
              </span>
              <span id='Body3Section1Span2'>
              ??? 39
              ??? ?? 5?????? 2?????? ??????
              </span>
            </div>
            <Body3LeftSection2>
              <span id='Body3LeftSection2Text'>
                ??? ????????? ??????, ?????? ????????? ???????????????. ??????????????? ?????? ???????????? ??????????????????.
              </span>
              <button onClick={handleState} style={{display:isCheckAll===false?'none':'block'}} id='Body3LeftSection2Button'>
                ?????? ??????
              </button>
              <button onClick={noHandleState} style={{display:isCheckAll===true?'none':'block'}} id='Body3LeftSection2Button'>
                ?????? ?????????
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
                    ?????? 0. ??????
                  </span>
                  <span id='Text2'>
                  1
                    ???  ???  4???
                  </span>
                </Body3LeftToggle1Top>
                <Body3LeftToggle1BotWrap isCheck={isCheck}>
                  <Body3LeftToggle1Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                      ?????? ??????
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
                    ?????? 1. NPM
                  </span>
                  <span id='Text2'>
                    2 ??? ??? 20???
                  </span>
                </Body3LeftToggle2Top>
                <Body3LeftToggle2BotWrap isCheck={isCheck1}>
                  <Body3LeftToggle2Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    ???????????? ??????
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
                    ?????? ???????????? ???????????? ??????
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
                  ?????? 2. ??????(Webpack) - ?????????
                  </span>
                  <span id='Text2'>
                  12
                    ???  ??? 1?????? 48???
                  </span>
                </Body3LeftToggle3Top>
                <Body3LeftToggle3BotWrap isCheck={isCheck2}>
                  <Body3LeftToggle3Bot>
                    <span id='Icon'>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#212529" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span id='Text1'>
                    ????????? ????????? ????????? ?????? ??????
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
                    ?????????/????????? ??????
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
                    ???????????? ?????????(??????) 
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
                    ???????????? ?????????(??????)
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
                    ??????
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
                    ???????????? ?????????????????????????????? ????????????
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
                    ????????????(??????????????????)
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
                    ????????????(??????)
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
                    ??????????????????????????????
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
                    ???????????? ?????????????????????????????? ??????????????????????????????
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
                    ??????????????????????????????(??????????????????)
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
                    ??????????????????????????????(???????????????)
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
                ?????? ????????? : 2020??? 03??? 02???
                </span>
                <span id='Span2'>
                (????????? ??????????????? : 2020??? 03??? 02???)
                </span>
              </div>
            </SectionLast>
        </Body3LeftSection>
      </Body3Wrap>
    </Body3LeftStart>
  )
}

export default Body3Left;
