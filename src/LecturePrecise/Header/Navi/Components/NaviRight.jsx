import React from 'react';
import styled from 'styled-components';
import '../navi.css';
import { useDispatch } from 'react-redux';

const Login = styled.div`
  border: 1px solid #dbdbdb;
  margin-right: 0.5rem;
  padding: 8px;
  background-color: #fff;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  font-size: 1rem;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  font-weight: 400;
`

const Regi = styled.div`
  border: 1px solid #dbdbdb;
  margin-right: 0.5rem;
  padding: 8px;
  background-color: #ff7867;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  font-size: 1rem;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  font-weight: 400;
`


function NaviRight() {

  const dispatch = useDispatch();

  return (
    <div id='NaviRight'>
      <Login onClick={()=>{dispatch({type:"Yes"})}}>
        로그인
      </Login >
      <Regi>
        회원가입
      </Regi>
    </div>
  )
}

export default NaviRight;
