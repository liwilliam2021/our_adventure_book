'use client'

import {React, useState} from 'react';
import { useRouter } from 'next/navigation';
import './homeBody.css'

const HomeBody = () => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    return (
      <section className="get-started" style={{ height: '60vh', backgroundColor: isHovered ? 'rgba(76, 175, 80, 0.5)' : 'transparent'}}>
            <span className='opacity-75'>An app for LDRs:</span>
            <h1>Welcome to Our Adventure Book!</h1>
            <p>The start to a thrilling shared adventure awaits...</p>
            <button 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {router.push('/signup');}}
                className='get-started-button'
            >
                Get Started!
            </button>
      </section>
    )
}

export default HomeBody