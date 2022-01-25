import * as React from "react";
import { graphql } from 'gatsby';
import { MainApp } from '../components/core/MainApp';

const IndexPage = ({ data }) => {

  return (
    <main>
      <MainApp containerData={  data.graphCmsData }  />
    </main>
  )
};


export const query = graphql`
query {
  graphCmsData {
    mainMenus {
      menuLanguage
      optionsList
    }
    presentations {
      title
      subtitle
      avatar {
        url
      }
      shortPresentation
    }
    knowledgeAreas (orderBy: createdAt_ASC) {
        title
        description
        aditionalComment
        skillsList
    }
    skills (orderBy: levelKnowledge_DESC	)  {
      title
      levelKnowledge
    }
    workExperiences (orderBy: startDate_DESC ) {
       startDate
       position
       companyName
       companyLogo {
         id
         url
       }
       period
       shortDescription
       techStack
    }
    repositories {
      name
      linkRepo
      image {
        id
        url
      }
    }
    contactSections {
      title
      description
      contactAddressList
      contactLogo {
        url
      }
    }
    footers {
      primaryText
      secondaryText
    }
  }
}`;

export default IndexPage;
