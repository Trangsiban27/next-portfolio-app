import { Database, Hammer, MonitorSmartphone } from 'lucide-react'
import React from 'react'
import MyArsenalBox from './MyArsenalBox'

const MyArsenalGrid = () => {

    const values = [
        {
            title: 'Frontend',
            icon: <MonitorSmartphone className='text-white' />,
            stacks: [
                'React / NextJS',
                'Tailwind CSS',
                'Bootstrap',
                'Typescript',
                'MUI',
                'ShadcnUI',
                'Redux',
                'React Query',
                'Zustand',
                'Redux Toolkit'
            ]
        },
        {
            title: 'Backend',
            icon: <Database className='text-white' />,
            stacks: [
                'Node.js',
                'Express',
                'MongoDB',
                'PostgreSQL',
                'REST API',
                'JWT Authentication',
                'Bcrypt',
                'Socket.IO',
                'Redis'
            ]
        },
        {
            title: 'Other Tools',
            icon: <Hammer className='text-white' />,
            stacks: [
                'Git',
                'Postman',
                'Swagger',
                'Figma',
                'Photoshop',
                'Jira',
                'Trello',
                'Notion',
                'Slack',
                'Vercel',
                'AWS'
            ]
        }
    ]

    return (
        <div>
            <span className='text-6xl font-bold text-white'>My Arsenal</span>

            <div className='grid md:grid-cols-3 gap-6 mt-16'>
                {values?.map((item) => (
                    <MyArsenalBox key={item.title} data={item} />
                ))}
            </div>
        </div>
    )
}

export default MyArsenalGrid