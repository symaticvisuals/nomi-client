import React from "react";
import "./Login.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Login() {
  return (
    <div className="authentication login">
      <div className="details">
        <h1>Login to Your Account</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nostrum accusantium
          <br />
          vero facere ad adipisci nam laudantium beatae odio dolore!
        </p>
      </div>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="submit-button">
          Login to Your Account
          <ArrowForwardIcon />
        </button>
      </form>
      <a href="www.google.com">Forgot Password?</a>
    </div>
  );
}

export default Login;
