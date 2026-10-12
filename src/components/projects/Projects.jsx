import React from 'react'
import { motion } from 'framer-motion'
import project_one from '../../assets/project-one.png'
import project_two from '../../assets/project-two.png'
import project_three from '../../assets/project-three.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import MoveToTop from '../MoveToTop'



const Projects = () => {
    return (
        <div className='px-10 overflow-hidden bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)] pb-10'>
            <motion.div initial={{opacity: 0, y: -200, scale: 0.3}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true}}
            className='flex flex-col justify-center items-center py-40'>

                <h1 className='text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>FEATURED PROJECTS</h1>

                <div className='h-1 w-25 xs:w-30 sm:w-35 md:w-40 lg:w-45 xl:w-50 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>

                <p className='text-[12px] xs:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] text-gray-300 font-semibold mt-8'>A collection of projects I've built while learning,</p>

                <p className='text-[12px] xs:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] text-gray-300 font-semibold '>experimenting and solving real world problems</p>
            </motion.div>

            <div className='flex flex-col pb-20'>
                <motion.div initial={{opacity: 0, scale:0.3}} whileInView={{opacity: 1, scale:1}} transition={{duration:2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-[80%] mx-auto'>
                    <div className='flex flex-col gap-5 md:p-5 lg:p-8 xl:p-10 rounded-2xl bg-[#0f1731]'>

                        <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                            <div className='flex items-center justify-center border-[#3B82F6] border-2 rounded-xl overflow-hidden w-[70%] lg:w-[60%]'>
                                <img src={project_one} alt="" className=' h-auto w-full'/>
                            </div>

                            <div className='flex flex-col justify-between items-start w-[90%] lg:w-[40%] xl:w-[50%]'>
                                <h3 className='text-white lg:text-[23px] xl:text-[25px] font-bold'>01</h3>
                                <h2 className='lg:text-[27px] xl:text-[30px] bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent font-bold'>Portfolio Website</h2>

                                <p className='text-[#8e9bad] lg:text-[13px] xl:text-[14px] font-semibold lg:mt-2 xl:mt-5'>
                                    A modern responsive portfolio built with React and Tailwind CSS, featuring animated sections, project showcases, skills internship experience, about and an integrated contact form.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-5 mt-5 w-full px-8 lg:px-0'>
                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>React</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Tailwind CSS</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Vite</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Framer motion</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Web3Forms</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Vercel</p>
                        </div>

                        <div className='flex md:gap-8 lg:gap-10 xl:gap-15 px-8'>
                            <a href='https://github.com/RachitRawat720/portfolio-website' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-4 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'><FontAwesomeIcon icon={faGithub} className='text-[20px]'/>GitHub</button></a>

                            <a href='' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-6 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></a>

                            <Link to='/projects/portfolio-website'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-8 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'>Details<FontAwesomeIcon icon={faArrowRight} /></button></Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, scale:0.3}} whileInView={{opacity: 1, scale:1}} transition={{duration:2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-40 w-[80%] mx-auto'>
                    <div className='flex flex-col gap-5 lg:p-8 xl:p-10 rounded-2xl bg-[#0f1731]'>

                        <div className='flex justify-center items-center gap-10 w-full'>
                            <div className='flex items-center justify-center border-[#3B82F6] border-2 rounded-xl overflow-hidden w-[60%] self-start'>
                                <img src={project_two} alt="" className=' h-auto w-full'/>
                            </div>

                            <div className='flex flex-col justify-between items-start w-[50%]'>
                                <h3 className='text-white lg:text-[23px] xl:text-[25px] font-bold'>02</h3>
                                <h2 className='lg:text-[27px] xl:text-[30px] bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent font-bold'>Custom Notes Saver</h2>

                                <p className='text-[#8e9bad] lg:text-[13px] xl:text-[14px] font-semibold mt-0 xl:mt-2'>
                                    A responsive notes management application built with React.js, Redux Toolkit and Tailwind CSS, featuring note creation, editing, deletion, search, dynamic routing, sharing and toast notifications.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-5 mt-5'>
                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-3 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>React</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-3 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>JavaScript</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-3 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Redux Toolkit</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-3 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>React Router</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-3 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Tailwind CSS</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-3 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Vite</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-3 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Vercel</p>
                        </div>

                        <div className='flex gap-10 xl:gap-15'>
                            <a href='https://github.com/RachitRawat720/custom-notes-saver' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-4 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'><FontAwesomeIcon icon={faGithub} className='text-[20px]'/>GitHub</button></a>

                            <a href='https://custom-notes-saver.vercel.app/' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-6 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></a>

                            <Link to = '/projects/custom-notes-saver'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-8 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'>Details<FontAwesomeIcon icon={faArrowRight} /></button></Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, scale:0.3}} whileInView={{opacity: 1, scale:1}} transition={{duration:2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-40 w-[80%] mx-auto'>
                    <div className='flex flex-col gap-5 lg:p-8 xl:p-10 rounded-2xl bg-[#0f1731]'>

                        <div className='flex justify-center items-center gap-6 xl:gap-10 w-full'>
                            <div className='flex items-center justify-center border-[#3B82F6] border-2 rounded-xl overflow-hidden w-[60%] self-start lg:mt-5 xl:mt-0'>
                                <img src={project_three} alt="" className=' h-auto w-full'/>
                            </div>

                            <div className='flex flex-col justify-between items-start w-[50%]'>
                                <h3 className='text-white lg:text-[23px] xl:text-[25px] font-bold'>03</h3>
                                <h2 className='lg:text-[27px] xl:text-[30px] bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent font-bold'>E-commerce Website</h2>

                                <p className='text-[#8e9bad] lg:text-[13px] xl:text-[14px] font-semibold mt-2'>
                                    A responsive e-commerce website built with HTML, CSS, and JavaScript, featuring product browsing, product details, shopping cart functionality, and interactive UI components. The project uses JavaScript for dynamic cart management and Local Storage to persist cart data.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-10 mt-5'>
                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>HTML5</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>CSS3</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>JavaScript</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 py-1 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Vercel</p>
                        </div>

                        <div className='flex lg:gap-10 xl:gap-15'>
                            <a href='https://github.com/RachitRawat720/E-commerce-website' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-4 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'><FontAwesomeIcon icon={faGithub} className='text-[20px]'/>GitHub</button></a>

                            <a href='https://shop-pur-e-commerce.vercel.app/' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-6 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></a>

                            <Link to = '/projects/e-commerce'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-3 px-8 py-2 justify-center items-center text-[16px] hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130'>Details<FontAwesomeIcon icon={faArrowRight} /></button></Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <MoveToTop />
        </div>
    )
}

export default Projects
