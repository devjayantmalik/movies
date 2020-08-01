import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, poster, title } = movie;
  return (
    <Link to={`/watch/${id}`} className="nav-link">
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

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

MovieCard.defaultProps = {
  movie: {
    poster: "",
    title: "",
  },
};

export default MovieCard;
