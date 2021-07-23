import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useDarkMode } from "../../../hooks/useDarkMode";

export const SimpleSwitchButton = ({ description }) => {

  const [isOn, setIsOn] = useState(false);
  const { switchTheme, setTheme } = useDarkMode('light');

  const handleClick = () => {
    setIsOn(!isOn);
    setTheme(switchTheme);
  };

  return (
    <>
      {
        (
          <label className="switch">
            <input
              type="checkbox"
              alt={ description }
              checked={ isOn }
              onChange={ handleClick }
            />
            <span className="slider round"></span>
          </label>
        )
      }
    </>
  )
};

SimpleSwitchButton.propTypes = {
  description: PropTypes.string.isRequired
}
