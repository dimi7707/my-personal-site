import * as React from "react";
import PropTypes from 'prop-types';


export const SimpleSwitchButton = ({ description }) => {
  return (
    <>
      {
        (
          <label className="switch">
            <input type="checkbox" alt={ description } />
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
