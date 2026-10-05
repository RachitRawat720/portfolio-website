import React from 'react'
import { useState, useEffect } from 'react'
import img from '../assets/img2.jpg'
import react_img from '../assets/react-img.jpg'
import node_img from '../assets/node-img.png'
import express_img from '../assets/express-img.png'
import mongoDB_img from '../assets/mongoDB-img.png'
import JavaScript_img from '../assets/JavaScript-img.png'
import tailwind_img from '../assets/tailwind-img.png'
import TypingText from './Typingtext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'
import MoveToTop from './MoveToTop'

const about = () => {

    const [screenSize, setScreenSize] = useState(() => {
        if(window.innerWidth < 640) return 'extraSmall'
        if(window.innerWidth < 768) return 'small'
        if(window.innerWidth < 1024) return 'medium'
        if(window.innerWidth < 1280) return 'large'
        return 'extraLarge'
    })
    
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 640){
                setScreenSize('extraSmall')
            }
            else if(window.innerWidth < 768){
                setScreenSize('small')
            }
            else if(window.innerWidth < 1024){
                setScreenSize('medium')
            }
            else if(window.innerWidth < 1280){
                setScreenSize('large')
            }
            else{
                setScreenSize('extraLarge')
            }
        }
    
        window.addEventListener('resize', handleResize)
    
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className='px-5 sm:px-10 pt-10 pb-10 overflow-hidden bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <motion.div
                initial = {{
                    opacity: 0,
                    y:  screenSize === 'extraLarge'? -200 :
                        screenSize === 'large'? 200 : "",
                    scale: 0.3
                }}
                whileInView = {{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}
                transition  = {{
                    duration: 2,
                    ease: 'easeInOut'
                }}
                viewport={{ 
                    once: true,
                    amount: 
                        screenSize === 'medium'? 0.8 : 
                        screenSize === 'small'? 0.8 :
                        screenSize === 'extraSmall'? 0.8 : ""
                }}
                className='flex flex-col justify-center items-center pt-20 pb-25 sm:pt-30 sm:pb-35 md:pt-40 md:pb-50 '>
                <h1 className='text-[22px] xs:text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>GET TO KNOW ME BETTER</h1>

                <div className='h-1 w-18 xs:w-20 sm:w-30 md:w-40 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>

                <h3 className='text-[10px] xs:text-[12px] sm:text-[14px] md:text-[17px] lg:text-[20px] xl:text-[22px] font-semibold text-gray-300 mt-4'>Building, learning, and turning ideas into web applications</h3>
            </motion.div>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-15'>
                <motion.div className='flex w-full xs:w-[80%] sm:w-[70%] md:w-[55%] lg:w-[50%] xl:w-[40%] overflow-hidden p-1 sm:p-2 border-[#3B82F6] border-2 rounded-2xl relative'>
                    <img src={img} alt="profile image" className='rounded-2xl w-full h-auto'/>
                    <motion.div className='flex flex-col items-center justify-center absolute top-[80%] left-[24%] sm:left-[28%] md:left-[26%] lg:left-[24%] xl:left-[20%] bg-[#171a59d2] px-4 lg:px-8 py-0 rounded-xl'>
                        <h3 className='font-semibold text-white text-[14px] xs:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>Rachit Singh Rawat</h3>
                        <h4 className='text-green-500 text-[11px] xs:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>Available for opportunities</h4>
                    </motion.div>
                </motion.div>

                <motion.div className='w-full sm:w-[90%] lg:w-[50%] xl:w-[60%]'>
                    
                    <h2 className='text-[18px] xs:text-[20px] sm:text-[23px] md:text-[26px] lg:text-[25px] xl:text-[28px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent xl:mt-4'><TypingText text='Full Stack Developer (MERN Stack)' /></h2><br />

                    <div className='flex flex-col gap-3'>
                        <p className='text-gray-300 font-medium text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px]'>
                        I am a passionate Full Stack Developer, specializing in the MERN Stack. I enjoy building responsive, user-focused web applications and solving real-world problems through technology.
                        </p>

                        <p className='text-gray-300 font-medium text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px]'>
                            I work with JavaScript, React.js, Node.js, Express.js, REST APIs, MongoDB and MySQL, along with Tailwind CSS, to create clean user interfaces and scalable backend services
                        </p>

                        <p className='text-gray-300 font-medium text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px]'>
                            I'm always eager to learn new technologies, and take on challenging projects and grow as a developer while contributing to meaningful and impactful solutions.
                        </p>
                    </div>

                    <div className='flex gap-4 sm:gap-5 md:gap-8 mt-6 xl:mt-8'>
                        <img src={react_img} alt="" className='h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 lg:h-13 lg:w-13 xl:h-15 xl:w-15 rounded-xl'/>
                        <img src={node_img} alt="" className='h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 lg:h-13 lg:w-13 xl:h-15 xl:w-15 rounded-xl'/>
                        <img src={express_img} alt="" className='h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 lg:h-13 lg:w-13 xl:h-15 xl:w-15 rounded-xl'/>
                        <img src={mongoDB_img} alt="" className='h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 lg:h-13 lg:w-13 xl:h-15 xl:w-15 rounded-xl'/>
                        <img src={JavaScript_img} alt="" className='h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 lg:h-13 lg:w-13 xl:h-15 xl:w-15 rounded-xl'/>
                        <img src={tailwind_img} alt="" className='h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 lg:h-13 lg:w-13 xl:h-15 xl:w-15 rounded-xl'/>
                    </div>
                    
                </motion.div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center mt-30 xs:mt-30 sm:mt-40 mb-10 gap-25 xs:gap-30 lg:gap-25 xl:gap-60'>
                <motion.div className='border-[#3B82F6] border-2 rounded-lg flex px-5 py-7 gap-2 xs:gap-5 bg-[#111B36]'>
                    <div className='flex p-1 md:p-2 h-6 xs:h-7 sm:h-8 md:h-10 xl:h-12 rounded-md justify-center items-start bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'>
                        <FontAwesomeIcon icon={faGraduationCap} color='white' className='text-[16px] xs:text-[18px] sm:text-[20px] md:text-[25px] xl:text-[30px]'/>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[18px] xs:text-[19px] sm:text-[22px] md:text-[24px] xl:text-[26px] text-white'>Education</h2>
                        
                        <h3 className='text-[#9da8b5] text-[12px] xs:text-[14px] sm:text-[15px] xl:text-[16px] font-bold mt-3'>B.Tech in Computer Science & Engineering</h3>
                        <h3 className='text-[#9da8b5] text-[12px] xs:text-[14px] sm:text-[15px] xl:text-[16px] font-bold'>(Artificial Intelligence & Machine Learning)</h3>
                        <p className='text-[#9da8b5] text-[11px] mt-2 xs:text-[12px]'>Govind Ballabh Institute of Engineering & Technology</p>
                        <p className='text-[#9da8b5] text-[11px] xs:text-[12px]'>Ghurdauri, Pauri Garhwal, Uttarakhand</p>

                        <div className='mt-3 sm:mt-6 flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCalendarDays} color='white' className='text-[18px]'/>
                            <p className='text-[11px] xs:text-[13px] sm:text-[14px] text-white font-semibold'>2022 - 2026</p>
                            <p className='text-[11px] xs:text-[13px] sm:text-[14px] text-white font-semibold'>|</p>
                            <p className='text-[12px] xs:text-[13px] sm:text-[14px] text-white font-semibold'>CGPA - 7.96</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='border-[#3B82F6] bg-[#111B36] border-2 rounded-lg flex p-5 gap-2 xs:gap-5'>
                    <div className='flex p-1 md:p-2 h-6 xs:h-7 sm:h-8 md:h-10 xl:h-12 rounded-md justify-center bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'>
                        <FontAwesomeIcon icon={faBriefcase} color='white' className='text-[16px] xs:text-[18px] sm:text-[20px] md:text-[25px] xl:text-[30px]'/>
                    </div>
                        
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[18px] xs:text-[19px] sm:text-[22px] md:text-[24px] xl:text-[26px] text-white'>Internship Experience</h2>
                            
                        <h3 className='text-[#9da8b5] xs:text-[14px] text-[16px] font-bold mt-3'>Web Development Intern | Remote</h3>
                        <h3 className='text-[#9da8b5] xs:text-[14px] text-[14px] font-bold'>InAmigos Foundation</h3>
                        <ul className='mt-2 list-disc marker:text-[#3B82F6] text-[#9da8b5] text-[11px] xs:text-[13px]'>
                            <li>Developed an NGO awareness webpage using HTML and CSS.</li>
                            <li>Analyzed UI/UX structure and improved content organization.</li>
                            <li>Designed website layouts and interface components using Figma.</li>
                        </ul>

                        <div className='mt-3 sm:mt-6 flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCalendarDays} color='white' className='text-[18px]'/>
                            <p className='text-[12px] xs:text-[13px] sm:text-[14px] text-white font-semibold'>Jul 2026 - Aug 2026</p>
                        </div>
                    </div>
                    
                </motion.div>
            </div>

            <MoveToTop />
        </div>
    )
}

export default about
