import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Searchbar = ({ placeholder }) => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const onSubmit = (text) => {
    history.replace(`/search/${text}`);
  };

  return (
    <div className="container">
      <form className="form-inline" onSubmit={() => onSubmit(searchText)}>
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
};

Searchbar.defaultProps = {
  placeholder: "Enter text to search...",
};

export default Searchbar;
