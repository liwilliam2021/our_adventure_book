import './App.css';
import Link from 'next/link'
import React from 'react';
import MouseTrail from '../components/mouseTrail/trail';
import HomeBody from '../components/homePage/homeBody';
import EmailButton from '../components/homePage/emailButton';

function HomePage() {

  return (
    <MouseTrail>
      <div className="home-container">
        <header className="header flex">
            <div style={{width: '80px', height: '80px', marginBottom: '10px', marginLeft: '50px'}}>
              <img src="/temp_logo.png" alt="Button Image" 
               style={{borderRadius: '160px'}}/>
            </div>
            <Link href="/about" className="text-lg">About Us</Link>
            <Link href="/about" className="text-lg">FAQ</Link>
            <EmailButton/>
            <Link href="/about" className="text-lg mr-10">Login!</Link>
        </header>
        <HomeBody/>
        <footer className="footer">
          <p>© 2023 Adventure is Out There!. No rights reserved.</p>
        </footer>
      </div>
    </MouseTrail>
  );
  }

export default function App() {
  return (
    <HomePage/>
  );
}