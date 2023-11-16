'use client'

import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { signOut } from "../auth/authUtils";
import './footer.css'

const AppFooter = () => {

  const router = useRouter();
  const SignOutButton = () => {
    return (
      <button onClick={() => {
        signOut()
        router.push('/');
      }}>Log Out</button>
    );
  };

  return (
    <div>
      <footer className="footer">
        <Link href="/">Home</Link>
        <p>© 2023 Adventure is Out There!. No rights reserved.</p>
        <SignOutButton/>
      </footer>
    </div>
  )
};

export default AppFooter;