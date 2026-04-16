'use client'
import React from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const skills = [
    "/react.png",
    "/nextjs.png",
    "/ts2.png",
    "/tailwind.webp",
    "/redux.png",
    "/nodejs.gif",
    "/mongo.jpg",
    "/react.png",
    "/nextjs.png",
    "/ts2.png",
    "/tailwind.webp",
    "/redux.png",
    "/nodejs.gif",
    "/mongo.jpg",
]

const SkillMarquee = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true, duration: 8000 }, [
        Autoplay({
            delay: 0,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            playOnInit: true,

        })
    ])

    return (
        <div className="relative w-full overflow-hidden my-40">
            {/* <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: [0, "-33.33%"]
                }}
                transition={{
                    duration: 12,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center px-8 w-40 rounded-lg overflow-hidden"
                    >
                        <img src={skill} alt="" className='w-full object-cover' />
                    </div>
                ))}
            </motion.div> */}

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex backface-hidden touch-pan-y -ml-2.5">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_auto] min-w-0 pl-2.5 flex items-center"
                        >
                            <div className="px-10 flex items-center gap-10">
                                <img src={skill} alt="" className='w-30 object-cover' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillMarquee