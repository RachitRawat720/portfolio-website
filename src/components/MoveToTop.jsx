import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const MoveToTop = () => {

    const moveToTop = () => {
        window.scrollTo({
            top : 0,
            behavior: 'smooth'
        })
    }

    return(
        <div className='flex justify-center items-center'>
            <button onClick={moveToTop} className='mt-8 sm:mt-10 md:mt-15 flex items-center justify-center  rounded-full text-white px-2 py-1 text-[10px] xs:px-3 xs:py-1 xs:text-[12px] sm:px-4 sm:py-2 sm:text-[14px] gap-2 md:px-6 md:text-[16px] font-semibold bg-linear-to-r from-cyan-600 to-purple-600 border border-cyan-200 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-120 hover:shadow-purple-500/50'>Move to Top<FontAwesomeIcon icon={faArrowUp} /></button>
        </div>
    )
}

export default MoveToTop