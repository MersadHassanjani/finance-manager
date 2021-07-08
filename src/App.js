import "./App.css";
import "./zephyr.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wallets from "./Components/Wallets/Wallets";
import NotFound from "./Components/NotFound/NotFound";
import CategoryPage from "./Components/Category/CategoryPage";
import Login from "./Components/Login/Login";
import useToken from "./Utils/useToken/useToken";

function App() {
  const { token, setToken } = useToken();
  // setInterval(() => {
  //   console.log("token", token);
  // }, 2000);
  // const [token, setToken] = useState(false);

  // console.log("token", token || "dunnoooo");
  // console.log("token", token);
  return (
    <Router>
      <div className="App" style={{ height: "100vh", maxHeight: "100vh" }}>
        <Navbar logggedstate={!!token} logoutFunction={() => setToken("")} />
        <Switch>
          <Route exact path="/">
            <button
              onClick={() => {
                console.log(`token state before manual login: ${!!token}`);
                setToken("token3");
                console.log(`token state after manual login: ${!!token}`);
              }}
            >
              {" "}
              click to log in
            </button>
            <button
              onClick={() => {
                console.log(`token state before manual login: ${!!token}`);
                setToken("");
                console.log(`token state after manual login: ${!!token}`);
              }}
            >
              {" "}
              click to log out
            </button>

            {token && <Dashboard />}
            {!token && <Login setLoginStatus={(result) => setToken(result)} />}
          </Route>

          <Route exact path="/wallets">
            {token && <Wallets />}
            {!token && <Login setLoginStatus={(result) => setToken(result)} />}
          </Route>

          <Route exact path="/categories">
            {token && <CategoryPage />}
            {!token && <Login setLoginStatus={(result) => setToken(result)} />}
          </Route>

          <Route>
            {/* 404 */}
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
