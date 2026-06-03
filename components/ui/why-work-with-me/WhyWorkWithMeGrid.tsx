import { Album, Brain, GraduationCap, SquareTerminal } from 'lucide-react'
import { title } from 'process'
import React from 'react'
import WhyBox from './WhyBox'

const WhyWorkWithMeGrid = () => {

    const values = [
        {
            title: 'Strong React',
            icon: <SquareTerminal className='text-[#3B82F6]' />,
            text: 'Deep understanding of hooks, context, and state management architectures.'
        },
        {
            title: 'Business Thinking',
            icon: <Brain className='text-[#8B5CF6]' />,
            text: 'I don\'t just code; I build solutions that drive actual business value.'
        },
        {
            title: 'Continuous Learner',
            icon: <GraduationCap className='text-[#3B82F6]' />,
            text: 'Constantly exploring new tech to stay at the cutting edge of development.'
        },
        {
            title: 'Product Mindset',
            icon: <Album className='text-[#8B5CF6]' />,
            text: 'Focus on the end-user experience and overall product lifecycle.'
        }
    ]

    return (
        <div>
            <span className='text-6xl font-bold text-white'>Why Work With Me</span>

            <div className='grid md:grid-cols-4 gap-6 mt-16'>
                {values?.map((item, index) => (
                    <WhyBox key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default WhyWorkWithMeGrid