import './login.css';
import axios from '../../apiConnect'
import { Context } from "../../context/Context";
import {useContext, useRef } from "react";


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      alert("user doesn't exist")
    }
  };

  
  
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm" onSubmit={handleSubmit}>
      <label>Email</label>
      <input className="loginInput" type="text" placeholder="Enter your email..."
      ref={emailRef}
      />
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter your password..."
      ref={passwordRef}
      />
      <button className="loginButton" type="submit" disabled={isFetching} >Login</button>
    </form>
    
    
  </div>
  )
}
