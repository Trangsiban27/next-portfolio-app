import React from 'react'

const WhoIAm = () => {
    return (
        <div
            className='group flex flex-col gap-5 bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white'
        >
            <span className='text-white text-2xl font-bold'>Who I Am</span>

            <span className='text-gray-300'>
                I am Trang Sĩ Bân, a Frontend Engineer with nearly 2 years of specialized experience in building high-performance web
                applications using the React and TypeScript ecosystem. With a solid foundation from my Bachelor of Software Engineering
                (graduated with honors), I consistently prioritize user experience (UX) optimization and writing clean, maintainable code.
            </span>

            <div className='flex items-center gap-3'>
                <div className='text-gray-300 text-xs bg-black/60 rounded-3xl border border-gray-500 px-4 py-1.5'>
                    Problem Solver
                </div>

                <div className='text-gray-300 text-xs bg-black/60 rounded-3xl border border-gray-500 px-4 py-1.5'>
                    Product Thinker
                </div>

                <div className='text-gray-300 text-xs bg-black/60 rounded-3xl border border-gray-500 px-4 py-1.5'>
                    UI Enthusiast
                </div>
            </div>
        </div>
    )
}

export default WhoIAm