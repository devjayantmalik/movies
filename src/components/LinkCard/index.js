import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";
import { Link } from "react-router-dom";

const LinkCard = ({ poster, title, href }) => {
  return (
    <Link to={href} className="nav-link">
      <article className="card movie-card">
        <header className="card-header">
          <Image src={poster} alt={title} classNames="card-img-top poster" />
        </header>
        <div className="card-body mt-2">
          <h3 className="h4">{title}</h3>
        </div>
      </article>
    </Link>
  );
};

LinkCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string,
  href: PropTypes.string,
};

LinkCard.defaultProps = {
  title: "",
  href: "#",
};

export default LinkCard;
