import React from "react";
import PropTypes from "prop-types";
import ProductionCard from "../ProductionCard";

const ProductionList = ({ productions }) => {
  productions = productions.map((production) => (
    <ProductionCard key={production.id} production={production} />
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
