import React from 'react'
import profile_pic from '../assets/profile_pic.png'
import hi from '../assets/hi_img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TypingText from './Typingtext';
import linkedin_logo from '../assets/linkedIn_logo.png'
import github_logo from '../assets/github_logo.jpg'
import react_img from '../assets/react-img.jpg'
import node_img from '../assets/node-img.png'
import express_img from '../assets/express-img.png'
import mongoDB_img from '../assets/mongoDB-img.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import MoveToTop from './MoveToTop';

const Home = () => {
    return (
        <div className='flex flex-col px-20 overflow-hidden py-8 gap-5 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)] pb-10'>

            <div className='flex flex-col gap-20 lg:flex-row-reverse lg:gap-20 lg:mt-10'>

                <motion.div initial={{opacity: 0, x: 400, scale: 0.3}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{ once: true}}
                className='flex justify-center items-start lg:items-center lg:w-[50%]'>
                    <div className='flex items-center justify-center w-[80%] md:w-[70%] lg:w-full relative'>
                        <img src={profile_pic} className='mt-20 lg:mt-0 rounded-4xl w-full mid:w-full h-auto mask-[radial-gradient(ellipse_at_center,black_55%,transparent_100%)]'/>

                        <div className='absolute h-[12%] w-[10%] lg:h-[12%] lg:w-[9%] sm:top-[20%] sm:left-[10%] mid:top-[18%] mid:left-[10%] overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                            <img src={react_img} alt="" className='h-full w-full'/>
                        </div>

                        <div className='absolute h-[12%] w-[10%] lg:h-[12%] lg:w-[9%] sm:top-[26%] sm:left-[85%] mid:top-[24%] mid:left-[80%] overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                            <img src={mongoDB_img} alt="" className='h-full w-full'/>
                        </div>

                        <div className='absolute h-[12%] w-[10%] lg:h-[12%] lg:w-[9%] sm:top-[85%] sm:left-[80%] mid:top-[60%] mid:left-[80%] overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                            <img src={node_img} alt="" className='h-full w-full'/>
                        </div>

                        <div className='absolute h-[12%] w-[10%] lg:h-[12%] lg:w-[9%] sm:top-[75%] sm:left-[6%] mid:top-[55%] mid:left-[5%] overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                            <img src={express_img} alt="" className='h-full w-full'/>
                        </div>

                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: -300, scale: 0.3}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{ once: true}}
                className='flex flex-col items-start w-full lg:w-[50%]'>
                    <div initial={{opacity: 0, x: -300, scale: 0.3}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{ once: true}}
                    className='flex overflow-hidden '>
                            <img src={hi} className='h-7 w-9 mt-2 rounded-4xl'/>
                        <h3 className='text-[25px] ml-2 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent'>Hello, I'm </h3>
                    </div>

                    <h1 className='sm:text-[60px] md:text-[70px] lg:text-[60px] xl:text-[78px] font-bold text-white leading-18 mt-4 mb-4'>Rachit Singh <span className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#23299bd2] bg-clip-text text-transparent 2xl:block 2xl:mt-5'>Rawat</span></h1>

                    <div className='flex mt-4 2xl:mt-8'>
                        <div className='w-1.5 bg-[#8B5CF6]'></div>
                        <h3 className='sm:text-[26px] md:text-[28px] lg:text-[26px] xl:text-[32px] font-semibold ml-3 text-gray-300'><TypingText text="MERN Stack Developer" /></h3>
                    </div>

                    <div>
                        <p className='sm:text-[16px] md:text-[18px] lg:text-[16px] xl:text-[20px] mt-6 text-gray-200'>I build responsive and user-focused web applications using React, Node.js, Express.js and MongoDB, with a focus on clean UI, scalable APIs and real-world problem solving.</p>
                    </div>

                    <div className='flex gap-12 lg:gap-5 xl:gap-10 mt-10 xl:mt-15 items-end'>
                        <Link to='/projects'>
                            <button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white px-1 py-1 rounded-md flex gap-2 justify-center items-center w-40 h-13 text-[16px] lg:w-35 lg:h-11 lg:text-[14px] xl:w-45 xl:h-15 xl:text-[18px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3 font-semibold'>View My Work<FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                        
                        <Link to='/contact'>
                            <button className='border-2 border-[#7C3AED] text-white px-1 py-1 rounded-md gap-2 flex justify-center items-center w-40 h-13 text-[16px] lg:w-35 lg:h-11 lg:text-[14px] xl:w-45 xl:h-15 xl:text-[18px] hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] hover:border-none hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3 font-semibold'>Contact Me<FontAwesomeIcon icon= {faEnvelope}></FontAwesomeIcon></button>
                        </Link>

                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><button className='border-2 border-[#7C3AED] text-white px-1 py-1 rounded-md gap-2 flex justify-center items-center w-30 h-10 text-[13px] lg:w-25 lg:h-8 lg:text-[11px] xl:w-35 xl:h-12 xl:text-[15px] hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] hover:border-none hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3 font-semibold'>View Resume<FontAwesomeIcon icon={faArrowRight}/></button>
                        </a>
                    </div>

                    
                    <div className='flex mt-8 2xl:mt-12 gap-7'>
                        <a href='https://www.linkedin.com/in/rachit-singh-rawat/' target='_blank' rel="noopener noreferrer" className='group block '><div className='w-11 h-11 xl:w-13 xl:h-13 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex justify-center items-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={linkedin_logo} className='w-7 h-7 xl:w-9 xl:h-9 rounded-md' alt="" /></div></a>

                        <a href='https://github.com/RachitRawat720' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-11 h-11 xl:w-13 xl:h-13 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={github_logo} className='w-7 h-7 xl:w-9 xl:h-9 rounded-md' alt="" /></div></a>
                    </div>
                </motion.div>

            </div>
            
            <MoveToTop />
            
        </div>
    )
}

export default Home
