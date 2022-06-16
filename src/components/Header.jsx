import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = (props) => {
  const color = useContext(ThemeContext);

  return (
    <div className="Header">
      <h1 style={{ color }}>Coink Oink</h1>
      <button type="button" onClick={() => props.onClick()}>
        {props.darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export { Header };
