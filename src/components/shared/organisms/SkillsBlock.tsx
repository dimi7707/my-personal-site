import React from 'react'
import { useAnimate } from '../../../hooks/useAnimate'
import { ProgressBar } from '../elements/ProgressBar'

export const SkillsBlock = () => {

  useAnimate({
    classSelector: 'skills-block',
    animationClass: 'animate__animated animate__fadeInTopRight animate-delay-2s'
  });

  return (
    <div className="skills-block container mx-auto skills-block py-10" id="skills">
      <h3 className="text-3xl my-4 text-center">Skills</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="mx-auto w-4/5">
          <div className="skill">
            <p>PHP</p>
              <ProgressBar value={ 85 } />
          </div>
          <div className="skill">
            <p>Javascript</p>
              <ProgressBar value={ 85 } />
          </div>
          <div className="skill">
            <p>React</p>
              <ProgressBar value={ 75 } />
          </div>
          <div className="skill">
            <p>Vue</p>
              <ProgressBar value={ 85 } />
          </div>
        </div>
        <div className="mx-auto w-4/5">
          <div className="skill">
            <p>PHP</p>
              <ProgressBar value={ 85 } />
          </div>
          <div className="skill">
            <p>Javascript</p>
              <ProgressBar value={ 85 } />
          </div>
          <div className="skill">
            <p>React</p>
              <ProgressBar value={ 75 } />
          </div>
          <div className="skill">
            <p>Vue</p>
              <ProgressBar value={ 85 } />
          </div>
        </div>
      </div>
    </div>
  )
}
