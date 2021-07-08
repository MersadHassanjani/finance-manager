import "./App.css";
import "./zephyr.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wallets from "./Components/Wallets/Wallets";
import NotFound from "./Components/NotFound/NotFound";
import CategoryPage from "./Components/Category/CategoryPage";

function App() {
  // const subtitle = "Your financial best friend!";
  return (
    <Router>
      <div className="App" style={{ height: "100vh", maxHeight: "100vh" }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/wallets">
            <Wallets />
          </Route>
          <Route exact path="/categories">
            <CategoryPage />
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
