import React from 'react';

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
