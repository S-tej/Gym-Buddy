import React from 'react'
import  './components/Programs.css';
function Programs() {
    const program=[{
         heading:"Strength Training",
         details:"Strength training is a form of exercise designed to enhance muscular strength and endurance by engaging in activities that resist force. By utilizing various forms of resistance such as free weights, machines, or body weight, individuals aim to improve their ability to exert force, leading to a range of health benefits.",
   

    } 
    ,
    {
        heading:"Cardio Training",
        details:"Cardiovascular training, commonly known as cardio, is a vital component of a well-rounded fitness routine. This form of exercise specifically targets the cardiovascular system, aiming to improve the efficiency of the heart and lungs. Typically involving activities that elevate the heart rate and breathing, such as running",
  

   }
   ,

   {
    heading:"Fat Burning",
    details:"Fat-burning exercises are a key element in fitness routines aimed at reducing body fat and promoting overall health. These exercises, often categorized as cardiovascular or aerobic activities, elevate the heart rate and engage large muscle groups, leading to increased calorie expenditure",
 

      }

      ,
    {   
        heading:"Health Fitness",
        details:"Achieving health and fitness involves a holistic approach encompassing regular physical activity, balanced nutrition, and mental well-being. Physical exercise, whether through cardiovascular workouts, strength training",
                
  

   }
    ]
  return (
    <div className='programs'>
    
    <div className="header">
    <h1 className="stroke-text">OUR WORKOUT PLANS</h1>
    </div>

    <div className="program-categories">
    {program.map((e) => (
     <div className="category">
      <div>{e.heading}</div>
       <div className='content'>{e.details}</div> 
      <a href="/userregister" className="joinnow">Join now</a>
     </div>))}

    </div>
    </div>
  )
}

export default Programs;
