import React from 'react';
import image from '../assets/images/Background Image.jpg'
import avatar from '../assets/images/Game_CHR07-1 2 1.png'
import logo from '../assets/logos/Logo-1.png'


const Home = () => {
    return (
        <div className='w-full h-screen relative top-0'>
            <img src={image} alt="/" className='w-full h-full object-cover absolute mix-blend-overlay'/>
            <div className='text-[30px] h-screen font-extrabold flex justify-center items-center pt-[170px] relative'>
                <div className='h-[360px] w-[300px]'>
                  <img className='bg-[#00000000] h-full w-full' src={avatar} alt=''/>
                </div>
                <div className='text-[30px] font-extrabold pt-[100px] absolute  z-[10000]'>
                    <img className='w-[550px]' src={logo} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Home;