import React from 'react'
import PropTypes from 'prop-types'
import { useAnimate } from '../../../hooks/useAnimate'
import { ProgressBar } from '../elements/ProgressBar'

export const SkillsBlock = ({ list }) => {

  useAnimate({
    classSelector: 'skills-block',
    animationClass: 'animate__animated animate__fadeInTopRight animate-delay-2s'
  });

  const halfListSkill = Math.ceil(list.length / 2);
  const leftSideList = list.slice(0, halfListSkill);
  const rightSideList = list.slice(halfListSkill, list.length);

  const leftSideContent = leftSideList.map((skill, index) => (
    <div className="skill" key={ `left-side-skill-${ index }` } >
      <p>{ skill.title }</p>
      <ProgressBar value={ skill.levelKnowledge } />
    </div>
  ));

  const rightSideContent = rightSideList.map((skill, index) => (
    <div className="skill" key={ `right-side-skill-${ index }` } >
      <p>{ skill.title }</p>
      <ProgressBar value={ skill.levelKnowledge } />
    </div>
  ));

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="skills-block container mx-auto skills-block py-10" id="skills">
        <h3 className="text-3xl my-4 text-center">Skills</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="mx-auto w-4/5">
            { leftSideContent }
          </div>
          <div className="mx-auto w-4/5">
            { rightSideContent }
          </div>
        </div>
      </div>
    </div>
  )
};

SkillsBlock.prototypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        levelKnowledge: PropTypes.number.isRequired,
      })
    ).isRequired
};
