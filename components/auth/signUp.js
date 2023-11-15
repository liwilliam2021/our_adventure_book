import React, { useState } from "react";
import firebase from "./firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Handle the sign-up process
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
