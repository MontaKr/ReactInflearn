import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./section1.css";
import Section1NaviList from "./Section1NaviList";


function Section1 (props) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div id="Img1Wrap">
          <h3 className="Img" id="Img1">
            <div className="ImgLeft">
              <div className="ImgLeftFirst">
                엑셀 큐레이션
              </div>
              <div className="ImgLeftSecond">
                스쿨 버스를 타고
                <br />
                엑셀을 배우러 떠나볼까요?
              </div>
              <div className="ImgLeftThird">
                입문자를 위한 다양한 엑셀 강의를 준비했어요. 🧑‍💻
              </div>
            </div>
            <img className="Images" src="https://cdn.inflearn.com/public/main_sliders/1c828153-3ab6-45f4-9b2c-5d31e3b87d70/%5B%ED%81%90%EB%A0%88%EC%9D%B4%EC%85%98%5D%EC%97%91%EC%85%80%EC%8A%A4%EC%BF%A8-1_main_521.png" />
          </h3>
        </div>
        <div>
          <h3 className="Img" id="Img2">
            <div className="ImgLeft" id="Img2Left">
              <div className="ImgLeftFirst" id="Img2LeftFirst">
                15% 할인
              </div>
              <div className="ImgLeftSecond" id="Img2LeftSecond">
                말랑말랑하고 재밌는 강의로
                <br />
                CS 전공 지식 수혈하세요! 🍨
              </div>
              <div className="ImgLeftThird" id="Img2LeftThird">
                이번 학기 학점, 기술 면접 걱정은 뚝딱!
              </div>
            </div>
            <img  src="https://cdn.inflearn.com/public/main_sliders/b86bff3e-14a7-4ef2-8689-132dab058ec9/%5B%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5D%E1%84%86%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%86%BCCS%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8_main_521.png" style={{width:"737px" , height:"320px"}} />
          </h3>
        </div>
        <div>
        <h3 className="Img" id="Img3">
            <div className="ImgLeft" id="Img3Left">
              <div className="ImgLeftSecond" id="Img3LeftSecond">
                뭘 들어야 하지? 🤔
                <br />
                나에게 딱 맞는 입문 강의
              </div>
              <div className="ImgLeftThird" id="Img3LeftThird">
                어디서부터 시작해야 할지 모르는
                <br />
                당신을 위한 입문 강의
              </div>
            </div>
            <img src="https://cdn.inflearn.com/public/main_sliders/f57e3418-f145-43a4-89d6-f1c4f0293460/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%80%E1%85%A6%E1%84%86%E1%85%A1%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_main_521.png" style={{width:"737px" , height:"320px"}} />
          </h3>
        </div>
        <div>
        <h3 className="Img" id="Img4">
            <div className="ImgLeft" id="Img4Left">
              <div className="ImgLeftFirst" id="Img4LeftFirst">
                지식공유신청
              </div>
              <div className="ImgLeftSecond" id="Img4LeftSecond">
                나누는 지식만큼
                <br />
                커지는 보람과 보상
              </div>
              <div className="ImgLeftThird" id="Img4LeftThird">
                인프런 지식공유자로 
                <br />
                높은 수익과 가치를 만들어보세요.
              </div>
            </div>
            <img src="https://cdn.inflearn.com/public/main_sliders/14394a9e-4b27-4a0f-bc87-c2cae10e2d62/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A1_521.gif" style={{width:"737px" , height:"320px"}} />
          </h3>
        </div>
        <div>
        <h3 className="Img" id="Img5">
            <div className="ImgLeft" id="Img5Left">
              <div className="ImgLeftFirst" id="Img5LeftFirst">
                매월 업데이트!
              </div>
              <div className="ImgLeftSecond" id="Img5LeftSecond">
                무슨 강의 들을지 고민이라면?
                <br />
                현직자 Top 50 먼저 보기 👀
              </div>
              <div className="ImgLeftThird" id="Img5LeftThird">
                입문부터 실전까지!
                <br />
                믿고 보는 실무자 Pick
              </div>
            </div>
            <img src="https://cdn.inflearn.com/public/main_sliders/7f3b415a-7267-49fc-9c68-9926b8c5f600/%5B22%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5Db2b_top50_main_521.gif" style={{width:"737px" , height:"320px"}} />
          </h3>
        </div>
        <div>
        <h3 className="Img" id="Img6">
            <div className="ImgLeft" id="Img6Left">
              <div className="ImgLeftFirst" id="Img6LeftFirst">
                신규 강의
              </div>
              <div className="ImgLeftSecond" id="Img6LeftSecond">
                나만 몰랐었던 이 강의~♬
              </div>
              <div className="ImgLeftThird" id="Img6LeftThird">
                매일 업데이트 되는 
                <br />
                인프런 신규강의를 만나보세요!
              </div>
            </div>
            <img src="https://cdn.inflearn.com/public/main_sliders/7dc9730a-1a01-40a7-a509-4e8bceb73570/%5B%EB%A9%94%EC%9D%B8%ED%9E%88%EC%96%B4%EB%A1%9C%5D%EC%8B%A0%EA%B7%9C%EA%B0%95%EC%9D%98_main_521.gif" style={{width:"737px" , height:"320px"}} />
          </h3>
        </div>
      </Slider>
      <div id="Section1Navi">
        <Section1NaviList />
      </div>
    </div>
  )
}

export default Section1;