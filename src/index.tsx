import React from "react";
import ReactDOM from "react-dom";
import "./core/imports.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import NotFound404 from "./app/views/NotFound404.view";
import GlobalStyles from "./core/globalStyles";
import ProjectListView from "./app/views/ProjectList.view";
import ProjectCreateView from "./app/views/ProjectCreate.view";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProjectListView} />
        <Route path="/novo-projeto" exact component={ProjectCreateView} />
        <Route path="/editar-projeto/:id" exact component={ProjectCreateView} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
