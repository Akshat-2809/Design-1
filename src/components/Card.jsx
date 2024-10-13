import React from 'react'
import LOGO from '../assets/chat.png'
import bg from '../assets/bg-image.png'
import avt1 from '../assets/avt1.avif'
import avt2 from '../assets/avt2.avif'
import avt3 from '../assets/avt3.avif'
import avt4 from '../assets/thunderbolt.jpeg'
import { RiExpandUpDownFill } from "react-icons/ri";


import { FaArrowRight } from "react-icons/fa";

function Card() {
  return (
   <div className='w-[100vw] h-[100vh] bg-[#E8CDED]'>
    <div className='w-[84vw] h-[90vh] rounded-[2vw] flex relative top-[5vh] bg-white  left-[12vh]'>
      <div className='h-full w-[50%]'>
        <div className='header'>
          <img src={LOGO} alt='logo' className='w-[5vw] top-[10vh] ml-16 mt-10'/>
        </div>
        <div className='middle-content'>
          <h1 className='text-[3vw] ml-16 mt-10 font-["Optima"] font-semibold tracking-wide leading-[1.4]'>Building the <br />future of Al <br /> together</h1>
          <p className='mt-2 ml-14 text-[#C1BDCD] tracking-normal leading-[1.35] font-["Cochin"] text-[1.6vw] p-2 w-[70%]'>AI is transforming the world,
             and we are leading the charge. We are constructing the future of AI as a collective.</p>
          <button className='flex text-[#F1EDFC] items-center gap-2 mt-6 border-none scale-[1] font-["Cochin"] ml-14 px-8 bg-[#76BA6C] tracking-wide py-3 rounded-full'>Get Started <FaArrowRight /></button>
        </div>
        <div className='footer'>
          <div className='upper-div flex mt-[7vh] p-2 gap-3'>
            <div className=' text-[#7E808C] text-[1vw] ml-11 p-3'><span className='font-bold text-[1.3vw] text-black'>430,000 Users</span> <br />is buliding cleverBot together</div>
            <div className=' text-[#7E808C] text-[1vw] p-3'><span className='font-bold text-[1.3vw] text-black'>1M Users</span> <br />Estimated additional reach</div>
          </div>
          <div className='progress-bar w-[66%] h-[1.2vh] bg-gray-300 ml-[5vw] mt-2 rounded-full'>
            <div className='w-[37%] h-full bg-purple-500 rounded-full'></div>
          </div>
          <div className='circle-containerw-1/2 flex mt-[1.3vw] ml-[5vw]'>
            <div className='circle w-7 h-7 rounded-full'>
              <img className='rounded-full' src={avt1} alt="avt1" />
            </div>
            <div className='circle w-7 h-7 rounded-full'>
              <img className='rounded-full' src={avt2} alt="" />
            </div>
            <div className='circle w-7 h-7 rounded-full'>
              <img className='rounded-full' src={avt3} alt="" />
            </div>
            <div className='circle w-7 h-7 rounded-full'>
              <img className='rounded-full' src={avt4} alt="" />
            </div>
          </div>
        </div>

      </div>
      <div className='h-full w-[50%] bg-white'>
        <div className='card-c w-[97%] mt-[2vw] h-[97%]'>
          <button className='bg-[#865EF4] relative top-[0.5vw] left-[31vw] rounded-full px-4 py-2 text-white'>Get Started</button>
          <img src={bg} alt="" className='object-fill rounded-xl mt-[-1.2vw] rounded-tr-[15vw] w-full h-[95%] ' />
          <div className='h-[4vh] relative top-[-4vw] left-[4.2vw] rounded-xl w-[82%] bg-[#F9EFF9]'>
            <div className='flex items-center gap-2'>
              <img className='w-[6.8%] mt-1 ml-1 items-center object-center' src={LOGO} alt="" />
              <h2 className='text-[1.2vw] font-["Optima"] font-medium'>AI is generating....</h2>
            </div>
            <div className='w-[25%] flex items-center h-[80%] bg-white rounded-md relative left-[24.5vw] top-[-2.3vw]'>
              <h2 className='text-[0.9vw] ml-[1vw] font-["Optima"] items-center  font-semibold'>Prompt</h2>
              <div className='circle w-5 h-5 rounded-full ml-[2.5vw] flex items-center justify-center  bg-black'>
              <RiExpandUpDownFill className='text-[1.5vw] font-semibold text-white'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Card