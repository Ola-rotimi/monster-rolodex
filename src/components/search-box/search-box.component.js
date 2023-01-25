import React from "react";
import "./search-box.styles.css"

function SearchBox({ className, placeholder, handleChange }) {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default SearchBox;
