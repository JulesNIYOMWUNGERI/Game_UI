import React from 'react'
import image11111 from '../assets/images/003.png'
import freddy from '../assets/images/Freddy_pose1 3.png'
import Logo1111 from '../assets/logos/Game Trailer_ (1).png'
import AboutLogo from '../assets/logos/About.png'
import Pennywise from '../assets/images/Pennywise_pose2 1.png'
import WatchLogo from '../assets/logos/Watch Trailer.png'
import rectangle from '../assets/images/001.png'
import rectangle5 from '../assets/images/Rectangle 5 (1).png'
import rectangle26 from '../assets/images/Rectangle 26.png'
import HowToPlay from '../assets/logos/how to play.png'
import image2 from '../assets/images/image.png'
import Download from '../assets/logos/Download.png'
import SelectAvatar from '../assets/logos/2. Select Avatar & Arena.png'
import Play from '../assets/logos/3. Play.png'
import Group1 from '../assets/images/Group (1).png'
import GhostFace from '../assets/images/Ghostface_Gif3 1.png'
import {AiFillYoutube,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {RiFacebookFill} from 'react-icons/ri'

const About = () => {
  return (
    <div className='bg-black text-white w-full pt-[100px] h-auto relative flex justify-end flex-row flex-wrap'>
        <div className='bg-transparent lg:w-[49%] md:w-[49%] sm:w-[100%] w-[100%] flex flex-col pl-[50px]'>
          <div>
            <img src={AboutLogo} alt=''/>
          </div>
          <div className='pl-[55px]'>
            <p>Duis sit id labore est aliquip ut mollit ullamco deserunt pariatur. 
               Ipsum aliquip reprehenderit fugiat ad quis. Eu consequat fugiat ex pariatur cillum. 
               Minim nulla minim in anim nostrud cupidatat nostrud officia aliquip.
               Nisi laboris reprehenderit qui veniam ad ex eu dolor tempor consequat dolore proident. 
               Officia ad exercitation incididunt non id ullamco esse non non sint sunt.
            </p>
          </div>
          <div className='flex justify-center items-center pl-[100px] mt-[110px]'>
            <img className='h-[100%] w-[100%]' src={Pennywise} alt=''/>
          </div>
        </div>
        <div className='h-auto lg:w-[50%] md:w-[50%] sm:w-[100%] bg-transparent'>
           <div className='h-[600px] w-full flex flex-col justify-center items-center relative'>
             <img className='w-full h-full' src={image11111} alt=''/>
             <div className='bg-transparent text-white text-[30px] w-full h-full flex justify-center items-center absolute z-[100000]'>
               <div className='mb-[220px] mr-[100px] sm:mr-[130px] md:mr-[80px] lg:mr-[100px] w-[60%] h-[60%]'>
                   <img className='h-full w-full' src={freddy} alt=''/>
               </div>
             </div>
           </div>
           <div className='flex flex-col'>
            <div className='flex justify-center md:justify-start'>
              <img className='h-[80px]' src={Logo1111} alt=''/>
            </div>
            <div className='text-center md:text-start'>
              <p>Lorem Ipsum et dolore minim pariatur.
                Est quis adipisicing mollit deserunt.
                Est quis adipisicing mollit deserunt.
                Est quis adipisicing mollit deserunt. 
                Aute pariatur aliquip aliquip occaecat 
                ipsum culpa minim fugiat cillum elit dolor velit.</p>
            </div>
           </div>
        </div>
        <div className='lg:w-[60%] md:w-[60%] sm:w-[100%] w-[100%] py-[20px] px-[40px] flex flex-wrap flex-row justify-center gap-[40px]'>
          <button className='border-[2px] border-gray-500 py-[10px] px-[20px] rounded-[10px]'>
            <img className='w-[100px]' src={WatchLogo} alt=''/>
          </button>
          <div className='px-5 flex gap-[20px] justify-center items-center'>
            <div className='bg-gray-700 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
              <AiFillYoutube/>
            </div>
            <div className='bg-gray-700 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
              <RiFacebookFill/>
            </div>
            <div className='bg-gray-700 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
              <AiOutlineInstagram/>
            </div>
            <div className='bg-gray-700 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
              <AiOutlineTwitter/>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <h1>JOIN THE CONVERSATION</h1>
          </div>
        </div>
        <div className='w-full h-auto bg-black flex flex-col justify-center items-center'>
          <div className='w-full flex flex-col items-center justify-center py-[50px] relative'>
            <img className='lg:w-[50%] md:w-[70%] sm:w-full lg:h-[750px] md:h-[1000px] sm:h-[1300px] h-[1000px]' src={rectangle} alt=''/>
            <div className='flex flex-wrap flex-row justify-center items-center absolute top-4 w-full'>
                <div className='lg:w-[45%] md:w-[600px] sm:w-screen'>
                  <img src={rectangle5} alt=''/>
                </div>
                <div className='lg:w-[45%] md:w-[600px] sm:w-screen'>
                  <img src={rectangle26} alt=''/>
                </div>
            </div>
            <img className='absolute left-0 top-[50px] w-[200px] hidden lg:block' src={Group1} alt=''/>
            <img className='absolute right-0 lg:w-[400px] md:w-[200px] mt-[70px] hidden md:block' src={GhostFace} alt=''/>
            <div className=' flex justify-center items-center flex-col lg:w-[50%] md:w-[70%] sm:w-full w-full absolute lg:mt-[50px] md:mt-[200px] sm:mt-[100px] mt-[10px]'>
               <h1>
                 <img src={HowToPlay} alt=''/>
               </h1>
               <p className='text-center'>
                 Irure et tempor fugiat irure velit officia. 
                 veniam aute ad amet sint ut non magna aliquip ut velit occaecat eiusmod sit. 
                 Proident et aliquip aliqua labore deserunt.
               </p>
            </div>
            <div className='flex flex-wrap flex-row justify-center items-center gap-10'>
               <div className='lg:w-[450px] md:w-[450px] sm:w-[90%] w-[90%]'>
                 <img  src={image2} alt=''/>
               </div>
               <div className='flex flex-col gap-2 lg:w-[450px] md:w-[450px] sm:w-[90%] w-[90%] h-[300px] md:h-[250px]'>
                 <div>
                   <h1><img className='w-[150px]' src={Download} alt=''/></h1>
                   <p>veniam aute ad amet sint ut non magna aliquip ut velit occaecat eiusmod sit.</p>
                 </div>
                 <div>
                   <h1><img className='w-[250px]' src={SelectAvatar} alt=''/> </h1>
                   <p>veniam aute ad amet sint ut non magna aliquip ut velit occaecat eiusmod sit.</p>
                 </div>
                 <div>
                   <h1><img className='w-[100px]' src={Play} alt=''/></h1>
                   <p>veniam aute ad amet sint ut non magna aliquip ut velit occaecat eiusmod sit.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About