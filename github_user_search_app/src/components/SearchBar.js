import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../index.css";

const SearchBar = ({ setQuery: result, err }) => {
  const [query, setQuery] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    result(query);
    setQuery("");
  }

  return (
    <form className="search_tab">
      <div>
        <i>
          <AiOutlineSearch />
        </i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Github Username..."
          type="text"
          value={query}
        />
        <p className={`result ${err ? "" : "hide"}`}>No Results</p>
      </div>
      <button type="submit" onClick={submitHandler}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
