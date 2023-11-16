import './App.css';
import Link from 'next/link'
import React from 'react';
import MouseTrail from '../components/mouseTrail/trail';
import HomeBody from '../components/homePage/homeBody';
import EmailButton from '../components/homePage/emailButton';
import AppFooter from '../components/footer/footer';

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
            <Link href="/faq" className="text-lg">FAQ</Link>
            <EmailButton/>
            <Link href="/login" className="text-lg mr-10 login-button">Log In!</Link>
        </header>
        <HomeBody/>
        <AppFooter/>
      </div>
    </MouseTrail>
  );
  }

export default function App() {
  return (
    <HomePage/>
  );
}