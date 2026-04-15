import TextWrapHero from '@/components/common/TextWrapHero'
import React from 'react'

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <video
                    src="/hero-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Nội dung trên Video */}
            <div className="absolute z-10 flex h-full flex-col items-start justify-center text-white left-10">
                <h1 className="font-inter text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white mb-3">
                    Hello! I'm
                </h1>

                <h2 className="font-syne text-5xl md:text-7xl font-extrabold bg-linear-to-r from-[#A855F7] to-[#6366F1] bg-clip-text text-transparent tracking-tighter leading-[0.8]">
                    Trang Si Ban
                </h2>
            </div>

            <div className="absolute z-10 flex h-full flex-col items-start justify-center text-white right-10 gap-y-2">
                <h1 className="font-inter text-xs md:text-2xl">A Creative</h1>
                <TextWrapHero />
            </div>
        </section>
    )
}

export default Hero