import React, { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import AboutScreen from "./Screens/AboutScreen/AboutScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutStatus from "./components/CheckoutStatus/CheckoutStatus";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import UpdateUserScreen from "./Screens/UpdateUserScreen/UpdateUserScreen";
import PrimaryNav from "./components/PrimaryNav/PrimaryNav";
import SecondaryNav from "./components/SecondaryNav/SecondaryNav";
import TestProducts from "./Screens/TestProducts";
import CartScreen from "./Screens/CartScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";

function App() {
  const [toggle, setToggle] = useState(false);
  // const [path, setPath] = useState(false);
  // let location = window.location.pathname;

  // useEffect(() => {
  //   if (location === "/") {
  //     setPath(true);
  //   } else {
  //     setPath(false);
  //   }
  // }, [location]);

  return (
    <>
      <Router>
        <PrimaryNav />
        <SecondaryNav setToggle={setToggle} toggle={toggle} />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          {/* <Route path="/login" component={LoginPage} exact /> */}
          <Route path="/signup" component={LoginPage} exact />
          <Route path="/aboutus" component={AboutScreen} exact />
          <Route path="/checkout" component={CheckoutStatus} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegistrationScreen} exact />
          <Route path="/update-user" component={UpdateUserScreen} exact />
          <Route path="/all-products" component={TestProducts} exact />
          <Route path="/cart" component={CartScreen} exact />
          <Route path="/shipping" component={ShippingScreen} exact />
          <Route path="/payment" component={PaymentScreen} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
