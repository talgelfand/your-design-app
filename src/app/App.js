import React from "react";
import Header from "../components/Header";
import Main from "../pages/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Catalogue from "../pages/Catalogue/Catalogue";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "../components/PrivateRoute";
import PasswordResetPage from "../pages/PasswordResetPage";
import CheckoutSuccess from "../pages/CheckoutSuccess";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/reset-password" component={PasswordResetPage} />
          <Route path="/about" component={About} />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/contacts" component={Contacts} />
          <PrivateRoute path="/cart" component={Cart} />
          <PrivateRoute path="/success" component={CheckoutSuccess} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
