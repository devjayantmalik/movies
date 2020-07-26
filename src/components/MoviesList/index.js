import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";

const MovieList = ({ movies }) => {
  movies = movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  return <div className="movies">{movies}</div>;
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
