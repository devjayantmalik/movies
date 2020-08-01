import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, classNames }) => {
  const publicUrl = process.env.PUBLIC_URL || "";

  return <img className={classNames} src={`${publicUrl}${src}`} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classNames: PropTypes.string,
};

Image.defaultProps = {
  classNames: "",
  alt: "",
};

export default Image;
