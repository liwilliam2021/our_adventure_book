import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../components/auth/firebase";
import '../app/globals.css'
import '../components/auth/form.css'
import AppFooter from "../components/footer/footer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [passwordMatchMessage, setPasswordMatchMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const signUp = (e) => {
    e.preventDefault();
    if (password !== secondPassword) {
      setPasswordMatchMessage (true)
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLoggedIn(true);
        const user = auth.currentUser;
        updateProfile(user, {displayName: name})
        setPasswordMatchMessage (false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(false);
      });
    }
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
          <div className='mt-5 text-lg font-bold text-center text-black'>Sign Up</div>
          <form onSubmit={signUp} className="vertical-form text-black">
            <input
              type="name"
              placeholder="Charles Muntz"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="spirit_o_adventure@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={secondPassword}
              onChange={(e) => setSecondPassword(e.target.value)}
            ></input>
            <button type="submit">Sign Up</button>
          </form>
          {passwordMatchMessage && <div className='mt-2 text-lg text-center text-red-600'>Passwords don't match</div>}
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link href="/login" className='mt-5 text-lg text-blue-600'>Already have an account?</Link>
          </div>
        </div>
      <div className="flex-1"/>
    </div>
    <AppFooter/>
  </div>
  ); 
};

export default SignUp;