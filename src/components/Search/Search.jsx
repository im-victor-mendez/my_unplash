import "./Search.scss";
import React from "react";
import { useSearch } from "../../contexts/searchContext";

function Search({ id }) {
  const { changeSearch } = useSearch();

  function onChange(event) {
    const input = event.target.value;
    changeSearch(input);
  }
  
  return (
    <label className="search">
      <i className="material-symbols-outlined">Search</i>
      <input
        type="search"
        name="name"
        id={id}
        placeholder="Search by name"
        onChange={onChange}
      />
    </label>
  );
}

export default Search;
