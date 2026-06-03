import React from 'react'

const WhyBox = ({ data }: { data: any }) => {
    return (
        <div
            className='flex flex-col gap-5 h-full bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white'
        >
            {data.icon}

            <span className='text-2xl font-bold text-white'>
                {data.title}
            </span>

            <span className='text-md text-gray-300'>
                {data.text}
            </span>
        </div>
    )
}

export default WhyBox