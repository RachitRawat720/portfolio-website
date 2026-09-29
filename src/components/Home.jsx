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
        <div className='flex flex-col px-7 xs:px-10 sm:px-15 md:px-20 overflow-hidden py-8 gap-5 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)] pb-10'>

            <div className='flex flex-col gap-8 xs:gap-10 md:gap-15 lg:flex-row-reverse lg:gap-20 lg:mt-10'>

                <motion.div initial={{opacity: 0, x: 400, scale: 0.3}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{ once: true}}
                className='flex justify-center items-start lg:items-center lg:w-[50%]'>
                    <div className='flex items-center justify-center w-[90%] sm:w-[80%] lg:w-full relative xs:mt-8 sm:mt-12 md:mt-15 lg:mt-0'>
                        <img src={profile_pic} className='rounded-4xl w-full mid:w-full h-auto mask-[radial-gradient(ellipse_at_center,black_55%,transparent_100%)]'/>

                        <div className='absolute h-[14%] w-[10%] top-[12%] left-[12%] overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                            <img src={react_img} alt="" className='h-full w-full'/>
                        </div>

                        <div className='absolute h-[14%] w-[10%] top-[18%] left-[86%] overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                            <img src={mongoDB_img} alt="" className='h-full w-full'/>
                        </div>

                        <div className='absolute h-[14%] w-[10%] top-[68%] left-[6%] overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                            <img src={express_img} alt="" className='h-full w-full'/>
                        </div>

                        <div className='absolute h-[14%] w-[10%] top-[74%] left-[80%] overflow-hidden rounded-lg transition-transform duration-500 hover:rotate-180'>
                            <img src={node_img} alt="" className='h-full w-full'/>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: -300, scale: 0.3}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{ once: true}}
                className='flex flex-col items-start w-full lg:w-[50%]'>
                    <div initial={{opacity: 0, x: -300, scale: 0.3}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{ once: true}}
                    className='flex jusitfy-center items-center overflow-hidden'>
                            <img src={hi} className='h-3 w-4 sm:h-4 sm:w-6 md:h-4 md:w-6 lg:h-5 lg:w-7 xl:h-7 xl:w-9 rounded-4xl'/>
                        <h3 className='text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] ml-2 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent'>Hello, I'm </h3>
                    </div>

                    <h1 className='text-[32px] xs:text-[38px] sm:text-[45px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-bold text-white leading-8 md:leading-14 lg:leading-18 mt-4 mb-4'>Rachit Singh <span className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#23299bd2] bg-clip-text text-transparent xl:block 2xl:mt-5'>Rawat</span></h1>

                    <div className='flex mt-4 2xl:mt-8'>
                        <div className='w-1 sm:w-1.5 bg-[#8B5CF6]'></div>
                        <h3 className='text-[15px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-semibold ml-3 text-gray-300'><TypingText text="MERN Stack Developer" /></h3>
                    </div>

                    <div>
                        <p className='text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] mt-4 sm:mt-6 text-gray-200'>I build responsive and user-focused web applications using React, Node.js, Express.js and MongoDB, with a focus on clean UI, scalable APIs and real-world problem solving.</p>
                    </div>

                    <div className='flex justify-start gap-4 xs:gap-5 sm:gap-6 md:gap-10 lg:gap-8 xl:gap-10 items-end mt-5 xs:mt-7 md:mt-10 xl:mt-15 w-full'>
                        <Link to='/projects'>
                            <button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-md flex gap-2 justify-center items-center w-24 h-7 text-[10px] xs:w-28 xs:h-7 xs:text-[12px] sm:w-32 sm:h-9 sm:text-[14px] md:w-35 md:h-10 md:text-[15px] lg:w-38 lg:h-11 lg:text-[15px] xl:w-42 xl:h-13 xl:text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3 font-semibold'>View My Work<FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                        
                        <Link to='/contact'>
                            <button className='border-2 border-[#7C3AED] text-white rounded-md gap-2 flex justify-center items-center w-24 h-7 text-[10px] xs:w-28 xs:h-7 xs:text-[12px] sm:w-32 sm:h-9 sm:text-[14px] md:w-35 md:h-10 md:text-[15px] lg:w-38 lg:h-11 lg:text-[15px] xl:w-42 xl:h-13 xl:text-[16px] hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] hover:border-none hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3 font-semibold'>Contact Me<FontAwesomeIcon icon= {faEnvelope}></FontAwesomeIcon></button>
                        </Link>

                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><button className='border-2 border-[#7C3AED] text-white rounded-md gap-2 flex justify-center items-center w-20 h-5 text-[9px] xs:w-22 xs:h-6 xs:text-[10px] sm:w-26 sm:h-7 sm:text-[12px] md:w-30 md:h-8 md:text-[13px] lg:w-32 lg:h-8 lg:text-[13px] xl:w-35 xl:h-10 xl:text-[14px] hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] hover:border-none hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3 font-semibold'>View Resume<FontAwesomeIcon icon={faArrowRight}/></button>
                        </a>
                    </div>

                    
                    <div className='flex mt-5 sm:mt-6 md:mt-8 2xl:mt-12 gap-7'>
                        <a href='https://www.linkedin.com/in/rachit-singh-rawat/' target='_blank' rel="noopener noreferrer" className='group block '><div className='w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 xl:w-13 xl:h-13 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex justify-center items-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={linkedin_logo} className='w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-9 xl:h-9 rounded-md' alt="" /></div></a>

                        <a href='https://github.com/RachitRawat720' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 xl:w-13 xl:h-13 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={github_logo} className='w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-9 xl:h-9 rounded-md' alt="" /></div></a>
                    </div>
                </motion.div>

            </div>
            
            <MoveToTop />
            
        </div>
    )
}

export default Home
