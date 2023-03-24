import React from "react";
import { BsMoonFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="logo">devfinder</div>
      <div className="themChanger">
        <i>
          <BsMoonFill />
        </i>{" "}
        DARK
      </div>
    </header>
  );
};

export default Header;
