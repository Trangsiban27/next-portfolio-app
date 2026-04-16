'use client'
import { div } from 'framer-motion/client'
import { MoveUpRight } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    const social = ['Github', 'Linkedin']

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    }

    const handleClick = (item: any) => {
        switch (item) {
            case 'Github': {
                window.open('https://github.com/Trangsiban27', '_blank');
                break;
            }
            case 'Linkedin': {
                window.open('https://www.linkedin.com/in/trangbandev/', '_blank');
                break;
            }
        }
    }

    return (
        <div className='pb-40 bg-black px-40 flex flex-col'>
            <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h1 className='text-5xl bg-linear-to-r from-[#A855F7] to-[#6366F1] bg-clip-text text-transparent'>CONTACT</h1>
            </motion.div>

            <div className='flex mt-6'>
                <div className='w-1/3 text-white flex flex-col items-start'>
                    <motion.div
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col mt-2'
                    >
                        <span className='text-white/60 font-bold'>Email</span>
                        <span className='text-lg font-bold'>
                            trangsibanwork@gmail.com
                        </span>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col mt-6'
                    >
                        <span className='text-white/60 font-bold'>Location</span>
                        <span className='text-lg font-bold'>
                            Ho Chi Minh city, VietNam
                        </span>
                    </motion.div>
                </div>

                <div className='w-1/3 text-white flex flex-col items-center'>
                    <motion.span
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-white/60 font-bold'
                    >
                        Social
                    </motion.span>

                    <div className='mt-2 flex flex-col gap-y-6 items-start justify-start'>
                        {social?.map((item: any, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className='flex items-center gap-2 underline cursor-pointer'
                                onClick={() => handleClick(item)}
                            >
                                <span className='text-white text-3xl'>{item}</span>
                                <div>
                                    <MoveUpRight color='white' size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer