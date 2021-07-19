import React from 'react'
import { ProgressBar } from '../elements/ProgressBar'

export const SkillsBlock = () => {
  return (
    <div className="container mx-auto skills-block py-10">
      <h3 className="text-3xl text-center my-4">Skills</h3>
      <div className="grid grid-cols-2">
        <div>
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
        <div>
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
