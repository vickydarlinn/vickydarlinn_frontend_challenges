import React, { useState, useEffect } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Header from "./components/Header";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const [err, setErr] = useState(false);
  const [lightMode, setLightMode] = useState("light");
  useEffect(() => {
    if (query !== "") {
      getGithubUserData();
    }
  }, [query]);

  async function getGithubUserData() {
    const resp = await fetch(` https://api.github.com/users/${query} `);
    if (!resp.ok) {
      return setErr(true);
    }
    setErr(false);
    const data = await resp.json();
    setData(data);
  }

  return (
    <div
      className="app"
      data-theme={`${lightMode === "light" ? "light" : "dark"}`}
    >
      <Header />
      <SearchBar setQuery={setQuery} err={err} />
      <UserCard data={data} />
    </div>
  );
};

export default App;
