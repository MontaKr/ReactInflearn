import React from 'react'
import styled from 'styled-components';
import SimpleSlider from './Slider';
import { useState } from 'react';

const MainWrap = styled.div`
  min-height: 800px;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
`

const SectionWrap = styled.div`
  margin: 64px auto auto;
  width: 320px;
  height: 676px;
  display: block;
`

const Text1 = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 26px;
`

const Text2 = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 24px;
`

const SignUpMain = styled.div`
  box-sizing: border-box;
  display: block;
`

const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0em;
`
const EmailWrap = styled.div`
  margin-bottom: 16px;
  box-sizing: border-box;

  #EmailInput {
    border:none;
    width: 90%;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    outline: none;
  }

  #EmailInput::placeholder {
    display: block !important;
    color: #ced4da;
    font-size: .9rem;
    text-overflow: inherit;
    white-space: pre;
    overflow-wrap: normal;
    line-height: initial !important;
    -webkit-user-modify: read-only !important;
    overflow: hidden;
    border: none;
  }
`

const LabelForm = styled.div`
  line-height: 1.43;
  letter-spacing: -.3px;
  font-size: 14px;
  font-weight: 400;
  color: #3e4042;
`

const InputWrap = styled.div`
  appearance: none;
  margin-top: 4px;
  width: 294px;
  padding: 13px 12px;
  height: 24px;
  line-height: 1.47;
  font-size: 15px;
  border: 1px solid #dee2e6;
  letter-spacing: -.3px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
`

const PassWordWrap = styled.div`
  margin-bottom: 16px;

  #PassWordInput {
    border:none;
    width: 90%;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    outline: none;
  }

  #PassWordInput::placeholder {
    display: block !important;
    color: #ced4da;
    font-size: .9rem;
  }

  #PassWordSee {
    cursor: pointer;
  }
`

const PassWordConfirm = styled.div`
  margin-bottom: 16px;

#PassWordInput {
  border:none;
  width: 90%;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
}

#PassWordInput::placeholder {
  display: block !important;
  color: #ced4da;
  font-size: .9rem;
}

#PassWordSee {
  cursor: pointer;
}
`

const SignUpButton = styled.div`
  border-color: #00c471;
  font-weight: 700;
  background-color: #00c471;
  margin-top: 16px;
  margin-bottom: 12px;
  border: 1px solid;
  color: #fff;
  padding: 0 16px;
  height: 48px;
  line-height: 1.47;
  font-size: 15px;
  letter-spacing: -.3px;
  position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    -webkit-appearance: none;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;

`

const Footer = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;

    #WrongText {
      line-height: 1.5;
      letter-spacing: -.3px;
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 6px;
      color: #858a8d;
    }

    .Blue {
      color: #1964d5;
      text-decoration: none;
      cursor: pointer;
    }
`

const AllowFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-size: 16px;
  margin: 0;
  line-height: 1.6;
  padding: 0;
  margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

  #AllowText {
    line-height: 1.5;
    letter-spacing: -.3px;
    font-size: 12px;
    font-weight: 400;
    margin-left: 4px;
    color: #858a8d;
  }

  #allow-marketing {
    vertical-align: baseline;
  }
`

const SocailLog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: inherit;

  #line {
    position: relative;
    top: 7.5px;
    margin: 0!important;
    width: 100%;
    height: 1px;
    background-color: #f1f3f5;
    border: none;
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
}

#EasyLog {
  font-weight: 400;
    margin-bottom: 16px;
    padding: 0 8px;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -.3px;
    color: #abb0b5;
    z-index: 1;
    background: #fff;
}
`

const SocialIcon = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  #kakao {
    background-color: #fae500;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    cursor: pointer;
  }

  #google {
    margin-left: 12px;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    cursor: pointer;
  }
