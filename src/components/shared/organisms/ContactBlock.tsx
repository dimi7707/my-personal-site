import React from 'react';
import redPhone from '../../../images/red-phone.png';


export const ContactBlock = () => {
  return (
    <div className="container mx-auto py-10 lg:px-10">
      <div className="text-center mx-auto w-20">
        <img src={ redPhone } alt="Phone" className="mx-auto" />
      </div>
      <div className="text-xl text-center lg:px-60 py-4">
        <h3 className="text-3xl py-4"> Contact me </h3>
        <p>
          If you want to talk about a job, project or just want to make a comment, share an idea. You can write to me through these means:
        </p>
      </div>
    </div>
  )
};
