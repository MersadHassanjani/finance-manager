import "./App.css";
import "./zephyr.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wallets from "./Components/Wallets/Wallets";
import TransactionList from "./Components/TransactionList/TransactionList";
import NotFound from "./Components/NotFound/NotFound";
import CategoryPage from "./Components/Category/CategoryPage";
import Login from "./Components/Login/Login";
import useToken from "./Utils/useToken/useToken";
import TransactionEditor from "./Components/TransactionEditor/TransactionEditor";
import TransactionAdder from "./Components/TransactionAdder/TransactionAdder";

function App() {
  // localStorage.clear();
  const { token, setToken } = useToken();
  const debugging = false;
  return (
    <Router>
      <div className="App" style={{ height: "100vh", maxHeight: "100vh" }}>
        <Navbar logggedstate={!!token} logoutFunction={() => setToken("")} />
        {/* {!token && <Login setLoginStatus={(result) => setToken(result)} />} */}
        {debugging && (
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
        )}
        {debugging && (
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
        )}

        {!token && <Login setLoginStatus={(result) => setToken(result)} />}

        <Switch>
          <Route exact path="/">
            {token && <Dashboard />}
            {/* {!token && <Login setLoginStatus={(result) => setToken(result)} />} */}
          </Route>

          <Route exact path="/txe/:wallid/:trxid">
            {token && <TransactionEditor />}
            {/* {!token && <Login setLoginStatus={(result) => setToken(result)} />} */}
          </Route>

          <Route exact path="/txa/:wallid">
            {token && <TransactionAdder />}
            {/* {!token && <Login setLoginStatus={(result) => setToken(result)} />} */}
          </Route>

          <Route exact path="/wallets">
            {token && <Wallets />}
            {/* {!token && <Login setLoginStatus={(result) => setToken(result)} />} */}
          </Route>

          <Route exact path="/wallets/:id">
            {token && <TransactionList />}
            {/* {!token && <Login setLoginStatus={(result) => setToken(result)} />} */}
          </Route>

          <Route exact path="/categories">
            {token && <CategoryPage />}
            {/* {!token && <Login setLoginStatus={(result) => setToken(result)} />} */}
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
