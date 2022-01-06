import React from 'react';
import PropTypes from 'prop-types';
import { FlipCard } from '../elements/FlipCard';
import PrimitiveCard from '../elements/PrimitiveCard';

export const ResumeBlock = ({ knowledgeAreas }) => {

  const primitiveCardList = (
    knowledgeAreas.map((area, index) => (
      <PrimitiveCard
        key={`primitive-card-area-${index}`}
        title={ area.title }
        subtitle={ area.description }
        comment={ area.aditionalComment }
        toolsList={ area.skillsList.techs }
      />
    ))
  );

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto">
        <div className="resume-block grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {
            primitiveCardList.map((card, index) => (
              <div className="xl:col-start-2 h-96 w-96 mx-auto" key={ `card-${ index }` } >
                <FlipCard>
                  <div className="flip-card-front text-black dark:text-white border-indigo-800 dark:border-yellow-300 border-4">
                    { card }
                  </div>
                  <div className="flip-card-back text-black dark:text-white border-indigo-800 dark:border-yellow-300 border-4">
                    { card }
                  </div>
                </FlipCard>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

ResumeBlock.prototypes = {
  knowledgeAreas: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      additionalComment: PropTypes.string.isRequired,
      skillsList: PropTypes.shape({
        techs: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    })
  ).isRequired
};
