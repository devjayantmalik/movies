import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Watch from "../pages/Watch";
import Search from "../pages/Search";
import PageNotFound from "../pages/Errors/404";
import ServerError from "../pages/Errors/500";

import Header from "../components/Header";
import Searchbar from "../components/Searchbar";

const SiteRouter = () => (
  <HashRouter>
    <Header />
    <Searchbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category/:name" exact component={Category} />
      <Route path="/watch/:id" exact component={Watch} />
      <Route path="/search/:text" exact component={Search} />
      <Route path="/404" exact component={PageNotFound} />
      <Route path="/500" exact component={ServerError} />
    </Switch>
  </HashRouter>
);

export default SiteRouter;
