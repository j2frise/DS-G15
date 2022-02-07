import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import { Routes } from "../routes";
import { SessionContext, getSession, setSession } from "../context/session";

// pages
import Signin from "./Auth/Signin";
import Register from "./Auth/Register";
import NotFoundPage from "./Error/NotFound";
import Dashboard from "./Dashboard/Dashboard";
import Components from "./Components/Components";
import Forgot from "./Auth/Forgot";

// components
import Loader from "../components/Loader";


const RouteAuth = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => ( <Component {...props} /> ) } />
  );
};

const RouteDashboard = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <Route {...rest} render={props => (
        <>
          <Loader show={loaded ? false : true} />
          <main className="content">
            <Component {...props} />
          </main>
        </>
      )}
      />
  );
};

export default () => {
  const [sess, setSess] = useState(getSession());

  useEffect(
    () => {
      setSess(getSession());
    },
    [sess.login]
  );

  useEffect(()=>{
    (async () => {
      
    })();
  },[])

  return (
    <SessionContext.Provider value={sess}>
       <Switch>
        <RouteAuth exact path={Routes.Auth.path} component={Signin} />
        <RouteAuth exact path={Routes.Register.path} component={Register} />
        <RouteAuth exact path={Routes.Forgot.path} component={Forgot} />
        <RouteAuth exact path={Routes.NotFound.path} component={NotFoundPage} />
        {/*after auth*/}
        <RouteDashboard exact path={Routes.Dashboard.path} component={Dashboard} />
        <RouteDashboard exact path={Routes.Components.path} component={Components} />
        <Redirect to={Routes.NotFound.path} />
      </Switch>
    </SessionContext.Provider>
  );
} 
