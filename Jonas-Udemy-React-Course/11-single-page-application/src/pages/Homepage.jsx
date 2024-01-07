import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <div>
      <PageNav />

      <h1>Home Page</h1>
      <Link to="/app">Go To Application</Link>
    </div>
  );
};

export default Homepage;
