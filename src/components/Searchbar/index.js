import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";

const Searchbar = ({ placeholder }) => {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const history = useHistory();

  const onSubmit = (text) => {
    if (location.pathname.indexOf("/search") === -1) {
      history.replace(`/search/${text}`);
    } else {
      history.replace(`/search/${text}`);
    }
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
