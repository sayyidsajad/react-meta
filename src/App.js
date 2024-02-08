import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  React.useEffect(() => fetchData(), []);
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <h2>First Name:{user.results[0].name.first}</h2>
    </div>
  ) : (
    <h1>Data Pending</h1>
  );
}
export default App;
