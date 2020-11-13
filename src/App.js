import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./Login";
import Dashboard from "./Dashboard";
import './App.css';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs =() => {
    setEmail('');
    setPassword('');

  }

  const clearErrors =() => {
    setEmailError('');
    setPasswordError('');
    
  }

  const handleLogin = () => {
    clearErrors();
    fire 
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
             default:

      }
    })

  }

  const handleSignup =() => {
    clearErrors();
    fire 
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
            default:

      }
    })

  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
    if(user){
      clearInputs();
      setUser(user);
    }else{
      setUser("");
    }
  })
  }

  useEffect (()=> {
    authListener();
  },[])

  return (
    <div>
    <div>
    <h1 style={{backgroundColor:"lightGrey",padding:"10px 10px 10px"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKeR2CgVsIMngnmVclCPLQU26sD-cj0Sqybw&usqp=CAU" height="90px" width="300px" alt="fooders-Logo" /><span style={{fontStyle:"italic", fontSize:"15px", verticalAlign: "sub",paddingLeft:"30px"}} >Order food at your door steps.</span></h1>
    </div>
    <div className="App">
     { user ? (
      <Dashboard 
        user={user.email}
        handleLogout={handleLogout}
      />
     ) : (
       <>
      <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin} 
      handleSignup={handleSignup} 
      hasAccount = {hasAccount}
      setHasAccount = {setHasAccount}
      emailError = {emailError}
      passwordError = {passwordError}
      />
      </>
     )}
      
    </div>
    </div>
  );
}

export default App;
