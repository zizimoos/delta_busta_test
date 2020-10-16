import React, { useEffect, useState } from "react";
import Router from "Components/Router";
import GlobalStyles from "./GlobalStyles";
import { authService } from "../fbase";

// import { dbService } from "../fbase";
// import { dockId } from "../Routes/Auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  // const SignOut = async () => {
  //   authService.signOut();
  // };
  // //beforeunload event를 사용해서
  // const listener = async (event) => {
  //   event.preventDefault();
  //   event.returnValue = "";
  //   try {
  //     //console.log("Document written with ID in Menu: ", dockId);
  //     //console.log("authService.currentUser", authService.currentUser.email);
  //     authService
  //       .signOut()
  //       .then(await dbService.collection("loggedID").doc(`${dockId}`).delete());
  //   } catch {
  //   } finally {
  //     SignOut();
  //   }
  // };
  // window.addEventListener("beforeunload", listener);

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
