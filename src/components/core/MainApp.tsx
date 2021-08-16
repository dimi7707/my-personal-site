import React, { useEffect } from 'react'
import { TopNavBar } from './TopNavBar'
import { Hero } from '../shared/elements/Hero';
import { FlipCard } from '../shared/elements/FlipCard';
import { Card } from '../shared/elements/Card';
import { ProgressBar } from '../shared/elements/ProgressBar';
import { Banner } from '../shared/elements/Banner';
import { TheFooter } from './TheFooter';
import { SkillsBlock } from '../shared/organisms/SkillsBlock';
import { ExperienceBlock } from '../shared/organisms/ExperienceBlock';
import { RepoBlock } from '../shared/organisms/RepoBlock';
import { ResumeBlock } from '../shared/organisms/ResumeBlock';
import { ContactBlock } from '../shared/organisms/ContactBlock';

import '../../styles/main.scss';

export const MainApp = () => {

  const navigation = [
    { name: 'Start', href: '#', current: true },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Experience', href: '#experience', current: false },
    { name: 'Repositories', href: '#repositories', current: false },
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
      <RepoBlock />
      <ContactBlock />
      <TheFooter />
    </>
  )
};
