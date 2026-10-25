import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faArrowRight, faFileLines, faStar, faCircleCheck, faUserPen, faLightbulb, faGear, faMobileScreen, faServer, faArrowLeft, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Home_ss from '../../assets/E-commerce/Home_ss.png'
import Shop_ss from '../../assets/E-commerce/Shop_ss.png'
import About_ss from '../../assets/E-commerce/About_ss.png'
import Contact_ss from '../../assets/E-commerce/Contact_ss.png'
import Cart_ss from '../../assets/E-commerce/Cart_ss.png'
import Product_Details_ss from '../../assets/E-commerce/Product_Details_ss.png'
import MoveToTop from '../MoveToTop'

const E_Commerce = () => {

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
        <div className='px-5 sm:px-10 overflow-hidden py-8 gap-5 bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)] pb-10'>
            
            <motion.div
                initial = {{
                    opacity: 0,
                    y:  -200,
                    scale: 0.3
                }}
                whileInView = {{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}
                transition  = {{
                    duration: 2,
                    ease: 'easeInOut'
                }}
                viewport={{
                    once: true
                }}

            className='flex flex-col sm:ml-20 md:ml-30 lg:ml-40 pt-40 pb-60'>
                <Link to = '/projects' className='w-fit border-2 border-white text-white rounded-4xl flex gap-1 px-2 py-1 justify-center items-center text-[12px] hover:cursor-pointer hover:text-black hover:bg-white transition-colors duration-200 font-semibold'><FontAwesomeIcon icon={faArrowLeft} />Back to Projects</Link>

                <h2 className='mt-10 text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>E-Commerce Website</h2>
                
                <div className='mt-1 h-1 w-45 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>

                <p className='text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-white mt-6 font-semibold w-[70%] xs:w-[55%] sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%]'>
                    A responsive E-Commerce website with product listing, cart
                </p>
                <p className='text-[15px] text-white font-semibold'>
                    management and a smooth shopping experience.
                </p>

                <div className='flex mt-5 gap-5'>
                    <a href='https://shop-pur-e-commerce.vercel.app/' target='_blank' rel='noopener noreferrer'><button className='bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED] text-white rounded-4xl flex gap-1 px-4 py-1 md:py-2 justify-center items-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] hover:cursor-pointer font-semibold'>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'/></button></a>

                    <a href='https://github.com/RachitRawat720/E-commerce-website' target='_blank' rel='noopener noreferrer'><button className='border-2 border-[#4338CA] text-white rounded-4xl flex gap-1 px-4 py-1 md:py-2 justify-center items-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] hover:cursor-pointer font-semibold hover:bg-linear-to-r from-[#1E40AF] via-[#4338CA] to-[#7C3AED]'><FontAwesomeIcon icon={faGithub} className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'/>GitHub</button></a>
                </div>
            </motion.div>

            <div>
                <motion.div
                    initial = {{
                        opacity: 0,
                        scale: 0.3
                    }}
                    whileInView = {{
                        opacity: 1,
                        scale: 1
                    }}
                    transition  = {{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    viewport={{
                        once: true,
                        amount: 0.9
                    }}>
                    <h2 className='text-[26px] xs:text-[28px] sm:text-[30px] md:text-[32px] lg:text-[35px] font-bold text-white'>Screenshots</h2>
                    <div className='mt-1 h-1 w-25 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                </motion.div>

                <motion.div
                    initial = {{
                        opacity: 0,
                        scale:  screenSize === 'extraLarge' ? 0.5 :
                                screenSize === 'large' ? 0.5 : 0.8
                    }}
                    whileInView = {{
                        opacity: 1,
                        scale: 1
                    }}
                    transition  = {{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    viewport={{
                        once: true
                    }}

                className='grid grid-cols-1 lg:grid-cols-2 gap-20 pt-15'>
                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Home_ss} alt="Home Screenshot" className='rounded-2xl'/></div>

                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Shop_ss} alt="Shop Screenshot" className='rounded-2xl'/></div>

                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={About_ss} alt="About Screenshot" className='rounded-2xl'/></div>

                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Contact_ss} alt="Contact Screenshot" className='rounded-2xl'/></div>

                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Cart_ss} alt="Cart Screenshot" className='rounded-2xl'/></div>

                    <div className='rounded-2xl overflow-hidden border-2 border-[#5f8dce]'><img src={Product_Details_ss} alt="Product detail Screenshot" className='rounded-2xl'/></div>
                    
                </motion.div>
            </div>
            
            <div className='grid xs:px-10 sm:px-20 md:px-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-50'>

                <motion.div
                    initial = {{
                        opacity: 0,
                        x:  screenSize === 'extraLarge' ? -150 : "",
                        scale: 0.3
                    }}
                    whileInView = {{
                        opacity: 1,
                        x: 1,
                        scale: 1
                    }}
                    transition  = {{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    viewport={{
                        once: true,
                        amount: 0.6
                    }}

                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-4 py-4 xs:px-5 xs:py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faFileLines} className='text-[20px] xs:text-[24px] sm:text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[16px] xs:text-[17px] sm:text-[18px] font-bold'>Overview</p>
                                <div className='mt-1 h-1 w-15 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>
                                This responsive e-commerce website provides a user-friendly shopping experience where users can browse products, view product details, add items to their cart, and manage their selected products. JavaScript is used to handle dynamic product interactions and cart functionality, while LocalStorage is used to persist cart data across page refreshes.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial = {{
                        opacity: 0,
                        scale: 0.3
                    }}
                    whileInView = {{
                        opacity: 1,
                        scale: 1
                    }}
                    transition  = {{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    viewport={{
                        once: true,
                        amount: 0.6
                    }}

                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-4 py-4 xs:px-5 xs:py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faStar} className='text-[20px] xs:text-[24px] sm:text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[16px] xs:text-[17px] sm:text-[18px] font-bold'>Key Features</p>
                                <div className='mt-1 h-1 w-20 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='mt-5 gap-1'>
                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Responsive e-commerce interface.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Product listing and product details.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Add products to cart.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Remove products from cart.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Dynamic cart total calculation.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Persistent cart using LocalStorage.</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Responsive design for different screen sizes.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial = {{
                        opacity: 0,
                        x:  screenSize === 'extraLarge' ? 150 : "",
                        scale: 0.3
                    }}
                    whileInView = {{
                        opacity: 1,
                        x: 1,
                        scale: 1
                    }}
                    transition  = {{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    viewport={{
                        once: true,
                        amount: 0.6
                    }}

                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-4 py-4 xs:px-5 xs:py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faFileLines} className='text-[20px] xs:text-[24px] sm:text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[16px] xs:text-[17px] sm:text-[18px] font-bold'>Tech Stack</p>
                                <div className='mt-1 h-1 w-18 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-x-5 gap-y-3 mt-5'>
                            <p className='border-2 rounded-2xl text-[12px] xs:text-[13px] sm:text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>HTML5</p>

                            <p className='border-2 rounded-2xl text-[12px] xs:text-[13px] sm:text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>CSS3</p>

                            <p className='border-2 rounded-2xl text-[12px] xs:text-[13px] sm:text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>JavaScript</p>

                            <p className='border-2 rounded-2xl text-[12px] xs:text-[13px] sm:text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-5 rounded-2x'>LocalStorage</p>

                            <p className='border-2 rounded-2xl text-[12px] xs:text-[13px] sm:text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>Font Awesome</p>

                            <p className='border-2 rounded-2xl text-[12px] xs:text-[13px] sm:text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>Git</p>

                            <p className='border-2 rounded-2xl text-[12px] xs:text-[13px] sm:text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>GitHub</p>

                            <p className='border-2 rounded-2xl text-[12px] xs:text-[13px] sm:text-[14px] border-[#8B5CF6] bg-[#695694]/50 text-white w-fit px-3 rounded-2x'>Vercel</p>

                        </div>
                    </div>
                </motion.div>
            </div>

            <div className='grid xs:px-10 sm:px-20 md:px-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-50 pb-20'>

                <motion.div
                    initial = {{
                        opacity: 0,
                        x:  screenSize === 'extraLarge' ? -150 : "",
                        scale: 0.3
                    }}
                    whileInView = {{
                        opacity: 1,
                        x: 1,
                        scale: 1
                    }}
                    transition  = {{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    viewport={{
                        once: true,
                        amount: 0.6
                    }}

                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-4 py-4 xs:px-5 xs:py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faUserPen} className='text-[20px] xs:text-[24px] sm:text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[16px] xs:text-[17px] sm:text-[18px] font-bold'>My Contribution</p>
                                <div className='mt-1 h-1 w-25 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='mt-5 pl-5'>
                            <ul className='list-disc marker:text-[#3B82F6] text-[#9da8b5] text-[12px] xs:text-[13px] font-medium'>
                                <li>Designed and developed the complete website using HTML, CSS and JavaScript.</li>
                                <li>Created responsive product layouts and UI components..</li>
                                <li>Implemented product listing and product detail pages..</li>
                                <li>Developed cart functionality..</li>
                                <li>Used LocalStorage to persist cart data..</li>
                                <li>Implemented dynamic cart calculations..</li>
                                <li>Improved the interface for different screen sizes.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial = {{
                        opacity: 0,
                        scale: 0.3
                    }}
                    whileInView = {{
                        opacity: 1,
                        scale: 1
                    }}
                    transition  = {{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    viewport={{
                        once: true,
                        amount: 0.6
                    }}

                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-5 py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faLightbulb} className='text-[20px] xs:text-[24px] sm:text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[16px] xs:text-[17px] sm:text-[18px] font-bold'>Challenges and Solutions</p>
                                <div className='mt-1 h-1 w-30 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>

                        <div className='flex flex-col mt-5 gap-2'>
                            <div className='flex gap-3'>
                                <div><FontAwesomeIcon icon={faGear} className='text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[16px] xs:text-[18px] sm:text-[14px] font-bold text-white'>Cart Management</p>
                                    <p className='text-[10px] xs:text-[11px] sm:text-[12px] font-medium text-[#8e9bad]'>
                                        Implemented JavaScript logic to add, remove and update products while keeping the cart totally synchronized.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div><FontAwesomeIcon icon={faServer} className='text-[16px] xs:text-[18px] sm:text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[12px] xs:text-[13px] sm:text-[14px] font-bold text-white'>Data Persistence</p>
                                    <p className='text-[10px] xs:text-[11px] sm:text-[12px] font-medium text-[#8e9bad]'>
                                        Used LocalStorage so cart items remain available even after refreshing the browser.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div><FontAwesomeIcon icon={faMobileScreen} className='text-[16px] xs:text-[18px] sm:text-[20px] text-[#ac6736]'/></div>
                                <div className='flex flex-col'>
                                    <p className='text-[12px] xs:text-[13px] sm:text-[14px] font-bold text-white'>Responsive Design</p>
                                    <p className='text-[10px] xs:text-[11px] sm:text-[12px] font-medium text-[#8e9bad]'>
                                        Used CSS responsive layouts to provide a consistent experience across different screen sizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial = {{
                        opacity: 0,
                        x:  screenSize === 'extraLarge' ? 150 : "",
                        scale: 0.3
                    }}
                    whileInView = {{
                        opacity: 1,
                        x: 1,
                        scale: 1
                    }}
                    transition  = {{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    viewport={{
                        once: true,
                        amount: 0.6
                    }}

                className='rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                    <div className='h-full flex flex-col px-4 py-4 xs:px-5 xs:py-8 rounded-xl bg-[#0f1731]'>
                        <div className='flex gap-5 items-center'>
                            <div><FontAwesomeIcon icon={faChartLine} className='text-[20px] xs:text-[24px] sm:text-[28px] text-[#4242be]'/></div>
                            <div>
                                <p className='text-white text-[16px] xs:text-[17px] sm:text-[18px] font-bold'>What I Learned</p>
                                <div className='mt-1 h-1 w-25 rounded-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2]'></div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-5 gap-1'>
                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[14px] font-medium'>DOM manipulation with JavaScript.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Event handling.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>LocalStorage.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Cart state management.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Dynamic price calculation.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Responsive CSS.</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center'><FontAwesomeIcon icon={faCircleCheck} className='text-[12px] xs:text-[13px] sm:text-[14px] text-[#309e30]'/></div>
                                <p className='text-[#8e9bad] text-[12px] xs:text-[13px] sm:text-[14px] font-medium'>Improving UI/UX.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <Link to = '/projects' className='mt-5 xs:mt-10 md:mt-15 w-fit border-2 border-white text-white hover:text-black hover:bg-white transition-colors duration-200 rounded-4xl flex gap-1 px-4 py-1 sm:py-2 justify-center items-center text-[10px] xs:text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] hover:cursor-pointer font-semibold'><FontAwesomeIcon icon={faArrowLeft} />Back to Projects</Link>
                <MoveToTop />
            </div>
            
        </div>
    )
}

export default E_Commerce
