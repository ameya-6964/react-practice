import { usePosts } from "../context/PostContext";

function Results() {
  //! Step 3) Consuming The Context
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
