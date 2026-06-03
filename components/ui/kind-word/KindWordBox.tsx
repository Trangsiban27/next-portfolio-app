'use client'
import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { MoveUpRight } from 'lucide-react'

const KindWordBox = ({ data }: { data: any }) => {

    const handleClick = () => {
        window.open('https://www.linkedin.com/in/trangbandev/', '_blank')
    }

    return (
        <div
            className='flex flex-col gap-6 h-full bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white'
        >
            <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold text-[#8B5CF6]'>99</span>

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

            <span className='text-gray-300 w-[96%]'>
                " {data.text} "
            </span>

            <div className='flex items-center gap-4'>
                <Image
                    src={data.author.avatar}
                    alt={data.author.name}
                    width={45}
                    height={45}
                    className='rounded-full'
                />
                <div className='flex flex-col'>
                    <span className='block text-sm font-semibold text-white'>{data.author.name}</span>
                    <span className='block text-xs text-gray-400'>{data.author.role}</span>
                </div>
            </div>
        </div>
    )
}

export default KindWordBox