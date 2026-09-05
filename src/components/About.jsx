import React from 'react'
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

const About = () => {
    return (
        <div className='px-10 py-8 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <div className='flex flex-col justify-center items-center py-15'>
                <h1 className='text-[40px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>GET TO KNOW ME BETTER</h1>

                <div className='h-1 w-40 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>

                <h3 className='text-[20px] font-semibold text-gray-300 mt-4'>Building, learning, and turning ideas into web applications</h3>
            </div>

            <div className='flex gap-15 p-4 relative'>
                <div className='w-[40%] overflow-hidden p-3 border-[#3B82F6] border-2 rounded-2xl'>
                    <img src={img} alt="" className='rounded-2xl'/>
                </div>

                <div className='absolute top-82 left-25 bg-[#171a59d2] px-8 py-0 rounded-xl'>
                    <h3 className='font-semibold text-white text-[20px]'>Rachit Singh Rawat</h3>
                    <h4 className='text-green-500 text-[16px]'>Available for opportunities</h4>
                </div>

                <div className='w-[60%]'>
                    <h2 className='text-[28px] font-semibold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent mt-4'><TypingText text='Full Stack Developer (MERN Stack)' /></h2><br />

                    <div className='flex flex-col'>
                        <p className='text-gray-300 text-[16px]'>
                        I am a pasionate Full Stack Developer, specializing in the MERN Stack. I enjoy building responsive, user-focused web applications and solving real-world problems through technology.
                        </p>

                        <p className='text-gray-300 text-[16px] mt-2'>
                            I work with JavaScript, React.js, Node.js, Express.js, REST APIs, MongoDB and MySQL, along with Tailwind CSS, to create clean user interfaces and scalable backend services
                        </p>

                        <p className='text-gray-300 text-[16px] mt-2'>
                            I'm always eager to learn new technologies, and take on challenging projects and grow as a developer while contributing to meaningful and impactful solutions.
                        </p>
                    </div>

                    <div className='flex gap-8 mt-8'>
                        <img src={react_img} alt="" className='h-15 w-15 rounded-xl'/>
                        <img src={node_img} alt="" className='h-15 w-15 rounded-xl'/>
                        <img src={express_img} alt="" className='h-15 w-15 rounded-xl'/>
                        <img src={mongoDB_img} alt="" className='h-15 w-15 rounded-xl'/>
                        <img src={JavaScript_img} alt="" className='h-15 w-15 rounded-xl'/>
                        <img src={tailwind_img} alt="" className='h-15 w-15 rounded-xl'/>
                    </div>
                    
                </div>
            </div>

            <div className='flex justify-evenly items-center mt-15'>
                <div className='border-[#3B82F6] border-2 rounded-lg flex pt-10 px-6 gap-5 h-65 '>
                    <div className='flex p-2 h-12 rounded-md justify-center bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'>
                        <FontAwesomeIcon icon={faGraduationCap} color='white' size='2x'/>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[26px] text-white'>Education</h2>
                        
                        <h3 className='text-white text-[16px] font-bold mt-3'>B.Tech in Computer Science & Engineering</h3>
                        <h3 className='text-white text-[16px] font-bold'>(Artificial Intelligence & Machine Learning)</h3>
                        <p className='text-white mt-2 text-[12px]'>Govind Ballabh Institute of Engineering & Technology</p>
                        <p className='text-white text-[12px]'>Ghurdauri, Pauri Garhwal, Uttarakhand</p>

                        <div className='mt-6 flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCalendarDays} color='white' size='1x'/>
                            <p className='text-[14px] text-white'>2022 - 2026</p>
                            <p className='text-[14px] text-white'>|</p>
                            <p className='text-white text-[14px]'>CGPA - 7.96</p>
                        </div>
                    </div>
                </div>

                <div className='border-[#3B82F6] border-2 rounded-lg flex p-5 gap-5 h-65'>
                    <div className='flex p-2 h-12 rounded-md justify-center bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'>
                        <FontAwesomeIcon icon={faBriefcase} color='white' size='2x'/>
                    </div>
                        
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[26px] text-white'>Internship Experience</h2>
                            
                        <h3 className='text-white text-[16px] font-bold mt-3'>Web Development Intern | Remote</h3>
                        <h3 className='text-white text-[14px]'>InAmigos Foundation</h3>
                        <ul className='mt-2 list-disc marker:text-[#3B82F6] text-white text-[12px]'>
                            <li>worked on NGO awareness web page</li>
                            <li>Analyze UI/UX and content organization</li>
                            <li>Designed website context and interface layouts <br></br>using figma</li>
                        </ul>

                        <div className='mt-6 flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCalendarDays} color='white' size='1x'/>
                            <p className='text-[14px] text-white'>Jul 2026 - Aug 2026</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About
