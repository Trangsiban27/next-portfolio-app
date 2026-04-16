'use client'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { span } from 'framer-motion/client';

const WhatIDo = () => {
    const [isMobile, setIsMobile] = useState(false);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    }

    const skills = ['HTML5', 'CSS3', 'Javascript', 'React', 'ReactJs', 'Next.Js', 'Typescript', 'TailwindCSS', 'MUI', 'ShadcnUI', 'Redux', 'Zustand', 'Tanstack Query', 'NodeJs', 'ExpressJS', 'MongoDB']

    const containerVariants: any = {
        initial: { height: 300 },
        hover: {
            height: 480,
            transition: {
                duration: 0.4,
                when: "beforeChildren", // Chạy animation cha trước khi hiện con
            }
        }
    };

    useEffect(() => {
        const updateSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [1024]);

    return (
        <section className='flex flex-col md:flex-row gap-12 my-12.5 md:px-20 px-8 h-screen items-center justify-center'>
            <div className='w-1/2 flex flex-col items-end'>
                <motion.span
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='md:text-9xl text-6xl text-white font-extrabold'
                >
                    WHAT
                </motion.span>
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='flex md:gap-12 gap-6'
                >
                    <span className='md:text-9xl text-6xl font-extrabold text-white'>I</span>
                    <span className='md:text-9xl text-6xl font-extrabold bg-linear-to-r from-[#A855F7] to-[#6366F1] bg-clip-text text-transparent'>DO</span>
                </motion.div>
            </div>

            <motion.div
                initial="initial"
                whileHover="hover"
                whileInView={isMobile ? "hover" : undefined}
                variants={containerVariants}
                className="relative p-10 flex flex-col justify-center bg-black cursor-pointer group overflow-hidden"
            >
                {/* Background & Corners (Giữ nguyên phong cách của bạn) */}
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='white' stroke-width='1' stroke-dasharray='4%2c 16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")` }} />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white" />

                {/* Nội dung chính */}
                <div className="relative z-10 font-sans">
                    <h2 className="text-5xl font-black text-white uppercase mb-2 tracking-tight">Develop</h2>
                    <p className="text-white/30 text-sm font-mono mb-6 uppercase tracking-widest">Description</p>
                    <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                        Started building websites with JavaScript and React,
                        now I craft them with TypeScript, React, Express, Node, ...
                        and a little bit of magic!
                    </p>
                </div>

                <motion.div
                    variants={{
                        initial: { opacity: 0, height: 0 },
                        hover: { opacity: 1, height: 160, marginTop: 24 }
                    }}
                    className="relative z-10 overflow-hidden overflow-y-auto md:overflow-y-hidden"
                >
                    <span className='text-white font-mono text-xs uppercase tracking-widest opacity-50'>
                        Skillset & Tools
                    </span>

                    <div className='flex gap-3 w-full flex-wrap items-center mt-4'>
                        {skills?.map((skill, index) => (
                            <div
                                key={index}
                                className="text-white text-[11px] font-mono border border-white/20 bg-white/5 px-3 py-1 rounded-full transition-colors duration-200"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className='absolute bottom-10 right-10 border p-2 md:block hidden'>
                    <ChevronDown color='white' />
                </div>
            </motion.div>
        </section>
    )
}

export default WhatIDo