import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Watch from "../pages/Watch";
import Search from "../pages/Search";
import PageNotFound from "../pages/Errors/404";
import ServerError from "../pages/Errors/500";

import Header from "../components/Header";

const SiteRouter = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route to="/" exact component={Home} />
      <Route to="/category/:name" exact component={Category} />
      <Route to="/watch/:id" exact component={Watch} />
      <Route to="/search/:text" exact component={Search} />
      <Route to="/404" exact component={PageNotFound} />
      <Route to="/500" exact component={ServerError} />
    </Switch>
  </HashRouter>
);

export default SiteRouter;
