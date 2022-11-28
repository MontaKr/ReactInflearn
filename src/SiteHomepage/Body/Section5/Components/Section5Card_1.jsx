import React from 'react';
import '../section5.css';


function Section5Card(props) {
  return (
    <div id='Section5Card'>
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
    </div>
  )
}

export default Section5Card;
