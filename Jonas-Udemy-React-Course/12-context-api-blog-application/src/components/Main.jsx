import { useContext } from "react";
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";
import { PostContext } from "../App";

function Main() {
  const { posts, onAddPost } = useContext(PostContext);
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