`

function Main() {

  const [passWordVisible, setPassWordVisible] = useState(false)
  const [passWordVisible1, setPassWordVisible1] = useState(false)

  return (
    <MainWrap>
      <SectionWrap>
        <Text1>
          회원가입
        </Text1>
        <Text2>
          <SimpleSlider/>
        </Text2>
        <SignUpMain>
          <SignForm>
            <EmailWrap>
              <LabelForm>
                이메일
              </LabelForm>
              <InputWrap>
                <input id='EmailInput' placeholder='example@inflab.com' type='email'/>
              </InputWrap>       
            </EmailWrap>
            <PassWordWrap>
              <LabelForm>
                비밀번호
              </LabelForm>
              <InputWrap>
                <input id='PassWordInput' placeholder='******' type={passWordVisible===true?'text':'password'}/>
                <span id='PassWordSee' onClick={()=>{setPassWordVisible(!passWordVisible)}}>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"></path><path fill="#212529" fill-rule="evenodd" d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z" clip-rule="evenodd"></path></svg>
                </span>
              </InputWrap>
            </PassWordWrap>
            <PassWordConfirm>
              <LabelForm>
                비밀번호 확인
              </LabelForm>
              <InputWrap>
                <input id='PassWordInput' placeholder='******' type={passWordVisible1===true?'text':'password'}/>
                <span id='PassWordSee' onClick={()=>{setPassWordVisible1(!passWordVisible1)}}>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"></path><path fill="#212529" fill-rule="evenodd" d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z" clip-rule="evenodd"></path></svg>
                </span>
              </InputWrap>
            </PassWordConfirm>
            <SignUpButton>
              가입하기
            </SignUpButton>
            <Footer>
              <span id='WrongText'>  
                가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다.
                <span className='Blue'>
                  통합 계정
                </span>
                및 서비스 이용약관 (
                <span className='Blue'>
                  인프런
                </span> 
                /
                <span className='Blue'>
                  랠릿
                </span>
                ),
                <span className='Blue'>
                  개인정보취급방침
                </span>
                에 동의합니다.
              </span>
              <AllowFooter>
              <span id='AllowText'>
                통합회원 할인 혜택 및 유용한 채용 소식을 받아볼래요.
              </span>
              <input id="allow-marketing" type="checkbox"  data-kv="allowMarketing"/>
            </AllowFooter>
            </Footer>        
          </SignForm>
        </SignUpMain>
        <SocailLog>
          <hr id='line'/>
          <span id='EasyLog'>
            간편 회원가입
          </span>
        </SocailLog>
        <SocialIcon>
          <button id='kakao'>
            <svg width="18px" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 18 17"><g transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)" stroke="none"><path fill="#212529" d="M38 154 c-15 -8 -30 -25 -34 -38 -6 -26 10 -66 27 -66 7 0 9 -10 5 -26 -7 -25 -6 -25 16 -10 12 9 31 16 41 16 29 0 75 28 82 50 10 31 -3 59 -35 75 -36 19 -67 18 -102 -1z"></path></g></svg>
          </button>
          <button id='google'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.785 9.169c0-.738-.06-1.276-.189-1.834h-8.42v3.328h4.942c-.1.828-.638 2.073-1.834 2.91l-.016.112 2.662 2.063.185.018c1.694-1.565 2.67-3.867 2.67-6.597z"></path><path fill="#34A853" d="M9.175 17.938c2.422 0 4.455-.797 5.94-2.172l-2.83-2.193c-.758.528-1.774.897-3.11.897-2.372 0-4.385-1.564-5.102-3.727l-.105.01-2.769 2.142-.036.1c1.475 2.93 4.504 4.943 8.012 4.943z"></path><path fill="#FBBC05" d="M4.073 10.743c-.19-.558-.3-1.156-.3-1.774 0-.618.11-1.216.29-1.774l-.005-.119L1.254 4.9l-.091.044C.555 6.159.206 7.524.206 8.969c0 1.445.349 2.81.957 4.026l2.91-2.252z"></path><path fill="#EB4335" d="M9.175 3.468c1.684 0 2.82.728 3.468 1.335l2.531-2.471C13.62.887 11.598 0 9.175 0 5.667 0 2.638 2.013 1.163 4.943l2.9 2.252c.727-2.162 2.74-3.727 5.112-3.727z"></path></svg>
          </button>
        </SocialIcon>
      </SectionWrap>
    </MainWrap>
  )
}

export default Main;
