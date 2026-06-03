import { Zap } from 'lucide-react'
import React from 'react'

const ProjectWrap = () => {
    return (
        <div className='group bg-[#101727] p-10 md:p-12 rounded-3xl hover:transition-all duration-300 hover:-translate-y-2 hover:border hover:border-white hover:bg-[#3B82F6]'>
            <Zap className='text-[#3B82F6] group-hover:text-black' />

            <div className='flex flex-col mt-8 gap-2'>
                <span className='text-white font-bold text-4xl group-hover:text-black'>4+ Projects</span>
                <span className='text-gray-400 group-hover:text-black'>Shipped with precision and scalability in mind.</span>
            </div>
        </div>
    )
}

export default ProjectWrap