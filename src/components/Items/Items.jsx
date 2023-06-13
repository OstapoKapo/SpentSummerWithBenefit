import './Items.css'
import OlegCastle from './img/Olesko_Castle.jpg'
import locationPng from './img/location.webp'
import Pechereniy from './img/pechernyy_monastyr_rozgirche.jpg'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Rock from './img/rock.jpg'
let imgarr = [OlegCastle, Pechereniy, Rock]


function Item(props){
    return(
        
        
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
                   <div className="item__location__img"></div>
                   <div className="item__text">{props.location}</div>
               </div>
            </div>
        </div>
     
    )
}

export default Item