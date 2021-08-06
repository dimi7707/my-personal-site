import React from 'react';
import { useAnimate } from '../../../hooks/useAnimate';
import profileImage  from '../../../images/profile-image.png';
import secondaryImage from '../../../images/img-secondary-hero.png';

export const Hero = () => {

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
      <div className="pt-6 flex flex-col items-center">
        <div className="main-title my-3">
          <div className="font-indie text-3xl text-center">
            Hello, I am Dimitri Avila
          </div>
          <div className="font-indie text-2xl text-center">
            Full stack developer
          </div>
        </div>
        <div className="profile-picture">
          <img src={ profileImage } className="profile-picture border-8 border-indigo-800" alt="Dimitri Avila" />
        </div>
        <div className="devices-picture">
          <img src={ secondaryImage } className="secondary-image pt-6 h-52 w-auto mb-2" alt="Devices" />
        </div>
      </div>
    </div>
  )
};
