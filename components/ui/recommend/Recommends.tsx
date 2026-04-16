'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { recommendations } from '@/constants/recommendations'
import RecommendItem from './RecommendItem'

const Recommends = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    }

    return (
        <section className='w-full gap-12 my-40 md:px-20 px-8'>
            <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='w-full flex flex-col md:items-center justify-center'
            >
                <span className='text-4xl md:text-8xl text-white font-bold'>My Recommendations</span>
                <span className='text-4xl md:text-8xl text-white font-bold'>Via Linkedin</span>
            </motion.div>

            <div className='mt-20'>
                {recommendations?.map((recom) => (
                    <RecommendItem key={recom?.id} data={recom} />
                ))}
            </div>
        </section>
    )
}

export default Recommends