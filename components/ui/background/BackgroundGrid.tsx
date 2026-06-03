import React from 'react'
import WhoIAm from './WhoIAm'
import CurrentFocus from './CurrentFocus'
import Values from './Values'

const BackgroundGrid = () => {
    return (
        <div className=''>
            <div className='flex flex-col gap-4'>
                <span className='text-md text-blue-200 uppercase'>Background</span>

                <div className='flex flex-col md:flex-row w-full md:items-center items-start justify-between'>
                    <span className='text-6xl font-bold text-white'>Bridging Design & Code</span>

                    <span className='md:w-1/3 font-light text-lg text-gray-400'>
                        I craft seamless digital experiences by combining aesthetic intuition with technical expertise. With a strong foundation in both design and development.
                    </span>
                </div>
            </div>

            <div className='grid grid-cols-12 grid-rows-2 mt-16 gap-6'>
                <div className='md:col-span-8 col-span-12 row-span-1'>
                    <WhoIAm />
                </div>

                <div className='md:col-span-4 col-span-12 row-span-1'>
                    <CurrentFocus />
                </div>

                <div className='col-span-12 row-span-2'>
                    <Values />
                </div>
            </div>
        </div>
    )
}

export default BackgroundGrid