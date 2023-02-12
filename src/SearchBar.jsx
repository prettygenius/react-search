import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      setSearchValue("");
    }
  }
  function handleClearButton() {
    setSearchValue("");
  }

  const displayClearButton = searchValue.length > 0;

  return (
    <div className="bar">
      <input
        type="text"
        className="input"
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      {displayClearButton && (
        <button onClick={handleClearButton} className="clear">
          {" "}
          X{" "}
        </button>
      )}
      <p className="text">{searchValue}</p>
    </div>
  );
}
export default SearchBar;