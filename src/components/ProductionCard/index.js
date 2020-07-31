import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";

const ProductionCard = ({ production }) => {
  const { poster, title } = production;
  return (
    <article className="card movie-card">
      <header className="card-header">
        <Image src={poster} alt={title} classNames="card-img-top poster" />
      </header>
      <div className="card-body mt-2">
        <h3 className="h4">{title}</h3>
      </div>
    </article>
  );
};

ProductionCard.propTypes = {
  production: PropTypes.object.isRequired,
};

ProductionCard.defaultProps = {
  production: {
    poster: "",
    title: "",
  },
};

export default ProductionCard;
