import React from 'react';
import "../section3.css";
import {FaCartArrowDown} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Section3Top() {

const dispatch = useDispatch();

const number = useSelector(state => state.goodsReducer.goods);

  return (
    <div id='Section3Top'>
      인프런에서 연봉을 올리세요
      <button 
        onClick={()=>{dispatch({type:"ADD"})}} >
        <FaCartArrowDown size='12'/> 
      </button>
      <span>
        {/* this is the part where I want to chage number */}
        담은 숫자 : {number}
      </span>
    </div>
  )
}

export default Section3Top