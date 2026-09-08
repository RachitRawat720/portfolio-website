import React from 'react'
import profile_pic from '../assets/profile_pic.png'
import hi from '../assets/hi_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TypingText from './Typingtext';
import linkedin_logo from '../assets/linkedIn_logo.png'
import github_logo from '../assets/github_logo.jpg'
import react_img from '../assets/react-img.jpg'
import node_img from '../assets/node-img.png'
import express_img from '../assets/express-img.png'
import mongoDB_img from '../assets/mongoDB-img.png'

import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className='flex relative px-10 py-8 gap-5 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>

            <motion.div initial={{opacity: 0, x: -300}} whileInView={{opacity: 1, x: 0}} transition={{duration: 2}} viewport={{ once: true}}
            className='w-1/2'>
                <div className='flex'>
                        <img src={hi} className='h-7 w-9 mt-2'/>
                    <h3 className='text-[25px] ml-2 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent'>Hello, I'm </h3>
                </div>

                <h1 className='text-[70px] font-bold text-white'>Rachit Singh <span className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#23299bd2] bg-clip-text text-transparent'>Rawat</span></h1>

                <div className='flex mt-4'>
                    <div className='w-1.5 bg-[#8B5CF6]'></div>
                    <h3 className='text-[28px] font-semibold ml-3 text-gray-300'><TypingText text="MERN Stack Developer" /></h3>
                </div>

                <div>
                    <p className='text-[18px] mt-6 text-gray-200'>I'm a passionate MERN Stack Developer focused on building modern, responsive, and interactive web applications. I use MongoDB, Express.js, React, and Node.js to turn ideas into scalable and engaging digital experiences.</p>
                </div>

                <div className='flex gap-12 mt-10 items-center'>
                    <a href='/Projects'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white px-1 py-1 rounded-md flex gap-2 justify-center items-center w-40 h-13 text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3'>View My Work<FontAwesomeIcon icon={faArrowRight} /></button></a>

                    <a href='/Contact'><button className='border-2 border-[#7C3AED] text-white px-1 py-1 rounded-md gap-2 flex justify-center items-center w-40 h-13 text-[16px] hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] hover:border-none hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3'>Contact Me<FontAwesomeIcon icon= {faEnvelope}></FontAwesomeIcon></button></a>

                    <button className='border-2 border-[#7C3AED] text-white px-1 py-1 rounded-md gap-2 flex justify-center items-center w-30 h-10 text-[13px] hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] hover:border-none hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3'>View Resume<FontAwesomeIcon icon={faArrowRight}/></button>
                </div>

                
                <div className='flex mt-8 gap-7'>
                    <a href='https://www.linkedin.com/in/rachit-singh-rawat/' target='_blank' rel="noopener noreferrer" className='group block '><div className='w-11 h-11 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex justify-center items-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={linkedin_logo} className='w-7 h-7 rounded-md' alt="" /></div></a>

                    <a href='https://github.com/RachitRawat720' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-11 h-11 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={github_logo} className='w-7 h-7 rounded-md' alt="" /></div></a>
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, x: 400}} whileInView={{opacity: 1, x: 0}} transition={{duration: 2}} viewport={{ once: true}}
            className='w-1/2'>
                <img src={profile_pic} className='mt-20 rounded-4xl w-full h-auto mask-[radial-gradient(ellipse_at_center,black_55%,transparent_100%)]'/>
            </motion.div>

            <div className='absolute h-20 w-20 top-34 left-175 overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                <img src={react_img} alt="" className='h-full w-full'/>
            </div>

            <div className='absolute h-20 w-20 top-80 left-165 overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                <img src={node_img} alt="" className='h-full w-full'/>
            </div>

            <div className='absolute h-20 w-20 top-45 left-275 overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                <img src={express_img} alt="" className='h-full w-full'/>
            </div>

            <div className='absolute h-20 w-20 top-95 left-275 overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                <img src={mongoDB_img} alt="" className='h-full w-full'/>
            </div>
        </div>
    )
}

export default Home
