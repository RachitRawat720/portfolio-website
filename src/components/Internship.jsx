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
import { Link } from 'react-router-dom'

import MoveToTop from './MoveToTop'

const Internship = () => {
    return (
        <div className='p-6 sm:p-10 overflow-hidden bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <motion.div initial={{opacity: 0, y: -200, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true}}
            className='flex flex-col justify-center items-center py-25'>

                <h1 className='text-[32px] xs:text-[36px] sm:text-[40px] md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>INTERNSHIP</h1>

                <div className='h-1 w-15 xs:w-20 md:w-25 lg:w-30 xl:w-35 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>

                <h3 className='mt-6 md:mt-8 text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-gray-300 font-semibold'>Turning knowledge into real-world impact.</h3>
            </motion.div>

            <motion.div initial={{opacity: 0, y: 100, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.9}}
            className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10'>
                <div className='flex flex-col gap-5 sm:gap-8 lg:gap-0 lg:flex-row rounded-2xl bg-[#0f1731] p-5 sm:p-10'>
                    <div className='flex flex-col sm:flex-row gap-5 lg:w-[50%] pr-3 sm:pr-10'>
                        <div>
                            <div className='h-23 w-19 xs:h-25 xs:w-21 md:h-25 md:w-21 xl:h-30 xl:w-24 overflow-hidden rounded-lg'>
                                <img src={inAmigos_logo} alt="" className='h-full w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex justify-center items-center gap-1 bg-blue-300/50 rounded-xl px-2 py-1 w-fit'>
                                <FontAwesomeIcon icon={faLocationDot} color='white' />
                                <p className='text-white text-[12px] sm:text-[15px]'>Remote</p>
                            </div>

                            <h2 className='text-[19px] xs:text-[20px] sm:text-[21px] md:text-[22px] xl:text-[26px] text-white font-bold mt-4'>Web Development Intern</h2>

                            <h3 className='text-[16px] xs:text-[17px] sm:text-[18px] md:text-[19px] xl:text-[23px] text-[#a3aab4] font-bold'>InAmigos Foundation (IAF)</h3>

                            <div className='mt-3 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCalendar} color='#8B5CF6' className='text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] xl:text-[28px]'/>
                                <p className='text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px] text-[#8e9bad] font-semibold'>Jul 2026 - Aug 2026</p>
                            </div>

                            <div className='h-0.5 w-full mt-5 bg-[#2d4f97] rounded-full hidden lg:block'></div>

                            <div className='pr-1 py-3 sm:py-6'>
                                <p className='text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] text-[#8e9bad]'>
                                    Worked on web development and UI/UX improvement for an NGO focused website, contributing a better online presence and user experience for the organization
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="h-0.5 w-full lg:h-auto lg:w-0.5 lg:self-stretch shrink-0 rounded-full bg-[#2d4f97]"></div>

                    <div className='flex flex-col lg:w-[50%] pl-2 sm:pl-10 gap-5'>
                        <div>
                            <h2 className='text-[18px] xs:text-[19px] sm:text-[21px] md:text-[22px] xl:text-[24px] font-semibold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>Key Contributions</h2>

                            <div className='flex mt-4 gap-3'>
                                <FontAwesomeIcon icon={faCircleCheck} color='#3239b9d2' className='text-[19px] xs:text-[21px] sm:text-[24px] md:text-[26px] xl:text-[30px]'/>
                                <p className='text-[12px] xs:text-[13px] sm:text-[14px] xl:text-[16px] text-[#8e9bad]'>
                                    Developed an NGO awareness webpage using HTML and CSS to showcase organization mission and initiatives
                                </p>
                            </div>

                            <div className='flex mt-2 xl:mt-4 gap-3'>
                                <FontAwesomeIcon icon={faCircleCheck} color='#3239b9d2' className='text-[19px] xs:text-[21px] sm:text-[24px] md:text-[26px] xl:text-[30px]'/>
                                <p className='text-[12px] xs:text-[13px] sm:text-[14px] xl:text-[16px] text-[#8e9bad]'>
                                    Analysed the existing website and provided suggestions for the improving UI/UX, content organization and layout.
                                </p>
                            </div>

                            <div className='flex mt-2 xl:mt-4 gap-3'>
                                <FontAwesomeIcon icon={faCircleCheck} color='#3239b9d2' className='text-[19px] xs:text-[21px] sm:text-[24px] md:text-[26px] xl:text-[30px]'/>
                                <p className='text-[12px] xs:text-[13px] sm:text-[14px] xl:text-[16px] text-[#8e9bad]'>
                                    Design website feature concepts and interface layout using Figma
                                </p>
                            </div>
                        </div>

                        <div className='w-full gap'>
                            <h2 className='text-[17px] xs:text-[18px] sm:text-[19px] md:text-[20px] font-semibold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>Tech Stack</h2>

                            <div className='flex gap-4 sm:gap-8 mt-3'>
                                <div className='flex justify-center items-center gap-3 border-[#3374b0] border-2
                                bg-[#4a81b4]/50 py-1 px-2 sm:px-4 rounded-xl'>
                                    <div className='h-4 w-3 xs:h-5 xs:w-4 sm:h-6 sm:w-5 overflow-hidden rounded-sm '><img src={html_logo} alt="" className='h-full w-full'/></div>
                                    <p className='text-white text-[12px] xs:text-[13px] sm:text-[16px]'>HTML</p>
                                </div>

                                <div className='flex justify-center items-center  gap-3 border-[#3374b0] border-2
                                bg-[#4a81b4]/50 py-1 px-2 sm:px-4 rounded-xl'>
                                    <div className='h-4 w-3 xs:h-5 xs:w-4 sm:h-6 sm:w-5 overflow-hidden rounded-sm'><img src={css_logo} alt=""  className='h-full w-full'/></div>
                                    <p className='text-white text-[12px] xs:text-[13px] sm:text-[16px]'>CSS</p>
                                </div>

                                <div className='flex justify-center items-center  gap-3 border-[#3374b0] border-2
                                bg-[#4a81b4]/50 py-1 px-2 sm:px-4 rounded-xl'>
                                    <div className='h-4 w-3 xs:h-5 xs:w-4 sm:h-6 sm:w-5 overflow-hidden rounded-sm'><img src={figma_logo} alt=""  className='h-full w-full'/></div>
                                    <p className='text-white text-[12px] xs:text-[13px] sm:text-[16px]'>Figma</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 2}} viewport={{once: true}}
            className='flex gap-4 mt-35 mb-5'>
                <div className='w-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600'></div>
                <h3 className='text-white text-[24px] xs:text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[36px] font-bold'>What I learned</h3>
            </motion.div>

            <div className='flex md:gap-5 lg:gap-10 items-center'>
                <motion.div initial={{opacity: 0, x: -100, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-[33%]'>
                    <div className='flex flex-col gap-5 p-5 xl:p-8 rounded-2xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div className='flex justify-center items-center p-2 rounded-[50%] border-[#3374b0] border-2
                                bg-blue-300'><FontAwesomeIcon icon={faUserGroup} className='md:text-[14px] lg:text-[16px] xl:text-[20px]' color='#9333ea'/></div>
                            <p className='md:text-[19px] lg:text-[22px] xl:text-[24px] font-semibold text-white'>Real Users</p>
                        </div>

                        <div>
                            <p className='md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#8e9bad]'>
                                Understood how development decision affect real people and their experience.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, y:0, scale: 0.3}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-[33%]'>
                    <div className='flex flex-col gap-5 p-5 xl:p-8 rounded-2xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div className='flex justify-center items-center p-2 rounded-[50%] border-[#3374b0] border-2
                                bg-blue-300'><FontAwesomeIcon icon={faLightbulb} className='md:text-[14px] lg:text-[18px] xl:text-[20px]' color='#9333ea'/></div>
                            <p className='md:text-[19px] lg:text-[22px] text-[24px] font-semibold text-white'>UI/UX Thinking</p>
                        </div>

                        <div>
                            <p className='md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#8e9bad]'>
                                Learned the importance of content structure, layout and user experience.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 100, scale: 0.5}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-[33%]'>
                    <div className='flex flex-col gap-5 p-5 xl:p-8 rounded-2xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div className='flex justify-center items-center p-2 rounded-[50%] border-[#3374b0] border-2
                                bg-blue-300'><FontAwesomeIcon icon={faPen} className='md:text-[14px] lg:text-[18px] xl:text-[20px]' color='#9333ea'/></div>
                            <p className='md:text-[19px] lg:text-[22px] text-[24px] font-semibold text-white'>Design Process</p>
                        </div>

                        <div>
                            <p className='md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#8e9bad]'>
                                Explore ideas and turned them into practical interface designs using Figma.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>


            <div className='flex gap-10 items-center mt-20 pt-20 py-10'>

                <motion.div initial={{opacity: 0, x: -200, y: 100, scale: 0.5}} whileInView={{opacity: 1, x: 0, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
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
                            <button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-md flex gap-2 justify-center items-center px-2 py-1 text-[16px] transition-transform duration-200 ease-in-out hover:cursor-pointer hover:scale-120'><FontAwesomeIcon icon={faEye} />View Certificate</button></a>

                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 200, y: 100, scale: 0.5}} whileInView={{opacity: 1, x: 0, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
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

                            <Link to='/projects'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-md flex gap-2 justify-center items-center px-2 py-1 text-[16px] transition-transform duration-200 ease-in-out hover:cursor-pointer hover:scale-120'>Explore Projects<FontAwesomeIcon icon={faArrowRight} /></button></Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <MoveToTop />
        </div>
    )
}

export default Internship
