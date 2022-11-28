import React from 'react'
import './CartContent.css';
import styled from 'styled-components';


const CartSepa = styled.div`
  display: flex;
    padding: 16px 0;
    align-items: stretch;
    user-select: none;
    border-bottom: 1px solid #f1f3f5;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width: 828px;
    height: 80px;
    position: relative;
    left: 50px;
`

const CheckBoxWrap = styled.div`
  display: flex;
    position: relative;
    margin-left: 0;
`

const ImageWrap = styled.div`
  margin-right: 16px;
    width: 100%;
    max-width: 120px;
    min-width: 120px;
`

const ImageWrap2 = styled.div`
  overflow: hidden;
    border: 1px solid #f1f3f5;
    box-sizing: border-box;
    border-radius: 4px;
    display: block;
    position: relative;
`

const TextWrap =styled.div`
  display: flex;
    flex-direction: column;
    width: 100%;
`

const TextWrap2 = styled.div`
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    text-align: left;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    padding-bottom: 2px;
    color: #1b1c1d;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
`

const TextBotWrap = styled.div`
  font-weight: 400;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
`

const XWrap = styled.div`
  padding: 4px 16px 16px;
    border-right: 1px solid #f1f3f5;
`

const PriceWrap = styled.div`
  font-weight: 400;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    min-width: 150px;
    text-align: right;
`

function CartContent({cart}) {


  const reConvertPrice = (price) => {
    return price.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  } 

  return (

    <CartSepa>
      <CheckBoxWrap>
        <input id='Checkbox' type='checkbox'/>
      </CheckBoxWrap>
      <ImageWrap>
        <ImageWrap2>
          <img src={cart.image} style={{width:'118px', height:'78px'}} />
        </ImageWrap2>
      </ImageWrap>
      <TextWrap>
        <TextWrap2>
          <div style={{fontWight:'500'}}>
            {cart.name}
          </div>
        </TextWrap2>
        <TextBotWrap>
          <span id='Provider'>
            {cart.provider}
          </span>
          <span id='Infinite'>
            무제한 수강
          </span>
        </TextBotWrap>
      </TextWrap>
      <XWrap>
        <span id='Xwrap2'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.807 2.1308C13.0999 1.83791 13.5748 1.83791 13.8676 2.1308C14.1605 2.4237 14.1605 2.89857 13.8676 3.19146L9.05932 7.99979L13.8677 12.8081C14.1605 13.101 14.1605 13.5759 13.8677 13.8688C13.5748 14.1617 13.0999 14.1617 12.807 13.8688L7.99866 9.06045L3.19033 13.8688C2.89744 14.1617 2.42257 14.1617 2.12967 13.8688C1.83678 13.5759 1.83678 13.101 2.12967 12.8081L6.938 7.99979L2.12968 3.19146C1.83679 2.89857 1.83679 2.4237 2.12968 2.1308C2.42257 1.83791 2.89745 1.83791 3.19034 2.1308L7.99866 6.93913L12.807 2.1308Z" fill="#ABB0B5"></path>
          </svg>
        </span>
      </XWrap>
      <PriceWrap>
        <span id='Price'>
          {reConvertPrice(cart.price)}
        </span>
        <span id='Won'>
          원
        </span>
      </PriceWrap>
    </CartSepa>
   
  )
}

export default CartContent;
