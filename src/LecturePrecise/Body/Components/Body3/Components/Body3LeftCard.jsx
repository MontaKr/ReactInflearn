import React from 'react'
import styled from 'styled-components';

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
  letter-spacing: -.3px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
`

const ImgWrap = styled.div`
  line-height: 0;
  margin: 0.5rem 0 0.5rem 0;
  flex-basis: 15rem;
  display: block;
  letter-spacing: -.3px;
`

const TextWrap = styled.div`
  margin: 0.5rem 0 0.5rem 0;
  flex-basis: 26rem;

  .CardTitle {
    font-weight: 700;
    letter-spacing: -.3px;
    font-size: 1rem;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  }

  .DivWrap {
    margin: 0.5rem 0 0.5rem 0;
    flex-basis: 26rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  .DivContent {
    margin: 0.5rem 0 0.5rem 0;
    flex-basis: 26rem;

  }
`

function Body3LeftCard(props) {
  return (
    <CardWrap>
      <ImgWrap>
        <img 
        style={{borderRadius:'0.3rem',
        width:'200px'}} 
        src={props.products.image}/>
      </ImgWrap>
      <TextWrap>
        <strong className='CardTitle'>
          {props.products.title}
        </strong>
        <br/>
        <div className='DivWrap'>
          <div className='DivContent'>
            {props.products.content}
            {props.products.strong && 
            <>
            <span style={{fontWeight:'700'}}>
              {props.products.strong}
            </span>
            <span className='DivContent'>
              {props.products.content2}
            </span>
            </>
            }
          </div>
        </div>
      </TextWrap>
    </CardWrap>
  )
}

export default Body3LeftCard;
