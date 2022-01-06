import React from 'react'
import PropTypes from 'prop-types';
import { TopNavBar } from './TopNavBar'
import { Hero } from '../shared/elements/Hero';
import { Banner } from '../shared/elements/Banner';
import { TheFooter } from './TheFooter';
import { SkillsBlock } from '../shared/organisms/SkillsBlock';
import { ExperienceBlock } from '../shared/organisms/ExperienceBlock';
import { RepoBlock } from '../shared/organisms/RepoBlock';
import { ResumeBlock } from '../shared/organisms/ResumeBlock';
import { ContactBlock } from '../shared/organisms/ContactBlock';

import navigationSerializer from '../../serializers/navigationSerializer';

import '../../styles/main.scss';

export const MainApp = ({ containerData }) => {

  console.log('mi container data es', containerData);

  const navigation = navigationSerializer(containerData.mainMenus[0]);
  const {
    title:heroTitle,
    subtitle:heroSubtitle,
    avatar:heroImage,
    shortPresentation:textBody
  } = containerData.presentations[0];

  return (
    <>
      <TopNavBar navigationLinks={ navigation } />
      <Hero
        title={ heroTitle }
        subtitle={ heroSubtitle }
        image={ heroImage.url }
      />
      <Banner textBody={ textBody } />
      <ResumeBlock  knowledgeAreas={ containerData.knowledgeAreas } />
      <SkillsBlock />
      <ExperienceBlock />
      <RepoBlock />
      <ContactBlock />
      <TheFooter />
    </>
  )
};

MainApp.propTypes = {
  containerData: PropTypes.shape({
    mainMenus: PropTypes.array,
    presentations: PropTypes.array,
    knowledgeAreas: PropTypes.array,
    skills: PropTypes.array,
    workExperiences: PropTypes.array,
    repositories: PropTypes.array,
  }).isRequired,
};
