'use client'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import Footer from '@/components/ui/footer/Footer'
import Github from '@/components/ui/Github'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useRouter } from 'next/navigation'
import React from 'react'


const layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    const handleGithub = () => {
        window.open('https://github.com/Trangsiban27', '_blank');
    }

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/trangbandev/', '_blank');
    }

    return (
        <div className='h-screen w-full relative '>
            <div className="fixed top-[-10%] left-[-5%] w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="fixed top-1/2 right-[-5%] -translate-y-1/2 w-100 h-100 bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none z-0" />

            <Header />

            <main className="flex-1 overflow-y-auto pb-8 custom-scrollbar bg-black">
                <div className="">
                    <TooltipProvider>{children}</TooltipProvider>
                </div>
            </main>

            <div className='flex flex-col items-center gap-y-4 fixed bottom-5 left-5 z-10'>
                <div className='cursor-pointer' onClick={handleGithub}>
                    <Github />
                </div>

                <div className='cursor-pointer w-18' onClick={handleLinkedin}>
                    <img src="/linkedin.webp" alt="linkedin-logo" className='w-full object-cover' />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default layout