// import "./Navbar.css";
import "./Navbar2.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import OutClicked from "../../Utils/OutClicked/OutClicked";
const NavbarLegacy = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="nav nav-tabs">
        <li className="navbar-brand">
          <a href="/">FinancialManager</a>
        </li>
        <li
          className="nav-item"
          style={{
            borderLeft: "2px solid #f1356d",
            height: "50px",
            marginLeft: "20px",
          }}
        ></li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/wallets" className="nav-link">
            Wallets
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cards-and-accounts" className="nav-link">
            Cards and bank accounts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Navbar = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [burgerDropdown, setBurgerDropdown] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-border">
      <div className="container-fluid">
        <Link className="navbar-brand farsiestb" to="/">
          مدیر مالی من
        </Link>
        {/* <li
          className="nav-item"
          style={{
            borderLeft: "2px solid white",
            height: "50px",
            marginLeft: "20px",
          }}
        ></li> */}
        <button
          className={`navbar-toggler ${burgerDropdown ? "" : " collapsed "}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarBurgerBtn"
          aria-controls="navbarBurgerBtn"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setBurgerDropdown(!burgerDropdown);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* add "show" to the className list of the div bellow to show the dropdown. */}
        <div
          className={`collapse navbar-collapse ${
            burgerDropdown ? " show " : ""
          }`}
          id="navbarBurgerBtn"
        >
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <Link
                className="nav-link farsi"
                to="/"
                onClick={() => setBurgerDropdown(false)}
              >
                داشبورد
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link farsi"
                to="/wallets"
                onClick={() => setBurgerDropdown(false)}
              >
                مدیریت کیف پول
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link farsi"
                to="/cards-and-accounts"
                onClick={() => setBurgerDropdown(false)}
              >
                کارتها و حسابها
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link farsi"
                to="/categories"
                onClick={() => setBurgerDropdown(false)}
              >
                دسته بندی
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link farsi"
                to="/settings"
                onClick={() => setBurgerDropdown(false)}
              >
                تنظیمات
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle farsiest ${
                  dropdown1 ? " show " : ""
                }`}
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={(event) => setDropdown1(!dropdown1)}
              >
                حساب کاربری
              </a>
              <OutClicked
                onOutsideClick={() => {
                  setDropdown1(false);
                }}
              >
                <div className={`dropdown-menu ${dropdown1 ? "show" : ""}`}>
                  <a
                    className="dropdown-item farsiest tr"
                    href="/user-account"
                    onClick={() => setBurgerDropdown(false)}
                  >
                    تغییر مشخصات حساب کاربری
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item farsiest tr"
                    href="/logout"
                    onClick={() => setBurgerDropdown(false)}
                  >
                    خروج از سیستم
                  </a>
                </div>
              </OutClicked>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            ></input>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// export default NavbarLegacy;
