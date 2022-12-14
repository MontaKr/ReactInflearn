import React, { useState } from 'react';
import '../section5.css';
import {FaCartPlus} from 'react-icons/fa';
import { useDispatch } from 'react-redux';


function Section5Card(props) {

  const [isHovering,setIsHovering] = useState(0);
  const dispatch = useDispatch();
  
  return (
    <div id='Section5Card' 
      onMouseEnter={()=>setIsHovering(1)}
      onMouseLeave={()=>setIsHovering(0)}>
      {isHovering?
      <div id='Section5CardHover'> 
        <span id='Section5CardHover1'>
          프론트엔드 개발환경의 이해와 실습 (webpack, babel, eslint..)
        </span>
        <div className='Section5CardHover2'>
          <svg width="16" aria-hidden="true" data-prefix="fal" data-icon="signal-alt" class="svg-inline--fa fa-signal-alt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M576 32v448h-32V32h32M416 160v320h-32V160h32M256 288v192h-32V288h32M96 416v64H64v-64h32M576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM416 128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM256 256h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path></svg>
          중급이상
        </div>
        <div className='Section5CardHover2'>
          <svg width="16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="folder-tree" class="svg-inline--fa fa-folder-tree fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 224h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H400L368 0h-80a32 32 0 0 0-32 32v64H64V8a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v392a16 16 0 0 0 16 16h208v64a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H400l-32-32h-80a32 32 0 0 0-32 32v64H64V128h192v64a32 32 0 0 0 32 32zm0 96h66.74l32 32H512v128H288zm0-288h66.74l32 32H512v128H288z"></path></svg>
          프론트엔드, 웹 개발
        </div>
        <div className='Section5CardHover2'>
          <svg width="16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="cubes" class="svg-inline--fa fa-cubes fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"></path></svg>
          
          Node.js, Webpack, Babel
        </div>
        <FaCartPlus size='20' style={{color:'white', position:'relative', top:'120px', left:'180px', cursor:'pointer'}} onClick={()=>{dispatch({type:"ADD"})}} />
      </div>: 
      <>
      <img src={props.products.img} id="Section5CardImg" />
      <div id='Section5CardTitle'>
        {props.products.title}
      </div>
      <div id='Section5CardName'>
        {props.products.name}
      </div>
      <div id='Section5CardComment'>
        {props.products.comment}
      </div>
      <div id='Section5CardPrice'>
        {props.products.price}
      </div>
      {
        props.products.people &&
        <div id='Section5CardPeople'>
        {props.products.people}
      </div>
      }
      {
        props.products.new && (
          <div id='Section5CardNew'>
            {props.products.new}
          </div>
        )
      }

      {
        props.products.sale && (
          <div id='Section5CardSale'>
            {props.products.sale}
          </div>
        )
      }
      </>
    }
    
      
    </div>
  )
}

export default Section5Card;
