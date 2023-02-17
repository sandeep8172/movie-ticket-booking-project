import SectionOne from "./components/sections/SectionOne";
import SectionTwo from "./components/sections/SectionTwo";
import SectionThree from "./components/sections/SectionThree";
import HomePage from "./components/homePage/HomePage";
import Header from "./components/header/Header";
import Checkout from "./components/checkout/Checkout";
import CheckoutButton from "./components/checkout/CheckoutButton";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/booking" exact>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <CheckoutButton />
      </Route>
      <Route path="/booking/checkout">
        <Checkout />
      </Route>
    </BrowserRouter>
  )
};
export default App;