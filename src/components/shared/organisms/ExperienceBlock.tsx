import React from 'react';
import { useAnimate } from '../../../hooks/useAnimate';
import { Card } from '../elements/Card';
import { Badges } from '../atoms/Badges';

import logoAplyca from '../../../images/aplyca-logo.png';
import logoRootstack from '../../../images/rootstack.png';
import logoKubo from '../../../images/logo-kubo.png';
import logoCorpbid from '../../../images/corpbid-logo.png';
import logoCoinimp from '../../../images/logo-coinimp.png';

export const ExperienceBlock = () => {
  useAnimate({
    classSelector: 'experience-block',
    animationClass: 'animate__animated animate__fadeInRight animate-delay-2s'
  });

  const jobsDescriptions = [
    {
      name: 'Aplyca Tecnology SAS',
      role: 'Frontend Developer',
      time: 'February 2020 - present',
      technologies: ['Vue.js', 'Pangolin.js', 'React.js', 'Bulma', 'Tailwind CSS'],
      logo: logoAplyca,
      description: 'Technologies with which I develop my work:'
    },
    {
      name: 'Rootstack',
      role: 'Full Stack Developer',
      time: 'August 2019 - January 2020',
      technologies: ['React.js - Gatsby.js', 'Nest.js', 'Angular', 'Bootstrap'],
      logo: logoRootstack,
      description: 'Technologies with which I develop my work:'
    },
    {
      name: 'Kubo SAS',
      role: 'Full Stack Developer',
      time: 'October 2019 - October 2020',
      technologies: ['Nuxt.js', 'Vue.js', 'Codeigniter', 'Node.js', 'Express'],
      logo: logoKubo,
      description: 'Technologies with which I develop my work:'
    },
    {
      name: 'Corpbid',
      role: 'Full Stack Developer',
      time: 'June 2018 - september 2019',
      technologies: ['Codeigniter', 'JQuery', 'Vue.js', 'Laravel'],
      logo: logoCorpbid,
      description: 'Technologies with which I develop my work:'
    },
    {
      name: 'Coinimp - ABC Hosting',
      role: 'Full Stack Developer',
      time: 'April 2017 - May 2018',
      technologies: ['PHP Vanilla', 'Symfony', 'Jquery', 'Vue.js'],
      logo: logoCoinimp,
      description: 'Technologies with which I develop my work:'
    }
  ];

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="experience-block container mx-auto py-10" id="experience">
        <h3 className="text-3xl py-8 text-center">Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {
            jobsDescriptions.map((job, index) => (
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
}
