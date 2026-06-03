import SkillMarquee from '@/components/common/SkillMarquee'
import LetBuild from '@/components/LetBuild'
import About from '@/components/ui/about/About'
import BackgroundGrid from '@/components/ui/background/BackgroundGrid'
import MyEducations from '@/components/ui/educations/MyEducations'
import Hero from '@/components/ui/hero/Hero'
import KindWordGrid from '@/components/ui/kind-word/KindWordGrid'
import ArchiveWrap from '@/components/ui/mainGrid/ArchiveWrap'
import MainGrid from '@/components/ui/mainGrid/MainGrid'
import ProjectWrap from '@/components/ui/mainGrid/ProjectWrap'
import StatusWrap from '@/components/ui/mainGrid/StatusWrap'
import MyArsenalGrid from '@/components/ui/my-arsenal/MyArsenalGrid'
import ProfessionalTenureGrid from '@/components/ui/professional-tenure/ProfessionalTenureGrid'
import Recommends from '@/components/ui/recommend/Recommends'
import WhatIDo from '@/components/ui/what-i-do/WhatIDo'
import WhyWorkWithMeGrid from '@/components/ui/why-work-with-me/WhyWorkWithMeGrid'
import MyWork from '@/components/ui/work/MyWork'
import React from 'react'

const page = () => {
    return (
        <div className='md:px-20 px-6'>
            {/* ver1 */}
            {/* <Hero />
            <About />
            <WhatIDo />
            <MyEducations />
            <MyWork />
            <SkillMarquee />
            <Recommends /> */}

            {/* Ver2 */}
            <MainGrid />

            <div className='grid md:grid-cols-3 gap-6 mt-6'>
                <ProjectWrap />
                <ArchiveWrap />
                <StatusWrap />
            </div>

            <div className='mt-32'>
                <BackgroundGrid />
            </div>

            <div className='mt-32'>
                <MyArsenalGrid />
            </div>

            <div className='mt-32'>
                <ProfessionalTenureGrid />
            </div>

            <div className='mt-32'>
                <WhyWorkWithMeGrid />
            </div>

            <div className='mt-32'>
                <KindWordGrid />
            </div>

            <div className='my-32'>
                <LetBuild />
            </div>
        </div>
    )
}

export default page