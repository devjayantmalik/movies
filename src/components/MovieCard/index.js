import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  const { poster, title } = movie;
  return (
    <article className="card movie-card">
      <header className="card-header">
        <img src={poster} alt={title} className="card-img-top poster" />
      </header>
      <div className="card-body mt-2">
        <h3 className="h4">{title}</h3>
      </div>
    </article>
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
