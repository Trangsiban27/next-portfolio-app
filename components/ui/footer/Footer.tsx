'use client'
import { div } from 'framer-motion/client'
import { MoveUpRight } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

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
            case 'Email': {
                navigator.clipboard.writeText('trangsibanwork@gmail.com')
                toast.success('Copied email to clipboard!');
                window.open('mailto:trangbandev@gmail.com');
                break;
            }
        }
    }

    return (
        <div className='md:px-60 px-10 py-20 md:gap-0 gap-6 bg-[#101727] flex flex-col md:flex-row md:items-center items-start justify-between w-full'>
            <div className='flex flex-col gap-2'>
                <span className='text-white font-bold text-6xl'>Trang Si Ban</span>
                <span className='text-gray-400 text-sm'>2026 Trang Si Ban. Build with precision</span>
            </div>

            <div className='flex gap-8'>
                <div className='text-white hover:cursor-pointer hover:underline' onClick={() => handleClick('Github')}>Github</div>
                <div className='text-white hover:cursor-pointer hover:underline' onClick={() => handleClick('Linkedin')}>Linkedin</div>
                <div className='text-white hover:cursor-pointer hover:underline' onClick={() => handleClick('Email')}>Email</div>
            </div>
        </div>
    )
}

export default Footer