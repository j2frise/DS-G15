// =========================================================
// * Gestion contact
// =========================================================

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/hetic.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";

import Main from "./pages/Main";

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById("root")
);
