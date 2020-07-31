import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductionVideos from "../pages/ProductionVideos";
import Watch from "../pages/Watch";
import Search from "../pages/Search";
import Productions from "../pages/Productions";
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
      <Route path="/production/:id" exact component={ProductionVideos} />
      <Route path="/productions" exact component={Productions} />
      <Route path="/watch/:id" exact component={Watch} />
      <Route path="/search/:text" exact component={Search} />
      <Route path="/404" exact component={PageNotFound} />
      <Route path="/500" exact component={ServerError} />
    </Switch>
  </HashRouter>
);

export default SiteRouter;
