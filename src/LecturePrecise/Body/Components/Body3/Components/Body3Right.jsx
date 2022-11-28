import React from 'react'
import styled from 'styled-components';

const Body3RightStart = styled.div`
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-left: 8px;
  padding-right: 8px;
`

const Body3RightWrap = styled.div`
  position: sticky;
  top: 75px;
  margin: 28px 34px 20px auto;
  width: 332px;
  box-sizing: border-box;
`

const Body3Right1 = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11px 10px 11px 16px;
  margin: 20px 0 16px;
  border: 1px solid rgba(20,150,223,.25);
  border-radius: 8px;
  background-color: #e8f5ff;
  color: #3e4042;
  overflow-wrap: break-word;
`

const Body3Right2 = styled.div`
  margin-bottom: 20px;
  padding: 20px 24px 0;
  letter-spacing: -.3px;
  font-size: 24px;
  line-height: 1.42;
  color: #343a40;
  font-weight: 700;
`

const Body3Right2Wrap = styled.div`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #f1f3f5;
  box-shadow: 0 1px 3px 0 rgb(33 37 41 / 3%);
  background-color: #f8f9fa;
`
const Body3Right3 = styled.div`
  margin-bottom: 8px;
  padding: 0 24px;
`

const Body3Right3Button1 = styled.button`
    min-width: 100%;
    border-color: #00c471;
    font-weight: 700;
    background-color: #00c471;
    border: 1px solid;
    color: #fff;
    padding: 0 16px;
    height: 48px;
    line-height: 1.47;
    font-size: 15px;
    border-radius: 4px;
    letter-spacing: -.3px;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
`

const Body3Right3Button2 = styled.button`
  font-weight: 700;
    min-width: 100%;
    border-color: #d5dbe2;
    color: #495057;
    background-color: #fff;
    margin-top: 8px;
    border: 1px solid;
    padding: 0 16px;
    height: 48px;
    line-height: 1.47;
    font-size: 15px;
    letter-spacing: -.3px;
`

const Body3Right4 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 24px;

  .Body3Right4Text {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    position: relative;
    flex: auto;
    padding: 10px 12px;
    color: #495057;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  }

  #Body3Right4Icon1 {
    margin-right: 8px;
    width: 17px;
    height: 16px;
  }

  #Body3Right4Icon2 {
    margin-right: 8px;
    width: 17px;
    height: 16px;
  }

  #Body3Right4Icon3 {
    margin-right: 8px;
    width: 17px;
    height: 16px;
  }
`

const Body3Right5 = styled.div`
  padding: 16px 24px;
  background-color: #f8f9fa;

  .Body3Right5Text {
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    color: #3e4042;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
    margin-top: 4px;
  }

  .Body3RightPoint{
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }

  #Body3Right5Anchor {
    text-decoration-color: #175cbe;
    color: #175cbe;
  }

  #Body3Right5Bold {
    font-weight: 900;
  }

  .Body3Right5Grey {
    color: #abb0b5;
  }

  #Body3Right5Last {
    margin-top: 4px;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    color: #3e4042;
  }

  #Body3Right5Last1 {
    width: 100%;
    margin-top: 4px;
    padding: 4px 11px;
    border-radius: 4px;
    background-color: rgba(23,92,190,.06);
    text-align: center;
    color: #175cbe;
  }
`

