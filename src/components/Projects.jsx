import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div className='px-10 overflow-hidden bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)] pb-40'>
            <motion.div initial={{opacity: 0, y: -200, scale: 0.3}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true}}
            className='flex flex-col justify-center items-center py-40'>

                <h1 className='text-[40px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>FEATURED PROJECTS</h1>

                <div className='h-1 w-50 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>

                <h4 className='text-[17px] text-[#8e9bad] mt-10'>A collection of projects I've built while learning,</h4>

                <h4 className='text-[17px] text-[#8e9bad] '>experimenting and solving real world problems</h4>
            </motion.div>


            <div className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-[60%] mx-auto'>
                <div className='flex px-5 py-8 rounded-2xl bg-[#0f1731]'>

                </div>
            </div>
        </div>
    )
}

export default Projects
