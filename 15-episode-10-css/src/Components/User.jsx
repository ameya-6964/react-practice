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
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 ml-auto mr-auto">
      <img width={400} height={400} src={data.avatar_url} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h1> Name: {data.name}</h1>
          <h2> Location: {data.location}</h2>
          <h3> Contact: {data.html_url}</h3>
        </div>
      </div>
    </div>
  );
};

{
  /* <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */
}

export default User;
