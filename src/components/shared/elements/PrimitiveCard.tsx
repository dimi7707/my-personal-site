import React from 'react';
import PropTypes from 'prop-types';
import { Badges } from '../atoms/Badges';

const PrimitiveCard = ({ title, subtitle, comment, toolsList }) => {
  return (
    <div className="max-w-sm leading-7 rounded overflow-hidden shadow-lg dark:bg-gray-600">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black dark:text-white">{ title }</div>
        <p className="text-gray-700 text-base dark:text-white leading-7">{ subtitle }</p>
        <p className="text-gray-700 text-base dark:text-white leading-7 mt-4">{ comment }</p>
      </div>
      <div className="section-tools px-6 pt-4 pb-2">
        {
          toolsList.map((tool, index) => (
            <Badges text={tool} key={`tool-${index}`} />
          ))
        }
      </div>
    </div>
  );
}

PrimitiveCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  toolsList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PrimitiveCard;
