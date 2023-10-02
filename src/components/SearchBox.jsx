import React from "react";

const SearchBox = (props) => {
  return (
    <div className="p-4">
      <input
        className="py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300 w-full sm:w-64"
        type="text"
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search a movie"
      />
    </div>
  );
};

export default SearchBox;
