import React from 'react'
import { useAnimate } from '../../../hooks/useAnimate'
import { ProgressBar } from '../elements/ProgressBar'

export const SkillsBlock = () => {

  useAnimate({
    classSelector: 'skills-block',
    animationClass: 'animate__animated animate__fadeInTopRight animate-delay-2s'
  });

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="skills-block container mx-auto skills-block py-10" id="skills">
        <h3 className="text-3xl my-4 text-center">Skills</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="mx-auto w-4/5">
            <div className="skill">
              <p>JavaScript</p>
                <ProgressBar value={ 85 } />
            </div>
            <div className="skill">
              <p>HTML, CSS, SASS</p>
                <ProgressBar value={ 90 } />
            </div>
            <div className="skill">
              <p>Vue.js, React</p>
                <ProgressBar value={ 82 } />
            </div>
            <div className="skill">
              <p>Angular</p>
                <ProgressBar value={ 60 } />
            </div>
          </div>
          <div className="mx-auto w-4/5">
            <div className="skill">
              <p>PHP</p>
                <ProgressBar value={ 87 } />
            </div>
            <div className="skill">
              <p>Node.js</p>
                <ProgressBar value={ 83 } />
            </div>
            <div className="skill">
              <p>Typescript</p>
                <ProgressBar value={ 70 } />
            </div>
            <div className="skill">
              <p>Git, SQL, Graphql</p>
                <ProgressBar value={ 65 } />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
