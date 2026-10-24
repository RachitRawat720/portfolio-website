import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Menu = ({isMenuOpen, setIsMenuOpen}) => {

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isMenuOpen])

    return (
        <div className='fixed inset-0 pointer-events-none z-100'>
            <div className = {`bg-linear-to-br from-[#202a65] to-[#0c1239] absolute top-0 right-0 w-[80%] h-full transition-transform duration-300 ease-in-out flex pl-8 xs:pl-10 pr-8 xs:pr-10 sm:pr-25 py-15 justify-between pointer-events-auto ${isMenuOpen? "translate-x-0" : "translate-x-full"}`}>

                <div className='flex flex-col gap-3'>
                    <NavLink to={"/"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[20px] xs:text-[23px] sm:text-[26px] font-semibold border-b-3 px-2 pb-1 rounded-md" : " text-white text-[12px] xs:text-[14px] sm:text-[16px] font-semibold"}`}>Home</NavLink>

                    <NavLink to={"/about"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[20px] xs:text-[23px] sm:text-[26px] font-semibold border-b-3 px-2 pb-1 rounded-md" : "text-white text-[12px] xs:text-[14px] sm:text-[16px] font-semibold"}`}>About</NavLink>

                    <NavLink to={"/skills"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[20px] xs:text-[23px] sm:text-[26px] font-semibold border-b-3 px-2 pb-1 rounded-md" : "text-white text-[12px] xs:text-[14px] sm:text-[16px] font-semibold"}`}>Skills</NavLink>

                    <NavLink to={"/projects"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[20px] xs:text-[23px] sm:text-[26px] font-semibold border-b-3 px-2 pb-1 rounded-md" : "text-white text-[12px] xs:text-[14px] sm:text-[16px] font-semibold"}`}>Projects</NavLink>

                    <NavLink to={"/internship"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[20px] xs:text-[23px] sm:text-[26px] font-semibold border-b-3 px-2 pb-1 rounded-md" : "text-white text-[12px] xs:text-[14px] sm:text-[16px] font-semibold"}`}>Internship</NavLink>

                    <NavLink to={"/contact"} className={({isActive}) => `${isActive ? "text-cyan-400 text-[20px] xs:text-[23px] sm:text-[26px] font-semibold border-b-3 px-2 pb-1 rounded-md" : "text-white text-[12px] xs:text-[14px] sm:text-[16px] font-semibold"}`}>Contact</NavLink>
                </div>

                <div>
                    <FontAwesomeIcon icon={faXmark} className='text-[22px] xs:text-[26px] sm:text-[30px] text-white' onClick={() => setIsMenuOpen(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Menu
