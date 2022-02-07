import React from "react";

export const setSession = session => {
  localStorage.removeItem("session");
  localStorage.setItem("session", JSON.stringify(session));
};

export const getSession = () => {
  const session = localStorage.getItem("session");
  if (!session) {
    return {login: false, users: []};
  } else {
    return JSON.parse(session);
  }
};

export const SessionContext = React.createContext(getSession());
