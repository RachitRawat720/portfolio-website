import React from 'react'
import { motion } from 'framer-motion'
import inAmigos_logo from '../assets/Internship_logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Internship = () => {
    return (
        <div className='p-10 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <motion.div initial={{opacity: 0, y: -200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 2}} viewport={{once: true}}
            className='flex flex-col justify-center items-center py-25'>
                <h1 className='text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>INTERNSHIP</h1>
                <div className='h-1 w-40 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>
                <h3 className='mt-10 text-[18px] text-gray-300'>Turning knowledge into real-world impact.</h3>
            </motion.div>

            <div className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                <div className='rounded-2xl bg-[#0f1731] p-5'>
                    <div className='flex gap-5'>
                        <div>
                            <div className='h-30 w-24 overflow-hidden rounded-lg'>
                                <img src={inAmigos_logo} alt="" className='h-full w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col '>
                            <div className='flex justify-center items-center gap-1 bg-blue-300/50 rounded-xl px-2 py-1 w-fit'>
                                <FontAwesomeIcon icon={faLocationDot} color='white' />
                                <p className='text-white text-[15px]'>Remote</p>
                            </div>

                            <h2 className='text-[26px] text-white font-bold'>Web Development Intern</h2>

                            <h3 className='text-[23px] text-[#a3aab4] font-bold'>InAmigos Foundation (IAF)</h3>

                            <div className='mt-6 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCalendar} color='#8B5CF6' size='2x'/>
                                <p className='text-[18px] text-[#a3aab4]'>Jul 2026 - Aug 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Internship
