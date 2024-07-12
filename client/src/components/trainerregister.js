import React from 'react';
import { useState } from 'react'
import Axios from 'axios';
import Navbar from './Navbar';
import './trainerreg.css'; 
import Dupnavbar from './dupnavbar';
const  Trainerregister=()=> {
   const [trainerField,settrainerField]=useState({
        trainerReg:'',
        traineruseridReg:'',
        trainerpassReg:'',
        trainerphoneReg:'',
        trainergenderReg:'',
        trainerratingReg:'',
        trainerexperienceReg:'',
   });
   
   const changetrainerField=(e)=>{
        const name=e.target.name;
        console.log(name);
        const value=e.target.value;
        settrainerField({...trainerField,[name]:value});
        console.log(trainerField);
   }
   
   const register =()=>{
         Axios.post('http://localhost:3001/trainerregister',{trainerField}).then((response)=>{
              console.log(response);
         });
    }
    
  return (
    <div className='main' id="tr">
        <Dupnavbar/>
        <div className='h flex flex-col gap-4 w-[30%] text-white'>
           <span className='flex'>
            <label id="hdng">    Trainer Register</label>
            </span>
            <span className=' flex'>
            <label>Trainer ID</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='traineruseridReg'/>
            </span>

            <span className=' flex'>
            <label>Trainer User</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerReg'/>
            </span>

            <span className=' flex'>
            <label>Password</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerpassReg'/>
            </span>
                <span className=' flex'>
             <label>Phone Number</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerphoneReg'/>
            </span>
                <span className=' flex'>
             <label>Gender</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainergenderReg'/>
            </span>
            <span className=' flex'>
             <label>Rating</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerratingReg'/>
            </span>


                <span className=' flex'>
             <label>Experience</label>
            <input type="date" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerexperienceReg'/>
            </span>
            <button onClick={register} id="button">Register</button>
        </div>
    </div>
   );
}

export default Trainerregister;