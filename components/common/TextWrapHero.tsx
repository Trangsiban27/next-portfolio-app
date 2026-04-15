'use client'
import React from 'react'
import { motion } from "framer-motion";

const TextWrapHero = () => {
    const word1 = "FRONTEND".split("");
    const word2 = "DEVELOPER".split("");

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.5,
            },
        },
    };

    const letterVariants: any = {
        initial: { y: 0, rotateX: 0 },
        animate: (i: number) => ({
            y: [0, -100, 100, 0],
            opacity: [1, 0, 0, 1],
            // rotateX: [0, -15, 0],
            transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.1,
                repeatDelay: 2,
                times: [0, 0.4, 0.6, 1],
            },
        }),
    };

    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden perspective-1000">
            <div className="flex -mb-6">
                {word1.map((letter, index) => (
                    <motion.span
                        key={`w1-${index}`}
                        custom={index}
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        className="inline-block text-6xl md:text-7xl font-extrabold bg-linear-to-r from-[#A855F7] to-[#6366F1] bg-clip-text text-transparent tracking-tighter"
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>

            <div className="flex z-10">
                {word2.map((letter, index) => (
                    <motion.span
                        key={`w2-${index}`}
                        custom={index}
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        className="inline-block text-5xl md:text-7xl font-extrabold text-white tracking-tighter"
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}

export default TextWrapHero