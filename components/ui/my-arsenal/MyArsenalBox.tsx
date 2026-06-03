import React from 'react'

const MyArsenalBox = ({ data }: { data: any }) => {
    return (
        <div
            className='h-full bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white'
        >
            <div className='flex items-center gap-3'>
                {data.icon}
                <span className='text-2xl font-bold text-white'>{data.title}</span>
            </div>

            <div className='flex flex-wrap gap-3 mt-6'>
                {data.stacks.map((stack: string) => (
                    <span key={stack} className='text-md text-gray-300 p-2 px-3 bg-black/60 rounded-md '>{stack}</span>
                ))}
            </div>
        </div>
    )
}

export default MyArsenalBox