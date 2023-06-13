import './Items.css'
import OlegCastle from './img/Olesko_Castle.jpg'
import locationPng from './img/location.webp'
import Pechereniy from './img/pechernyy_monastyr_rozgirche.jpg'
import { useState } from 'react';
import ActiveLike from './img/heart-image-13.png';
import Like from './img/whiteHeart.svg.png'
import Rock from './img/rock.jpg'
let imgarr = [OlegCastle, Pechereniy, Rock]


function Item(props){
    const [likeCheck, setLikeCheck] = useState(false);
    const [count, setCount] = useState(0);
    
    function plusLike(){
        setCount(count + 1);
    }
    function minusLike(){
        setCount(count - 1);
    }
    function handleClick() {
       if(!likeCheck){
        plusLike()
       }else if(likeCheck){
        minusLike()
       }
       setLikeCheck(current => !current);
      }

     

    
    return(
        
       <div className="row">
        <div className='item'>
            <div className="item__place">
                <img className='item__img' src={imgarr[props.img]} alt="" />
            </div>
            <div className="item__description">
                <p className="item__text"><span> {props.name} </span> {props.description} </p>
            </div>    
            <div className="item__option">
               <div className="item__text">Вартість</div>
               <div className="item__price">{props.price}</div>
               <div className="item__location">
                   <img className='item__location__img' src={locationPng} alt="" />
                   <div className="item__text">{props.location}</div>
               </div>
            </div>
        </div>
        <div className="likeRow">
            <div className="like" style={{
          backgroundImage: likeCheck ? `url(${ActiveLike})` : `url(${Like})`
        }} onClick={handleClick}></div>
            <p className="likeCount">{count}</p>
        </div>
        </div>  
     
    )
}

export default Item