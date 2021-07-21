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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos optio molestias consectetur, cumque, vero fuga est minus cum reiciendis suscipit, quidem exercitationem nostrum? Tempore, suscipit nemo praesentium expedita dignissimos modi.
        </p>
      </div>
    </div>
  )
}
