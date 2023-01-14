import React, {useState} from 'react';
import Logo from '../assets/logos/Logo .png'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'


const Navbar = () => {

  const [show, setShow] = useState(false)

    return (
      <div className='w-full h-auto flex justify-center  font-sans absolute top-0 z-[1000000000]'>
        <div className='bg-[#000000cb] w-full h-[50px] flex flex-row justify-between items-center px-6 py-7'>
          <div className='text-white cursor-pointer w-[100px]'>
              <img className='bg-black' src={Logo} alt='/'/>
          </div>
          <div className='text-white lg:text-[16px] md:text-[16px] sm:text-[10px] text-[10px] hidden sm:block'>
              <ul className='flex flex-row gap-6'>
                  <li className='cursor-pointer'>Home</li>
                  <li className='cursor-pointer'>About</li>
                  <li className='cursor-pointer'>Token</li>
                  <li className='cursor-pointer'>Character</li>
                  <li className='cursor-pointer'>Team</li>
              </ul>
          </div>
          <div className='text-white cursor-pointer'>
              <button className='bg-red-600 px-4 py-0 flex justify-center items-center rounded-[20px]'>White paper</button>
          </div>
          <div className='text-white block sm:hidden '>
            <button>
              {!show && <AiOutlineMenu size={25} onClick={()=>{setShow(true)}}/>}
            </button>
          </div>
        </div>
        {show && <div className='bg-red-700 sm:hidden w-[200px] p-[20px] flex flex-col gap-[10px]'>
                    <div className='text-white font-extrabold'>
                      <IoMdClose size={25} onClick={()=>{setShow(false)}}/>
                    </div>
                    <ul className='text-white flex flex-col gap-5'>
                        <li className='cursor-pointer border-b-[2px] border-b-gray-400'>Home</li>
                        <li className='cursor-pointer border-b-[2px] border-b-gray-400'>About</li>
                        <li className='cursor-pointer border-b-[2px] border-b-gray-400'>Token</li>
                        <li className='cursor-pointer border-b-[2px] border-b-gray-400'>Character</li>
                        <li className='cursor-pointer border-b-[2px] border-b-gray-400'>Team</li>
                    </ul>
                 </div>
         }
      </div>
    )
  }
  
  export default Navbar