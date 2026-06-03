import React from 'react'

const StatusWrap = () => {
    return (
        <div className='flex flex-col gap-4 group bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white hover:bg-[#3B82F6]'>
            <span className='text-2xl font-bold text-white'>Current Status</span>

            <div className='p-4 bg-black rounded-xl flex items-center gap-3'>
                <div className='bg-green-500 h-2 w-2 rounded-full'></div>
                <span className='text-white'>Open for new Opportunities</span>
            </div>

            <span className='text-gray-400 group-hover:text-black'>Passionate about Frontend React / NextJS or Fullstack Fresher NodeJs + React</span>
        </div>
    )
}

export default StatusWrap