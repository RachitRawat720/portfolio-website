import React from 'react'
import logo from "../assets/portfolio_logo.png"
import { NavLink } from 'react-router-dom'
import linkedin_logo from '../assets/linkedIn_logo.png'
import github_logo from '../assets/github_logo.jpg'
import email_logo from '../assets/email_logo.jpg'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const footer = () => {
    return (
        <div className='flex flex-col justify-evenly px-5 py-10 bg-[#070D20]'>
            <div className='flex gap-10 pl-5 xs:pl-10 sm:pl-20 flex-col md:flex-row md:pl-0 md:justify-evenly '>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-18 h-15 sm:w-22 sm:h-18 lg:w-24 lg:h-20'>
                        <img src={logo} className='w-full h-full'/>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-[16px] sm:text-[20px] lg:text-[24px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>
                            Rachit Singh Rawat
                        </h3>

                        <h4 className='text-[12px] sm:text-[14px] lg:text-[18px] font-semibold text-[#8e9bad]'>
                            MERN Stack Developer
                        </h4>
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <h3 className='text-[15px] sm:text-[18px] lg:text-[24px] text-white font-bold'>Quick Links</h3>
                    <div className='w-15 lg:w-20 h-1 mt-1 mb-3 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-full'></div>

                    <NavLink to={"/"} className={({isActive}) => `${isActive ? "hidden" : "text-[#8e9bad] font-semibold text-[12px] sm:text-[15px] lg:text-[20px]"}`}>Home</NavLink>

                    <NavLink to={"/about"} className={({isActive}) => `${isActive ? "hidden" : "text-[#8e9bad] font-semibold text-[12px] sm:text-[15px] lg:text-[20px]"}`}>About</NavLink>

                    <NavLink to={"/skills"} className={({isActive}) => `${isActive ? "hidden" : "text-[#8e9bad] font-semibold text-[12px] sm:text-[15px] lg:text-[20px]"}`}>Skills</NavLink>

                    <NavLink to={"/internship"} className={({isActive}) => `${isActive ? "hidden" : "text-[#8e9bad] font-semibold text-[12px] sm:text-[15px] lg:text-[20px]"}`}>Internship</NavLink>

                    <NavLink to={"/projects"} className={({isActive}) => `${isActive ? "hidden" : "text-[#8e9bad] font-semibold text-[12px] sm:text-[15px] lg:text-[20px]"}`}>Projects</NavLink>

                    <NavLink to={"/contact"} className={({isActive}) => `${isActive ? "hidden" : "text-[#8e9bad] font-semibold text-[12px] sm:text-[15px] lg:text-[20px]"}`}>Contact</NavLink>
                </div>

                <div className='flex flex-col'>
                    <h3 className='text-[15px] sm:text-[18px] lg:text-[24px] text-white font-bold'>Connect</h3>
                    <div className='w-15 lg:w-18 h-1 mt-1 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-full'></div>

                    <div className='flex gap-5 pt-5 md:justify-between'>
                        <div className='flex flex-col justify-center items-start gap-2 lg:gap-4'>
                            <a href='https://www.linkedin.com/in/rachit-singh-rawat/' target='_blank' rel="noopener noreferrer" className='group block '><div className='w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex justify-center items-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={linkedin_logo} className='w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 rounded-md' alt="" /></div></a>
                    
                            <p className='text-[#8e9bad] text-[12px] sm:text-[14px] lg:text-[18px] font-bold'>LinkedIn</p>
                        </div>
                    
                        <div className='flex flex-col justify-center items-start gap-2 lg:gap-4'>
                            <a href='https://github.com/RachitRawat720' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={github_logo} className='w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 rounded-md' alt="" /></div></a>
                                            
                            <p className='text-[#8e9bad] text-[12px] sm:text-[14px] lg:text-[18px] font-bold'>GitHub</p>
                        </div>
                    
                        <div className='flex flex-col justify-center items-start gap-2 lg:gap-4'>
                            <a href='mailto:rachitrawat720@gmail.com' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-10 h-9 sm:w-13 sm:h-11 lg:w-16 lg:h-13 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={email_logo} className='w-7 h-6 sm:w-9 sm:h-7 lg:w-11 lg:h-9 rounded-md' alt="" /></div></a>
                    
                            <p className='text-[#8e9bad] text-[12px] sm:text-[14px] lg:text-[18px] font-bold'>Email</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col px-10'>
                <div className='flex justify-center items-center h-0.5 bg-[#3239b9d2] rounded-full mt-8'></div>

                <div className='flex items-center justify-center mt-4'>
                    <FontAwesomeIcon icon={faCopyright} className='text-[16px]' color='#8e9bad'/>
                    <p className='text-[#8e9bad] text-[14px] sm:text-[16px] lg:text-[20px]'>2026 Rachit Singh Rawat</p>
                </div>
            </div>
        </div>
    )
}

export default footer
