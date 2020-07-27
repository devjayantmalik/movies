import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, error, success }) => {
  const classes = ["alert", "my-4", "lead", "font-weight-bold"];

  if (!!error) classes.push("alert-danger");
  if (!!success) classes.push("alert-success");

  return (
    <div className="container text-center">
      <p className={classes.join(" ")}>{message}</p>
    </div>
  );
};

Alert.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  message: "No results found.",
};

export default Alert;
