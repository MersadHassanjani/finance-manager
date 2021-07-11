import React from "react";
import "animate.css";
import "./Login.css";
import { useState } from "react";
// import { Container } from "react-bootstrap";
// import back1 from "../../assets/back1.jpg";

const Login = ({ setLoginStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const axios = require("axios");
  const handleLoginSubmit = async () => {
    let resultData;
    const msgBody = {
      username,
      password,
    };
    try {
      resultData = await axios.post("localhost:5000/login", msgBody);
    } catch (err) {
      console.log(`Login error:\n${err}`);
    }
    console.log(
      `login result: ${resultData}\n sent json: ${JSON.stringify(msgBody)}`
    );
    setLoginStatus("token2");
  };
  return (
    <div id="loginContainer">
      <div className="container-fluid">
        {/* <div className="col-2"></div> */}
        <h1 className="loginH1 farsiestb">به "مدیر مالی من" خوش آمدید!</h1>
        <form className="loginform">
          <h3 className="loginH3 farsiest ">ورود به حساب کاربری</h3>

          <div className="form-group loginInputGroup">
            <label className="loginLabel farsiest">ایمیل</label>
            <input
              type="email"
              className="form-control farsiest tc"
              placeholder="ایمیل خود را وارد کنید"
              onChange={(e) => {
                setUsername(e.target.value);
                // console.log(username);
              }}
            />
          </div>

          <div className="form-group loginInputGroup">
            <label className="loginLabel farsiest">رمز عبور</label>
            <input
              type="password"
              className="form-control farsiest tc"
              placeholder="رمز عبور خود را وارد کنید"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block farsiest loginBtn
          animate__animated animate__pulse animate__infinite animate__slower "
            onClick={(e) => {
              e.preventDefault();
              console.log("loginBtn clocked");
              handleLoginSubmit();
            }}
          >
            ورود
          </button>
        </form>
        {/* <div className="col-2"></div> */}
      </div>
    </div>
  );
};

export default Login;
