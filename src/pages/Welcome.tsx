import React from 'react'

interface WelcomeProps {}

const WelcomePage: React.FC<WelcomeProps> = () => {
    return (
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-3'>
            <h1 className='text-6xl'>
                Demo Site Deployed with{' '}
                <b className='italic text-orange-500'>Firebase</b>
            </h1>
            <p>- Very Nice</p>
        </div>
    )
}

export default WelcomePage
