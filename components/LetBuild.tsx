'use client'
import React from 'react'
import { Button } from './ui/button'
import { toast } from 'sonner'

const LetBuild = () => {

    const handleViewLinkedIn = () => {
        window.open('https://www.linkedin.com/in/trangbandev/', '_blank')
    }

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('trangsibanwork@gmail.com')

        toast.success('Copied email to clipboard!');

        window.location.href = "mailto:trangsibanwork@gmail.com";
    }

    return (
        <div className='bg-blue-300 rounded-3xl p-4 py-22 flex flex-col items-center justify-center gap-6'>
            <span className='text-4xl font-light'>Let's Build Something Great Together</span>

            <div className=''>
                <p>I'm currently looking for new opportunities to contribute to impactful projects.</p>
                <p>Whether you have a question or just want to say hi, my inbox is always open!</p>
            </div>

            <div className='flex md:flex-row flex-col items-center gap-4'>
                <Button
                    variant='default'
                    className='py-6 px-8 cursor-pointer bg-blue-500 rounded-4xl text-lg'
                    onClick={() => handleCopyEmail()}
                >
                    Email Me
                </Button>

                <Button
                    variant='outline'
                    className='py-6 px-8 cursor-pointer rounded-4xl text-lg'
                    onClick={() => handleViewLinkedIn()}
                >
                    View Linkedin
                </Button>
            </div>
        </div>
    )
}

export default LetBuild