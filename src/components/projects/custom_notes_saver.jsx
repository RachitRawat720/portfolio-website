import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faArrowRight, faFileLines, faStar, faCircleCheck, faUserPen, faLightbulb, faGear, faMobileScreen, faServer, faArrowLeft, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import ss1 from '../../assets/custom notes saver/ss1.png'
import ss2 from '../../assets/custom notes saver/ss2.png'
import ss3 from '../../assets/custom notes saver/ss3.png'
import ss4 from '../../assets/custom notes saver/ss4.png'
import MoveToTop from '../MoveToTop'


const custom_notes_saver = () => {
    return (
        <div className='px-10 overflow-hidden py-8 gap-5 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)] pb-10'>
            
            <motion.div initial={{opacity: 0, x: -500, y: -100, scale: 0.3}} whileInView={{opacity: 1, x: 0, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true}}
            className='flex flex-col ml-40 pt-20 pb-40'>
                <Link to = '/projects' className='w-fit border-2 border-white text-white hover:text-black hover:bg-white transition-colors duration-200 rounded-4xl flex gap-1 px-2 py-1 justify-center items-center text-[12px] hover:cursor-pointer font-semibold'><FontAwesomeIcon icon={faArrowLeft} />Back to Projects</Link>

                <h2 className='mt-10 text-[40px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>Custom Notes Saver</h2>
                
                <div className='mt-1 h-1 w-45 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>

                <p className='text-[15px] text-white mt-6 font-semibold'>
                    A responsive notes management application for
                </p>
                <p className='text-[15px] text-white font-semibold'>
                    creating, managing and sharing personal notes.
                </p>

                <div className='flex mt-5 gap-5'>
                    <a href='https://custom-notes-saver.vercel.app/' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-1 px-4 py-2 justify-center items-center text-[16px] hover:cursor-pointer font-semibold'>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></a>

                    <a href='https://github.com/RachitRawat720/custom-notes-saver' target='_blank' rel='noopener noreferrer'><button className='border-2 border-[#4338CA] text-white rounded-4xl flex gap-1 px-4 py-2 justify-center items-center text-[16px] hover:cursor-pointer font-semibold hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED]'><FontAwesomeIcon icon={faGithub} className='text-[20px]'/>GitHub</button></a>
                </div>
            </motion.div>

            <div>
                <motion.div initial={{opacity: 0, scale: 0.2, x: -500}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}>
                    <h2 className='ml-40 text-[35px] font-bold text-white'>Screenshots</h2>
                    <div className='ml-40 mt-1 h-1 w-25 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                </motion.div>

                <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.2}}
                className='grid grid-cols-2 gap-20 pt-15'>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={ss1} alt="Home Screenshot" className='rounded-2xl'/></div>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={ss2} alt="Notes Screenshot" className='rounded-2xl'/></div>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={ss3} alt="Search Screenshot"  className='rounded-2xl'/></div>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={ss4} alt="Share Screenshot" className='rounded-2xl'/></div>
                </motion.div>
            </div>
            
            <div className='grid grid-cols-3 gap-10 mt-50'>

                <motion.div initial={{opacity: 0, x: -100, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-5 py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faFileLines} className='text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[18px] font-bold'>Overview</p>
                                <div className='mt-1 h-1 w-15 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#8e9bad] text-[14px] font-medium'>
                                Custom Notes Saver is a responsive web application that allow users to create, view, edit, manage, delete and share notes. It uses client side state management and LocalStorage to persist notes in browser providing a seamless and fast experience.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, scale: 0.3}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}} 
                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-5 py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faStar} className='text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[18px] font-bold'>Key Features</p>
                                <div className='mt-1 h-1 w-20 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='mt-5 gap-1'>
                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Create, view, edit and delete notes.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Search notes easily.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Share notes with others.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Persistent storage using LocalStorage.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Responsive design for all devices.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Toast notifications for user actions.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 100, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-5 py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faFileLines} className='text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[18px] font-bold'>Tech Stack</p>
                                <div className='mt-1 h-1 w-18 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-x-5 gap-y-3 mt-5'>
                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>React.js</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>JavaScript</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>Vite</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>Tailwind CSS</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>Redux Toolkit</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>React Router</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>LocalStorage</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>React Hot Toast</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>React Share</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>font awesome</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className='grid grid-cols-3 gap-10 mt-50 pb-20'>

                <motion.div initial={{opacity: 0, x: -100, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-5 py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faUserPen} className='text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[18px] font-bold'>My Contribution</p>
                                <div className='mt-1 h-1 w-25 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='mt-5 pl-5'>
                            <ul className='list-disc marker:text-[#3B82F6] text-[#9da8b5] text-[13px] font-medium'>
                                <li>Designed and developed the complete frontend.</li>
                                <li>Implemented note creation, editing and deletion.</li>
                                <li>Used Redux Toolkit for state management.</li>
                                <li>Implemented client-side routing using React Router.</li>
                                <li>Integrated LocalStorage for data persistence.</li>
                                <li>Built a responsive UI using Tailwind CSS.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, scale: 0.3}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}} 
                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-5 py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faLightbulb} className='text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[18px] font-bold'>Challenges and Solutions</p>
                                <div className='mt-1 h-1 w-30 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>

                        <div className='flex flex-col mt-5 gap-2'>
                            <div className='flex gap-3'>
                                <div><FontAwesomeIcon icon={faGear} className='text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] font-bold text-white'>State Management</p>
                                    <p className='text-[12px] font-medium text-[#8e9bad]'>
                                        Handles complex state updates using Redux Toolkit for better organization and scalability
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div><FontAwesomeIcon icon={faServer} className='text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] font-bold text-white'>Data Persistence</p>
                                    <p className='text-[12px] font-medium text-[#8e9bad]'>
                                        Used LocalStorage to keep notes available even after browser refresh.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div><FontAwesomeIcon icon={faMobileScreen} className='text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] font-bold text-white'>Responsive Design</p>
                                    <p className='text-[12px] font-medium text-[#8e9bad]'>
                                        Used Tailwind CSS to ensure a seamless experience across all devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 100, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-5 py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faChartLine} className='text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[18px] font-bold'>What I Learned</p>
                                <div className='mt-1 h-1 w-25 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-5 gap-1'>
                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Building reusable react components.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Managing states with Redux Toolkit.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Working with React 
                                    Router.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Using LocalStorage for client-side persistence.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Creating responsive interfaces using Tailwind CSS.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Implementing sharing functionality.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Structuring and deploying React application.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <div className='flex gap-5 items-center justify-center'>
                <Link to = '/projects' className='mt-15 w-fit border-2 border-white text-white hover:text-black hover:bg-white transition-colors duration-200 rounded-4xl flex gap-1 px-4 py-2 justify-center items-center text-[15px] hover:cursor-pointer font-semibold'><FontAwesomeIcon icon={faArrowLeft} />Back to Projects</Link>
                <MoveToTop />
            </div>
        </div>
    )
}

export default custom_notes_saver
