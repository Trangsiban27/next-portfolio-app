import React from 'react'

const ProfessionalTenureGrid = () => {
    return (
        <div>
            <span className='md:text-6xl text-4xl font-bold text-white'>Professional Tenure</span>

            <div
                className='flex flex-col gap-4 h-full bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white mt-16'
            >
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-3'>
                        <span className='text-lg font-light text-blue-300'>2024 - 2026</span>

                        <div className='flex flex-col'>
                            <span className='text-4xl text-white font-bold'>Frontend Developer</span>
                            <span className='text-2xl text-gray-200 font-light'>Accessed Việt Nam</span>
                        </div>
                    </div>
                </div>

                <span className=' text-gray-200 w-[80%]'>
                    Frontend Developer specializing in React.js and TypeScript, with hands-on experience delivering large-scale
                    social networking, recruitment, and enterprise management systems. Proven track record of improving application
                    performance, streamlining business workflows, and building scalable user experiences for thousands of active users.
                    Currently expanding into Fullstack Development with Node.js and modern backend technologies.
                </span>

                <div className='flex flex-wrap gap-3'>
                    <span className='p-2 px-4 rounded-md bg-black/60 text-gray-300 text-sm'>React / NextJS</span>
                    <span className='p-2 px-4 rounded-md bg-black/60 text-gray-300 text-sm'>Tailwind CSS</span>
                    <span className='p-2 px-4 rounded-md bg-black/60 text-gray-300 text-sm'>Redux Toolkits</span>
                    <span className='p-2 px-4 rounded-md bg-black/60 text-gray-300 text-sm'>Typescript</span>
                    <span className='p-2 px-4 rounded-md bg-black/60 text-gray-300 text-sm'>React query</span>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalTenureGrid