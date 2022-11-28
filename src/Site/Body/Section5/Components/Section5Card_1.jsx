import '../section5.css';
import {FaCartPlus} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import './card.css';

function Section5Card({product, InCart, setInCart}) {

  const dispatch = useDispatch();

  const handleCart = () => {
    const cartItem = {
      id : product.id,
      image : product.image,
      provider : product.provider,
      price : product.price,
      name : product.name
    }
    setInCart([...InCart, cartItem])
  }



  return (
   <div>
    <div id='CardWrap'>
          <div>
            <img id='Section5CardImg' src={product.image} />
          </div>
          <div>
            <FaCartPlus size='20' style={{color:'black', position:'relative', top:'124px', left:'130px', cursor:'pointer'}} onClick={()=>{dispatch({type:"ADD"}); handleCart()}} />
          </div>        
          <div id='CardBot'>
            <div id='CardBotBPrice'>
              ₩{product.price}
            </div>
            <div id='CardBotTag'>
              {product.people?
              <span id='CardBotTagPeople'>
                {product.people}명
              </span>:
              <>
                <span id='CardBotTagSale'>
                  {product.sale}
                </span>
              </>}            
          </div>          
        </div>
      </div>  
   </div>
  )
}

export default Section5Card;
