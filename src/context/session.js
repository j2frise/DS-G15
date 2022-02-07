import React from "react";

export const setSession = session => {
  localStorage.removeItem("session");
  localStorage.setItem("session", JSON.stringify(session));
};

export const getSession = () => {
  const session = localStorage.getItem("session");
  if (!session) {
    return {login_sso: false, login_sso_azure: false, restart_password: false, notaccess: true};
  } else {
    return JSON.parse(session);
  }
};

export const SessionContext = React.createContext(getSession());
