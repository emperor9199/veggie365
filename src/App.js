import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutScreen from "./Screens/AboutScreen/AboutScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import CheckoutStatus from "./components/CheckoutStatus/CheckoutStatus";

function App() {
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState(false);
  let location = window.location.pathname;

  useEffect(() => {
    if (location === "/") {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [location]);

  return (
    <>
      <Router>
        <Navbar setToggle={setToggle} toggle={toggle} path={path} />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/aboutus" component={AboutScreen} exact />
          <Route path="/checkout" component={CheckoutStatus} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
