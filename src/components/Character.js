import React from 'react'
import Logo from '../assets/logos/Game Characters.png'
import Gost from '../assets/images/Ghostface_Gif3 2.png'
import Group1 from '../assets/images/Group (2).png'
import freddy from '../assets/images/Freddy_pose1 2.png'
import Penny from '../assets/images/Pennywise_pose1 2.png'
import PinHead from '../assets/images/Pinhead_pose1 2.png'
import Leather from '../assets/images/Leather-face_pose1 2.png'
import mike from '../assets/images/mike-myers_pose1 2.png'
import jason from '../assets/images/Jason_pose2 2 (2).png'
import chucky from '../assets/images/Chucky_Pose3 3.png'
import GamePlayLogo from '../assets/logos/game play.png'
import LoadMap from '../assets/logos/game play (1).png'
import image1 from '../assets/images/image_2022_09_28T02_47_04_124Z.png'
import image2 from '../assets/images/image_2022_09_28T02_48_47_293Z.png'
import image3 from '../assets/images/image_2022_09_28T02_49_10_084Z.png'
import image4 from '../assets/images/image_2022_09_28T02_48_11_965Z.png'
import image5 from '../assets/images/image_2022_09_28T02_47_35_309Z.png'

import bgImage from '../assets/images/BG 4.png'
import Text1 from '../assets/logos/Q 2 2023.png'
import Text2 from '../assets/logos/Q 4 2023.png'
import Text3 from '../assets/logos/Q 2 2024.png'
import Text4 from '../assets/logos/Q 1 2023.png'
import Text5 from '../assets/logos/Q 3 2023.png'
import Text6 from '../assets/logos/Q 1 2024.png'

import icon from '../assets/logos/Group 234014.png'
import OurTeam from '../assets/logos/Our Team.png'
import group1 from '../assets/images/Group 233962.png'
import group2 from '../assets/images/Group 233963.png'
import group3 from '../assets/images/Group 233964.png'
import group4 from '../assets/images/Group 233965.png'
import group5 from '../assets/images/Group 233966.png'
import Logo2 from '../assets/logos/Group 233960.png'

import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'

import {AiOutlineDown} from 'react-icons/ai'

