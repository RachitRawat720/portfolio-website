import React from 'react'
import { motion } from 'framer-motion'
import inAmigos_logo from '../assets/Internship_logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import html_logo from '../assets/html_logo.jpg'
import css_logo from '../assets/css_logo.jpg'
import figma_logo from '../assets/figma_logo.png'

import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import certficate_img from '../assets/certificate_img.png'
import { faEye, faArrowRight, faRocket } from '@fortawesome/free-solid-svg-icons'

const Internship = () => {
    return (
        <div className='p-10 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <motion.div initial={{opacity: 0, y: -200, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true}}
            className='flex flex-col justify-center items-center py-25'>
                <h1 className='text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>INTERNSHIP</h1>
                <div className='h-1 w-40 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>
                <h3 className='mt-10 text-[18px] text-gray-300'>Turning knowledge into real-world impact.</h3>
            </motion.div>

            <motion.div initial={{opacity: 0, y: -200, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
            className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10'>
                <div className='flex rounded-2xl bg-[#0f1731] p-10'>
                    <div className='flex gap-5 w-[50%] pr-10'>
                        <div>
                            <div className='h-30 w-24 overflow-hidden rounded-lg'>
                                <img src={inAmigos_logo} alt="" className='h-full w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex justify-center items-center gap-1 bg-blue-300/50 rounded-xl px-2 py-1 w-fit'>
                                <FontAwesomeIcon icon={faLocationDot} color='white' />
                                <p className='text-white text-[15px]'>Remote</p>
                            </div>

                            <h2 className='text-[26px] text-white font-bold mt-4'>Web Development Intern</h2>

                            <h3 className='text-[23px] text-[#a3aab4] font-bold'>InAmigos Foundation (IAF)</h3>

                            <div className='mt-3 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCalendar} color='#8B5CF6' size='2x'/>
                                <p className='text-[18px] text-[#8e9bad]'>Jul 2026 - Aug 2026</p>
                            </div>

                            <div className='h-0.5 w-full mt-5 bg-[#2d4f97] rounded-full'></div>

                            <div className='pr-1 py-6'>
                                <p className='text-[16px] text-[#8e9bad]'>
                                    Worked on web development and UI/UX improvement for an NGO focused website, contributing a better online presence and user experience for the organization
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='self stretch w-0.5 rounded-full bg-[#2d4f97]'></div>

                    <div className='flex flex-col w-[50%] pl-10 gap-5'>
                        <div>
                            <h2 className='text-[24px] font-semibold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>Key Contributions</h2>

                            <div className='flex mt-4 gap-3'>
                                <FontAwesomeIcon icon={faCircleCheck} color='#3239b9d2' size='2x'/>
                                <p className='text-[16px] text-[#8e9bad]'>
                                    Developed an NGO awareness webpage using HTML and CSS to showcase organization mission and initiatives
                                </p>
                            </div>

                            <div className='flex mt-4 gap-3'>
                                <FontAwesomeIcon icon={faCircleCheck} color='#3239b9d2' size='2x'/>
                                <p className='text-[16px] text-[#8e9bad]'>
                                    Analysed the existing website and provided suggestions for the improving UI/UX, content organization and layout.
                                </p>
                            </div>

                            <div className='flex mt-4 gap-3'>
                                <FontAwesomeIcon icon={faCircleCheck} color='#3239b9d2' size='2x'/>
                                <p className='text-[16px] text-[#8e9bad]'>
                                    Design website feature concepts and interface layout using Figma
                                </p>
                            </div>
                        </div>

                        <div className='w-full gap'>
                            <h2 className='text-[20px] font-semibold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>Tech Stack</h2>

                            <div className='flex gap-8 mt-3'>
                                <div className='flex gap-3 border-[#3374b0] border-2
                                bg-[#4a81b4]/50 py-1 px-4 rounded-xl'>
                                    <div className='h-6 w-5 overflow-hidden rounded-sm '><img src={html_logo} alt="" className='h-full w-full'/></div>
                                    <p className='text-white'>HTML</p>
                                </div>

                                <div className='flex gap-3 border-[#3374b0] border-2
                                bg-[#4a81b4]/50 py-1 px-4 rounded-xl'>
                                    <div className='h-6 w-5 overflow-hidden rounded-sm'><img src={css_logo} alt=""  className='h-full w-full'/></div>
                                    <p className='text-white'>CSS</p>
                                </div>

                                <div className='flex gap-3 border-[#3374b0] border-2
                                bg-[#4a81b4]/50 py-1 px-4 rounded-xl'>
                                    <div className='h-6 w-5 overflow-hidden rounded-sm'><img src={figma_logo} alt=""  className='h-full w-full'/></div>
                                    <p className='text-white'>Figma</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 2}} viewport={{once: true}}
            className='flex gap-4 mt-35 mb-5'>
                <div className='w-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600'></div>
                <h3 className='text-white text-[35px] font-bold'>What I learned</h3>
            </motion.div>

            <div className='flex gap-10 items-center'>
                <motion.div initial={{opacity: 0, x: -100, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2, delay: 1}} viewport={{once: true, amount: 0.7}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-[33%]'>
                    <div className='flex flex-col px-5 py-8 rounded-2xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div className='p-2 rounded-[50%] border-[#3374b0] border-2
                                bg-blue-300'><FontAwesomeIcon icon={faUserGroup} size='2x' color='#9333ea'/></div>
                            <p className='text-[24px] font-semibold text-white'>Real Users</p>
                        </div>

                        <div>
                            <p className='text-[18px] text-[#8e9bad] mt-5'>
                                Understood how development decision affect real people and their experience.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, y: -100, scale: 0.5}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2, delay: 1}} viewport={{once: true, amount: 0.7}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-[33%]'>
                    <div className='flex flex-col px-5 py-8 rounded-2xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div className='p-2 rounded-[50%] border-[#3374b0] border-2
                                bg-blue-300'><FontAwesomeIcon icon={faLightbulb} size='2x' color='#9333ea'/></div>
                            <p className='text-[24px] font-semibold text-white'>UI/UX Thinking</p>
                        </div>

                        <div>
                            <p className='text-[18px] text-[#8e9bad] mt-5'>
                                Learned the importance of content structure, layout and user experience.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 100, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2, delay: 1}} viewport={{once: true, amount: 0.7}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-[33%]'>
                    <div className='flex flex-col px-5 py-8 rounded-2xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div className='p-2 rounded-[50%] border-[#3374b0] border-2
                                bg-blue-300'><FontAwesomeIcon icon={faPen} size='2x' color='#9333ea'/></div>
                            <p className='text-[24px] font-semibold text-white'>Design Process</p>
                        </div>

                        <div>
                            <p className='text-[18px] text-[#8e9bad] mt-5'>
                                Explore ideas and turned them into practical interface designs using Figma.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>


            <div className='flex gap-10 items-center mt-20 pt-20 py-10'>

                <motion.div initial={{opacity: 0, x: -200, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 w-full'>
                    <div className='flex pl-4 pr-10 py-4 rounded-2xl bg-[#0f1731] gap-3'>
                        <div className='h-15 w-17 rounded-lg overflow-hidden'>
                            <img src={certficate_img} alt="" className='h-full w-full'/>
                        </div>

                        <div className='flex items-center justify-between w-full'>
                            <div>
                                <h3 className='text-[16px] text-white font-bold'>Internship Certificate</h3>

                                <h4 className='text-[12px] text-[#8e9bad] font-semibold'>Web Development Intern</h4>

                                <div className='flex flex-col'>
                                    <div className='w-2 h-full bg-white'></div>
                                    <h4 className='text-[12px] text-[#8e9bad] font-semibold'>InAmigos Foundation</h4>
                                </div>
                                
                            </div>

                            <a href='/certificate/internship-certificate.pdf' target='_blank' rel='noopener noreferrer'>
                            <button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-md flex gap-2 justify-center items-center px-2 py-1 text-[16px] hover:cursor-pointer hover:scale-120'><FontAwesomeIcon icon={faEye} />View Certificate</button></a>

                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 200, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 w-full'>
                    <div className='flex pl-4 pr-10 py-4 rounded-2xl bg-[#0f1731] gap-3'>
                        <div className='flex justify-center items-center p-2'>
                            <FontAwesomeIcon icon={faRocket} size='3x' color='#E0115F'/>
                        </div>

                        <div className='flex items-center justify-between w-full'>
                            <div>
                                <h3 className='text-[16px] text-white font-bold'>Experience is just the begining</h3>
                                <h4 className='text-[12px] text-[#8e9bad] font-semibold'>See what I've built.</h4>
                            </div>

                            <a href='/Projects'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-md flex gap-2 justify-center items-center px-2 py-1 text-[16px] hover:cursor-pointer hover:scale-120'>Explore Projects<FontAwesomeIcon icon={faArrowRight} /></button></a>

                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Internship
