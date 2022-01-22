import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";
import "./assets/css/styles.scss";
// components
import Home from "./components/Home";
import SignUp from "./components/Signup";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
