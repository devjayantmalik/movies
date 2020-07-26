import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand">Movie Site</a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/action" className="nav-link">
                Action Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/watch/1" className="nav-link">
                Watch Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search/movie_name" className="nav-link">
                Search Movie
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
