import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <div className='p-10 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <motion.div initial={{opacity: 0, y:-200}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 1}} viewport={{once: true}}
            className='flex flex-col p-12 justify-center items-center'>
                <h1 className='text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>MY SKILLS</h1>
                <div className='h-1 w-30 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>
                <h3 className='text-[28px] font-semibold text-gray-300 mt-8'>Technologies I Work With</h3>
            </motion.div>

            <motion.div initial={{opacity: 0, y: -400}} whileInView={{opacity: 1, y: 0}} transition={{duration: 2, delay: 1}} viewport={{once: true}}
            className='flex justify-center items-center px-50 mt-20'>
                <p className='text-gray-300 text-[16px]'>
                    "I work with a range of modern technologies to build responsive, scalable,
                    and user-focused web applications. Here are the key skills and tools
                    I use across frontend, backend, and full-stack development."
                </p>
            </motion.div>

            <div className='flex mt-40 justify-center items-center gap-40'>
                <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}
                transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='border-2 border-[#3B82F6] bg-[#111B36] px-10 py-5 rounded-xl w-100'>
                    <h1 className='text-[26px] text-[#F8FAFC] font-semibold flex itemsj-center justify-center'>Frontend</h1>
                    <div className='grid grid-cols-2 mt-5 gap-y-5 ml-5'>
                        
                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>React.js</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>JavaScript</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Tailwind CSS</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>HTML5</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>CSS3</p>

                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 200}} whileInView={{opacity: 1, x: 0}}
                transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='border-2 border-[#3B82F6] bg-[#111B36] px-10 py-5 rounded-xl w-100 h-56'>
                    <h1 className='text-[26px] text-[#F8FAFC] font-semibold flex itemsj-center justify-center'>Backend</h1>
                    <div className='grid grid-cols-2 mt-5 gap-y-5 ml-5'>
                        
                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Node.js</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Express.js</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>REST APIs</p>
                    </div>
                </motion.div>
            </div>

            <div className='flex mt-40 justify-center items-center gap-40'>
                <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}
                transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='border-2 border-[#3B82F6] bg-[#111B36] px-10 py-5 rounded-xl w-100 h-56'>
                    <h1 className='text-[26px] text-[#F8FAFC] font-semibold flex itemsj-center justify-center'>Databases</h1>
                    <div className='grid grid-cols-2 mt-5 gap-y-5 ml-5'>
                        
                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>MondoDB</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>MySQL</p>

                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 200}} whileInView={{opacity: 1, x: 0}}
                transition={{duration: 2}} viewport={{once: true, amount: 0.8}}
                className='border-2 border-[#3B82F6] bg-[#111B36] px-10 py-5 rounded-xl w-100 h-56'>
                    <h1 className='text-[26px] text-[#F8FAFC] font-semibold flex itemsj-center justify-center'>Programming Languages</h1>
                    <div className='grid grid-cols-2 mt-5 gap-y-5 ml-5'>
                        
                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>JavaScript</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Python</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>C++</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-8 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>C</p>
                    </div>
                </motion.div>
            </div>

            <div className='flex items-center justify-center'>
                <motion.div initial={{opacity: 0, y: -300}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 2, delay: 2}} viewport={{once: true, amount: 0.9}}
                className='border-2 border-[#3B82F6] bg-[#111B36] px-10 py-5 rounded-xl w-130 h-60 mt-40 flex flex-col'>
                    <h1 className='text-[26px] text-[#F8FAFC] font-semibold flex itemsj-center justify-center'>Development Tools</h1>
                    <div className='grid grid-cols-2 mt-5 gap-5'>
                        
                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Git</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>GitHub</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Postman</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>MongoDB Compass</p>

                        <p className='text-[#A78BFA] border-2 border-[#8B5CF6] w-fit px-5 rounded-2xl hover:text-[#FFFFFF] hover:bg-[#695694]/50'>Vercel</p>
                    </div>
                </motion.div>
            </div>

            <div className='flex flex-col items-center justify-center w-full mt-30'>
                <motion.div initial={{opacity: 0, y: 300}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 2}} viewport={{once: true, amount: 0.1}} className='flex flex-col justify-center items-center'>
                    <h1 className='text-[40px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent'>MY PROFICIENCY</h1>
                    <div className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]  h-1 w-30 rounded-4xl'></div>
                    <h3 className='text-[28px] text-gray-300 mt-10'>Skills Levels</h3>
                </motion.div>

                <div className='flex gap-15 justify-between pt-40 pb-20'>
                    <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
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

                    <motion.div initial={{opacity: 0, x: 200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
                    className='flex flex-col gap-8'>
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
        </div>
    )
}

export default Skills
