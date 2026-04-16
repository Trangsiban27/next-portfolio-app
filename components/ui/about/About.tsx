'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    }

    return (
        <section className='flex flex-col md:flex-row lg:flex-row gap-12 md:my-12.5 my-22 px-8 md:px-20 h-screen items-center justify-center'>
            <div className='w-full md:w-1/2 flex items-end justify-center'>
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='md:w-80 md:h-80 w-60 h-60 rounded-full overflow-hidden'
                >
                    <img src="/ban_avatar.jpg" alt="" className='w-full h-full object-cover' />
                </motion.div>
            </div>
            <div className='flex flex-col gap-y-4 flex-1'>
                <motion.h1
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='bg-linear-to-r from-[#A855F7] to-[#6366F1] bg-clip-text text-transparent text-2xl font-medium'
                >
                    ABOUT
                </motion.h1>

                <motion.p
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='text-white text-2xl'
                >
                    I am Trang Si Ban, a Frontend Engineer with nearly 2 years of specialized experience in building high-performance web applications using the React and TypeScript ecosystem. With a solid foundation from my Bachelor of Software Engineering (graduated with honors), I consistently prioritize user experience (UX) optimization and writing clean, maintainable code.
                </motion.p>
            </div>
        </section>
    )
}

export default About