function Body3Right() {
  return (
    <Body3RightStart>
      <Body3RightWrap>
        <Body3Right1 />
        <Body3Right2Wrap>
          <Body3Right2>
            69,300원
          </Body3Right2>
          <Body3Right3>
            <Body3Right3Button1>
              수강신청 하기
            </Body3Right3Button1>
            <Body3Right3Button2>
              바구니에 담기
            </Body3Right3Button2>
          </Body3Right3>
        </Body3Right2Wrap>
        <Body3Right4>
          <span className='Body3Right4Text'>
            <span id='Body3Right4Icon1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16"><path fill="#212529" fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2.5A.5.5 0 0 0 2 3v10a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 0-.5-.5H7.035a1.5 1.5 0 0 1-1.248-.668l-.406-.61a.5.5 0 0 0-.416-.222H2.5zM1 3a1.5 1.5 0 0 1 1.5-1.5h2.465c.501 0 .97.25 1.248.668l.406.61A.5.5 0 0 0 7.035 3H14.5A1.5 1.5 0 0 1 16 4.5V13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 13V3z"></path><path fill="#212529" fill-rule="evenodd" clip-rule="evenodd" d="M8.5 5.5A.5.5 0 0 1 9 6v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"></path><path fill="#212529" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5z"></path></svg>
            </span>
            폴더에 추가
          </span>
          <span className='Body3Right4Text'>
            <span id='Body3Right4Icon2'>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#212529" fill-rule="evenodd" clip-rule="evenodd" d="M4.49095 2.66666C3.10493 2.66666 1.66663 3.92028 1.66663 5.67567C1.66663 7.74725 3.21569 9.64919 4.90742 11.0894C5.73796 11.7965 6.571 12.3653 7.19759 12.7576C7.51037 12.9534 7.7704 13.1045 7.95123 13.2061C7.96818 13.2156 7.98443 13.2247 7.99996 13.2333C8.01549 13.2247 8.03174 13.2156 8.04869 13.2061C8.22952 13.1045 8.48955 12.9534 8.80233 12.7576C9.42892 12.3653 10.262 11.7965 11.0925 11.0894C12.7842 9.64919 14.3333 7.74725 14.3333 5.67567C14.3333 3.92028 12.895 2.66666 11.509 2.66666C10.1054 2.66666 8.9751 3.59266 8.4743 5.09505C8.40624 5.29922 8.21518 5.43693 7.99996 5.43693C7.78474 5.43693 7.59368 5.29922 7.52562 5.09505C7.02482 3.59266 5.89453 2.66666 4.49095 2.66666ZM7.99996 13.8018L8.22836 14.2466C8.08499 14.3202 7.91493 14.3202 7.77156 14.2466L7.99996 13.8018ZM0.666626 5.67567C0.666626 3.368 2.55265 1.66666 4.49095 1.66666C6.01983 1.66666 7.25381 2.48414 7.99996 3.73655C8.74611 2.48414 9.98009 1.66666 11.509 1.66666C13.4473 1.66666 15.3333 3.368 15.3333 5.67567C15.3333 8.22121 13.4657 10.3823 11.7407 11.8509C10.863 12.5982 9.98767 13.1953 9.33301 13.6052C9.00516 13.8104 8.73133 13.9696 8.53847 14.0779C8.44201 14.1321 8.36571 14.1737 8.31292 14.2019C8.28653 14.2161 8.26601 14.2269 8.25177 14.2344L8.2352 14.2431L8.23054 14.2455L8.22914 14.2462C8.22897 14.2463 8.22836 14.2466 7.99996 13.8018C7.77156 14.2466 7.77173 14.2467 7.77156 14.2466L7.76938 14.2455L7.76472 14.2431L7.74815 14.2344C7.73391 14.2269 7.71339 14.2161 7.687 14.2019C7.63421 14.1737 7.55791 14.1321 7.46145 14.0779C7.26858 13.9696 6.99476 13.8104 6.66691 13.6052C6.01225 13.1953 5.13695 12.5982 4.25917 11.8509C2.53423 10.3823 0.666626 8.22121 0.666626 5.67567Z"></path></svg>
            </span>
            3.9K
          </span>
          <span className='Body3Right4Text'>
            <span id='Body3Right4Icon3'>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#212529" fill-rule="evenodd" clip-rule="evenodd" d="M13.3334 3.66666C13.3334 4.95533 12.2887 6 11 6C10.3257 6 9.7181 5.7139 9.29211 5.25646L5.88379 7.27067C5.95923 7.50012 6.00004 7.74529 6.00004 8C6.00004 8.25469 5.95923 8.49986 5.8838 8.72932L9.29224 10.7434C9.71822 10.286 10.3257 10 11 10C12.2887 10 13.3334 11.0447 13.3334 12.3333C13.3334 13.622 12.2887 14.6667 11 14.6667C9.71138 14.6667 8.66671 13.622 8.66671 12.3333C8.66671 12.0786 8.70752 11.8335 8.78296 11.604L5.37452 9.58992C4.94854 10.0473 4.34103 10.3333 3.66671 10.3333C2.37804 10.3333 1.33337 9.28866 1.33337 8C1.33337 6.71133 2.37804 5.66666 3.66671 5.66666C4.34102 5.66666 4.94853 5.9527 5.37452 6.41007L8.78295 4.39599L8.78321 4.39678C8.70761 4.1671 8.66671 3.92166 8.66671 3.66666C8.66671 2.378 9.71138 1.33333 11 1.33333C12.2887 1.33333 13.3334 2.378 13.3334 3.66666ZM12.3334 3.66666C12.3334 4.40304 11.7364 4.99999 11 4.99999C10.2637 4.99999 9.66671 4.40304 9.66671 3.66666C9.66671 2.93028 10.2637 2.33333 11 2.33333C11.7364 2.33333 12.3334 2.93028 12.3334 3.66666ZM3.66671 9.33333C4.40309 9.33333 5.00004 8.73637 5.00004 8C5.00004 7.26362 4.40309 6.66666 3.66671 6.66666C2.93033 6.66666 2.33337 7.26362 2.33337 8C2.33337 8.73637 2.93033 9.33333 3.66671 9.33333ZM12.3334 12.3333C12.3334 13.0697 11.7364 13.6667 11 13.6667C10.2637 13.6667 9.66671 13.0697 9.66671 12.3333C9.66671 11.5969 10.2637 11 11 11C11.7364 11 12.3334 11.5969 12.3334 12.3333Z"></path></svg>
            </span>
            공유
          </span>
        </Body3Right4>
        <Body3Right5>
          <div className='Body3Right5Text'>
            <span className='Body3RightPoint'>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"></path></svg>
            </span>
            지식공유자: 
            <a id='Body3Right5Anchor'>
              김정환
            </a>
          </div>
          <div className='Body3Right5Text'>
            <span className='Body3RightPoint'>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"></path></svg>
            </span>
          총 39개 수업 (5시간 2분)
          </div>
          <div className='Body3Right5Text'>
            <span className='Body3RightPoint'>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"></path></svg>
            </span>
            수강기한:&nbsp;
            <span id='Body3Right5Bold'>
              무제한
            </span>
          </div>
          <div className='Body3Right5Text'>
            <span className='Body3RightPoint'>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"></path></svg>
            </span>
            수료증: 발급
          </div>
          <div className='Body3Right5Text'>
            <span className='Body3RightPoint'>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"></path></svg>
            </span>
            난이도:&nbsp;
            <span className='Body3Right5Grey'>
              입문
            </span>
            -
            <span className='Body3Right5Grey'>
              초급
            </span>
            -
            중급이상
          </div>
          <div id='Body3Right5Last'>
            <div id='Body3Right5Last1'>
              지식공유자 답변이 제공되는 강의입니다
            </div>
          </div>
        </Body3Right5>
      </Body3RightWrap>
    </Body3RightStart>
  )
}

export default Body3Right;
