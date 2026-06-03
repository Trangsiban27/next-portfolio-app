'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../button'

const MainGrid = () => {

    const handleGithub = () => {
        window.open('https://github.com/Trangsiban27', '_blank');
    }

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/trangbandev/', '_blank');
    }

    return (
        <div className='grid grid-cols-12 mt-16 gap-6'>
            <div className="md:col-span-8 col-span-12 w-full bg-[#101727] p-10 md:p-12 rounded-3xl border border-zinc-800 hover:cursor-pointer hover:border-gray-600 shadow-2xl mt-16 hover:bg-linear-to-br hover:from-[#8B5CF6] hover:via-[#3B82F6] hover:to-[#8B5CF6] hover:transition-all duration-300 hover:-translate-y-2">
                <div className="mb-10">
                    <span className="label-text inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md border border-zinc-800">
                        <span className='text-white'>Available for Freelance</span>
                    </span>
                </div>

                {/* 3. Headline */}
                <h1 className="text-white w-[70%] font-sans font-bold text-4xl md:text-7xl text-app-text-primary leading-tight md:leading-[1.1] tracking-tight mb-12 max-w-4xl">
                    Building modern digital experiences with React & Fullstack technologies.
                </h1>

                {/* 4. Buttons (CTA) */}
                <div className="flex flex-wrap gap-4 items-center">

                    {/* Nút chính */}
                    <button className="font-sans font-bold cursor-pointer bg-app-text-primary text-app-bg px-7 py-3.5 rounded-full bg-white hover:bg-[#3B82F6] hover:text-white transition-colors duration-200">
                        View Projects
                    </button>

                    {/* Nút phụ 1 */}
                    <button className=" text-sm tracking-widest text-app-text-secondary px-7 py-3.5 rounded-full border text-white bg-gray-500/20 hover:bg-gray-500/80 border-zinc-700 hover:border-zinc-600 hover:text-app-text-primary transition-all duration-200 cursor-pointer">
                        Download Resume
                    </button>

                    {/* Nút phụ 2 */}
                    <button className=" text-sm tracking-widest text-app-text-secondary px-7 py-3.5 rounded-full border text-white bg-gray-500/20 hover:bg-gray-500/80 border-zinc-700 hover:border-zinc-600 hover:text-app-text-primary transition-all duration-200 cursor-pointer">
                        Contact Me
                    </button>

                </div>

            </div>

            <div
                className="hover:cursor-pointer md:col-span-4 col-span-12 w-full bg-[#101727] p-10 md:p-12 rounded-3xl border border-zinc-800 hover:border-gray-600 md:mt-16 hover:bg-linear-to-br hover:from-[#8B5CF6] hover:via-[#3B82F6] hover:to-[#8B5CF6] hover:transition-all duration-300 hover:-translate-y-2"
            >
                <div className='flex flex-col items-center justify-center gap-6 h-full'>
                    <div className="relative w-37.5 h-37.5 rounded-full overflow-hidden border border-zinc-800">
                        <Image
                            src="/ban_avatar.jpg"
                            alt="Avatar"
                            fill
                            sizes="150px"
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className='flex items-center flex-col gap-2'>
                        <span className='font-bold text-4xl text-white'>Trang Sĩ Bân</span>
                        <span className='text-gray-400'>Ho Chi Minh city, VietNam</span>
                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <Button
                            className='cursor-pointer bg-gray-500/20 hover:bg-gray-500/80 px-4 py-1.5 rounded-md'
                            onClick={handleGithub}
                        >
                            Github
                        </Button>

                        <Button
                            className='cursor-pointer bg-gray-500/20 hover:bg-gray-500/80 px-4 py-1.5 rounded-md'
                            onClick={handleLinkedin}
                        >
                            Linkedin
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainGrid