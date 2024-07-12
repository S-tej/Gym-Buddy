import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Login from '../pages/UserRegister';
export default function Navbar() {

   const [str,setStr]=React.useState('hidden');
   const [toshow ,setToshow]=React.useState(true);

   const handleClick=()=>{
      show();
      setToshow(!toshow);
   }
    
   const show=()=>{
      if (toshow==false){
         setStr('hidden');
      } else {
         setStr('');
      }
   }
  return (
   <div className="nbar">
     <div className="nleft">
       <div className="lname">Gym Buddy</div>
      </div>

      <div className="nmid">
         <div className="midlist">
            <ul>
                <a href="/home">Home</a>
                <li>Programs</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Contact Us</li>
            </ul>
         </div>

      </div>

      <div className="nright">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         <a href="#" class="fa fa-facebook"></a>
         <a href="#" class="fa fa-twitter"></a>
         <a href="#" class="fa fa-instagram"></a>
      </div>
   </div>
    
  )
}
