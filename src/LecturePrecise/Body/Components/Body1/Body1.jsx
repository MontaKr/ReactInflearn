import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import '../../body.css';
import { useParams } from 'react-router-dom';


const Body1Wrap = styled.div`
  margin: 0 auto;
  width: 95%;
  height: 286px;
  display: flex;
  align-items: center;
  flex-direction: row;
`

const Body1Left = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-basis: 41.6%;
  padding-left: 8px;
  padding-right: 8px;
  height: 100%;
`

const Body1ThumbnailCover = styled.div`
  position: relative;
  padding-left: 34px;
  border-radius: 8px;
`

const Body1LeftButtonWrap = styled.button`
  position: relative;
  left: 17px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1.47;
  letter-spacing: -.3px;
  font-size: 15px;
  width: 90%;
  height: 40px;
  border: 2px solid #00c471;
  border-radius: 4px;
  background: #1b1c1d;
  color: #fff;
  cursor: pointer;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  position: relative;
  bottom: 50px;
`

const Body1Right = styled.div`
  padding: 0 42px 0 24px;
  flex-basis: 58.33333333%;
  max-width: 58.33333333%;
  box-sizing: border-box;
`

const Body1RightText1 = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  flex-wrap: wrap;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  #Body1RightText1_1 {
    background-color: #0075ff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -.3px;
    font-size: 12px;
    margin-right: 10px;
    padding: 0 6px;
    height: 22px;
    color: #fff;
    font-weight: 700;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  }

  .Body1RightText1_2 {
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    white-space: pre;
    font-style: inherit;
    display: flex;
    align-items: center;
  }
`

const BodyRightText2 = styled.div`
  width: 100%;
  margin-bottom: 40px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;

  #Body1RightText2_1 {
    line-height: 1.5;
    letter-spacing: -.3px;
    color: #fff;
    font-weight: 700;
    font-size: 26px;
  }
`

const BodyRightText3 = styled.div`
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -.3px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  color: #fff;

  #Body1RightText3_1Wrap {
    margin-right: 8px;
    display: flex;
    align-items: center;
  }

  #Body1RightText3_1 {
    font-weight: 700;
    letter-spacing: -.3px;
    font-size: 14px;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
    align-items: center;
  }

  .Body1RightText3_star {
    width: 16px;
    height: 16px;
    fill: yellow;
    color: yellow;
  }

  .Body1RightText3_2_1 {
    font-size: 14px;
    font-weight: 400;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  }

  #Body1RightText3_2_2 {
    font-size: 14px;
    font-weight: 700;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  }
`

const BodyRightText4 = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  #BodyRightText4_1 {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }

  #BodyRightText4_2 {
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    margin-right: 8px;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    margin-right: 2px;
  }
`

const BodyRightText5 = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 8px;

    #BodyRightText5_1 {
      margin-right: 6px;
      width: 16px;
      height: 16px;
    }

    .BodyRightText5_2 {
      line-height: 1.5;
      letter-spacing: -.3px;
      font-size: 12px;
      margin-right: 4px;
      padding: 4px 12px;
      border-radius: 100px;
      background-color: #173f51;
      color: #fff;
      font-weight: 500;
      font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
    }
`

