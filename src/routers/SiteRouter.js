import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductionVideos from "../pages/ProductionVideos";
import Watch from "../pages/Watch";
import Search from "../pages/Search";
import Productions from "../pages/Productions";
import Cinemas from "../pages/Cinemas";
import PageNotFound from "../pages/Errors/404";

import Header from "../components/Header";
import CinemaVideos from "../pages/CinemaVideos";

const SiteRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/productions" exact component={Productions} />
      <Route path="/cinemas" exact component={Cinemas} />
      <Route path="/production/:id" exact component={ProductionVideos} />
      <Route path="/cinema/:id" exact component={CinemaVideos} />
      <Route path="/watch/:id" exact component={Watch} />
      <Route path="/search/:text" exact component={Search} />
      <Route path="*" exact component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default SiteRouter;
