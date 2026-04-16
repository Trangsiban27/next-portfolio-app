'use client'
import TextWrapHero from '@/components/common/TextWrapHero'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    }

    return (
        <section className="relative h-screen w-full overflow-hidden z-10">
            {/* <div className='w-40 absolute -top-15 left-10'>
                <img src="/bean_logo.png" alt="logo" className='w-full object-cover' />
            </div> */}

            <div className="absolute inset-0 -z-10">
                <video
                    src="/hero-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Nội dung trên Video */}
            <div className="absolute z-10 flex h-full flex-col items-start justify-center text-white -top-40 left-10 md:left-15 lg:left-15">
                <motion.h1
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xs md:text-xl font-light text-white mb-3"
                >
                    Hello! I'm
                </motion.h1>

                <motion.h2
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-[#A855F7] to-[#6366F1] bg-clip-text text-transparent tracking-tighter"
                >
                    Trang Si Ban
                </motion.h2>
            </div>

            <div className="absolute z-10 flex h-full flex-col items-start justify-center text-white md:right-15 lg:right-15 right-10 top-30 gap-y-2">
                <h1 className="text-xs md:text-2xl">A Creative</h1>
                <TextWrapHero />
            </div>
        </section>
    )
}

export default Hero