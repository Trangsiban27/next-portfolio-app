import Header from '@/components/layout/Header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen w-full'>
            <Header />

            <main className="flex-1 overflow-y-auto pb-8 custom-scrollbar">
                <div className="max-w-400 mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default layout