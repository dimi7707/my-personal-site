import React from 'react';
import { useAnimate } from '../../../hooks/useAnimate';
import { Card } from '../elements/Card';

export const ExperienceBlock = () => {
  useAnimate({
    classSelector: 'experience-block',
    animationClass: 'animate__animated animate__fadeInRight animate-delay-2s'
  });

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="experience-block container mx-auto py-10" id="experience">
        <h3 className="text-3xl py-8 text-center">Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="mx-auto sm:my-12 md:my-0">
            <Card>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mountain</div>
                <p className="dark:text-white text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </Card>
          </div>
          <div className="mx-auto sm:my-12 md:my-0">
            <Card>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mountain</div>
                <p className="dark:text-white text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </Card>
          </div>
          <div className="mx-auto sm:my-12 md:my-0">
            <Card>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mountain</div>
                <p className="dark:text-white text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
