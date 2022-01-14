import React from 'react';
import PropTypes from 'prop-types';

export const TheFooter = ({ content }) => {
  return (
    <div className="py-10 bg-indigo-800 dark:bg-yellow-300 dark:text-black text-white text-center">
      <p>
        { content.primaryText }
      </p>
      <p>
        { content.secondaryText }
      </p>
    </div>
  )
};

TheFooter.prototype = {
  content: PropTypes.shape({
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string
  })
};
