import { useContext } from "react";
import { PostContext } from "../App";

function Results() {
  //! Step 3) Consuming The Context
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
