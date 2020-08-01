import React from "react";
import PropTypes from "prop-types";
import LinkCard from "../LinkCard";

const ProductionList = ({ productions }) => {
  productions = productions.map((production) => (
    <LinkCard
      key={production.id}
      href={`/production/${production.id}`}
      title={production.title}
      poster={"/images/movie.jpg"}
    />
  ));

  return <div className="movies">{productions}</div>;
};

ProductionList.propTypes = {
  productions: PropTypes.array,
};

ProductionList.defaultProps = {
  productions: [],
};

export default ProductionList;
