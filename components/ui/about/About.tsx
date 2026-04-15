import React from 'react'

const About = () => {
    return (
        <section className='flex my-12.5 px-20 h-screen items-center justify-center'>
            <div className='w-1/2'></div>
            <div className='flex flex-col gap-y-4'>
                <h1 className='bg-linear-to-r from-[#A855F7] to-[#6366F1] bg-clip-text text-transparent text-2xl font-medium'>ABOUT</h1>

                <p className='text-white text-2xl font-semibold'>
                    I am Trang Si Ban, a Frontend Engineer with nearly 2 years of specialized experience in building high-performance web applications using the React and TypeScript ecosystem. With a solid foundation from my Bachelor of Software Engineering (graduated with honors), I consistently prioritize user experience (UX) optimization and writing clean, maintainable code.
                </p>
            </div>
        </section>
    )
}

export default About