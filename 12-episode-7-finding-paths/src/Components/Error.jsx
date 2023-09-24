import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const styles = { color: "red" };
  return (
    <div>
      <h1 style={styles}> Errorrrrrr</h1>
      <h2>Dont Worry Keep Trying</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
