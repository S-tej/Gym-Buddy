import React from 'react';
import { useState } from 'react'
import Axios from 'axios';
import './trainerregister.js';
import Dupnavbar from './dupnavbar';
const  Workoutregister=()=> {
   const [workoutField,setworkoutField]=useState({
        planidReg:"",
        plannameReg:"",
        e1Reg:"",
        e2Reg:"",
        e3Reg:"",
   });
   
   const changeworkoutField=(e)=>{
        const name=e.target.name;
        console.log(name);
        const value=e.target.value;
        setworkoutField({...workoutField,[name]:value});
        console.log(workoutField);
   }
   
   const register =()=>{
         Axios.post('http://localhost:3001/workoutregister',{workoutField}).then((response)=>{
              console.log(response);
         });
   }
    
  return (
    <div className='main'>
        <Dupnavbar/>
        <div className='h flex flex-col gap-4 w-[30%] text-white'>
            <span className='flex'>
            <label id="hdng">Workout Plan Register</label>
            </span>
            <span className=' flex'>
            <label>Plan ID</label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='planidReg'/>
            </span>
             <span className=' flex'>
            <label>Plan Name</label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='plannameReg'/>
             </span>

            <span className=' flex'>
            <label>Exercise 1</label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='e1Reg'/>
            </span>
             <span className=' flex'>
            <label>Exercise 2</label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='e2Reg'/>
            </span>
           <span className=' flex'>
            <label>Exercise </label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='e3Reg'/>
            </span>
            <button onClick={register} id="button">Register</button>
        </div>
    </div>
   );
}

export default Workoutregister;