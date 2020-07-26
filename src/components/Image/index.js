import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, classNames }) => {
  return <img className={classNames} src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classNames: PropTypes.string,
};

Image.defaultProps = {
  classNames: "",
  src: "",
  alt: "",
};

export default Image;
