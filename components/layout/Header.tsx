'use client'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Work', href: '/work' },
    ];

    return (
        <header className='fixed top-10 left-0 right-0 flex items-center justify-center'>
            <nav className='flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl'>
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className="relative group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='px-6 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300'
                        >
                            {item.name}

                            {/* Đường line hiệu ứng dưới chân chữ */}
                            <span className='absolute bottom-1 left-1/2 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4' />
                        </motion.div>
                    </Link>
                ))}
            </nav>
        </header>
    )
}

export default Header