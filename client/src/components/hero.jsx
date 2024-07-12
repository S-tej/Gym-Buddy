import React from 'react'
import Hero_image from '../images/hero_image.png'
import Hero_image_back from '../images/hero_image_back.png'

const index = () => {
  return (
    <div className=' flex gap-2 justify-between w-[700px] h-[500px] bg-hi' id="">
        <div className="">
            <div className="saket flex flex-col gap-6 text-uppercase text-4xl font-bold text-white mt-[100px]">
                <div>
                    <span>SHAPE YOUR IDEAL BODY</span>
                </div>
                <div>
                    <span>
                        Im here we will help you to shape and build live up your life to fullest
                    </span>
                </div>
            </div>
            <div className="figures flex h-20  text-white mt-[100px]">
                <div >
                    <span className=" text-aliceblue text-2xl">+140</span>
                    <span className=" text-gray-500 uppercase">Expert Coaches</span>
                </div>
                <div>
                    <span className=" text-aliceblue text-2xl">978</span>
                    <span className=' text-gray-500 uppercase'>Members Join</span>
                </div>
                <div>
                    <span className=" text-aliceblue text-2xl">+50</span>
                    <span className=" text-gray-500 uppercase">Fitness programmes</span>
                </div>
            </div>
        </div>

        <div className="image flex justify-between">
            <img src={Hero_image} className=' absolute top-30 m-3 right-10 w-45 h-80' alt=""  /> 
             <img src={Hero_image_back} className=' absolute top-60 right-60 w-40 h-20' alt="" />
        </div>
    </div>
  )
}

export default index;