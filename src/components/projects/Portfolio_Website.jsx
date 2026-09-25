import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faArrowRight, faFileLines, faStar, faCircleCheck, faUserPen, faLightbulb, faArrowLeft, faChartLine, faEnvelope, faCode, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Home from '../../assets/Portfolio/Home.png'
import About from '../../assets/Portfolio/About.png'
import Projects from '../../assets/Portfolio/Projects.png'
import Internship from '../../assets/Portfolio/Internship.png'
import Skills from '../../assets/Portfolio/Skills.png'
import Contact from '../../assets/Portfolio/Contact.png'
import MoveToTop from '../MoveToTop'


const Portfolio_Website = () => {
    return (
        <div className='px-10 overflow-hidden py-8 gap-5 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)] pb-10'>
            
            <motion.div initial={{opacity: 0, x: -500, y: -100, scale: 0.3}} whileInView={{opacity: 1, x: 0, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true}}
            className='flex flex-col ml-40 pt-20 pb-40'>
                <Link to = '/projects' className='w-fit border-2 border-white text-white hover:text-black hover:bg-white transition-colors duration-200 rounded-4xl flex gap-1 px-2 py-1 justify-center items-center text-[12px] hover:cursor-pointer font-semibold'><FontAwesomeIcon icon={faArrowLeft} />Back to Projects</Link>

                <h2 className='mt-10 text-[40px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>Portfolio Website</h2>
                
                <div className='mt-1 h-1 w-45 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>

                <p className='text-[15px] text-white mt-6 font-semibold pr-170'>
                    A personal portfolio website to showcase my skills, projects, internship and contact information with a modern and responsive design.
                </p>

                <div className='flex mt-5 gap-5'>
                    <a href='https://custom-notes-saver.vercel.app/' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-1 px-4 py-2 justify-center items-center text-[16px] hover:cursor-pointer font-semibold'>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></a>

                    <a href='https://github.com/RachitRawat720/portfolio-website' target='_blank' rel='noopener noreferrer'><button className='border-2 border-[#4338CA] text-white rounded-4xl flex gap-1 px-4 py-2 justify-center items-center text-[16px] hover:cursor-pointer font-semibold hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED]'><FontAwesomeIcon icon={faGithub} className='text-[20px]'/>GitHub</button></a>
                </div>
            </motion.div>

            <div>
                <motion.div initial={{opacity: 0, scale: 0.2, x: -500}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}}>
                    <h2 className='ml-40 text-[35px] font-bold text-white'>Screenshots</h2>
                    <div className='ml-40 mt-1 h-1 w-25 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                </motion.div>

                <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.2}}
                className='grid grid-cols-2 gap-20 pt-15'>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Home} alt="Home Screenshot" className='rounded-2xl'/></div>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={About} alt="About Screenshot" className='rounded-2xl'/></div>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Skills} alt="Skills Screenshot"  className='rounded-2xl'/></div>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Projects} alt="Projects Screenshot" className='rounded-2xl'/></div>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Internship} alt="Internship Screenshot" className='rounded-2xl'/></div>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Contact} alt="Contact Screenshot" className='rounded-2xl'/></div>
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
                                This portfolio website is a personal website designed to showcase my skills, projects, internship experience and contact information. It provides a clean, modern and responsive interface with smooth animations and an intuitive user experience. The website is built using React.js and styled with Tailwind CSS, with multiple sections and dedicated project detail pages.
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
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Multiple sections (Home, About, Skills, Projects, Internship, Contact).</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Responsive and modern UI design.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Project showcase with details.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Smooth scrolling and animations.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Interactive UI components.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Contact form integrated with Web3Forms.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Fully responsive for all devices.</p>
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

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>React Router</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>Framer Motion</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>Web3Forms</p>

                            <p className='border-2 rounded-2xl text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>Font Awesome</p>
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
                                <li>Designed and developed the complete portfolio website using React.js.</li>
                                <li>Created reusable and modular React components.</li>
                                <li>Implemented responsive design using Tailwind CSS.</li>
                                <li>Set up React Router for smooth navigation between sections and project detail pages.</li>
                                <li>Added smooth animations using Framer Motion.</li>
                                <li>Implemented a contact form using Web3Forms.</li>
                                <li>Added project showcase with detailed pages.</li>
                                <li>Optimized the UI/UX for different screen sizes.</li>
                                <li>Deployed the website and maintained the code.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, scale: 0.3}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.8}} S
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
                                <div><FontAwesomeIcon icon={faCircleNotch} className='text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] font-bold text-white'>Smooth animations</p>
                                    <p className='text-[12px] font-medium text-[#8e9bad]'>
                                        Used Framer Motion for smooth transitions and scrolling animations.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div><FontAwesomeIcon icon={faCode} className='text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] font-bold text-white'>Route Navigation</p>
                                    <p className='text-[12px] font-medium text-[#8e9bad]'>
                                        Implemented React Router for client-side navigation.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div><FontAwesomeIcon icon={faEnvelope} className='text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] font-bold text-white'>Responsive Design</p>
                                    <p className='text-[12px] font-medium text-[#8e9bad]'>
                                        Integrated Web3Forms to handle form submissions securely.
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
                                <p className='text-[#8e9bad] text-[14px] font-medium'>React component development.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Using Vite for a faster development experience.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Working with React 
                                    Router.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Implementing animations with Framer Motion.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Tailwind CSS for modern and responsive UI design.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>Integrating third-party services (Web3Forms).</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>React Router for navigation.</p>
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

export default Portfolio_Website
