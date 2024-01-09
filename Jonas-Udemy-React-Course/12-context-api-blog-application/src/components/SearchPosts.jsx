import { useContext } from "react";
import { PostContext } from "../App";

function SearchPosts() {
  //! Step 3) Consuming The Context
  const { searchQuery, setSearchQuery } = useContext(PostContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
