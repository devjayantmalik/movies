import React from "react";
import PropTypes from "prop-types";
import LinkCard from "../LinkCard";

const CinemasList = ({ cinemas }) => {
  cinemas = cinemas.map((cinema) => (
    <LinkCard
      key={cinema.id}
      href={`/cinema/${cinema.id}`}
      title={cinema.title}
      poster={"/images/movie.jpg"}
    />
  ));

  return <div className="movies">{cinemas}</div>;
};

CinemasList.propTypes = {
  cinemas: PropTypes.array,
};

CinemasList.defaultProps = {
  cinemas: [],
};

export default CinemasList;
