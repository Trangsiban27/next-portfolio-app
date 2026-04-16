import SkillMarquee from '@/components/common/SkillMarquee'
import About from '@/components/ui/about/About'
import MyEducations from '@/components/ui/educations/MyEducations'
import Hero from '@/components/ui/hero/Hero'
import Recommends from '@/components/ui/recommend/Recommends'
import WhatIDo from '@/components/ui/what-i-do/WhatIDo'
import MyWork from '@/components/ui/work/MyWork'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <About />
            <WhatIDo />
            <MyEducations />
            <MyWork />

            <SkillMarquee />

            <Recommends />
        </div>
    )
}

export default page