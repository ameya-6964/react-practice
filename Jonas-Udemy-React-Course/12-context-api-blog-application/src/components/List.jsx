import { usePosts } from "../context/PostContext";

function List() {
  //! Step 3) Consuming The Context
  const { posts } = usePosts();
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
