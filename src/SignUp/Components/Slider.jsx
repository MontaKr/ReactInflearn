import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500
    };
    return (
      <div>
          <Slider {...settings}>
          <div>
            <h3>
              인프런에서 다양한 성장의 기회를 얻으세요
            </h3>
          </div>
          <div>
            <h3>
              나의 성장을 돕는 IT 실무 지식 플랫폼
            </h3>
          </div>
          <div>
            <h3>
              성장에 목마를 때, 인프런
            </h3>
          </div>
          <div>
            <h3>
              나의 온라인 사수, 인프런
            </h3>
          </div>
          <div>
            <h3>
              인프런에서 가치를 높이세요
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}