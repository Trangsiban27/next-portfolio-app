import React from 'react'

const CurrentFocus = () => {
    return (
        <div
            className='group h-full flex flex-col gap-5 bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white'
        >
            <span className='text-white text-2xl font-bold'>Current Focus</span>

            <ul className='list-disc list-inside space-y-3'>
                <li className='text-gray-300 marker:text-[#8B5CF6]'>Improving performance of existing applications</li>
                <li className='text-gray-300 marker:text-[#8B5CF6]'>Fullstack React Performance</li>
                <li className='text-gray-300 marker:text-[#8B5CF6]'>Enhancing accessibility in web applications</li>
            </ul>
        </div>
    )
}

export default CurrentFocus