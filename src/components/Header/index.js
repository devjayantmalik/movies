import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <header>
      <nav className="navbar navbar-light navbar-expand-md">
        <Link to="/" className="navbar-brand">
          Movie Site
        </Link>
        <button
          className="navbar-toggler"
          onClick={() => setIsHidden(!isHidden)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isHidden ? "" : "show"}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cinemas" className="nav-link">
                Cinemas
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/productions" className="nav-link">
                Productions
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
