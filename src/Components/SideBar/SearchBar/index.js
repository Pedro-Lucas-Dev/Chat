import React from "react";
import "./index.css";

const SearchBar = () => {
  return (
    <div class="inputContainer">
      <i class="material-icons iconSearch">search</i>
      <input
        placeholder="Barra de pesquisa"
        id="search"
        type="text"
        class="inputBar"
      />
    </div>
  );
};

export default SearchBar;
