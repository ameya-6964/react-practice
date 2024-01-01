import { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  //! How Not To Select DOM Elements
  /*   useEffect(function () {
    const el = document.querySelector(".search");
    el.focus();
  }, []); */

  //* How To Correctly Select DOM Elements
  const inputEl = useRef(null);
  useEffect(
    function () {
      const enterButtonPressed = (e) => {
        if (document.activeElement === inputEl.current) return;
        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
        }
      };

      document.addEventListener("keydown", enterButtonPressed);

      return () => {
        document.removeEventListener("keydown", enterButtonPressed);
      };
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;