function Body1() {

  const{id} = useParams();
  const [product,setProduct] = useState({})

  useEffect(()=>{
    axios.get("/data/products.json").then((data)=>{
      setProduct(data.data.products.find((product)=>product.id === parseInt(id) ))
    })
  },[id])

  console.log(product)

  return (
    <div id='Body1'>
      <Body1Wrap>
        <Body1Left>
          <Body1ThumbnailCover>
            <img 
              src={product.image}
              style={{width:'100%' ,height:'100%', borderRadius:'8px'}}/>
            <Body1LeftButtonWrap>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#ffffff" d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"></path><path fill="#ffffff" fill-rule="evenodd" d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z" clip-rule="evenodd"></path></svg>
              <div id='Body1LeftText1'>
                {product.free}개
              </div>
              <div id='Body1LeftText2'>
                무료 보기
              </div>
            </Body1LeftButtonWrap>
          </Body1ThumbnailCover>
        </Body1Left>
        <Body1Right>
          <Body1RightText1>
            <span id='Body1RightText1_1'>
              BEST
            </span>
            <span className='Body1RightText1_2'>
              개발 · 프로그래밍
            </span>
            <span className='Body1RightText1_2'>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="white" clip-rule="evenodd" d="m6.22 3.22c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06l-4.25 4.25c-.293.293-.767.293-1.06 0s-.293-.767 0-1.06l3.72-3.72-3.72-3.72c-.293-.293-.293-.767 0-1.06z" fill-rule="evenodd"></path></svg>
            </span>
            <span className='Body1RightText1_2'>
              프론트엔드
            </span>
          </Body1RightText1>
          <BodyRightText2>
            <span id='Body1RightText2_1'>
              {product.name}
            </span>
          </BodyRightText2>
          <BodyRightText3>
            <span id='Body1RightText3_1Wrap'>
              <span >
                <svg className='Body1RightText3_star' width="16px" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path className='Body1RightText3_star' fill="#dee2e6" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <svg className='Body1RightText3_star' width="16px" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path className='Body1RightText3_star' fill="#dee2e6" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <svg className='Body1RightText3_star' width="16px" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path className='Body1RightText3_star' fill="#dee2e6" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <svg className='Body1RightText3_star' width="16px" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path className='Body1RightText3_star' fill="#dee2e6" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <svg className='Body1RightText3_star' width="16px" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path className='Body1RightText3_star' fill="#dee2e6" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
              </span>
              <span id='Body1RightText3_1'>
                (4.9)
              </span>
            </span>
            <span className='Body1RightText3_2_1'>
              170개의 수강평 &nbsp;∙&nbsp; 
            </span>
            <span id='Body1RightText3_2_2'>
              &nbsp; 2082명
            </span>
            <span className='Body1RightText3_2_1'>
              의 수강생
            </span>
          </BodyRightText3>
          <BodyRightText4>
            <span id='BodyRightText4_1'>
              <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#ffffff" fill-rule="evenodd" d="M8 1.667c-2.025 0-3.667 1.641-3.667 3.666 0 1.26.636 2.371 1.603 3.031-2.243.822-3.859 2.945-3.933 5.454-.009.277.209.507.485.515.276.008.506-.209.514-.485C3.082 11.158 5.29 9 8 9c2.71 0 4.918 2.157 4.998 4.848.008.276.238.493.514.485.276-.008.493-.239.485-.514-.074-2.51-1.69-4.633-3.933-5.455.967-.66 1.603-1.771 1.603-3.03 0-2.026-1.642-3.667-3.667-3.667zM5.333 5.333c0-1.472 1.194-2.666 2.667-2.666 1.473 0 2.667 1.194 2.667 2.666C10.667 6.806 9.473 8 8 8 6.527 8 5.333 6.806 5.333 5.333z" clip-rule="evenodd"></path></svg>
            </span>
            <span id='BodyRightText4_2'>
              {product.provider}
              <span class="infd-icon"><svg width="16" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 16 12"><path fill="#ffffff" d="M13.2 10.5H2.8c-.22 0-.4.169-.4.375v.75c0 .206.18.375.4.375h10.4c.22 0 .4-.169.4-.375v-.75c0-.206-.18-.375-.4-.375zM14.8 3c-.663 0-1.2.504-1.2 1.125 0 .166.04.321.11.464L11.9 5.606c-.385.216-.883.094-1.105-.272L8.758 1.992c.267-.206.442-.515.442-.867C9.2.504 8.663 0 8 0c-.662 0-1.2.504-1.2 1.125 0 .352.175.66.442.867L5.205 5.334c-.223.366-.723.488-1.105.272L2.293 4.59c.067-.14.11-.298.11-.464 0-.621-.538-1.125-1.2-1.125C.54 3 0 3.504 0 4.125S.537 5.25 1.2 5.25c.065 0 .13-.01.193-.019L3.2 9.75h9.6l1.807-4.519c.063.01.128.019.193.019.662 0 1.2-.504 1.2-1.125S15.463 3 14.8 3z"></path></svg></span> 
            </span>
          </BodyRightText4>
          <BodyRightText5>
            <span id='BodyRightText5_1'>
              <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#ffffff" fill-rule="evenodd" d="M5.773 1.455c-.283 0-.518.216-.542.498L5 4.727H2.545c-.3 0-.545.244-.545.546 0 .301.244.545.545.545H4.91l-.364 4.364h-2c-.3 0-.545.244-.545.545 0 .301.244.546.545.546h1.91l-.224 2.684c-.027.317.224.588.542.588.282 0 .518-.216.541-.498l.231-2.774H9.91l-.224 2.684c-.026.317.224.588.542.588.283 0 .518-.216.542-.498L11 11.273h2.454c.302 0 .546-.245.546-.546 0-.301-.244-.545-.546-.545h-2.363l.364-4.364h2c.3 0 .545-.244.545-.545 0-.302-.244-.546-.546-.546h-1.909l.224-2.684c.027-.317-.224-.588-.542-.588-.282 0-.518.216-.541.498l-.232 2.774H6.091l.224-2.684c.026-.317-.224-.588-.542-.588zM6 5.818l-.364 4.364H10l.364-4.364H6z" clip-rule="evenodd"></path></svg>
            </span>
            <a className='BodyRightText5_2' href="">
              Node.js
            </a>
            <a className='BodyRightText5_2' href="">
              Webpack
            </a>
            <a className='BodyRightText5_2' href="">
              Babel
            </a>
            <a className='BodyRightText5_2' href="">
              ESLint
            </a>
          </BodyRightText5>
        </Body1Right>
      </Body1Wrap>  
    </div>
  )
}


export default Body1;