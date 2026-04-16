'use client'
import { MoveUpRight } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { useRouter } from 'next/navigation'

const RecommendItem = ({ data }: { data: any }) => {
    const router = useRouter()

    const handleClick = () => {
        window.open(data?.linkedin_url, '_blank')
    }

    return (
        <div className='w-200 p-6 shadow-sm bg-white/5 backdrop-blur-md rounded-lg'>
            <div className='flex items-center justify-between'>


                <div className='flex items-center gap-4'>
                    <div className='w-8 h-8 rounded-lg overflow-hidden'>
                        <img src={data?.company_logo} alt="company_logo" />
                    </div>
                    <span className='text-white font-semibold'>{data?.company}</span>
                </div>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className='border border-white p-2 rounded-sm cursor-pointer' onClick={handleClick}>
                            <MoveUpRight color='white' size={14} />
                        </div>
                    </TooltipTrigger>

                    <TooltipContent>
                        <p>View on Linkedin</p>
                    </TooltipContent>
                </Tooltip>

            </div>

            <div className='mt-10 flex flex-col gap-y-6'>
                <div className='flex gap-4'>
                    <div className='w-12 h-12 rounded-full overflow-hidden'>
                        <img src={data?.avatar} alt="avatar" />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-white font-bold'>{data?.name}</span>
                        <span className='text-white/60 font-semibold'>{data?.position}</span>
                    </div>
                </div>

                <div>
                    <p className='text-white text-lg'>{data?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendItem