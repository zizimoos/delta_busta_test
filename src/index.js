import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

import { authService } from "./fbase";
import { dbService } from "./fbase";
import { dockId } from "./Routes/Auth";

const SignOut = async () => {
  authService.signOut();
};
//beforeunload event를 사용해서
const listener = async (event) => {
  event.preventDefault();
  event.returnValue = "";
  try {
    //console.log("Document written with ID in Menu: ", dockId);
    //console.log("authService.currentUser", authService.currentUser.email);
    authService
      .signOut()
      .then(await dbService.collection("loggedID").doc(`${dockId}`).delete());
  } catch {
  } finally {
    SignOut();
  }
};
window.addEventListener("beforeunload", listener);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
