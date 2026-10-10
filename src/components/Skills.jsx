import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MoveToTop from './MoveToTop'

const Skills = () => {

    const [screenSize, setScreenSize] = useState(() => {
            if(window.innerWidth < 640) return 'extraSmall'
            if(window.innerWidth < 768) return 'small'
            if(window.innerWidth < 1024) return 'medium'
            if(window.innerWidth < 1280) return 'large'
            return 'extraLarge'
        })
        
        useEffect(() => {
            const handleResize = () => {
                if(window.innerWidth < 640){
                    setScreenSize('extraSmall')
                }
                else if(window.innerWidth < 768){
                    setScreenSize('small')
                }
                else if(window.innerWidth < 1024){
                    setScreenSize('medium')
                }
                else if(window.innerWidth < 1280){
                    setScreenSize('large')
                }
                else{
                    setScreenSize('extraLarge')
                }
            }
        
            window.addEventListener('resize', handleResize)
        
            return () => window.removeEventListener('resize', handleResize)
        }, [])

    return (
        <div className='pt-20 pb-10 overflow-hidden bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <motion.div initial={{opacity: 0, y:-200, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{ duration: 1}} viewport={{once: true}}
            className='flex flex-col p-12 justify-center items-center'>

                <h1 className='text-[32px] xs:text-[35px] sm:text-[40px] md:text-[42px] lg:text-[48px] xl:text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>MY SKILLS</h1>

                <div className='h-1 w-18 sm:w-23 lg:w-28 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>

                <h3 className='text-[13px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[20px] xl:text-[21px] font-semibold text-gray-300 mt-4 md:mt-6'>Technologies I Work With</h3>
            </motion.div>

            <motion.div initial={{opacity: 0, y: -400, scale: 0.5}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2, delay: 1}} viewport={{once: true}}
            className='flex justify-center items-center mt-10 sm:mt-20 px-[10%] lg:px-40 xl:px-50'>

                <p className='text-gray-300 text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]'>
                    "I work with a range of modern technologies to build responsive, scalable,
                    and user-focused web applications. Here are the key skills and tools
                    I use across frontend, backend, and full-stack development."
                </p>
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-20 lg:gap-20 xl:gap-30 items-center justify-center mt-40'>
                <motion.div initial={{opacity: 0, x: -200, scale: 0.4}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 w-85 h-55 xs:w-100 xs:h-65'>
                    <div className='flex flex-col items-center justify-start rounded-2xl bg-[#0f1731] p-5 xs:p-10 w-full h-full'>
                        <h1 className='text-[22px] xs:text-[26px] text-[#F8FAFC] font-semibold flex items-center justify-center'>Frontend</h1>
                        <div className='grid grid-cols-2 mt-5 gap-5 xs:ml-5'>
                            
                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>React.js</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>JavaScript</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>Tailwind CSS</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>HTML5</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>CSS3</p>
                        </div>
                    </div>
                </motion.div>

            

                <motion.div initial={{opacity: 0, x: 200, scale: 0.4}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 w-85 h-55 xs:w-100 xs:h-65'>
                    <div className='flex flex-col items-center justify-start rounded-2xl bg-[#0f1731] p-5 xs:p-10 w-full h-full'>
                        <h1 className='text-[22px] xs:text-[26px] text-[#F8FAFC] font-semibold flex items-center justify-center'>Backend</h1>
                        <div className='grid grid-cols-2 mt-5 gap-5 xs:ml-5'>
                            
                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>Node.js</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>Express.js</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>REST APIs</p>
                        </div>
                    </div>
                </motion.div>
            </div>
                
            
            <div className='flex flex-col lg:flex-row gap-20 lg:gap-20 xl:gap-30 items-center justify-center mt-50'>
                <motion.div initial={{opacity: 0, x: -200, scale: 0.4}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 w-85 h-55 xs:w-100 xs:h-65'>
                    <div className='flex flex-col items-center justify-start rounded-2xl bg-[#0f1731] p-5 xs:p-10 w-full h-full'>
                        <h1 className='text-[22px] xs:text-[26px] text-[#F8FAFC] font-semibold flex items-center justify-center'>Databases</h1>
                        <div className='grid grid-cols-2 mt-5 gap-5 xs:ml-5'>
                            
                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>MongoDB</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>MySQL</p>
                        </div>
                    </div>
                </motion.div>


                <motion.div initial={{opacity: 0, x: 200, scale: 0.4}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 w-85 h-55 xs:w-100 xs:h-65'>
                    <div className='flex flex-col items-center justify-start rounded-2xl bg-[#0f1731] p-5 xs:p-10 w-full h-full'>
                        <h1 className='text-[22px] xs:text-[26px] text-[#F8FAFC] font-semibold flex items-center justify-center'>Programming Languages</h1>
                        <div className='grid grid-cols-2 mt-5 gap-5 xs:ml-5'>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>JavaScript</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>Python</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>C++</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-8 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>C</p>
                            
                        </div>
                    </div>
                </motion.div>
            </div>
                

            <div className='flex justify-center items-center mt-40'>
                <motion.div initial={{opacity: 0, scale: 0.3}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 mt-10 w-85 h-60 xs:h-70 xs:w-100 sm:w-120 lg:w-130'>
                    <div className='flex flex-col items-center justify-start rounded-2xl bg-[#0f1731] p-5 xs:p-10 w-full h-full'>
                        <h1 className='text-[22px] xs:text-[26px] text-[#F8FAFC] font-semibold flex items-center justify-center'>Tools and Platforms</h1>
                        <div className='grid grid-cols-2 mt-5 gap-5'>
                            
                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>Git</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>GitHub</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>Postman</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>MongoDB Compass</p>

                            <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50 text-[14px] xs:text-[16px]'>Vercel</p>

                        </div>
                    </div>
                </motion.div>
            </div>
                
            

                
                

            <div className='flex flex-col items-center justify-center w-full mt-30'>
                <motion.div initial={{opacity: 0, y: 200, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}}
                transition={{duration: 2}} viewport={{once: true, amount: 0.1}} className='flex flex-col justify-center items-center'>
                    <h1 className='text-[24px] xs:text-[26px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent'>MY PROFICIENCY</h1>
                    <div className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]  h-1 w-20 sm:w-24 md:w-26 lg:w-28 xl:w-30 rounded-4xl'></div>
                    <h3 className='text-[19px] xs:text-[20px] sm:text-[23px] md:text-[26px] lg:text-[28px] xl:text-[32px] text-gray-300 mt-5'>Skills Levels</h3>
                </motion.div>

                <div className='flex gap-15 justify-between pt-40 pb-20'>
                    <motion.div initial={{opacity: 0, x: -200, scale: 0.4}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.5}}
                    className='flex flex-col gap-8'>
                        <div className='flex gap-15 hover:scale-115'>
                            <p className='text-[20px] text-[#E2E8F0] font-medium'>React.js</p>
                            <div className='w-100 h-7 rounded-full bg-[#1E293B] border border-[#334155] overflow-hidden'>
                                <div className='w-[85%] h-full rounded-l-2xl bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-[0_0_12px_#6366F180]'></div>
                            </div>
                        </div>

                        <div className='flex gap-9 hover:scale-115'>
                            <p className='text-[20px] text-[#E2E8F0] font-medium'>JavaScript</p>
                            <div className='w-100 h-7 rounded-full bg-[#1E293B] border border-[#334155] overflow-hidden'>
                                <div className='w-[90%] h-full rounded-l-2xl bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-[0_0_12px_#6366F180]'></div>
                            </div>
                        </div>

                        <div className='flex gap-4 hover:scale-115'>
                            <p className='text-[20px] text-[#E2E8F0] font-medium'>Tailwind CSS</p>
                            <div className='w-100 h-7 rounded-full bg-[#1E293B] border border-[#334155] overflow-hidden'>
                                <div className='w-[80%] h-full rounded-l-2xl bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-[0_0_12px_#6366F180]'></div>
                            </div>
                        </div>

                        <div className='flex gap-14 hover:scale-115'>
                            <p className='text-[20px] text-[#E2E8F0] font-medium'>Node.js</p>
                            <div className='w-100 h-7 rounded-full bg-[#1E293B] border border-[#334155] overflow-hidden'>
                                <div className='w-[80%] h-full rounded-l-2xl bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-[0_0_12px_#6366F180]'></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{opacity: 0, x: 200, scale: 0.4}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                    className='flex flex-col gap-8 mb-20'>
                        <div className='flex gap-8 hover:scale-115'>
                            <p className='text-[20px] text-[#E2E8F0] font-medium'>Express.js</p>
                            <div className='w-100 h-7 rounded-full bg-[#1E293B] border border-[#334155] overflow-hidden'>
                                <div className='w-[85%] h-full rounded-l-2xl bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-[0_0_12px_#6366F180]'></div>
                            </div>
                        </div>

                        <div className='flex gap-7 hover:scale-115'>
                            <p className='text-[20px] text-[#E2E8F0] font-medium'>MongoDB</p>
                            <div className='w-100 h-7 rounded-full bg-[#1E293B] border border-[#334155] overflow-hidden'>
                                <div className='w-[70%] h-full rounded-l-2xl bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-[0_0_12px_#6366F180]'></div>
                            </div>
                        </div>

                        <div className='flex gap-13 hover:scale-115'>
                            <p className='text-[20px] text-[#E2E8F0] font-medium'>MySQL</p>
                            <div className='w-100 h-7 rounded-full bg-[#1E293B] border border-[#334155] overflow-hidden'>
                                <div className='w-[60%] h-full rounded-l-2xl bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] shadow-[0_0_12px_#6366F180]'></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <MoveToTop />
        </div>
    )
}

export default Skills
