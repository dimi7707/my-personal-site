import React from 'react';
import PropTypes from 'prop-types';
import { useAnimate } from '../../../hooks/useAnimate';
import { Card } from '../elements/Card';
import { Badges } from '../atoms/Badges';

export const ExperienceBlock = ({ experienceData }) => {
  useAnimate({
    classSelector: 'experience-block',
    animationClass: 'animate__animated animate__fadeInRight animate-delay-2s'
  });

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="experience-block container mx-auto py-10" id="experience">
        <h3 className="text-3xl py-8 text-center">Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {
            experienceData.map((job, index) => (
              <div className="mx-auto sm:my-12 md:my-2" key={ `experience-${ index }`}>
                <Card>
                  <div className="border-2 border-gray-300">
                    <img className="mx-auto max-h-48" src={ job.logo } alt={ job.logo } />
                  </div>
                  <div className="px-6 py-4 border-gray-300">
                    <div className="font-bold text-xl italic">{ job.role }</div>
                    <div className="font-bold text-lg mb-2">{ job.name }</div>
                    <span className="">{ job.time }</span>
                    <p className="dark:text-white text-gray-700 text-base mt-2">
                      { job.description }
                    </p>
                  </div>
                  <div className="px-6 py-2">
                    {
                      job.technologies.map((tech, index) => (
                        <Badges text={tech} key={`tool-${index}`} />
                      ))
                    }
                  </div>
                </Card>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

ExperienceBlock.propTypes = {
  experienceData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      time: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      logo: PropTypes.string,
      description: PropTypes.string
    })
  )
};
