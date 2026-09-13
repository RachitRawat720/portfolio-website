import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='px-10 py-20 overflow-hidden bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <motion.div initial={{opacity: 0, y: -200, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{ once: true, amount: 0.8}}
            className='flex flex-col justify-center items-center py-30 '>
                <h1 className='text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>CONTACT ME</h1>

                <div className='h-1 w-40 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>

                <h3 className='text-[20px] font-semibold text-gray-300 mt-4'>Let's build something together</h3>
            </motion.div>


            <div className='flex'>
                <motion.div initial={{opacity: 0, x: 200, y: 100, scale: 0.5}} whileInView={{opacity: 1, x: 0, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 w-full'>
                        <div className='flex flex-col p-5 rounded-2xl bg-[#0f1731] gap-3'>
                            
                            <h2 className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#FF4D6D] bg-clip-text text-transparent text-[35px] font-bold'>GET IN TOUCH</h2>

                            <h3 className='text-white font-bold text-[26px]'>Let's create something great together</h3>

                            <p className='text-[#8e9bad] text-[16px] font-semibold'>I am always open to discussing new opportunities, interesting projects, collaborations and ideas.
                            <br />Feel free to reach out
                            </p>

                            <div className='flex flex-col'>
                                <div className='flex gap-10'>
                                    <div className='flex justify-center items-center p-3 rounded-[50%] border-[#3374b0] border-2 bg-[#4a4f54]'>
                                        <FontAwesomeIcon icon={faEnvelope} color='#8B5CF6' className='text-[20px]'/>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </div>

                        </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 200, y: 100, scale: 0.5}} whileInView={{opacity: 1, x: 0, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
                    className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 w-full'>
                        <div className='flex pl-4 pr-10 py-4 rounded-2xl bg-[#0f1731] gap-3'>
                            
                        </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
