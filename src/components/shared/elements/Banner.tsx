import React from 'react';
import { useAnimate } from '../../../hooks/useAnimate';

export const Banner = () => {
  useAnimate({
    classSelector: 'banner-text',
    animationClass: 'animate__animated animate__flipInX animate-delay-2s'
  });

  return (
    <div className="bg-indigo-800 text-white grid grid-cols-8 gap-4 py-20">
      <div className="col-start-3 col-span-4">
        <p className="banner-text text-center text-xl">
          I am 31 years old, I am Venezuelan, I have lived since
          a couple of years ago in Colombia, I have more than
          4 years of experience as a developer, I am passionate about it
          very much both the frontend and the backend.
        </p>
      </div>
    </div>
  )
}
