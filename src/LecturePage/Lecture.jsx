import React from 'react';
import Footer from '../Site/Footer/Footer';
import "./lecture.css";
import NaviIconList from './NaviIconList';
import NaviRecent from './NaviRecent';
import NaviSearch from './NaviSearch';

function Lecture() {



  return (
    <>
      <header id="header_wrap">
      <div id="header_main">
        <div id="header_left">
          <div id="header_left_1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.4702 7.30208C16.1056 6.46354 15.6135 5.71615 14.9937 5.07813C14.3558 4.4401 13.6267 3.92969 12.7882 3.5651C11.9497 3.20052 11.0383 3 10.0723 3C9.12446 3 8.21308 3.16406 7.35638 3.52865C6.49969 3.89323 5.75236 4.38542 5.09617 5.00521C4.43998 5.64323 3.92961 6.3724 3.56505 7.21094C3.2005 8.04948 3 8.96094 3 9.92708C3 10.875 3.16405 11.7865 3.5286 12.6432C3.89315 13.5 4.38529 14.2474 5.02326 14.9036C5.66122 15.5599 6.40855 16.0703 7.24702 16.4349C8.10371 16.7995 8.99686 17 9.96292 17H16.9988V10.0365C17.017 9.07031 16.8347 8.15885 16.4702 7.30208ZM7.79384 15.1406C7.11943 14.849 6.51792 14.4297 6.00755 13.9193C5.49717 13.3906 5.09617 12.7891 4.80453 12.1146C4.51289 11.4219 4.38529 10.7109 4.38529 9.94531C4.38529 9.16146 4.54934 8.43229 4.84098 7.75781C5.13262 7.08333 5.55186 6.5 6.06223 5.98958C6.59083 5.47917 7.19234 5.09635 7.86676 4.80469C8.5594 4.51302 9.27028 4.38542 10.0358 4.38542C10.8196 4.38542 11.5487 4.54948 12.2231 4.84115C12.8976 5.13281 13.4808 5.53385 13.9912 6.0625C14.5016 6.57292 14.8844 7.17448 15.176 7.84896C15.4676 8.52344 15.5952 9.25261 15.5952 10.0365V14.7396L10.5644 9.65365L11.6763 6.59115C11.8039 6.26302 11.6216 5.89844 11.2935 5.77083C10.9654 5.64323 10.6009 5.82552 10.4733 6.15365L9.58015 8.63281L8.01258 7.04688C7.75739 6.79167 7.35638 6.79167 7.11943 7.04688C6.86424 7.30208 6.86424 7.70313 7.11943 7.9401L10.9472 11.8594H8.17662C7.8303 11.8594 7.53866 12.151 7.53866 12.4974C7.53866 12.8438 7.8303 13.1354 8.17662 13.1354H12.1502C12.1685 13.1354 12.1867 13.1354 12.1867 13.1354L14.6656 15.6146H9.96292C9.17914 15.5964 8.48649 15.4505 7.79384 15.1406Z" fill="#00C471"></path>
            </svg>
            교육
          </div>
          <div id="header_left_2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.7626C3 7.3177 5.76662 4.52502 9.17943 4.52502H12.7955V7.11248H9.17943C7.1823 7.11248 5.56332 8.74672 5.56332 10.7626C5.56332 12.7786 7.1823 14.4128 9.17943 14.4128C11.1765 14.4128 12.7955 12.7786 12.7955 10.7626V7.11248H15.3589V10.7626C15.3589 14.2076 12.5922 17.0003 9.17943 17.0003C5.76662 17.0003 3 14.2076 3 10.7626Z" fill="#858A8D"></path>
              <path d="M15.4272 5.91089C16.2235 5.91089 16.8691 5.25927 16.8691 4.45545C16.8691 3.65163 16.2235 3 15.4272 3C14.6309 3 13.9854 3.65163 13.9854 4.45545V5.91089H15.4272Z" fill="#858A8D"></path>
            </svg>
            채용
          </div>
        </div>
        <div id="header_right">
          지식공유 참여
        </div>
      </div>
      </header>
      <div id="navi_wrap">
        <div id="navi_logo">
          <svg width="110" id="icon_brand_logo" class="brand_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433 90"><path class="A" d="M79.1 31.6c-2-4.6-4.7-8.7-8.1-12.2-3.5-3.5-7.5-6.3-12.1-8.3S49.3 8 43.9 8c-5.2 0-10.2.9-14.9 2.9s-8.8 4.7-12.4 8.1c-3.6 3.5-6.4 7.5-8.4 12.1A37.14 37.14 0 0 0 5.1 46c0 5.2.9 10.2 2.9 14.9s4.7 8.8 8.2 12.4 7.6 6.4 12.2 8.4c4.7 2 9.6 3.1 14.9 3.1l38.3.3.3-38.5c.1-5.3-.9-10.3-2.8-15zM74 77.4l-30.7-.3c-4.2 0-8.2-.9-11.9-2.5s-7-3.9-9.8-6.7A32.99 32.99 0 0 1 15 58c-1.6-3.8-2.3-7.7-2.3-11.9 0-4.3.9-8.3 2.5-12s3.9-6.9 6.7-9.7c2.9-2.8 6.2-4.9 9.9-6.5 3.8-1.6 7.7-2.3 11.9-2.3 4.3 0 8.3.9 12 2.5s6.9 3.8 9.7 6.7c2.8 2.8 4.9 6.1 6.5 9.8s2.3 7.7 2.3 12L74 77.4z"></path><path class="A" d="M76.9 83.7c-.9 0-1.8-.3-2.5-1L27.6 35.1c-1.4-1.4-1.3-3.6 0-4.9 1.4-1.4 3.6-1.3 4.9 0l46.8 47.6c1.4 1.4 1.3 3.6 0 4.9-.6.7-1.5 1-2.4 1z"></path><path class="A" d="M43.1 47.3c-.4 0-.8-.1-1.2-.2-1.8-.7-2.8-2.7-2.1-4.5l6.3-17.3c.7-1.8 2.7-2.8 4.5-2.1s2.8 2.7 2.1 4.5L46.4 45c-.5 1.4-1.9 2.3-3.3 2.3zm12.2 16.2H33.5C31.6 63.5 30 62 30 60c0-1.9 1.6-3.5 3.5-3.5h21.8c1.9 0 3.5 1.6 3.5 3.5 0 2-1.5 3.5-3.5 3.5zm44.1-32.4V85H88.8V31.1h10.6zm5.6 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5zm76.1-26.2c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v5.5h21.6v10.7h-21.6V85h-10.7V36.4c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.3v10.7h-5.3c-2.1 0-4.2.4-6.2 1.2zm43.2-11.9V85h-10.7V9.5h10.7zM270.5 66l7.6 7.6-3.7 3.7c-2.6 2.6-5.5 4.5-8.8 5.9s-6.7 2-10.3 2-7-.7-10.3-2c-3.3-1.4-6.2-3.3-8.8-5.9s-4.6-5.6-5.9-8.9-1.9-6.7-1.9-10.1.6-6.8 1.9-10.1 3.2-6.2 5.9-8.9c2.6-2.6 5.6-4.6 8.9-5.9s6.7-2 10.1-2 6.8.7 10.1 2 6.3 3.3 8.9 5.9l3.7 3.7L248 72.9c3 1.5 6.3 2 9.7 1.5s6.4-2.1 8.9-4.6l3.9-3.8zm-26.8-19.3c-3.2 3.2-4.8 7-4.8 11.5 0 2.5.6 4.8 1.7 7.1l10.6-10.6 6.4-6.3 4.7-4.7c-3-1.5-6.3-2-9.7-1.6-3.3.5-6.3 2.1-8.9 4.6zm64.8-15.6c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.5 5.8a27.88 27.88 0 0 1 5.8 8.5c1.4 3.2 2.1 6.7 2.1 10.5v27h-26.9c-3.7 0-7.2-.7-10.4-2.1-3.3-1.4-6.2-3.3-8.6-5.8-2.5-2.5-4.4-5.4-5.8-8.6-1.4-3.3-2.1-6.8-2.1-10.4 0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.5 6.8-2.2 10.4-2.2zm16.2 43.2V58c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.3-1.3s-4.4.4-6.4 1.3c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3s.4 4.4 1.3 6.4c.8 2 2 3.7 3.5 5.2s3.2 2.6 5.2 3.5c2 .8 4.1 1.3 6.4 1.3h16.3zm46.2-43.2v10.7h-5.4c-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.8V58c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.6zm5.3 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5z"></path><title>인프런 브랜드 로고</title></svg>
        </div>
        <div id="navi_body">
        <div id="navi_left">
            <div>
              강의
            </div>
            <div>
              로드맵
            </div>
            <div>
              멘토링
            </div>
            <div>
              커뮤니티
            </div>
            <div>
              인프런
            </div>
        </div>
        <div id="navi_right">
          <div id="navi_right_1">
            <NaviSearch />
          </div>
          <div>
            <NaviRecent />
          </div>
          {/* <div>
            <NaviIconList />
          </div> */}
        </div>
        </div>
      </div>
      <div id="left_navi">
        <div>
          전체 강의
        </div>
        <div>
          개발 · 프로그래밍
          <span>

          </span>
        </div>
        <div>
          보안 · 네트워크
          <span>
            
          </span>
        </div>
        <div>
          데이터 사이언스
          <span>
            
          </span>
        </div>
        <div>
          게임 개발
          <span>
            
          </span>
        </div>
        <div>
          크리에이티브
          <span>
            
          </span>
        </div>
        <div>
          직무 · 마케팅
          <span>
            
          </span>
        </div>
        <div>
          학문 · 외국어
          <span>
            
          </span>
        </div>
        <div>
          커리어
          <span>
            
          </span>
        </div>
        <div>
          교양
          <span>
            
          </span>
        </div>  
      </div>
      <div id="body_upper">
        <div id="body_upper_find">
          <input type="text" placeholder="강의 검색하기" id="body_upper_click_findbox"/>
          <button type="button" id="body_upper_button">검색</button>
        </div>
        <div>
          <div id="body_upper_txt1">
            전체
          </div>
          <div id="body_upper_click">
            <div id="body_upper_click_search">
              <div id="body_upper_click_search_box">
                <input type="text" placeholder="기술검색" id="skill_search"/>
              </div>
              <div id="upper_x">
                <i class="fa-sharp fa-solid fa-xmark"></i>
              </div>
            </div>
            <button>
              Python
            </button>
            <button>
              MS-Office
            </button>
            <button>
              JavaScript
            </button>
            <button>
              HTML/CSS
            </button>
            <button>
              Java
            </button>
            <button>
              Excel
            </button>
            <button>
              Android
            </button>
            <button>
              머신러닝
            </button>
            <button>
              딥러닝
            </button>
            <button>
              React 
            </button>
            <button>
              iOS
            </button>
            <button>
              업무 생산성
            </button>
            <button>
              디지털 마케팅
            </button>
            <button>
              SQL
            </button>
            <button>
              Node.js
            </button>
            <button id="last_button">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
        <div id="body_upper_last">
          <div id="body_upper_last_wraper1">
            <button id="body_upper_last_button">
              <span id="body_upper_button_wrap">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 10.4a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h3.6a.6.6 0 0 1 .07 1.196l-.07.004H9.8a.606.606 0 0 1-.1-.008 1.8 1.8 0 0 1-3.4-.001l-.03.005-.07.004H2.6a.6.6 0 0 1-.07-1.196l.07-.004h3.6c.034 0 .067.003.1.008A1.8 1.8 0 0 1 8 10.4zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2zM3.8 6.2a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h7.8a.6.6 0 0 1 .07 1.196l-.07.004H5.6a.605.605 0 0 1-.1-.008A1.8 1.8 0 1 1 3.8 6.2zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2zM10.4 2a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h1.2a.6.6 0 0 1 .07 1.196l-.07.004h-1.2a.605.605 0 0 1-.1-.008 1.8 1.8 0 0 1-3.4-.001l-.03.005-.07.004h-6a.6.6 0 0 1-.07-1.196L2.6 3.2h6c.034 0 .067.003.1.008A1.8 1.8 0 0 1 10.4 2zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2z" fill="#3E4042"></path>
                  </svg>
                </i>
                <span id="body_last_txt1">
                  필터
                </span>
              </span>
              <div id="body_real_div">
                <span id="body_last_txt2">
                  유료
                </span>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z" fill="#ABB0B5"></path>
                </svg>
                <span id="body_last_txt3">
                  무료
                </span>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z" fill="#ABB0B5"></path>
                </svg>
                <span id="body_last_txt4">
                  할인중
                </span>
                <span id="body_last_txt5">
                  입문
                </span>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z" fill="#ABB0B5"></path>
                </svg>
                <span id="body_last_txt6">
                  초급
                </span>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z" fill="#ABB0B5"></path>
                </svg>
                <span id="body_last_txt7">
                  중급이상
                </span>
              </div>
            </button>
          </div>
          <div id="body_upper_last_wraper2">
            추천순
            <span>
              <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#212529" fill-rule="evenodd" d="M12.77 5.563c.196.195.196.512 0 .707l-4.166 4.167c-.195.195-.512.195-.707 0L3.73 6.27c-.195-.195-.195-.512 0-.707.195-.195.512-.195.707 0L8.25 9.376l3.813-3.813c.196-.195.512-.195.707 0z" clip-rule="evenodd"></path></svg>
            </span>
          </div>
        </div>
      </div>
      <div id="body_main">
        <div id="body_main_1">
          <div id="body_main_1_card">
            
            <a 
            href="https://www.inflearn.com/course/%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4"
            id="body_main_1_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/326174/cover/b0536120-7de3-4aa8-8266-97cf3881e87d" id="img1" />
              </div>
              <div id="body_main_1_txt">
                <div id="body_main_1_txt1">
                  비전공자를 위한 진짜 입문 올인원 개발 클래스
                </div>
                <div id="body_main_1_txt2">
                  그랩
                </div>
                <div>
                  <div id="body_main_1_starbox">
                    
                  </div>
                <span id="body_main_1_startext">(118)</span>   
                </div>
                <div id="body_main_1_price">
                  <del id="body_main_1_del">
                    ₩143,000
                  </del>
                  <br />
                  <span id="body_main_1_txt3">
                    ₩114,400
                  </span>
                </div>
                <div id="body_main_1_txt4">
                  <div id="body_main_1_txt4_1">
                    +2200명
                  </div>
                  <div id="body_main_1_txt4_2">
                    업데이트
                  </div>
                  <div id="body_main_1_txt4_3">
                    할인중
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_2">
          <div id="body_main_2_card">
            
            <a 
            href="https://www.inflearn.com/course/%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4"
            id="body_main_2_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/324145/course_cover/f4b28e4f-6635-4e57-95be-5f4ac7b1ea49/I_O_python_1.png" id="img2" />
              </div>
              <div id="body_main_2_txt">
                <div id="body_main_2_txt1">
                  프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)
                </div>
                <div id="body_main_2_txt2">
                  인프런
                </div>
                <div>
                  <div id="body_main_2_starbox">
                    
                  </div>
                <span id="body_main_2_startext">(696)</span>   
                </div>
                <div id="body_main_2_price">
                  <del id="body_main_2_del">
                    ₩55,000
                  </del>
                  <br />
                  <span id="body_main_2_txt3">
                    ₩41,250
                  </span>
                </div>
                <div id="body_main_2_txt4">
                  <div id="body_main_2_txt4_1">
                    +13300명
                  </div>
                  <div id="body_main_2_txt4_3">
                    할인중
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_3">
          <div id="body_main_3_card">
            
            <a 
            href="https://www.inflearn.com/course/%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4"
            id="body_main_3_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/329248/cover/302bbe7f-5c3d-49f2-b23a-16f4f51e6ede/329248-eng2.png" id="img3" />
              </div>
              <div id="body_main_3_txt">
                <div id="body_main_3_txt1">
                  실전! 코틀린과 스프링 부트로 도서관리 애플리케이션 개발하기 (Java 프로젝트 리팩토링)
                </div>
                <div id="body_main_3_txt2">
                  최태현
                </div>
                <div>
                  <div id="body_main_3_starbox">
                    
                  </div>
                <span id="body_main_3_startext">(20)</span>   
                </div>
                <div id="body_main_3_price">
                  <span id="body_main_3_txt3">
                    ₩77,700
                  </span>
                </div>
                <div id="body_main_3_txt4">
                  <div id="body_main_3_txt4_1">
                    +400명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_4">
          <div id="body_main_4_card">
            
            <a 
            href="https://www.inflearn.com/course/%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4"
            id="body_main_4_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/329170/cover/223c54c0-9220-4937-836d-70a36be3eb1c/329170-eng.png" id="img4" />
              </div>
              <div id="body_main_4_txt">
                <div id="body_main_4_txt1">
                  따라하며 배우는 리액트 A-Z
                </div>
                <div id="body_main_4_txt2">
                  John Ahn
                </div>
                <div>
                  <div id="body_main_4_starbox">
                    
                  </div>
                <span id="body_main_4_startext">(18)</span>   
                </div>
                <div id="body_main_4_price">
                  <span id="body_main_4_txt3">
                    ₩49,500
                  </span>
                </div>
                <div id="body_main_4_txt4">
                  <div id="body_main_4_txt4_1">
                    +800명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_5">
          <div id="body_main_5_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_5_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png" id="img5" />
              </div>
              <div id="body_main_5_txt">
                <div id="body_main_5_txt1">
                  자바 개발자를 위한 코틀린 입문(Java to Kotlin Starter Guide)
                </div>
                <div id="body_main_5_txt2">
                  최태현
                </div>
                <div>
                  <div id="body_main_5_starbox">
                    
                  </div>
                <span id="body_main_5_startext">(47)</span>   
                </div>
                <div id="body_main_5_price">
                  <span id="body_main_5_txt3">
                    ₩55,000
                  </span>
                </div>
                <div id="body_main_5_txt4">
                  <div id="body_main_5_txt4_1">
                    +600명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_6">
          <div id="body_main_6_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_6_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e" id="img6" />
              </div>
              <div id="body_main_6_txt">
                <div id="body_main_6_txt1">
                  스프링 MVC 1편  - 백엔드 웹 개발 핵심 기술
                </div>
                <div id="body_main_6_txt2">
                  김영한
                </div>
                <div>
                  <div id="body_main_6_starbox">
                    
                  </div>
                <span id="body_main_6_startext">(1178)</span>   
                </div>
                <div id="body_main_6_price">
                  <span id="body_main_6_txt3">
                    ₩99,000
                  </span>
                </div>
                <div id="body_main_6_txt4">
                  <div id="body_main_6_txt4_1">
                    +119000명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_7">
          <div id="body_main_7_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_7_link">
              <div>
                <video class="ac-gif__video" muted="" loop="" autoplay="" playsinline="" id="img7">
                  <source class="ac-gif__source" src="https://cdn.inflearn.com/public/course-325248-cover/4495e5a6-8aaf-4567-aa77-c8a435fd8df8/apple-clone-animation-2-min.gif.mp4" type="video/mp4" data-alt="" />잘못된 타입을 사용하고 있습니다.
                </video>
              </div>
              <div id="body_main_7_txt">
                <div id="body_main_7_txt1">
                  스애플 웹사이트 인터랙션 클론!
                </div>
                <div id="body_main_7_txt2">
                  1분코딩
                </div>
                <div>
                  <div id="body_main_7_starbox">
                    
                  </div>
                <span id="body_main_7_startext">(187)</span>   
                </div>
                <div id="body_main_7_price">
                  <span id="body_main_7_txt3">
                    ₩77,000
                  </span>
                </div>
                <div id="body_main_7_txt4">
                  <div id="body_main_7_txt4_1">
                    +3200명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_8">
          <div id="body_main_8_card">
            
            <a 
            href="https://www.inflearn.com/course/%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4"
            id="body_main_8_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/286688/cover/1cb28c6d-aefc-49c8-b218-01adbf3d93ba/bje_python.jpg" id="img8" />
              </div>
              <div id="body_main_8_txt">
                <div id="body_main_8_txt1">
                  공공데이터로 파이썬 데이터 분석 시작하기
                </div>
                <div id="body_main_8_txt2">
                  박조은
                </div>
                <div>
                  <div id="body_main_8_starbox">
                    
                  </div>
                <span id="body_main_8_startext">(266)</span>   
                </div>
                <div id="body_main_8_price">
                  <del id="body_main_8_del">
                    ₩66,000
                  </del>
                  <br />
                  <span id="body_main_8_txt3">
                    ₩49,550
                  </span>
                </div>
                <div id="body_main_8_txt4">
                  <div id="body_main_8_txt4_1">
                    +5000명
                  </div>
                  <div id="body_main_8_txt4_3">
                    할인중
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_9">
          <div id="body_main_9_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_9_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/329214/cover/0d3f339b-06de-40c3-a41a-8633df325ade/329214-eng.jpg" id="img9" />
              </div>
              <div id="body_main_9_txt">
                <div id="body_main_9_txt1">
                  [입문자를 위한 UE5] Part1. 언리얼 엔진 블루프린트
                </div>
                <div id="body_main_9_txt2">
                  Rookiss
                </div>
                <div>
                  <div id="body_main_9_starbox">
                   
                  </div>
                <span id="body_main_9_startext">(8)</span>   
                </div>
                <div id="body_main_9_price">
                  <span id="body_main_9_txt3">
                    ₩55,000
                  </span>
                </div>
                <div id="body_main_9_txt4">
                  <div id="body_main_9_txt4_1">
                    +200명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_10">
          <div id="body_main_10_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_10_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/328723/cover/062da05a-55e9-49f1-a9ad-3e67ea079fe9/328723-eng.png" id="img10" />
              </div>
              <div id="body_main_10_txt">
                <div id="body_main_10_txt1">
                  스프링 DB 1편 - 데이터 접근 핵심 원리
                </div>
                <div id="body_main_10_txt2">
                  김영한
                </div>
                <div>
                  <div id="body_main_10_starbox">
                    
                  </div>
                <span id="body_main_10_startext">(249)</span>   
                </div>
                <div id="body_main_10_price">
                  <span id="body_main_10_txt3">
                    ₩77,000
                  </span>
                </div>
                <div id="body_main_10_txt4">
                  <div id="body_main_10_txt4_1">
                    +4900명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_11">
          <div id="body_main_11_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_11_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/328376/cover/6baa63b8-8f8f-473d-9b55-9047a521037e/328376-eng.jpg" id="img11" />
              </div>
              <div id="body_main_11_txt">
                <div id="body_main_11_txt1">
                  실제 이력서 사례로 알아보는 [합격하는 이력서] 작성 가이드
                </div>
                <div id="body_main_10_txt2">
                  워니
                </div>
                <div>
                  <div id="body_main_11_starbox">
                    
                  </div>
                <span id="body_main_11_startext">(121)</span>   
                </div>
                <div id="body_main_11_price">
                  <span id="body_main_11_txt3">
                    ₩49,500
                  </span>
                </div>
                <div id="body_main_11_txt4">
                  <div id="body_main_11_txt4_1">
                    +800명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_12">
          <div id="body_main_12_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_12_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/328348/cover/b0523a0a-b813-4ba4-afd3-58bfa12904fb/328348-eng.png" id="img12" />
              </div>
              <div id="body_main_12_txt">
                <div id="body_main_12_txt1">
                  코딩으로 학습하는 리팩토링
                </div>
                <div id="body_main_12_txt2">
                  백기선
                </div>
                <div>
                  <div id="body_main_12_starbox">
                   
                  </div>
                <span id="body_main_12_startext">(58)</span>   
                </div>
                <div id="body_main_12_price">
                  <span id="body_main_12_txt3">
                    ₩77,000
                  </span>
                </div>
                <div id="body_main_12_txt4">
                  <div id="body_main_12_txt4_1">
                    +1500명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_13">
          <div id="body_main_13_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_13_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/328284/cover/ff35cde0-c665-47b5-9d3f-62a6b4c280a4/328284-eng-original.png" id="img13" />
              </div>
              <div id="body_main_13_txt">
                <div id="body_main_13_txt1">
                  제대로 파는 Git & GitHub - by 얄코
                </div>
                <div id="body_main_13_txt2">
                  얄팍한 코딩사전
                </div>
                <div>
                  <div id="body_main_13_starbox">
                    
                  </div>
                <span id="body_main_13_startext">(123)</span>   
                </div>
                <div id="body_main_13_price">
                  <span id="body_main_13_txt3">
                    ₩44,000
                  </span>
                </div>
                <div id="body_main_13_txt4">
                  <div id="body_main_13_txt4_1">
                    +2200명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_14">
          <div id="body_main_14_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_14_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/327901/cover/d0f80fce-6877-4058-91bb-dc1ef57339a2/327901-eng.png" id="img14" />
              </div>
              <div id="body_main_14_txt">
                <div id="body_main_14_txt1">
                  스프링 핵심 원리 - 고급편
                </div>
                <div id="body_main_14_txt2">
                  김영한
                </div>
                <div>
                  <div id="body_main_14_starbox">
                    
                  </div>
                <span id="body_main_14_startext">(329)</span>   
                </div>
                <div id="body_main_14_price">
                  <span id="body_main_14_txt3">
                    ₩121,000
                  </span>
                </div>
                <div id="body_main_14_txt4">
                  <div id="body_main_14_txt4_1">
                    +7700명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_15">
          <div id="body_main_15_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_15_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/326905/cover/739f7b4b-1a9f-478f-a6a8-1a13bf58cae3/326905-eng.png" id="img15" />
              </div>
              <div id="body_main_15_txt">
                <div id="body_main_15_txt1">
                  만들고 비교하며 학습하는 리액트 (React)
                </div>
                <div id="body_main_15_txt2">
                  김정환
                </div>
                <div>
                  <div id="body_main_15_starbox">
                   
                  </div>
                <span id="body_main_15_startext">(67)</span>   
                </div>
                <div id="body_main_15_price">
                  <span id="body_main_15_txt3">
                    ₩55,000
                  </span>
                </div>
                <div id="body_main_15_txt4">
                  <div id="body_main_15_txt4_1">
                    +900명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_16">
          <div id="body_main_16_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_16_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/326383/cover/4c038b06-8afa-4ae8-b14a-5ed22cfabce0/326383-eng.png" id="img16" />
              </div>
              <div id="body_main_16_txt">
                <div id="body_main_16_txt1">
                  파이썬 증권 데이터 수집과 분석으로 신호와 소음 찾기
                </div>
                <div id="body_main_16_txt2">
                  박조은
                </div>
                <div>
                  <div id="body_main_16_starbox">
                    
                  </div>
                <span id="body_main_16_startext">(69)</span>   
                </div>
                <div id="body_main_16_price">
                  <span id="body_main_16_txt3">
                    ₩89,100
                  </span>
                </div>
                <div id="body_main_16_txt4">
                  <div id="body_main_16_txt4_1">
                    +900명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_17">
          <div id="body_main_17_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_17_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/326342/cover/e8771ba0-1550-4874-81f5-08823fac4ba9/326342-eng (1).png" id="img17" />
              </div>
              <div id="body_main_17_txt">
                <div id="body_main_17_txt1">
                  Confluence를 활용해서 효과적으로 지식 관리와 프로젝트 협업하기
                </div>
                <div id="body_main_17_txt2">
                  lesstif
                </div>
                <div>
                  <div id="body_main_17_starbox">
                    
                  </div>
                <span id="body_main_17_startext">(27)</span>   
                </div>
                <div id="body_main_17_price">
                  <span id="body_main_17_txt3">
                    ₩88,000
                  </span>
                </div>
                <div id="body_main_17_txt4">
                  <div id="body_main_17_txt4_1">
                    +300명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div> 
        <div id="body_main_18">
          <div id="body_main_18_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_18_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/325969/cover/2868c757-5886-4508-a140-7cb68a83dfd8/325969-eng.png" id="img17" />
              </div>
              <div id="body_main_18_txt">
                <div id="body_main_18_txt1">
                  스프링 핵심 원리 - 기본편
                </div>
                <div id="body_main_18_txt2">
                  김영한
                </div>
                <div>
                  <div id="body_main_18_starbox">
                    
                  </div>
                <span id="body_main_18_startext">(2355)</span>   
                </div>
                <div id="body_main_18_price">
                  <span id="body_main_18_txt3">
                    ₩88,000
                  </span>
                </div>
                <div id="body_main_18_txt4">
                  <div id="body_main_18_txt4_1">
                    +16700명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_19">
          <div id="body_main_19_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_19_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/325035/cover/d69f088c-41c2-4023-a416-fdcb35567ae4/325035-eng.png" id="img19" />
              </div>
              <div id="body_main_19_txt">
                <div id="body_main_19_txt1">
                  [개정판] 딥러닝 컴퓨터 비전 완벽 가이드
                </div>
                <div id="body_main_19_txt2">
                  권 철민
                </div>
                <div>
                  <div id="body_main_19_starbox">
                    
                  </div>
                <span id="body_main_19_startext">(97)</span>   
                </div>
                <div id="body_main_19_price">
                  <span id="body_main_19_txt3">
                    ₩121,000
                  </span>
                </div>
                <div id="body_main_19_txt4">
                  <div id="body_main_19_txt4_1">
                    +2400명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div id="body_main_20">
          <div id="body_main_20_card">
            
            <a 
            href="https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png"
            id="body_main_20_link">
              <div>
                <img src="https://cdn.inflearn.com/public/courses/324683/course_cover/d744a88a-ad26-4d8b-9653-24920714b24b/lv4.png" id="img20" />
              </div>
              <div id="body_main_20_txt">
                <div id="body_main_20_txt1">
                  Vue.js 끝장내기 - 실무에 필요한 모든 것
                </div>
                <div id="body_main_20_txt2">
                  장기효(캡틴판교)
                </div>
                <div>
                  <div id="body_main_20_starbox">
                    
                  </div>
                <span id="body_main_20_startext">(266)</span>   
                </div>
                <div id="body_main_20_price">
                  <span id="body_main_20_txt3">
                    ₩110,000
                  </span>
                </div>
                <div id="body_main_20_txt4">
                  <div id="body_main_20_txt4_1">
                    +2900명
                  </div>
                </div>
              </div> 
            </a>
          </div>
        </div>
        <div>
          <div id="main_move">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>...</div>
            <div>86</div>
          </div>
          <div id="main_nextpage">
            다음 페이지
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Lecture;