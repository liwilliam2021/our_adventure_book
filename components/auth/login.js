import React, { useState } from "react";
import firebase from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Handle login success
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
