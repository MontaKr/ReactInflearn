import React from 'react'
import styled from 'styled-components';

const CardWrap = styled.div`
  display: flex;
    align-items: center;
    margin-bottom: 10px;
    letter-spacing: -.3px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
`

const ImageWrap = styled.div`
  margin-right: 20px;
`

const TextWrap = styled.div`
  font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
    box-sizing: border-box;

  .TextStrong{
    font-weight: 700;
  }
`

function Body3LeftCard2(props) {
  return (
    <CardWrap>
      <ImageWrap>
        <img 
        style={{width:'200px'}}
        src={props.products.image} />
      </ImageWrap>
      <TextWrap>
        <strong className='TextStrong'>
          {props.products.title}
        </strong>
        <br/>
        


        {/* {props.products.content}
        {props.products.content1 &&
        <>
          <strong className='TextStrong'>
            {props.products.content1}
            <br/>
            {props.products.content2}
          </strong>
          <br/>
          {props.products.content3}
          <br/>
          {props.products.content4}
        </>} */}
      </TextWrap>
    </CardWrap>
  )
}

export default Body3LeftCard2;
