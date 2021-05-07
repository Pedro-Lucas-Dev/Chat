import React from "react";

const SearchBar = () => {
  return (
    <div class="row">
      <div class="col s1">
        <i class="small material-icons">search</i>
      </div>
      <div class="input-field col s11">
        <input
          placeholder="Barra de pesquisa"
          id="search"
          type="text"
          class="validate"
        />
      </div>
    </div>
  );
};

export default SearchBar;
