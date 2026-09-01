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
                <NavLink to={"/"} className={({isActive}) => `${isActive ? " px-4 py-1 rounded-4xl bg-white text-[#303E54]" : ""}`}>Home</NavLink>
                <NavLink to={"/About"} className={({isActive}) => `${isActive ? " px-4 py-1 rounded-4xl bg-white text-[#303E54]" : ""}`}>About</NavLink>
                <NavLink to={"/Skills"} className={({isActive}) => `${isActive ? " px-4 py-1 rounded-4xl bg-white text-[#303E54]" : ""}`}>Skills</NavLink>
                <NavLink to={"/Projects"} className={({isActive}) => `${isActive ? " px-4 py-1 rounded-4xl bg-white text-[#303E54]" : ""}`}>Projects</NavLink>
                <NavLink to={"/Internship"} className={({isActive}) => `${isActive ? " px-4 py-1 rounded-4xl bg-white text-[#303E54]" : ""}`}>Internship</NavLink>
                <NavLink to={"/Contact"} className={({isActive}) => `${isActive ? " px-4 py-1 rounded-4xl bg-white text-[#303E54]" : ""}`}>Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar
