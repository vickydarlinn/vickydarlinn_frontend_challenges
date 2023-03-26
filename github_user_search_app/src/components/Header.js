import React, { useContext } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { lightMode, modeChanger } = useContext(ThemeContext);
  return (
    <header>
      <div className="logo">devfinder</div>
      <div className="themeMode" onClick={modeChanger}>
        <i>{lightMode ? <BsMoonFill /> : <BsSunFill />}</i>
        {lightMode ? "Dark" : "Light"}
      </div>
    </header>
  );
};

export default Header;
