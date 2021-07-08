import React from "react";
import "./Login.css";
// import { Container } from "react-bootstrap";

const Login = ({ setLoginStatus }) => {
  return (
    <div className="container">
      {/* <div className="col-2"></div> */}
      <form className="loginform">
        <h3 className="loginH3 farsiest">ورود به حساب کاربری</h3>

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
          className="btn btn-dark btn-lg btn-block farsiest loginBtn"
          onClick={(e) => {
            e.preventDefault();
            console.log("loginBtn clocked");
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
