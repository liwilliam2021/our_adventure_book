import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../components/auth/firebase";
import '../app/globals.css'
import '../components/auth/form.css'
import AppFooter from "../components/footer/footer";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const doLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(false);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/book');
    }
  }, [isLoggedIn, router]);

  return (
    <div>
      <div className="home-container flex">
        <div className="flex-1"/>
        <div className="mt-10 mb-10 bg-white flex-1">
          <div className='mt-5 text-lg font-bold text-center text-black'>Log In</div>
            <form onSubmit={doLogIn} className="vertical-form text-black">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button type="submit">Log In</button>
            </form>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Link href="/signup" className='mt-5 text-lg text-blue-600'>Don't have an account?</Link>
            </div>
          </div>
      <div className="flex-1"/>
    </div>
    <AppFooter/>
  </div>
  ); 
};

export default LogIn;