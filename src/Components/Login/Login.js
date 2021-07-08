import React from "react";
import "animate.css";
import "./Login.css";
// import { Container } from "react-bootstrap";

const Login = ({ setLoginStatus }) => {
  return (
    <div className="container">
      {/* <div className="col-2"></div> */}
      <h1 className="loginH1 farsiestb">به "مدیر مالی من" خوش آمدید!</h1>
      <form className="loginform">
        <h3 className="loginH3 farsiest ">ورود به حساب کاربری</h3>

        <div className="form-group loginInputGroup">
          <label className="loginLabel farsiest">ایمیل</label>
          <input
            type="email"
            className="form-control farsiest"
            placeholder="ایمیل خود را وارد کنید"
          />
        </div>

        <div className="form-group loginInputGroup">
          <label className="loginLabel farsiest">رمز عبور</label>
          <input
            type="password"
            className="form-control farsiest"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block farsiest loginBtn
          animate__animated animate__pulse animate__infinite animate__slower "
          onClick={(e) => {
            e.preventDefault();
            console.log("loginBtn clocked");
            alert("ggg");
            setLoginStatus("token2");
          }}
        >
          ورود
        </button>
      </form>
      {/* <div className="col-2"></div> */}
    </div>
  );
};

export default Login;
