import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import Auth from "Routes/Auth";
import Home from "Routes/Home/index";
import Product from "Routes/Product";
import Company from "Routes/Company";
import Detail from "Routes/Detail";
import AuthAdimn from "Routes/AuthAdmin";

export default ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      <Header userObj={userObj}></Header>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/company" component={Company}></Route>
            <Route path="/detail" component={Detail}></Route>

            <Redirect from="*" to="/"></Redirect>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth></Auth>
            </Route>
            <Route exact path="/azerckidforever" component={AuthAdimn}></Route>
            <Route path="/product" component={Product}></Route>
            {/* <Redirect from="*" to="/"></Redirect> */}
          </>
        )}
      </Switch>
    </Router>
  );
};
