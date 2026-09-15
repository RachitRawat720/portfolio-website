import React from 'react'
import logo from "../assets/portfolio_logo.png"
import { NavLink } from 'react-router-dom'
import linkedin_logo from '../assets/linkedIn_logo.png'
import github_logo from '../assets/github_logo.jpg'
import email_logo from '../assets/email_logo.jpg'

const footer = () => {
    return (
        <div className='flex p-5 bg-black gap-10'>
            <div className='flex gap-5'>
                <div className='w-22 h-18'>
                    <img src={logo} className='w-full h-full'/>
                </div>

                <div className='flex flex-col'>
                    <h3 className='text-[20px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>
                        Rachit Singh Rawat
                    </h3>

                    <h4 className='text-[14px] font-semibold text-white'>
                        MERN Stack Developer
                    </h4>
                </div>
            </div>

            <div className='flex flex-col'>
                <h3 className='text-[18px] text-white font-bold'>Quick Links</h3>
                <div className='w-15 h-1 mt-1 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-full'></div>

                <NavLink to={"/Skills"} className='mt-5 text-white font-semibold text-[15px]'>Skills</NavLink>

                <NavLink to={"/Projects"} className='text-white font-semibold text-[15px]'>Projects</NavLink>

                <NavLink to={"/Internship"} className='text-white font-semibold text-[15px]'>Internship</NavLink>
            </div>

            <div className='flex flex-col'>
                <h3 className='text-[18px] text-white font-bold'>Connect</h3>
                <div className='w-15 h-1 mt-1 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-full'></div>

                <div className='flex flex-col gap-3 justify-center items-center pt-5'>
                    <div className='flex justify-center items-center gap-4'>
                        <a href='https://www.linkedin.com/in/rachit-singh-rawat/' target='_blank' rel="noopener noreferrer" className='group block '><div className='w-11 h-11 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex justify-center items-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={linkedin_logo} className='w-7 h-7 rounded-md' alt="" /></div></a>
                
                        <p className='text-white text-[14px] font-bold'>LinkedIn</p>
                    </div>
                
                    <div className='flex justify-center items-center gap-4'>
                        <a href='https://github.com/RachitRawat720' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-11 h-11 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={github_logo} className='w-7 h-7 rounded-md' alt="" /></div></a>
                                        
                        <p className='text-white text-[14px] font-bold'>GitHub</p>
                    </div>
                
                    <div className='flex justify-center items-center gap-4'>
                        <a href='mailto:rachitrawat720@gmail.com' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-13 h-11 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={email_logo} className='w-9 h-7 rounded-md' alt="" /></div></a>
                
                        <p className='text-white text-[14px] font-bold'>Email</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
