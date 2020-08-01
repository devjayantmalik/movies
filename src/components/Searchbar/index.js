import React, { useState } from "react";
import PropTypes from "prop-types";

const Searchbar = ({ placeholder, onSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();

    onSubmit(searchText);
    return false;
  };

  return (
    <div className="container">
      <form className="form-inline" onSubmit={handleFormSubmission}>
        <input
          type="text"
          className="form-control w-75 border-primary font-weight-bold"
          autoFocus
          required
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder={placeholder}
        />
        <button
          type="submit"
          disabled={!searchText}
          className="btn btn-outline-primary mx-4"
        >
          Search
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

Searchbar.defaultProps = {
  placeholder: "Enter text to search...",
};

export default Searchbar;
