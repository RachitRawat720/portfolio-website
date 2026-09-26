import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/portfolio_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    

    return (
        <div className='bg-[#303E54] flex justify-between items-center sticky top-0 left-0 z-99 px-15 md:px-3 md:h-20'>
            <div className='w-22 h-18'>
                <img src={logo} className='w-full h-full'/>
            </div>

            <div className='text-white font-semibold w-full flex items-center justify-center'>
                <div className='hidden md:flex items-center justify-evenly w-full text-2xl'>
                    <NavLink to={"/"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Home</NavLink>

                    <NavLink to={"/about"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>About</NavLink>

                    <NavLink to={"/skills"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Skills</NavLink>

                    <NavLink to={"/projects"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Projects</NavLink>

                    <NavLink to={"/internship"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Internship</NavLink>

                    <NavLink to={"/contact"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Contact</NavLink>
                </div>
            </div>

            <div className='md:hidden' onClick={() => setIsMenuOpen(true)}>
                <FontAwesomeIcon icon={faBars} className='text-[30px] text-white'/>
            </div>
            
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    )
}

export default Navbar
