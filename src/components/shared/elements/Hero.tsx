import React from 'react';
import profileImage  from '../../../images/profile-image.jpg';
import secondaryImage from '../../../images/img-secondary-hero.svg';

export const Hero = () => {
  return (
    <div className="bg-gray-50 hero">
      <div className="pt-6 flex flex-col items-center">
        <div className="my-3">
          <div className="font-indie text-3xl text-center">
            Hello, I am Dimitri Avila
          </div>
          <div className="font-indie text-2xl text-center">
            Full stack developer
          </div>
        </div>
        <div>
          <img src={ profileImage } className="profile-picture border-8 border-indigo-800" alt="Dimitri Avila" />
        </div>
        <div>
          <img src={ secondaryImage } className="secondary-image pt-6 h-52 w-auto mb-2" alt="Devices" />
        </div>
      </div>
    </div>
  )
};
