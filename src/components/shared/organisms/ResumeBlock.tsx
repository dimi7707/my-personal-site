import React from 'react';
import { Badges } from '../atoms/Badges';
import { FlipCard } from '../elements/FlipCard';

export const ResumeBlock = () => {
  const frontendTools = [
    'Bulma', 'Bootstrap', 'Tailwindcss', 'Vuetify', 'Materialize'
  ];

  const backendTools = [
    'Laravel', 'Codeigniter', 'Express', 'NestJS'
  ];

  const contentFrontCard = (
    <div className="max-w-sm leading-7 rounded overflow-hidden shadow-lg dark:bg-gray-600">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black dark:text-white">Frontend</div>
        <p className="text-gray-700 text-base dark:text-white leading-7">
          I like to develop from scratch. Being able to translate a product developed by a graphic
          designer into a browser.
        </p>
        <p className="text-gray-700 text-base dark:text-white leading-7 mt-4">
          I use technologies / tools such as:
        </p>
      </div>
      <div className="section-tools px-6 pt-4 pb-2">
        {
          frontendTools.map((tool, index) => (
            <Badges text={tool} key={`tool-${index}`} />
          ))
        }
      </div>
    </div>
  );

  const contentBackendCard = (
    <div className="max-w-sm leading-7 rounded overflow-hidden shadow-lg dark:bg-gray-600">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black dark:text-white">Backend</div>
        <p className="text-gray-700 text-base dark:text-white leading-7">
          Rest API, authentication, JWT, implementation and management of relational databases.
          Development of monolithic applications.
        </p>
        <p className="text-gray-700 text-base dark:text-white leading-7 mt-4">
          I use technologies / tools such as:
        </p>
      </div>
      <div className="section-tools px-6 pt-4 pb-2">
        {
          backendTools.map((tool, index) => (
            <Badges text={tool} key={`tool-${index}`} />
          ))
        }
      </div>
    </div>
  );

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto">
        <div className="resume-block grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <div className="xl:col-start-2 h-96 w-96 mx-auto">
            <FlipCard>
              <div className="flip-card-front text-black dark:text-white border-indigo-800 dark:border-yellow-300 border-4">
                { contentFrontCard }
              </div>
              <div className="flip-card-back text-black dark:text-white border-indigo-800 dark:border-yellow-300 border-4">
                { contentFrontCard }
              </div>
            </FlipCard>
          </div>
          <div className="h-96 w-96 sm:mx-auto mx-auto">
            <FlipCard>
            <div className="flip-card-front text-black dark:text-white border-indigo-800 dark:border-yellow-300 border-4">
                { contentBackendCard }
              </div>
              <div className="flip-card-back text-black dark:text-white border-indigo-800 dark:border-yellow-300 border-4">
                { contentBackendCard }
              </div>
            </FlipCard>
          </div>
        </div>
      </div>
    </div>
  )
}
