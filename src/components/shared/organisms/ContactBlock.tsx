import React from 'react';
import PropTypes from 'prop-types';
import { useAnimate } from '../../../hooks/useAnimate';

export const ContactBlock = ({ contactData }) => {
  const animate = {
    classSelector: 'contact-block',
    animationClass: 'animate__animated animate__fadeInLeft animate-delay-2s'
  };
  useAnimate(animate);

  const { title, description, contactAddressList, contactLogo } = contactData;

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="contact-block container mx-auto py-14 lg:px-10" id="contact-me">
        <div className="text-center mx-auto w-20">
          <img src={ contactLogo.url } alt={ title } className="mx-auto" />
        </div>
        <div className="text-xl text-center mx-8 lg:px-60 py-4">
          <h3 className="text-3xl py-4">{ title }</h3>
          <p>{ description }</p>
          <ul>
            {
              contactAddressList.contactSources.map((address, index) => (
                <li key={ `address-${ index }`}> { address.address } </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
};

ContactBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  contactAddressList:  PropTypes.arrayOf(PropTypes.object),
  contactLogo: PropTypes.shape({
    url: PropTypes.string
  })
};
