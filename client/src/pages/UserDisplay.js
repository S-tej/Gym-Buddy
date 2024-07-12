import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import Dupnavbar from '../components/dupnavbar';
import './userdisplay.css';
const UserDisplay = () => {
    const [user,setuser]=useState([{}]);
    const r=useParams().user_id;
    useEffect(()=>{
        Axios.post('http://localhost:3001/userdisplay',{
            user_id:r,
        }).then((response)=>{
            setuser(response.data);
            console.log(response.data);
        }).catch((err)=>{console.log(err)});
    },[]);
  return (
    <>
    <div className='black h-screen'>
    <Dupnavbar/>
    <div className=' flex justify-between'>
        <div className=' flex flex-col gap-7 text-2xl black white text-left' id="a">
            <label id ="hdng">YOUR PROFILE</label>
            <p htmlFor="">Username : {user[0].user_name}</p>
            <p htmlFor="">Age : {user[0].user_age}</p>
            <p htmlFor="">Phone : {user[0].user_phone}</p>
            <p htmlFor="">Start Date : {user[0].start_date}</p>
            <p htmlFor="">End Date : {user[0].end_date}</p>
            <p htmlFor="">Trainer Name : {user[0].trainer_name}</p>
            <p htmlFor="">Workout Name : {user[0].plan_name}</p>
          
        </div>

        <div className='exercises' >
        <p htmlFor="" id="hdng"> Exercises</p>
        <table className="table table-bordered" id="table">
        <thead>
            <tr>
                <th>EXERCISE NAME</th>
            </tr>
        </thead>
        {
            user.map((val)=>{
                return(
                    <>
                     <tr>
                        <td id='exe' className=' m-2' htmlFor="">{val.exercise_name}</td>
                        </tr>
                    </>
                )
            })
        }
        </table>
        </div>
    </div>
    </div>
    </>
    
  )
};
export default UserDisplay;
