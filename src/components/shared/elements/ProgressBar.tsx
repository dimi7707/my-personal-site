import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

export const ProgressBar = ({ value }) => {
  const incrementRate = 20;
  const [progressive, setprogressive] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (progressive + incrementRate < value ) {
        setprogressive( progressive + incrementRate );
      }
      else if ( progressive < value) {
        setprogressive( value);
      }
    }, 300);
  }, [ progressive ]);

  return (
    <>
      <div className="h-3 relative max-w-xl rounded-full overflow-hidden animate-progress-bar">
        <div className="w-full h-full dark:bg-white bg-gray-200 absolute"></div>
        <div
          style={{ width: `${ progressive }%` }}
          className="bar h-full bg-indigo-600 dark:bg-yellow-300 relative rounded-full"
        />
      </div>
    </>
  )
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
}
