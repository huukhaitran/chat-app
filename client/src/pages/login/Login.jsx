import { useContext, useRef } from "react";
import axios from "axios"
import "./login.css";
import { CircularProgress } from "@material-ui/core";
import AuthService from "../../services/auth.service";


export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      email:email.current.value,
      password:password.current.value
    }
    try {
      AuthService.login(user)
    } catch (err) {
      console.log(err);
    }
    
    ;
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Thunder</h3>
          <span className="loginDesc">
            Connect with friend!.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" >Login
              
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Sign up              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
