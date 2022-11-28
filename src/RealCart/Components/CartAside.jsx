import React, { useState } from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';

const Wrap = styled.div`
  position: relative;
  left: 900px;
  bottom: 100px;
    padding-top: 32px;
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
`
const Top = styled.div`
  display: block;
`

const TopWrap = styled.div`
  font-weight: 400;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    margin-bottom: 4px;
    padding: 16px 20px;
    width: 300px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    background: #fff;

    #Top1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 8px;
      margin-bottom: 8px;
      border-bottom: 1px solid #f1f3f5;
      font-weight: 400;
      line-height: 1.43;
      letter-spacing: -.3px;
      font-size: 14px;
    }

    #Top1Left {
      line-height: 1.43;
      letter-spacing: -.3px;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      color: #1b1c1d;
    }

    #Top1Label {
      margin-right: 4px;
    }

    #Top1Button {
      display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    }

    #Top1Button2 {
      color: #858a8d;
      line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    font-weight: 700;
    padding: 0;
    text-decoration: underline;
    cursor: pointer;
    border: 0;
    background: none;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
    }

    #Top2 {
      margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    }

    #TOp21 {
      display: flex;
    }

    #Top2Name {
      min-width: 80px;
    color: #abb0b5;
    margin: 0;
    padding: 0;
    }

    #Top2Me {
      max-width: calc(100% - 80px);
    color: #858a8d;
    word-break: break-all;
    margin: 0;
    padding: 0;
    }

    #Top22 {
      display: flex;
    }

    #Top22Mail {
      min-width: 80px;
    color: #abb0b5;
    }

    #Top2MailMe {
      max-width: calc(100% - 80px);
    color: #858a8d;
    word-break: break-all;
    }

    #Top23 {
      display: flex;
    }

    #Top23Mail {
      min-width: 80px;
    color: #abb0b5;
    }

    #Top23MailMe {
      max-width: calc(100% - 80px);
    color: #858a8d;
    word-break: break-all;
    }
`

const Bot = styled.div`
  display: block;
`
const BotWrap = styled.div`
    border-radius: 8px;
    transition: box-shadow .3s ease;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
`

const Bot1 = styled.div`
  padding: 20px 20px 0;
    border-bottom-width: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    width: 300px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    background: #fff;
`

const CouponWrap = styled.div`
  margin-bottom: 16px;

  #Coupon1 {
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    color: #abb0b5;
  }

  #Coupon1Label {
    margin-right: 4px;
    font-weight: 700;
    color: #1b1c1d;
  }

  #Coupon1Button {
    margin-right: 4px;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;

  }

  #Coupon1Right {
   margin-left: 185px;
    margin-right: 4px;
  }

  #Coupon1Co {
    color: #00c471;
    
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    display: flex;
    flex-shrink: 0;
  }

  #Coupon2 { 
    display: flex;
  }

  #Coupon2Input {
    background: #f8f9fa;
    border: 1px solid #d5dbe2;
    display: flex;
    align-items: center;
    margin-right: 8px;
    padding: 0 12px;
    width: 200px;
    height: 40px;
    letter-spacing: -.3px;
    border-radius: 4px;
  }

  #Coupon2Input1 {
    color: #abb0b5;
    background: #f8f9fa;
    text-align: right;
    opacity: 1;
    padding: 0;
    width: 100%;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    border: 0;

  }

  #Coupon2BUtton {
    border-color: #d5dbe2;
    flex-shrink: 0;
    color: #495057;
    background-color: #fff;
    font-weight: 700;
    border: 1px solid;
    padding: 0 12px;
    height: 40px;
    line-height: 1.43;
    font-size: 14px;
    letter-spacing: -.3px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  }
`

const Bot2 = styled.div`
  

  #Price1 {
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #858a8d;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  }

  #Price11 {
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    display: flex;
    color: #858a8d;
    font-weight: inherit;
    font-style: inherit;
  }
`


function CartAside({InCart}) {

  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    setTotal(calculateTotal(InCart))
  }, [InCart])

  
  const calculateTotal = (cartItems) => {
    if(cartItems) {
      return cartItems.reduce((acc, obj) => acc + obj.price)
    }else {
      return 0;
    }
  }

  return (
    <Wrap>
      <Top>
        <TopWrap>
          <div id='Top1'>
            <span id='Top1Left'>
              <label id='Top1Label'>
                구매자정보
              </label>
              <button id='Top1Button'>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#abb0b5" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z"></path></svg>
              </button>
            </span>
            <button id='Top1Button2'>
              수정
            </button>
          </div>
          <div id='Top2'>
            <div id='TOp21'>
              <dt id='Top2Name'>
                이름
              </dt>
              <dt id='Top2Me'>
                임지훈
              </dt>
            </div>
            <div id='Top22'>
              <dt id='Top22Mail'>
                이메일
              </dt>
              <dt id='Top2MailMe'>
                zhoon95@gmail.com
              </dt>
            </div>
            <div id='Top23'>
              <dt id='Top23Mail'>
              휴대폰 번호
              </dt>
              <dt id='Top23MailMe'>
              +82 01053373133
              </dt>
            </div>
          </div>
        </TopWrap>
      </Top>
      <Bot>
        <BotWrap>
          <Bot1>
            <CouponWrap>
              <div id='Coupon1'>
                <label id='Coupon1Label'>
                  쿠폰
                </label>
                <button id='Coupon1Button'>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#abb0b5" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z"></path></svg>
                </button>
                <span id='Coupon1Right'> 
                사용가능
                </span>
                <span id='Coupon1Co'>
                  0
                </span>
              </div>
              <div id='Coupon2'>
                <div id='Coupon2Input'>
                  <input id='Coupon2Input1'/>
                </div>
                <button id='Coupon2BUtton'>
                쿠폰선택
                </button>  
              </div>
            </CouponWrap>
            <Bot2>
              <div id='Price1'> 
                <span id='Price11'>
                선택상품 금액 {total}
                </span>
              </div>
            </Bot2>
          </Bot1>
        </BotWrap>
      </Bot>
    </Wrap>
  )
}


export default CartAside;