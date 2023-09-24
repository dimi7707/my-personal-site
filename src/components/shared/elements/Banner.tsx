import React from 'react';
import PropTypes from 'prop-types';
import { useAnimate } from '../../../hooks/useAnimate';

export const Banner = ({ textBody }) => {
  useAnimate({
    classSelector: 'banner-text',
    animationClass: 'animate__animated animate__flipInX animate-delay-2s'
  });

  return (
    <div className="bg-indigo-800 dark:bg-yellow-300 dark:text-black text-white grid md:grid-cols-8 gap-4 py-20">
      <div className="col-start-3 col-span-4">
        <p className="banner-text md:text-center text-xl">
          { textBody }
        </p>
      </div>
    </div>
  )
};

Banner.prototypes = {
  textBody: PropTypes.string.isRequired
};
