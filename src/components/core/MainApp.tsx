import React from 'react'
import { TopNavBar } from './TopNavBar'
import { Hero } from '../shared/elements/Hero';
import { FlipCard } from '../shared/elements/FlipCard';
import { Card } from '../shared/elements/Card';
import { ProgressBar } from '../shared/elements/ProgressBar';
import { Banner } from '../shared/elements/Banner';
import { TheFooter } from './TheFooter';
import { SkillsBlock } from '../shared/organisms/SkillsBlock';
import { ExperienceBlock } from '../shared/organisms/ExperienceBlock';
import { ContactBlock } from '../shared/organisms/ContactBlock';
import { ResumeBlock } from '../shared/organisms/ResumeBlock';

import '../../styles/main.scss';

export const MainApp = () => {

  const navigation = [
    { name: 'Personal info', href: '#', current: true },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Experience', href: '#experience', current: false },
    { name: 'Contact me', href: '#contact-me', current: false },
  ];

  return (
    <>
      <TopNavBar navigationLinks={navigation} />
      <Hero />
      <Banner />
      <ResumeBlock />
      <SkillsBlock />
      <ExperienceBlock />
      <ContactBlock />
      <TheFooter />
      {
        /*
      <Card addAnimation={ false }>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Mountain</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </Card>
      <Card addAnimation={ true }>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Mountain</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </Card>

      <FlipCard />
      <div className="m-4">
        <ProgressBar value={ 50 } />
      </div>
      <div className="m-4">
        <ProgressBar value={ 70 } />
      </div>
      */
      }
    </>
  )
};
