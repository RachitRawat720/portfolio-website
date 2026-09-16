import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEnvelope, faLocationDot, faPaperPlane, faTag, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import linkedin_logo from '../assets/linkedIn_logo.png'
import github_logo from '../assets/github_logo.jpg'
import email_logo from '../assets/email_logo.jpg'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        setLoading(true)
        setStatus('')

        const formData = new FormData(event.target)

        const email = formData.get('email')

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(email)) {
            setStatus('Please enter a valid email address.')
            setLoading(false)
            return
        }

        formData.append(
            'access_key',
            import.meta.env.VITE_FORM_DATA_ACCESS_KEY
        )

        const data = Object.fromEntries(formData)

        try {
            const response = await fetch(
            'https://api.web3forms.com/submit',
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
                },
                body: JSON.stringify(data)
            }
            )

            const result = await response.json()

            if (result.success) {
            setStatus('Message sent successfully!')

            event.target.reset()
            } else {
            setStatus('Something went wrong. Please try again.')
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again.')
        }

        setLoading(false)
    }

    return (
        <div className='px-10 py-20 overflow-hidden bg-[linear-gradient(135deg,#080D1F_0%,#101A35_35%,#172554_65%,#24164F_100%)]'>
            <motion.div initial={{opacity: 0, y: -200, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{ once: true, amount: 0.8}}
            className='flex flex-col justify-center items-center py-30 '>
                <h1 className='text-[50px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>CONTACT ME</h1>

                <div className='h-1 w-40 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] rounded-4xl'></div>

                <h3 className='text-[20px] font-semibold text-gray-300 mt-4'>Let's build something together</h3>
            </motion.div>


            <div className='flex justify-center items-center gap-10 mt-15'>
                <motion.div initial={{opacity: 0, x: -200, scale: 0.3}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
                className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                        <div className='flex flex-col px-5 py-3 rounded-2xl bg-[#0f1731]'>
                            
                            <h2 className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#FF4D6D] bg-clip-text text-transparent text-[20px] font-bold'>GET IN TOUCH</h2>

                            <h3 className='text-white font-bold text-[24px] -mt-2'>Let's create something great together</h3>

                            <p className='text-[#8e9bad] text-[16px] font-semibold mt-2'>I am always open to discussing new opportunities, interesting projects, collaborations and ideas.
                            </p>

                            <p className='text-[#8e9bad] text-[16px] font-semibold mt-1'>Feel free to reach out</p>

                            <div className='flex flex-col gap-2 mt-4 w-full'>
                                <div className='flex gap-5 '>
                                    <div className='flex justify-center items-center px-2 rounded-[50%] border-[#3374b0] border-2 bg-blue-300 '>
                                        <FontAwesomeIcon icon={faEnvelope} color='#9333ea' className='text-[24px]'/>
                                    </div>

                                    <div className='flex justify-between w-full pr-5'>
                                        <div className='flex flex-col'>
                                            <p className='text-[16px] text-white font-bold'>Email</p>
                                            <p className='text-[14px] text-[#8e9bad] font-semibold'>rachitrawat720@gmail.com</p>
                                        </div>
                                        
                                        <a href='mailto:rachitrawat720@gmail.com'  ><FontAwesomeIcon icon={faUpRightFromSquare} className='text-[20px] transition-transform duration-300 ease-in-out hover:scale-150' color='#8e9bad'/></a>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='flex justify-center items-center px-2 rounded-[50%] border-[#3374b0] border-2 bg-blue-300 '>
                                        <FontAwesomeIcon icon={faLinkedinIn} color='#9333ea' className='text-[24px]'/>
                                    </div>

                                    <div className='flex justify-between w-full pr-5'>
                                        <div className='flex flex-col'>
                                            <p className='text-[16px] text-white font-bold'>LinkedIn</p>
                                            <p className='text-[14px] text-[#8e9bad] font-semibold'>Let's connect professionally</p>
                                        </div>

                                        <a href='https://www.linkedin.com/in/rachit-singh-rawat/'  target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faUpRightFromSquare} className='text-[20px] transition-transform duration-300 ease-in-out hover:scale-150' color='#8e9bad'/></a>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='flex justify-center items-center px-2 rounded-[50%] border-[#3374b0] border-2 bg-blue-300 '>
                                        <FontAwesomeIcon icon={faGithub} color='#9333ea' className='text-[24px]'/>
                                    </div>

                                    <div className='flex justify-between w-full pr-5'>
                                        <div className='flex flex-col'>
                                            <p className='text-[16px] text-white font-bold'>GitHub</p>
                                            <p className='text-[14px] text-[#8e9bad] font-semibold'>Explore my projects</p>
                                        </div>

                                        <a href='https://github.com/RachitRawat720'  target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faUpRightFromSquare} className='text-[20px] transition-transform duration-300 ease-in-out hover:scale-150' color='#8e9bad'/></a>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='flex justify-center items-center px-2 rounded-[50%] border-[#3374b0] border-2 bg-blue-300 '>
                                        <FontAwesomeIcon icon={faLocationDot} color='#9333ea' className='text-[24px]'/>
                                    </div>

                                    <div className='flex justify-between w-full pr-5'>
                                        <div className='flex flex-col'>
                                            <p className='text-[16px] text-white font-bold'>Location</p>
                                            <p className='text-[14px] text-[#8e9bad] font-semibold'>India (Remote)</p>
                                        </div>

                                        <a href='https://www.google.com/maps/search/?api=1&query=Dehradun,Uttarakhand,India' target='_blank' rel='noopener'  ><FontAwesomeIcon icon={faUpRightFromSquare} className='text-[20px] transition-transform duration-300 ease-in-out hover:scale-150' color='#8e9bad'/></a>
                                    </div>
                                </div>

                            </div>

                            <div className='h-0.5 w-full bg-[#3239b9d2] rounded-full mt-8'></div>

                            <p className='text-green-500 text-[18px] mt-4'>Available for opportunities</p>
                            <p className='text-[#8e9bad] text-[15px] font-semibold mt-2'>I'm currently open to internships, full-time, freelance projects and collaborations</p>

                        </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: 200, scale: 0.3}} whileInView={{opacity: 1, x: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
                    className='rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5'>
                        <div className='flex flex-col pl-4 pr-10 py-4 rounded-2xl bg-[#0f1731]'>

                            <h2 className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#FF4D6D] bg-clip-text text-transparent text-[20px] font-bold'>SEND A MESSAGE</h2>

                            <h3 className='text-white font-bold text-[29px] -mt-2'>Get in touch</h3>

                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col w-full justify-center items-center gap-5 mt-2'>

                                    <div className='flex gap-5'>
                                        <div className='flex justify-center items-center border-2 border-[#3239b9d2] px-4 py-2 rounded-xl gap-5'>
                                            <div className='flex'><FontAwesomeIcon icon={faUser} className='text-[20px]' color='#8e9bad'/></div>

                                            <div className='flex flex-col gap-2'>
                                                <h3 className='text-[16px] text-white font-bold'>Your Name</h3>
                                                <input type="text" name='name' placeholder='Rachit Singh Rawat' required className='text-[#8e9bad] font-bold border-none'/>
                                            </div>
                                        </div>

                                        <div className='flex justify-center items-center border-2 border-[#3239b9d2] px-4 py-2 rounded-xl gap-5'>
                                            <div className='flex'><FontAwesomeIcon icon={faEnvelope} className='text-[20px]' color='#8e9bad'/></div>

                                            <div className='flex flex-col gap-2'>
                                                <h3 className='text-[16px] text-white font-bold'>Your Email</h3>
                                                <input type="text" name='email' placeholder='rachitrawat720@gmail.com' required className='text-[#8e9bad] font-bold border-none'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-center w-full border-2 border-[#3239b9d2] px-4 py-2 rounded-xl gap-5'>
                                        <div className='flex'><FontAwesomeIcon icon={faTag} className='text-[20px]' color='#8e9bad'/></div>

                                        <div className='flex flex-col gap-2 w-full pr-2 pb-2'>
                                            <h3 className='text-[16px] text-white font-bold'>Subject</h3>
                                            <input type="text" name='subject' placeholder='Project Enquiry' required className='text-[#8e9bad] font-bold border-none'/>
                                        </div>
                                    </div>

                                    <div className='flex w-full border-2 border-[#3239b9d2] px-4 py-2 rounded-xl gap-5'>
                                        <div className='flex mt-6'><FontAwesomeIcon icon={faComment} className='text-[20px]' color='#8e9bad'/></div>

                                        <div className='flex flex-col gap-2 w-full pr-4 pb-3'>
                                            <h3 className='text-[16px] text-white font-bold ml-2'>Message</h3>
                                            <textarea name='message' placeholder='write your message here' required className='text-[#8e9bad] font-bold border-none w-full px-2 py-1 resize-none overflow-y-auto' rows={3}></textarea>
                                        </div>
                                    </div>

                                    <button type='submit' disabled={loading} className='flex justify-center items-center py-3 rounded-xl bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] text-white font-semibold w-full gap-4'>
                                        <FontAwesomeIcon icon={faPaperPlane} className='text-white text-[20px]' color='#8e9bad'/>
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                    {status && (
                                        <p
                                            className={`text-center font-semibold text-[14px] ${
                                            status.includes('successfully')
                                                ? 'text-green-400'
                                                : 'text-red-400'
                                            }`}
                                        >
                                            {status}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                </motion.div>
            </div>

            <motion.div initial={{opacity: 0, y: 200, scale: 0.3}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}}
            className='flex flex-col'>
                <div className='flex items-center justify-center gap-4 pt-40'>
                    <div className='flex items-center justify-center h-0.5 w-40 bg-[#3239b9d2] rounded-full'></div>

                    <h3 className='text-[25px] font-bold bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3239b9d2] bg-clip-text text-transparent'>FIND ME ONLINE</h3>
                    

                    <div className=' flex items-center justify-center h-0.5 w-40 bg-[#3239b9d2] rounded-full'></div>
                </div>

                <div className='flex gap-8 justify-center items-center pt-5'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <a href='https://www.linkedin.com/in/rachit-singh-rawat/' target='_blank' rel="noopener noreferrer" className='group block '><div className='w-11 h-11 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex justify-center items-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={linkedin_logo} className='w-7 h-7 rounded-md' alt="" /></div></a>

                        <p className='text-white text-[14px] font-bold'>LinkedIn</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4'>
                        <a href='https://github.com/RachitRawat720' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-11 h-11 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={github_logo} className='w-7 h-7 rounded-md' alt="" /></div></a>
                        
                        <p className='text-white text-[14px] font-bold'>GitHub</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4'>
                        <a href='mailto:rachitrawat720@gmail.com' target='_blank' rel="noopener noreferrer" className='group block'><div className='w-13 h-11 border-2 border-[#3e536a] bg-linear-to-br from-[#2b3b4c] to-[#212e3f] rounded-md flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-150'><img src={email_logo} className='w-9 h-7 rounded-md' alt="" /></div></a>

                        <p className='text-white text-[14px] font-bold'>Email</p>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, y: 100, scale: 0.3}} whileInView={{opacity: 1, y: 0, scale: 1}} transition={{duration: 2}} viewport={{once: true, amount: 0.7}} 
            className='flex flex-col justify-center items-center mt-20 mb-20'>
                <h2 className='text-[35px] font-bold text-[#a5b0be]'>Thanks for stopping by.</h2>
                <h3 className='text-[20px] text-[#8099c1] font-bold'>Let's create something great together</h3>
            </motion.div>
        </div>
    )
}

export default Contact
