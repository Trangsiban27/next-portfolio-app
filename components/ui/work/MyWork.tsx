'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MoveUpRight } from 'lucide-react'

const MyWork = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    }

    return (
        <section className='w-full gap-12 my-40 px-20'>
            <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='w-full flex flex-col items-center justify-center'
            >
                <span className='text-8xl text-white font-bold'>My career &</span>
                <span className='text-8xl text-white font-bold'>experience</span>
            </motion.div>

            <div className='w-full flex mt-26'>
                <div className='w-1/2 flex justify-between border-r pr-12 border-purple-400'>
                    <div className='flex flex-col'>
                        <motion.div
                            {...fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='flex items-center gap-8'
                        >
                            <span className='text-white font-bold text-4xl'>Frontend Developer</span>
                            <div className='p-2 border border-white cursor-pointer'>
                                <MoveUpRight color='white' size={16} />
                            </div>
                        </motion.div>
                        <motion.span
                            {...fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='text-purple-400 text-2xl'
                        >
                            Accessed Joinstock Company - VietNam
                        </motion.span>
                    </div>

                    <motion.span
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-white text-4xl font-bold'
                    >
                        2024
                    </motion.span>
                </div>

                <div className='w-1/2 flex justify-between pl-12'>
                    <motion.p
                        className='text-white/60 text-xl '
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Developed and join build key project including frontend, CMS dashboard, CRM, HRMs, Socials and responsive. use React, ReactJS, Typescript, TailwindCSS, MUI
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default MyWork