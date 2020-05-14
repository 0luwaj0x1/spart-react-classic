import React from "react";
import PropTypes from "prop-types";



const SearchBar = (props) => {
  
  const handleChange = (evt) => {
    props.search(evt.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        id="search"
        className="search-bar--search"
        placeholder="Start typing to highlight..."
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
