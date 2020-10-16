import React, { useEffect, useState } from "react";
import Router from "Components/Router";
import GlobalStyles from "./GlobalStyles";
import { authService } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <Router isLoggedIn={isLoggedIn} userObj={userObj}></Router>
      ) : null}
      <GlobalStyles></GlobalStyles>
      {/* <footer>&copy; {new Date().getFullYear()} DiceHunter</footer> */}
    </>
  );
}

export default App;
