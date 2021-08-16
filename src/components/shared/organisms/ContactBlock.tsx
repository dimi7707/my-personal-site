import React from 'react';
import { useAnimate } from '../../../hooks/useAnimate';
import redPhone from '../../../images/red-phone.png';

export const ContactBlock = () => {
  const animate = {
    classSelector: 'contact-block',
    animationClass: 'animate__animated animate__fadeInLeft animate-delay-2s'
  };
  useAnimate(animate);

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="contact-block container mx-auto py-14 lg:px-10" id="contact-me">
        <div className="text-center mx-auto w-20">
          <img src={ redPhone } alt="Phone" className="mx-auto" />
        </div>
        <div className="text-xl text-center lg:px-60 py-4">
          <h3 className="text-3xl py-4"> Contact me </h3>
          <p>
            If you want to talk about a job, project or just want to make a comment, share an idea. You can write to me:
          </p>
          <p className="font-sans text-2xl italic">
            dimi7707@gmail.com / d_avila_07@hotmail.com
        </p>
        </div>
      </div>
    </div>
  )
};
