'use client'
import React from 'react'
import { motion } from 'framer-motion'

const MyEducations = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    }

    return (
        <section className='w-full gap-12 my-12.5 md:px-20 px-8 h-screen'>
            <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='w-full flex items-center justify-center'
            >
                <span className=' text-6xl md:text-8xl text-white font-bold'>My Educations</span>
            </motion.div>

            <div className='flex flex-col md:flex-row w-full mt-22'>
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='md:w-1/2 relative'
                >
                    <div className='md:w-80 rounded-lg overflow-hidden -rotate-6 hover:translate-1 transition-all duration-200'>
                        <img src="/education-1.jpg" alt="" />
                    </div>

                    <div className='md:w-80 rounded-lg overflow-hidden rotate-6 absolute md:right-15 md:top-40 top-55 hover:-translate-1 transition-all duration-200 shadow-2xs'>
                        <img src="/education-2.jpg" alt="" />
                    </div>
                </motion.div>

                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='md:w-1/2 flex flex-col gap-4 mt-70 md:mt-0'
                >
                    <span className='text-purple-400 font-bold text-lg'>2021 - 2024</span>

                    <p className='text-white text-xl'>
                        I pursued my higher education at Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT), majoring in Information Technology. During my academic journey, I decided to specialize in Software Engineering to deepen my technical expertise and focus on building high-quality software solutions. With a strong commitment to learning and a passion for technology, I graduated with Honors, achieving a GPA of 3.31.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MyEducations