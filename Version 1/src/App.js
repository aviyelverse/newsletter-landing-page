import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "./assets/css/styles.scss";
// Pages
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Archives from "./pages/Archives";

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
  }, [location.pathname]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/archives">
          <Archives />
        </Route>
      </Switch>
    </>
  );
}

export default App;
