import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/portfolio_logo.png"

const Navbar = () => {
    return (
        <div className='bg-[#303E54] px-3 h-20 flex items-center sticky top-0 left-0 z-99'>
            <div className='w-22 h-18'>
                <img src={logo} className='w-full h-full'/>
            </div>
            <div className='text-white font-semibold w-full flex justify-evenly items-center text-2xl'>
                <NavLink to={"/"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Home</NavLink>

                <NavLink to={"/About"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>About</NavLink>

                <NavLink to={"/Skills"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Skills</NavLink>

                <NavLink to={"/Projects"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Projects</NavLink>

                <NavLink to={"/Internship"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Internship</NavLink>

                <NavLink to={"/Contact"} className={({isActive}) => `${isActive ? "text-cyan-300 border-2 border-cyan-400 rounded-full px-5 py-1" : "text-white text-[20px]"}`}>Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar
