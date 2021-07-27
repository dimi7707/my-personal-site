import React from 'react';
import PropTypes from 'prop-types'

export const Card = ({ children, addAnimation = false }) => {

  const baseClass = 'max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-600 dark:text-white';

  return (
    <>
      <div className={ addAnimation ? `${baseClass} animate-card` : baseClass }>
        { children }
      </div>
    </>
  )
};


Card.propTypes = {
  children: PropTypes.any,
  addAnimation: PropTypes.bool,
}
