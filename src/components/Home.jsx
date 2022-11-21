import React, { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch("http://localhost:4000/api/user") //https://jsonplaceholder.typicode.com/posts
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <li key={userObj._id}>
              <p>{userObj._id}</p>
              <p>{userObj.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Home;
