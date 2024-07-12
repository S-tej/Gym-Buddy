import React from 'react'
import './reasons.css'
import whitetick from '../images/whiteTick.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
export default function reasons() {
  return (
    <div className="reasons">
      <div className="left-r">
       <img src={image1} alt=""></img>
       <img src={image2} alt=""></img>
       <img src={image3} alt=""></img>
       <img src={image4} alt=""></img>
      </div>

      <div className="right-r">
    
        <div>
            <span >WHY </span>
            <span>TO CHOOSE US?</span>
        </div>
        <div className="details-r" >
            

            <div>
                <img src={whitetick}alt="p" />
                <span>OVER 40+ EXPERTS  COACHES</span>
            </div>

            <div>
                <img src={whitetick} alt="p"/>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span> 
            </div>
            <div>
                 <img src={whitetick}alt="p"/>
                 <span>FREE FIRST PROGRAM</span>
            </div>
            <div>
                <img src={whitetick} alt="p"/>
                <span>RELIABLE PARTNERS</span>
            </div>
        </div>
        </div>
    </div>
  )
}
