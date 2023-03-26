import React, { useState, useEffect, useContext } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import ThemeContext from "./context/ThemeContext";
import "./index.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const [err, setErr] = useState(false);
  // const [lightMode, setLightMode] = useState("light");
  const { lightMode, modeChanger } = useContext(ThemeContext);

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
    <div className="app" data-theme={`${lightMode ? "dark" : null}`}>
      <div className="container">
        <Header />
        <SearchBar setQuery={setQuery} err={err} />
        <UserCard data={data} />
      </div>
    </div>
  );
};

export default App;
