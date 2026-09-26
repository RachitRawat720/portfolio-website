import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Menu = ({isMenuOpen, setIsMenuOpen}) => {
    return (
        <div className='fixed inset-0 pointer-events-none z-100'>
            <div className = {`bg-linear-to-br from-[#202a65] to-[#0c1239] absolute top-0 right-0 w-[70%] h-full transition-transform duration-300 ease-in-out flex px-20 py-15 justify-between pointer-events-auto ${isMenuOpen? "translate-x-0" : "translate-x-full"}`}>

                <div className='flex flex-col gap-2'>
                    <NavLink to={"/"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[30px] font-semibold border-b-3 w-fit" : " text-white text-[22px] font-semibold"}`}>Home</NavLink>

                    <NavLink to={"/about"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[30px] font-semibold border-b-3 w-fit" : "text-white text-[22px] font-semibold"}`}>About</NavLink>

                    <NavLink to={"/skills"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[30px] font-semibold border-b-3 w-fit" : "text-white text-[22px] font-semibold"}`}>Skills</NavLink>

                    <NavLink to={"/projects"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[30px] font-semibold border-b-3 w-fit" : "text-white text-[22px] font-semibold"}`}>Projects</NavLink>

                    <NavLink to={"/internship"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[30px] font-semibold border-b-3 w-fit" : "text-white text-[22px] font-semibold"}`}>Internship</NavLink>

                    <NavLink to={"/contact"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[30px] font-semibold border-b-3 w-fit" : "text-white text-[22px] font-semibold"}`}>Contact</NavLink>
                </div>

                <div>
                    <FontAwesomeIcon icon={faXmark} className='text-[30px] text-white' onClick={() => setIsMenuOpen(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Menu
