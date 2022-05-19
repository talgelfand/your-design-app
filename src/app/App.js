import React from "react"
import Header from "../components/Header"
import Main from "../pages/Main"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MyCourses from "../pages/MyCourses"
import ErrorPage from "../pages/ErrorPage"
import Catalogue from "../pages/Catalogue/Catalogue"
import Wishlist from "../pages/Wishlist"
import About from "../pages/About"
import Teachers from "../pages/Teachers"
import Contacts from "../pages/Contacts"
import SingleCourse from "../pages/SingleCourse"
import Cart from "../pages/Cart"
import SignupPage from "../pages/SignupPage"
import LoginPage from "../pages/LoginPage"
import PrivateRoute from "../components/PrivateRoute"
import PasswordResetPage from "../pages/PasswordResetPage"
import Profile from "../pages/Profile"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Checkout from "../components/Forms/Checkout"
import CheckoutSuccess from "../pages/CheckoutSuccess"

const App = () => {
  const stripePromise = loadStripe(
    "pk_test_51J29x0JccQaQ8IC7oPGDqca0pZUBkgYdVFmPXArQzAh6KHnmIYswbPjlpbuLinxeVYv0e6XsSavahyRYQDP952qy007FPNaLSm"
  )

  return (
    <div className="App">
      <Router basename="/react-art-courses">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/reset-password" component={PasswordResetPage} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/contacts" component={Contacts} />
          <PrivateRoute path="/mycourses" component={MyCourses} />
          <PrivateRoute path="/wishlist" component={Wishlist} />
          <PrivateRoute path="/cart" component={Cart} />
          <PrivateRoute path="/checkout" component={Checkout}>
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          </PrivateRoute>
          <PrivateRoute path="/success" component={CheckoutSuccess} />
          <Route path="/course/:id" component={SingleCourse} />
          {/* id is a parameter */}
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
