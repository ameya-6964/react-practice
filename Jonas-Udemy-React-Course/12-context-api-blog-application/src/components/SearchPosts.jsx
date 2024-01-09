import { usePosts } from "../context/PostContext";

function SearchPosts() {
  //! Step 3) Consuming The Context
  const { searchQuery, setSearchQuery } = usePosts();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
