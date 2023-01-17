import React from 'react'
import image2222 from '../assets/images/002.png'
import avatar2222 from '../assets/images/Jason_pose2 2 (1).png'
import btn from '../assets/logos/button (1).png'
import Token from '../assets/images/$blood TOKEN_ (2).png'

const TokenSec = () => {
  return (
    <div className='bg-black w-full text-white'>
        <div className='w-full flex flex-wrap flex-row justify-between relative'>
            <div className='w-full lg:w-[30%] flex justify-center items-center'>
                <img src={avatar2222} alt=''/>
            </div>
            <div className='absolute w-full flex justify-center mt-[500px] lg:mt-[150px] items-center'>
                <div className='lg:ml-[120px] w-[500px]'>
                   <h1 className='ml-1'>
                       <img src={Token} alt=''/>
                   </h1>
                   <p className='ml-4'>
                       Laborum ipsum est ad sint qui nostrud amet commodo ullamcosint qui. 
                       Laborum ipsum est ad sint qui nostrud amet commodo .
                       Laborum ipsum est ad sint qui nostrud.
                   </p>
                   <div className='cursor-pointer w-[200px] mt-[10px]'>
                    <img src={btn} alt=''/>
                   </div>
                </div>
            </div>
            <div className='h-[500px]'>
              <img className='lg:w-[400px] w-screen h-full' src={image2222} alt=''/>
            </div>         
        </div>
    </div>
  )
}

export default TokenSec