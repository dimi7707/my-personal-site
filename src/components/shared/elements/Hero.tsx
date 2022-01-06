import React from 'react';
import PropTypes from 'prop-types';
import { useAnimate } from '../../../hooks/useAnimate';

export const Hero = ({ title, subtitle, image }) => {

  console.log('la imagen es', image)

  useAnimate({
    classSelector: 'main-title',
    animationClass: 'animate__animated animate__fadeInDown animate-delay-2s'
  });

  useAnimate({
    classSelector: 'profile-picture',
    animationClass: 'animate__animated animate__fadeInTopRight animate-delay-2s'
  });

  useAnimate({
    classSelector: 'devices-picture',
    animationClass: 'animate__animated animate__fadeInUpBig animate-delay-2s'
  });

  return (
    <div className="bg-gray-50 hero dark:bg-gray-800 dark:text-white lg:mt-16">
      <div className="py-8 flex flex-col items-center">
        <div className="main-title my-3">
          <div className="font-indie text-3xl text-center">
            { title }
          </div>
          <div className="font-indie text-2xl text-center">
            { subtitle }
          </div>
        </div>
        <div className="profile-picture">
          <img src={ image } alt={ title } className="profile-picture border-8 border-indigo-800 dark:border-yellow-300" />
        </div>
      </div>
    </div>
  )
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