const Character = () => {
  return (
    <div className='bg-black'>
       <div className='flex flex-col gap-[30px] py-[50px]'>
          <h1 className='flex justify-center items-center'>
            <img className='w-[500px] lg:mr-[30px]' src={Logo} alt=''/>
          </h1>
          <div className='flex flex-row flex-wrap justify-center gap-[20px] w-full'>
            <div className='relative'>
              <img className='absolute bottom-[5px]' src={Gost} alt=''/>
              <img className='w-[120px]' src={Group1} alt=''/>
            </div>
            <div className='relative'>
              <img className='absolute bottom-[2px] h-[170px] w-full' src={freddy} alt=''/>
              <img className='w-[120px]' src={Group1} alt=''/>
            </div>
            <div className='relative'>
              <img className='absolute bottom-[5px]' src={Penny} alt=''/>
              <img className='w-[120px]' src={Group1} alt=''/>
            </div>
            <div className='relative'>
              <img className='absolute bottom-[5px] rotate-next' src={PinHead} alt=''/>
              <img className='w-[120px]' src={Group1} alt=''/>
            </div>
            <div className='relative'>
              <img className='absolute bottom-[5px] h-[125px]' src={Leather} alt=''/>
              <img className='w-[120px]' src={Group1} alt=''/>
            </div>
            <div className='relative'>
              <img className='absolute bottom-[5px]' src={mike} alt=''/>
              <img className='w-[120px]' src={Group1} alt=''/>
            </div>
            <div className='relative'>
              <img className='absolute bottom-[5px] h-[180px] w-full' src={jason} alt=''/>
              <img className='w-[120px]' src={Group1} alt=''/>
            </div>
            <div className='relative'>
              <img className='absolute bottom-[5px]' src={chucky} alt=''/>
              <img className='w-[120px]' src={Group1} alt=''/>
            </div>
          </div>
          <div className='flex flex-row justify-end px-[100px] gap-[20px]'>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center'>
              <BsArrowLeft/>
            </button>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center'>
              <BsArrowRight/>
            </button>
          </div>
       </div>
       <div className='w-full relative bg-transparent'>
        <div className='z-[1000000000000]'>
          <h1 className='flex justify-center items-center'>
            <img className='w-[400px] h-[170px]' src={GamePlayLogo} alt=''/>
          </h1>
          <div className='flex justify-center items-center relative pt-[150px] pb-[120px]'>
            <div className='absolute top-8 left-[100px] z-[100]'>
              <img className='w-[250px]' src={image1} alt=''/>
            </div>
            <div className='absolute top-4 left-[250px] z-[10000]'>
              <img className='w-[300px]' src={image3} alt=''/>
            </div>
            <div className='absolute top-0 z-[100000]'>
              <img className='w-[350px]' src={image2} alt=''/>
            </div>
            <div className='absolute top-4 right-[250px] z-[10000]'>
              <img className='w-[300px]' src={image4} alt=''/>
            </div>
            <div className='absolute top-8 right-[100px] z-[100]'>
              <img className='w-[250px]' src={image5} alt=''/>
            </div>
          </div>
          <div className='flex flex-row justify-end px-[100px] gap-[20px]'>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center'>
              <BsArrowLeft/>
            </button>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center'>
              <BsArrowRight/>
            </button>
          </div>
        </div>
        <div className='absolute top-[160px] md:left-[70px] left-0 md:w-[550px] w-full h-[650px] z-[1] bgContainer2'></div>
        <div className='w-full h-auto'>
          <div className='z-[1000]'>
            <h1 className='flex justify-center items-center'>
              <img className='w-[400px] h-[170px] z-[100000]' src={LoadMap} alt=''/>
            </h1>
            <div className='z-[1000] relative'>
              <div className='flex flex-row flex-wrap justify-center gap-[100px] py-5'>
              <div className='flex flex-row gap-[30px] justify-center items-center  z-[100000] mb-[-100px] ml-[100px]'>
                     <img className='z-[100000] h-[70px]' src={Text1} alt=''/>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>. Team's Reveal</li>
                       <li className='cursor-pointer'>. Full-Website</li>
                       <li className='cursor-pointer'>. Update Development</li>
                       <li className='cursor-pointer'>. Progress</li>
                       <li className='cursor-pointer'>. Seed & Private Sale</li>
                     </ul>
                  </div>
                  <div className='flex flex-row gap-[30px] justify-center items-center  z-[100000] mb-[-100px]'>
                     <img className='z-[100000] h-[70px]' src={Text2} alt=''/>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>. Alpha GamePlay Trailer</li>
                     </ul>
                  </div>
                  <div className='flex flex-row gap-[30px] justify-center items-center  z-[100000] mb-[-100px]'>
                     <img className='z-[100000] h-[70px]' src={Text3} alt=''/>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>. Full Game Trailer</li>
                       <li className='cursor-pointer'>. Full Game Launch</li>
                       <li className='cursor-pointer'>. Building Challenge<br/>(Burning mechanism)</li>
                       <li className='cursor-pointer'>. Synthesis<br/>(Burning mechanism)</li>
                     </ul>
                  </div>
                <div className='z-[1000000] flex flex-row gap-0 h-[30px] my-[40px]'>
                    <div className='text-red-900 flex justify-center items-center'><img src={icon} alt='' />------------</div>
                    <div className='text-red-900 flex justify-center items-center'>------------<img src={icon} alt='' />------------</div>
                    <div className='text-red-900 flex justify-center items-center'>------------<img src={icon} alt='' />------------</div>
                    <div className='text-red-900 flex justify-center items-center'>------------<img src={icon} alt='' />------------</div>
                    <div className='text-red-900 flex justify-center items-center'>------------<img src={icon} alt='' />------------</div>
                    <div className='text-red-900 flex justify-center items-center'>------------<img src={icon} alt='' /></div>
                </div>
                <div className='flex flex-row gap-[30px] justify-center items-center  z-[100000] mt-[-100px]'>
                     <img className='z-[100000] h-[70px]' src={Text4} alt=''/>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>. Game Story</li>
                       <li className='cursor-pointer'>. Game Concept Teaser</li>
                       <li className='cursor-pointer'>. Whitepaper</li>
                       <li className='cursor-pointer'>. Community lounch</li>
                       <li className='cursor-pointer'>. Pre-website</li>
                     </ul>
                  </div>
                  <div className='flex flex-row gap-[30px] justify-center items-center  z-[100000] mt-[-100px]'>
                     <img className='z-[100000] h-[70px]' src={Text5} alt=''/>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>. Team's Reveal</li>
                       <li className='cursor-pointer'>. Full-Website</li>
                       <li className='cursor-pointer'>. Update Development</li>
                       <li className='cursor-pointer'>. Progress</li>
                       <li className='cursor-pointer'>. Seed & Private Sale</li>
                     </ul>
                  </div>
                  <div className='flex flex-row gap-[30px] justify-center items-center  z-[100000] mt-[-100px] mr-[100px]'>
                     <img className='z-[100000] h-[70px]' src={Text6} alt=''/>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>. Alpha Version Launch</li>
                       <li className='cursor-pointer'>. Public Sale</li>
                       <li className='cursor-pointer'>. SEVM Staking (Defi)</li>
                       <li className='cursor-pointer'>. Sacred Beast (Defi)</li>
                     </ul>
                  </div>
              </div>
              <div className='bgContainer absolute top-0 lg:right-5 right-0'></div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto'>
          <h1 className='flex justify-center items-center z-[100000]'>
            <img className='z-[100000]' src={OurTeam} alt=''/>
          </h1>
          <div className='flex flex-row flex-wrap gap-3 justify-center items-center'>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group1} alt=''/>
            </div>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group2} alt=''/>
            </div>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group3} alt=''/>
            </div>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group4} alt=''/>
            </div>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group5} alt=''/>
            </div>
          </div>
          <div className='flex flex-row justify-end px-[100px] gap-[20px]'>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center z-[100000000]'>
              <BsArrowLeft/>
            </button>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center z-[100000000]'>
              <BsArrowRight/>
            </button>
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between items-center'>
          <div className='flex justify-start mb-[200px]'>
            <img className='w-[300px] h-[300px]' src={freddy} alt=''/>
          </div>
          <div className='flex flex-col gap-5 justify-center items-center md:w-[550px] w-screen'>
            <h1 className='w-[350px]'>
              <img src={Logo2} alt=''/>
            </h1>
            <form className='flex flex-col gap-[10px] text-white'>
              <div className='flex flex-row border-b flex justify-center items-center'>
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>When is PolyLand Launching</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
              <div className='flex flex-row border-b flex justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>Can I Play for Free</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
              <div className='flex flex-row border-b flex justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>Where Can I Play PolyLand</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
              <div className='flex flex-row border-b flex justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>helloooooo</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
              <div className='flex flex-row border-b flex justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>helloooooo</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
            </form>
          </div>
          <div className='flex justify-end h-[600px] pt-[290px]'>
            <img className='w-[250px] h-[250px]' src={chucky} alt=''/>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Character