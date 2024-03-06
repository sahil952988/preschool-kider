import React, { useState } from 'react'

const SearchBar = ({ setResults }) => {

  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:4000/api/teachers")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.fullname &&
            user.fullname.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <div className="searchbar">
        <span className=" bg-white rounded-[50px] px-8 py-3">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input className="outline-none ml-5" type="search" placeholder="Seach About Teachers" value={input} onChange={(e) => handleChange(e.target.value)} />
        </span>
      </div>
    </>
  )
}
export default SearchBar