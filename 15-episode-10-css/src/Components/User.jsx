import React, { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("https://api.github.com/users/ameya-6964");
    const json = await data.json();
    setData(json);
  }
  return (
    <div className="user-container">
      <img width={400} height={400} src={data.avatar_url} />
      <h1> Name: {data.name}</h1>
      <h2> Location: {data.location}</h2>
      <h3> Contact: {data.html_url}</h3>
    </div>
  );
};

export default User;
