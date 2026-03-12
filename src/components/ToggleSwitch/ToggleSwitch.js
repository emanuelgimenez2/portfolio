import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { isDark, changeTheme } = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeTheme}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
