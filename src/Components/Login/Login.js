import React from "react";
import "animate.css";
import "./Login.css";
import { useState } from "react";
import getToken from "../../Utils/GetToken";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";

// import { Container } from "react-bootstrap";
// import back1 from "../../assets/back1.jpg";

const Login = ({ setLoginStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const axios = require("axios");
  const history = useHistory();
  const toDashboard = useCallback(() => history.push(`/`), [history]);
  const handleLoginSubmit = async () => {
    let resultData = { token: "" };
    const msgBody = {
      username,
      password,
    };
    try {
      resultData = (await axios.post("http://localhost:5000/login", msgBody))[
        "data"
      ];
    } catch (err) {
      console.log(`Login error:\n${err}`);
    }
    console.log(
      `login result: ${JSON.stringify(
        resultData
      )}\n sent json: ${JSON.stringify(msgBody)}`
    );
    if (resultData["msg"] !== "ok")
      alert("Username or password inccorect!\nTry again.");
    console.log(
      `Result type: ${typeof resultData["token"]}\nKey: ${resultData["token"]}`
    );
    console.log(resultData["token"]);
    setLoginStatus(resultData["token"]);
    toDashboard();
  };
  return (
    <div id="loginContainer">
      <div className="container-fluid">
        {/* <div className="col-2"></div> */}
        <h1 className="loginH1 farsiestb">به "مدیر مالی من" خوش آمدید!</h1>
        <form className="loginform">
          <h3 className="loginH3 farsiest ">ورود به حساب کاربری</h3>

          <div className="form-group loginInputGroup">
            <label className="loginLabel farsiest">نام کاربری</label>
            <input
              type="email"
              className="form-control farsiest ltr tc"
              placeholder="نام کاربری خود را وارد کنید"
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
              className="form-control farsiest ltr tc"
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
          {/* <button
            type="submit"
            className="btn btn-dark btn-lg btn-block farsiest loginBtn
          animate__animated animate__pulse animate__infinite animate__slower "
            onClick={(e) => {
              e.preventDefault();
              console.log("FastLoginBtn clocked");
              console.log(`user ${username} pass ${password}`);
              setTimeout(() => handleLoginSubmit(), 100);
              // handleLoginSubmit();
            }}
          >
            ورود سریع
          </button> */}
        </form>
        {/* <div className="col-2"></div> */}
      </div>
    </div>
  );
};

export default Login;
