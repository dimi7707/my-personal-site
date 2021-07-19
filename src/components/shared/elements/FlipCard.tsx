import React from 'react';

import testImage from '../../../images/js-logo.png';

export const FlipCard = ({ children }) => {
  return (
    <>
      <div className="flip-card p-10">
        <div className="flip-card-inner">
          { children }
        </div>
      </div>
    </>
  )
};
