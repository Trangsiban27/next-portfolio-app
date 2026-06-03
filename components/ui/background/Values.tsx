import React from 'react'

const Values = () => {

    const values = [
        {
            title: 'Core Values',
            description: 'Efficiency over complexity. Quality over quantity. Always be learning.'
        },
        {
            title: 'Clean Architecture',
            description: 'Building with modularity and separation of concerns to ensure future-proof systems.'
        },
        {
            title: 'User Centricity',
            description: 'Technology is a tool to solve human problems. The user always comes first.'
        }
    ]

    return (
        <div
            className='grid md:grid-cols-3 gap-12 group h-full bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white'
        >
            {values.map((value, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <span className='text-6xl font-extrabold text-blue-300'>0{index + 1}</span>

                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold text-white'>{value.title}</span>
                        <span className='mt-2 text-md text-gray-400 w-2/3'>{value.description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Values